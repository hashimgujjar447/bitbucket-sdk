import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PaginatedPipeline, PaginatedPipelineListMatch } from '../BitbucketSdkTypes';
declare class PaginatedPipelineEntity extends BitbucketSdkEntityBase<PaginatedPipeline> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PaginatedPipelineEntity): PaginatedPipelineEntity;
    list(this: any, reqmatch?: PaginatedPipelineListMatch, ctrl?: Control): Promise<PaginatedPipelineEntity[]>;
}
export { PaginatedPipelineEntity };
