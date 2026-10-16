import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PaginatedProjectGroupPermission, PaginatedProjectGroupPermissionListMatch } from '../BitbucketSdkTypes';
declare class PaginatedProjectGroupPermissionEntity extends BitbucketSdkEntityBase<PaginatedProjectGroupPermission> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PaginatedProjectGroupPermissionEntity): PaginatedProjectGroupPermissionEntity;
    list(this: any, reqmatch?: PaginatedProjectGroupPermissionListMatch, ctrl?: Control): Promise<PaginatedProjectGroupPermissionEntity[]>;
}
export { PaginatedProjectGroupPermissionEntity };
