import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PullrequestMergeabilityCheck, PullrequestMergeabilityCheckListMatch } from '../BitbucketSdkTypes';
declare class PullrequestMergeabilityCheckEntity extends BitbucketSdkEntityBase<PullrequestMergeabilityCheck> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PullrequestMergeabilityCheckEntity): PullrequestMergeabilityCheckEntity;
    list(this: any, reqmatch?: PullrequestMergeabilityCheckListMatch, ctrl?: Control): Promise<PullrequestMergeabilityCheckEntity[]>;
}
export { PullrequestMergeabilityCheckEntity };
