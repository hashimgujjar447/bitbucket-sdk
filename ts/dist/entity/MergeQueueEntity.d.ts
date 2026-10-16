import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { MergeQueue, MergeQueueLoadMatch, MergeQueueRemoveMatch } from '../BitbucketSdkTypes';
declare class MergeQueueEntity extends BitbucketSdkEntityBase<MergeQueue> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: MergeQueueEntity): MergeQueueEntity;
    load(this: any, reqmatch?: MergeQueueLoadMatch, ctrl?: Control): Promise<MergeQueueEntity>;
    remove(this: any, reqmatch?: MergeQueueRemoveMatch, ctrl?: Control): Promise<MergeQueueEntity>;
}
export { MergeQueueEntity };
