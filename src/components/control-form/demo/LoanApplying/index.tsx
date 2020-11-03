import { formatMessage } from '~/locale-tools';
import * as React from 'react';
import { Form, Input, Select, Row, Col, Button, Icon, Table, Upload, message } from 'antd';
import * as _ from 'lodash';
import { FormComponentProps } from "antd/lib/form";
import { dateFormat } from '~/libs/utils';
import { RouteComponentProps, withRouter, RouterProps } from "react-router";
import ControlForm, { renderItem } from '~/components/control-form/index.js';
import * as style from './style.scss';
import { FORM_SCHEMA } from './schema';
import { getDynamicSettings } from './const';
import {
  getUserInfoByName, getApplicationProductEnums, getFileBizTypes, uploadFile, applicationCreate, applicationSubmit, getUserInfo
} from '~/api/customerEntry';
import * as moment from "moment";

const FormItem = Form.Item;
const { Option } = Select;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};


interface Props extends FormComponentProps, RouteComponentProps<any, any> { }
class LoanApplying extends React.Component<Props & RouterProps, any> {
  form = this.props.form;
  schemaForm = [] as any;
  state = {
    isPerson: true,
    step: 1,
    uid: '',
    matchUserLists: [] as any,
    showUserLists: false,
    formsProjects: [] as any,
    productCode: '',
    channelCode: '',
    loading: false,
    documentsList: [] as any,
    docType: '',
    fileBizTypes: [] as any,
    uploading: false,
    companyName: '',
    licenceCode: '',
    provideCreditReport: '',
  }

  userPass = false;

  async componentDidMount() {
    let [formsProjects, fileBizTypes] = await Promise.all([
      getApplicationProductEnums().then(res => (res && res.content) || []),
      getFileBizTypes().then(res => (res && res.content) || []),
    ]);
    this.setState({
      formsProjects,
      fileBizTypes,
    });
  }

  DOCUMENT_LIST_COLUMNS = [{
    title: '文件类型',
    dataIndex: 'docType',
  }, {
    title: '文件名称',
    dataIndex: 'name',
  }, {
    title: '上传时间',
    dataIndex: 'gmtCreate',
    render: (text) => text && dateFormat(text, 'YYYY-MM-DD HH:mm:ss')
  }, {
    title: formatMessage({ id: 'operation' }),
    render: (text: string, record: any, index) =>
      <a onClick={() => this.deleteDoc(index)}>删除</a>
  }];

  getSettings = ({ productCode, channelCode }) => {
    const { formsProjects } = this.state;
    const channelCodes = ((formsProjects || []).find(item => item.productCode === productCode) || {}).channelCodes || [];
    return [
      {
        key: 'realName',
        component: [
          Input,
          {
            style: { width: '100%' },
            placeholder: '请填写',
            onChange: () => {
              this.userPass = false
            },
            suffix: <Button
              className="search-btn"
              style={{ marginRight: -12 }}
              type="primary"
              onClick={this.checkUser}
            >
              <Icon type="search" />
            </Button>
          },
        ],
        props: {
          label: '客户名称',
        },
        decorator: {
          rules: [
            {
              required: true,
              message: '请填写'
            },
          ],
        },
      },
      {
        key: 'productCode',
        component: [
          Select,
          {
            showSearch: true,
            style: { width: '100%' },
            placeholder: formatMessage({ id: 'please-choose' }),
            children: formsProjects.length > 0 && formsProjects.map((item, index) => (
              <Option value={item.productCode} key={item.productCode + index}>
                {item.name}
              </Option>
            )),
            optionFilterProp: "children"
          },
        ],
        props: {
          label: formatMessage({ id: 'product' }),
        },
        decorator: {
          rules: [
            {
              required: true,
              message: '请选择'
            },
          ],
        },
      },
      {
        key: 'channelCode',
        component: [
          Select,
          {
            placeholder: formatMessage({ id: 'please-choose' }),
            children: (channelCodes).map((item, index) => <Option value={item} key={index}>
              {item}
            </Option>)
          },
        ],
        props: {
          label: formatMessage({ id: 'channel' }),
        },
        decorator: {
          rules: [
            {
              required: true,
              message: '请选择'
            },
          ],
        },
        cascaderValue: productCode ? () => {
          const options = channelCodes;
          if (options.indexOf(channelCode) === -1) {
            return undefined;
          }
          return channelCode;
        } : null
      },
    ];
  };

