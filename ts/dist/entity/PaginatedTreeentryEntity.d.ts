import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PaginatedTreeentry, PaginatedTreeentryLoadMatch, PaginatedTreeentryListMatch } from '../BitbucketSdkTypes';
declare class PaginatedTreeentryEntity extends BitbucketSdkEntityBase<PaginatedTreeentry> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PaginatedTreeentryEntity): PaginatedTreeentryEntity;
    load(this: any, reqmatch?: PaginatedTreeentryLoadMatch, ctrl?: Control): Promise<PaginatedTreeentryEntity>;
    list(this: any, reqmatch?: PaginatedTreeentryListMatch, ctrl?: Control): Promise<PaginatedTreeentryEntity[]>;
}
export { PaginatedTreeentryEntity };
