import { ICandidatePo } from './ICandidatePo';

export interface IWorkflowDefinitionRequest {
  candidatePos?: Array<ICandidatePo>;

  definition?: string;

  name?: string;

  productCode?: string;

  versionId?: number;

  workFlowId?: string;
}
