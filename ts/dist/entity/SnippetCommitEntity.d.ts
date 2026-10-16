import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { SnippetCommit, SnippetCommitLoadMatch } from '../BitbucketSdkTypes';
declare class SnippetCommitEntity extends BitbucketSdkEntityBase<SnippetCommit> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: SnippetCommitEntity): SnippetCommitEntity;
    load(this: any, reqmatch?: SnippetCommitLoadMatch, ctrl?: Control): Promise<SnippetCommitEntity>;
}
export { SnippetCommitEntity };
