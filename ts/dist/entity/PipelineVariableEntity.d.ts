import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PipelineVariable, PipelineVariableLoadMatch, PipelineVariableCreateData, PipelineVariableUpdateData } from '../BitbucketSdkTypes';
declare class PipelineVariableEntity extends BitbucketSdkEntityBase<PipelineVariable> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PipelineVariableEntity): PipelineVariableEntity;
    load(this: any, reqmatch?: PipelineVariableLoadMatch, ctrl?: Control): Promise<PipelineVariableEntity>;
    create(this: any, reqdata?: PipelineVariableCreateData, ctrl?: Control): Promise<PipelineVariableEntity>;
    update(this: any, reqdata?: PipelineVariableUpdateData, ctrl?: Control): Promise<PipelineVariableEntity>;
}
export { PipelineVariableEntity };
