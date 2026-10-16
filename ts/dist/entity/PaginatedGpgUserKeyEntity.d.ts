import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PaginatedGpgUserKey, PaginatedGpgUserKeyListMatch } from '../BitbucketSdkTypes';
declare class PaginatedGpgUserKeyEntity extends BitbucketSdkEntityBase<PaginatedGpgUserKey> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PaginatedGpgUserKeyEntity): PaginatedGpgUserKeyEntity;
    list(this: any, reqmatch?: PaginatedGpgUserKeyListMatch, ctrl?: Control): Promise<PaginatedGpgUserKeyEntity[]>;
}
export { PaginatedGpgUserKeyEntity };
