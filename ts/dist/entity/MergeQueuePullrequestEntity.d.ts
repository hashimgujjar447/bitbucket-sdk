import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { MergeQueuePullrequest, MergeQueuePullrequestLoadMatch } from '../BitbucketSdkTypes';
declare class MergeQueuePullrequestEntity extends BitbucketSdkEntityBase<MergeQueuePullrequest> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: MergeQueuePullrequestEntity): MergeQueuePullrequestEntity;
    load(this: any, reqmatch?: MergeQueuePullrequestLoadMatch, ctrl?: Control): Promise<MergeQueuePullrequestEntity>;
}
export { MergeQueuePullrequestEntity };
