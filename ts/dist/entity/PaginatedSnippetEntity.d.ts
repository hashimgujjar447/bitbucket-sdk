import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PaginatedSnippet, PaginatedSnippetLoadMatch } from '../BitbucketSdkTypes';
declare class PaginatedSnippetEntity extends BitbucketSdkEntityBase<PaginatedSnippet> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PaginatedSnippetEntity): PaginatedSnippetEntity;
    load(this: any, reqmatch?: PaginatedSnippetLoadMatch, ctrl?: Control): Promise<PaginatedSnippetEntity>;
}
export { PaginatedSnippetEntity };
