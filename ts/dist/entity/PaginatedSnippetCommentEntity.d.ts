import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PaginatedSnippetComment, PaginatedSnippetCommentListMatch } from '../BitbucketSdkTypes';
declare class PaginatedSnippetCommentEntity extends BitbucketSdkEntityBase<PaginatedSnippetComment> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PaginatedSnippetCommentEntity): PaginatedSnippetCommentEntity;
    list(this: any, reqmatch?: PaginatedSnippetCommentListMatch, ctrl?: Control): Promise<PaginatedSnippetCommentEntity[]>;
}
export { PaginatedSnippetCommentEntity };
