import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PaginatedSshUserKey, PaginatedSshUserKeyListMatch } from '../BitbucketSdkTypes';
declare class PaginatedSshUserKeyEntity extends BitbucketSdkEntityBase<PaginatedSshUserKey> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PaginatedSshUserKeyEntity): PaginatedSshUserKeyEntity;
    list(this: any, reqmatch?: PaginatedSshUserKeyListMatch, ctrl?: Control): Promise<PaginatedSshUserKeyEntity[]>;
}
export { PaginatedSshUserKeyEntity };
