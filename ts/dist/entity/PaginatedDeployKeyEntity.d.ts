import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PaginatedDeployKey, PaginatedDeployKeyListMatch } from '../BitbucketSdkTypes';
declare class PaginatedDeployKeyEntity extends BitbucketSdkEntityBase<PaginatedDeployKey> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PaginatedDeployKeyEntity): PaginatedDeployKeyEntity;
    list(this: any, reqmatch?: PaginatedDeployKeyListMatch, ctrl?: Control): Promise<PaginatedDeployKeyEntity[]>;
}
export { PaginatedDeployKeyEntity };
