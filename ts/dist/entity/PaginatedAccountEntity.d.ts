import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PaginatedAccount, PaginatedAccountListMatch } from '../BitbucketSdkTypes';
declare class PaginatedAccountEntity extends BitbucketSdkEntityBase<PaginatedAccount> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PaginatedAccountEntity): PaginatedAccountEntity;
    list(this: any, reqmatch?: PaginatedAccountListMatch, ctrl?: Control): Promise<PaginatedAccountEntity[]>;
}
export { PaginatedAccountEntity };
