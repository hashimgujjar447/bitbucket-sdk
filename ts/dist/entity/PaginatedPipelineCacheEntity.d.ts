import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PaginatedPipelineCache, PaginatedPipelineCacheListMatch } from '../BitbucketSdkTypes';
declare class PaginatedPipelineCacheEntity extends BitbucketSdkEntityBase<PaginatedPipelineCache> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PaginatedPipelineCacheEntity): PaginatedPipelineCacheEntity;
    list(this: any, reqmatch?: PaginatedPipelineCacheListMatch, ctrl?: Control): Promise<PaginatedPipelineCacheEntity[]>;
}
export { PaginatedPipelineCacheEntity };
