import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PullrequestComment, PullrequestCommentLoadMatch, PullrequestCommentCreateData, PullrequestCommentUpdateData, PullrequestCommentRemoveMatch } from '../BitbucketSdkTypes';
declare class PullrequestCommentEntity extends BitbucketSdkEntityBase<PullrequestComment> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PullrequestCommentEntity): PullrequestCommentEntity;
    load(this: any, reqmatch?: PullrequestCommentLoadMatch, ctrl?: Control): Promise<PullrequestCommentEntity>;
    create(this: any, reqdata?: PullrequestCommentCreateData, ctrl?: Control): Promise<PullrequestCommentEntity>;
    update(this: any, reqdata?: PullrequestCommentUpdateData, ctrl?: Control): Promise<PullrequestCommentEntity>;
    remove(this: any, reqmatch?: PullrequestCommentRemoveMatch, ctrl?: Control): Promise<PullrequestCommentEntity>;
}
export { PullrequestCommentEntity };
