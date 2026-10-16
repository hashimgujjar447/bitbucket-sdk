import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PaginatedProjectDeployKey, PaginatedProjectDeployKeyListMatch } from '../BitbucketSdkTypes';
declare class PaginatedProjectDeployKeyEntity extends BitbucketSdkEntityBase<PaginatedProjectDeployKey> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PaginatedProjectDeployKeyEntity): PaginatedProjectDeployKeyEntity;
    list(this: any, reqmatch?: PaginatedProjectDeployKeyListMatch, ctrl?: Control): Promise<PaginatedProjectDeployKeyEntity[]>;
}
export { PaginatedProjectDeployKeyEntity };
