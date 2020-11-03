import { IAntiFraudApplyPersonVo } from './IAntiFraudApplyPersonVo';
import { IAntiFraudAssetsVo } from './IAntiFraudAssetsVo';
import { IAntiFraudContactVo } from './IAntiFraudContactVo';
import { IAntiFraudJobVo } from './IAntiFraudJobVo';

export interface IAntiFraudIvestigateData {
  applyPersonVo?: IAntiFraudApplyPersonVo;

  assetsVo?: IAntiFraudAssetsVo;

  contactVos?: Array<IAntiFraudContactVo>;

  jobVos?: Array<IAntiFraudJobVo>;
}
