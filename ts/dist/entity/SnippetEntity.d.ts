import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { Snippet, SnippetLoadMatch, SnippetCreateData, SnippetUpdateData, SnippetRemoveMatch } from '../BitbucketSdkTypes';
declare class SnippetEntity extends BitbucketSdkEntityBase<Snippet> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: SnippetEntity): SnippetEntity;
    load(this: any, reqmatch?: SnippetLoadMatch, ctrl?: Control): Promise<SnippetEntity>;
    create(this: any, reqdata?: SnippetCreateData, ctrl?: Control): Promise<SnippetEntity>;
    update(this: any, reqdata?: SnippetUpdateData, ctrl?: Control): Promise<SnippetEntity>;
    remove(this: any, reqmatch?: SnippetRemoveMatch, ctrl?: Control): Promise<SnippetEntity>;
}
export { SnippetEntity };
