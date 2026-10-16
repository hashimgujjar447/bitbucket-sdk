import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PullrequestCommentTask, PullrequestCommentTaskLoadMatch, PullrequestCommentTaskCreateData, PullrequestCommentTaskUpdateData } from '../BitbucketSdkTypes';
declare class PullrequestCommentTaskEntity extends BitbucketSdkEntityBase<PullrequestCommentTask> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PullrequestCommentTaskEntity): PullrequestCommentTaskEntity;
    load(this: any, reqmatch?: PullrequestCommentTaskLoadMatch, ctrl?: Control): Promise<PullrequestCommentTaskEntity>;
    create(this: any, reqdata?: PullrequestCommentTaskCreateData, ctrl?: Control): Promise<PullrequestCommentTaskEntity>;
    update(this: any, reqdata?: PullrequestCommentTaskUpdateData, ctrl?: Control): Promise<PullrequestCommentTaskEntity>;
}
export { PullrequestCommentTaskEntity };
