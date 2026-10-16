import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { DefaultReviewer, DefaultReviewerLoadMatch, DefaultReviewerUpdateData } from '../BitbucketSdkTypes';
declare class DefaultReviewerEntity extends BitbucketSdkEntityBase<DefaultReviewer> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: DefaultReviewerEntity): DefaultReviewerEntity;
    load(this: any, reqmatch?: DefaultReviewerLoadMatch, ctrl?: Control): Promise<DefaultReviewerEntity>;
    update(this: any, reqdata?: DefaultReviewerUpdateData, ctrl?: Control): Promise<DefaultReviewerEntity>;
}
export { DefaultReviewerEntity };
