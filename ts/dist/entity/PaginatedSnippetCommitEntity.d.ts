import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PaginatedSnippetCommit, PaginatedSnippetCommitListMatch } from '../BitbucketSdkTypes';
declare class PaginatedSnippetCommitEntity extends BitbucketSdkEntityBase<PaginatedSnippetCommit> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PaginatedSnippetCommitEntity): PaginatedSnippetCommitEntity;
    list(this: any, reqmatch?: PaginatedSnippetCommitListMatch, ctrl?: Control): Promise<PaginatedSnippetCommitEntity[]>;
}
export { PaginatedSnippetCommitEntity };
