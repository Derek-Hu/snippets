import { formatMessage } from '~/locale-tools';
import { setDefaultValue } from '~/utils/mapping-util';

export default {
  report: {
    column: {
      no: 'No',
      reportTime: formatMessage({ id: 'acquisition-time' }),
      highestEdu: formatMessage({ id: 'highest-academic-qualifications' }),
      certificateNo: formatMessage({ id: 'certificate-number' }),
      university: formatMessage({ id: 'university-one-is-graduated' }),
      major: formatMessage({ id: 'major' }),
      degree: formatMessage({ id: 'educational-level' }),
      degreeType: formatMessage({ id: 'education-category' }),
      educationStyle: formatMessage({ id: 'learning-form' }),
      enrolDate: formatMessage({ id: 'admission-time' }),
      graduateDate: formatMessage({ id: 'graduation-time' }),
      universityAddress: formatMessage({ id: 'school-location' }),
    },
    pagination: {
      pageSize: 10,
    },
    render: (value, key, data, index) => {
      switch (key) {
        case 'no':
          return index + 1;
        case 'dataSource':
          return setDefaultValue(value, 'dict', DATA_SOURCE);
        default:
          return value;
      }
    },
  },
};

const DATA_SOURCE = {
  gxb: formatMessage({ id: 'education-report-of-gongxinbao' }),
  id5EducationInfo: formatMessage({ id: 'academic-report-of-xuexincom' }),
  table_data: formatMessage({ id: 'fill-in-data' }),
};
