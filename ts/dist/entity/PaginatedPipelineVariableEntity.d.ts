import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PaginatedPipelineVariable, PaginatedPipelineVariableListMatch } from '../BitbucketSdkTypes';
declare class PaginatedPipelineVariableEntity extends BitbucketSdkEntityBase<PaginatedPipelineVariable> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PaginatedPipelineVariableEntity): PaginatedPipelineVariableEntity;
    list(this: any, reqmatch?: PaginatedPipelineVariableListMatch, ctrl?: Control): Promise<PaginatedPipelineVariableEntity[]>;
}
export { PaginatedPipelineVariableEntity };
