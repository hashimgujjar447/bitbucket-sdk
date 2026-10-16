import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { SearchResultPage, SearchResultPageListMatch } from '../BitbucketSdkTypes';
declare class SearchResultPageEntity extends BitbucketSdkEntityBase<SearchResultPage> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: SearchResultPageEntity): SearchResultPageEntity;
    list(this: any, reqmatch?: SearchResultPageListMatch, ctrl?: Control): Promise<SearchResultPageEntity[]>;
}
export { SearchResultPageEntity };
