import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PaginatedPipelineKnownHost, PaginatedPipelineKnownHostListMatch } from '../BitbucketSdkTypes';
declare class PaginatedPipelineKnownHostEntity extends BitbucketSdkEntityBase<PaginatedPipelineKnownHost> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PaginatedPipelineKnownHostEntity): PaginatedPipelineKnownHostEntity;
    list(this: any, reqmatch?: PaginatedPipelineKnownHostListMatch, ctrl?: Control): Promise<PaginatedPipelineKnownHostEntity[]>;
}
export { PaginatedPipelineKnownHostEntity };
