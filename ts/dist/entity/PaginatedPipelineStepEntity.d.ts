import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PaginatedPipelineStep, PaginatedPipelineStepListMatch } from '../BitbucketSdkTypes';
declare class PaginatedPipelineStepEntity extends BitbucketSdkEntityBase<PaginatedPipelineStep> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PaginatedPipelineStepEntity): PaginatedPipelineStepEntity;
    list(this: any, reqmatch?: PaginatedPipelineStepListMatch, ctrl?: Control): Promise<PaginatedPipelineStepEntity[]>;
}
export { PaginatedPipelineStepEntity };
