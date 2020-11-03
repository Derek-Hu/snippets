// import React from 'react';
// import ControlForm, { renderItem } from '~/components/control-form/index';
// import { Form, Input, Icon, Button } from 'antd';

// export default class extends React.Component {

//     getSettings = ({ username }) => {
//         return [
//             {
//                 key: 'username',
//                 component: [
//                     Input,
//                     {
//                         prefix: <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />,
//                         placeholder: 'Username',
//                         id: 'username'
//                     },
//                 ],
//                 props: {},
//                 decorator: {
//                     validateFirst: true,
//                     rules: [
//                         { required: true, message: 'Please input your Username!' },
//                         { max: 20, message: 'Please input your max!' },
//                     ],
//                 },
//             },
//             {
//                 key: 'password',
//                 component: [
//                     Input,
//                     {
//                         id: 'password',
//                         type: 'password',
//                         prefix: <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />,
//                         placeholder: 'Password',
//                     },
//                 ],
//                 hidden: username === 'lint',
//                 decorator: {
//                     validateTrigger: ['onChange', 'onBlur'],
//                     rules: [{ required: username === 'hubenlv', message: 'Please input your password!' }],
//                 },
//             },
//         ];
//     };

//     renderFields = (fields, formInstance) => {
//         this.formInstance = formInstance;
//         const formItems = fields.map(field => {
//             const { key, props } = field;
//             return (
//                 <Form.Item key={key} {...props}>
//                     {renderItem(field, formInstance)}
//                 </Form.Item>
//             );
//         });
//         return (
//             <Form>
//                 {formItems}
//                 <Button className="submitBtn">提交</Button>
//                 <table></table>>
//           </Form>
//         );
//     };

//     data = {
//         username: 'hubenlv2',
//     };

//     render() {
//         return <ControlForm getSettings={this.getSettings} data={this.data} render={this.renderFields}></ControlForm>
//     }
// }