  checkUser = () => {
    const { realName } = this.form.getFieldsValue();
    if (!realName) {
      message.warning('请先输入客户名称');
      return;
    }
    getUserInfoByName(realName).then(res => {
      if (res && res.result === 'success' && res.content && res.content.length) {
        this.setState({
          matchUserLists: res.content,
          showUserLists: true,
        })
      } else {
        message.error('没有匹配的用户');
        this.setState({
          matchUserLists: [],
          showUserLists: false,
        })
      }
    })
  }

  chooseUser = (item) => {
    this.form.setFieldsValue({
      realName: item.realName,
    });
    getUserInfo(item.userBo.uid).then(res => {
      if (res && res.result === 'success' && res.content) {
        const { fullName, licenceCode } = res.content;
        this.setState({
          companyName: fullName,
          licenceCode
        })
      }
    });
    this.setState({
      isPerson: item.userBo.type === 'PERSONAL_USER',
      showUserLists: false,
      uid: item.userBo.uid,
    })
    this.userPass = true
  }

  renderFields = (fields, formInstance) => {
    const { matchUserLists, showUserLists } = this.state;
    this.form = formInstance;
    const formItems = fields.map(field => {
      const { key, props } = field;
      return (
        <Col span={8}>
          <FormItem key={key} {...props} {...layout}>
            {renderItem(field, formInstance)}
            {
              key === 'realName' && showUserLists &&
              <div className={style.userList}>
                {
                  matchUserLists.map((item, index) => {
                    return <p key={index} onClick={() => this.chooseUser(item)}>{`${item.realName}-${item.userBo.type === 'PERSONAL_USER' ? formatMessage({ id: 'personal' }) : formatMessage({ id: 'enterprise' })}-${item.idCard}`}</p>
                  })
                }
              </div>
            }
          </FormItem>
        </Col >
      );
    });
    return formItems
  };

  nextStep = (e) => {
    e.preventDefault();
    this.form.validateFields((err, value) => {
      if (!err) {
        if (!this.userPass) {
          message.warning('请先进行用户匹配');
          return;
        }
        this.setState({
          step: 2,
          productCode: value.productCode,
          channelCode: value.channelCode,
        })
      };
    });
  }

  preStep = () => {
    this.setState({
      step: 1,
    })
  }

  renderMultiFields = (name, fields, formInstance) => {
    this.schemaForm.push({
      name,
      ref: formInstance,
    });
    const formItems = fields.map(field => {
      const { key, props } = field;
      return (
        <Col span={12}>
          <FormItem key={key} {...props} labelCol={{ span: 10 }} wrapperCol={{ span: 12 }}>
            {renderItem(field, formInstance)}
          </FormItem>
        </Col >
      )
    });
    return formItems
  };

  onValuesChange = (allValues) => {
    if (allValues.provideCreditReport !== undefined) {
      this.setState({
        provideCreditReport: allValues.provideCreditReport,
      })
    }
  }

  submit = async (e) => {
    e.preventDefault();
    let schema = {} as any;
    let checked = true;
    this.schemaForm.map(form => {
      form.ref.validateFields((err, value) => {
        if (!err) {
          for (let key in value) {
            if (key.indexOf('__detailedAddress__') > 0) {
              let preKey = key.split('__detailedAddress__')[0];
              value[preKey] = {
                province: value[preKey][0],
                city: value[preKey][1],
                district: value[preKey][2],
                detailedAddress: value[key],
              }
              delete value[key];
            }
            if (moment.isMoment(value[key])) {
              value[key] = new Date(value[key]).getTime()
            }
            if (key === 'relation') {
              value[key] = [value[key]];
            }
          }
          schema[form.name] = value;
        } else {
          checked = false;
        }
      });
    });
    if (checked) {
      const { uid, productCode, channelCode, documentsList, isPerson } = this.state;
      const { bank = {} } = schema;
      const data = {
        isPerson,
        bankCheckRequest: {
          accountName: bank.accountName,
          accountNum: bank.accountNum,
          mobile: bank.phone,
          ssn: bank.idCard,
        },
        creditAppLoanSubmitRequest: {
          productCode,
          channelCode,
          schema,
          uid
        },
        files: documentsList,
      };
      this.setState({ loading: true });
      try {
        applicationCreate(data).then(async (res) => {
          if (res && res.result === 'success') {
            let submitRes = await applicationSubmit(res.content)
            if (submitRes && submitRes.result === 'success') {
              message.success('创建成功');
            }
          }
        })
      } finally {
        this.setState({ loading: false });
      }
    }
  };

