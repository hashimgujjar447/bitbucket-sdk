import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { EffectiveDefaultReviewer, EffectiveDefaultReviewerListMatch } from '../BitbucketSdkTypes';
declare class EffectiveDefaultReviewerEntity extends BitbucketSdkEntityBase<EffectiveDefaultReviewer> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: EffectiveDefaultReviewerEntity): EffectiveDefaultReviewerEntity;
    list(this: any, reqmatch?: EffectiveDefaultReviewerListMatch, ctrl?: Control): Promise<EffectiveDefaultReviewerEntity[]>;
}
export { EffectiveDefaultReviewerEntity };
