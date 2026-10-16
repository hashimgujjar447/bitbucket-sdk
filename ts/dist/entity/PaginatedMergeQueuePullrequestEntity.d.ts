import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PaginatedMergeQueuePullrequest, PaginatedMergeQueuePullrequestListMatch } from '../BitbucketSdkTypes';
declare class PaginatedMergeQueuePullrequestEntity extends BitbucketSdkEntityBase<PaginatedMergeQueuePullrequest> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PaginatedMergeQueuePullrequestEntity): PaginatedMergeQueuePullrequestEntity;
    list(this: any, reqmatch?: PaginatedMergeQueuePullrequestListMatch, ctrl?: Control): Promise<PaginatedMergeQueuePullrequestEntity[]>;
}
export { PaginatedMergeQueuePullrequestEntity };