  deleteDoc = (index) => {
    const { documentsList } = this.state;
    documentsList.splice(index, 1);
    this.setState({
      documentsList,
    })
  }

  onDocTypeChange = (docType) => {
    this.setState({
      docType,
    })
  }

  customRequest = (option) => {
    const { documentsList, docType } = this.state;
    this.setState({
      uploading: true,
    });
    const reader = new FileReader();
    reader.readAsDataURL(option.file);
    reader.onloadend = async () => {
      const uploadRes = await uploadFile(option.file);
      this.setState({
        uploading: false,
      });
      if (uploadRes && uploadRes.result === 'success') {
        documentsList.push({
          docType: this.getDocType(docType),
          name: option.file.name,
          location: uploadRes.content.fileId,
          gmtCreate: new Date(),
        })
        this.setState({
          documentsList,
        });
      }
    };
  }

  getDocType = (value) => {
    const { fileBizTypes } = this.state;
    return (fileBizTypes.find(item => item.value === value) || {}).label || '';
  }

  render() {
    const { step, productCode, channelCode, loading, documentsList, fileBizTypes, uploading, uid, companyName, licenceCode, isPerson, provideCreditReport } = this.state;
    const data = {
      productCode,
      channelCode,
    }
    let fields = FORM_SCHEMA.fields.filter(item => item.name !== 'borrower');
    if (isPerson) { // 个人录单：企业信息选填
      ((fields.find(item => item.name === 'company') || {}).fields || []).map(field => {
        field.isRequired = false;
      })
    } else {
      ((fields.find(item => item.name === 'company') || {}).fields || []).map(field => {
        field.isRequired = true;
      })
    }
    if (provideCreditReport === 'FALSE') { // 是否提供人行征信报告：选否的时候财务信息选填
      ((fields.find(item => item.name === 'finance') || {}).fields || []).map(field => {
        field.isRequired = false;
      })
    } else {
      ((fields.find(item => item.name === 'finance') || {}).fields || []).map(field => {
        field.isRequired = true;
      })
    }
    return (
      <div>
        {
          step === 1 &&
          <Form>
            <Row>
              <ControlForm
                getSettings={this.getSettings}
                data={data}
                render={this.renderFields}
              />
            </Row>
            <div className={style.btnWrap}>
              <Button type="primary" className={style.submitBtn} onClick={this.nextStep}>下一步</Button>
            </div>
          </Form>
        }
        {
          step === 2 &&
          <Form>
            {
              FORM_SCHEMA.fields.filter(item => item.name !== 'borrower').map(field => {
                return <div>
                  <p className={style.bg}>{field.label}</p>
                  <Row>
                    <ControlForm
                      getSettings={(result) => getDynamicSettings(field.fields, result)}
                      data={field.name === 'company' ? { name: companyName, uniformCreditCode: licenceCode } : { productCode, uid }}
                      render={(fields, formInstance) => this.renderMultiFields(field.name, fields, formInstance)}
                      onValuesChange={this.onValuesChange}
                    />
                  </Row>
                </div>
              })
            }
            <div>
              {
                !!documentsList.length &&
                <Table
                  columns={this.DOCUMENT_LIST_COLUMNS}
                  dataSource={documentsList}
                  pagination={false}
                ></Table>
              }
              <div style={{ margin: '20px 0 30px' }}>
                <Select
                  style={{ width: '150px', marginRight: '20px' }}
                  onChange={this.onDocTypeChange}
                  placeholder={'请选择文件类型'}>
                  {!!fileBizTypes.length &&
                    fileBizTypes.map((item, index) => (
                      <Select.Option value={item.value} key={index}>
                        {item.label}
                      </Select.Option>
                    ))}
                </Select>
                <Upload
                  showUploadList={false}
                  accept="image/jpg, image/png, image/jpge, image/gif, .pdf, .tiff"
                  customRequest={this.customRequest}
                >
                  <Button loading={uploading}>
                    <Icon type="upload" /> 上传
                  </Button>
                </Upload>
              </div>
            </div>
            <div className={style.btnWrap}>
              <Button className={style.submitBtn} onClick={this.preStep} style={{ marginRight: '20px' }}>上一步</Button>
              <Button type="primary" className={style.submitBtn} onClick={this.submit} loading={loading}>提交</Button>
            </div>
          </Form>
        }
      </div>
    )
  }
}

export default Form.create<any>({})(withRouter(LoanApplying));