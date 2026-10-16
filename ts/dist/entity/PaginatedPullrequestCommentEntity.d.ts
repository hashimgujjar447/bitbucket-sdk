import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PaginatedPullrequestComment, PaginatedPullrequestCommentListMatch } from '../BitbucketSdkTypes';
declare class PaginatedPullrequestCommentEntity extends BitbucketSdkEntityBase<PaginatedPullrequestComment> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PaginatedPullrequestCommentEntity): PaginatedPullrequestCommentEntity;
    list(this: any, reqmatch?: PaginatedPullrequestCommentListMatch, ctrl?: Control): Promise<PaginatedPullrequestCommentEntity[]>;
}
export { PaginatedPullrequestCommentEntity };
