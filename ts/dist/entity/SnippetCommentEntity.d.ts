import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { SnippetComment, SnippetCommentLoadMatch, SnippetCommentCreateData, SnippetCommentUpdateData } from '../BitbucketSdkTypes';
declare class SnippetCommentEntity extends BitbucketSdkEntityBase<SnippetComment> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: SnippetCommentEntity): SnippetCommentEntity;
    load(this: any, reqmatch?: SnippetCommentLoadMatch, ctrl?: Control): Promise<SnippetCommentEntity>;
    create(this: any, reqdata?: SnippetCommentCreateData, ctrl?: Control): Promise<SnippetCommentEntity>;
    update(this: any, reqdata?: SnippetCommentUpdateData, ctrl?: Control): Promise<SnippetCommentEntity>;
}
export { SnippetCommentEntity };
