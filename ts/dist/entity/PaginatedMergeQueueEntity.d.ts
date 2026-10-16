import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PaginatedMergeQueue, PaginatedMergeQueueListMatch } from '../BitbucketSdkTypes';
declare class PaginatedMergeQueueEntity extends BitbucketSdkEntityBase<PaginatedMergeQueue> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PaginatedMergeQueueEntity): PaginatedMergeQueueEntity;
    list(this: any, reqmatch?: PaginatedMergeQueueListMatch, ctrl?: Control): Promise<PaginatedMergeQueueEntity[]>;
}
export { PaginatedMergeQueueEntity };
