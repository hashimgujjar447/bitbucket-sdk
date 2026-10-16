import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PaginatedProjectUserPermission, PaginatedProjectUserPermissionListMatch } from '../BitbucketSdkTypes';
declare class PaginatedProjectUserPermissionEntity extends BitbucketSdkEntityBase<PaginatedProjectUserPermission> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PaginatedProjectUserPermissionEntity): PaginatedProjectUserPermissionEntity;
    list(this: any, reqmatch?: PaginatedProjectUserPermissionListMatch, ctrl?: Control): Promise<PaginatedProjectUserPermissionEntity[]>;
}
export { PaginatedProjectUserPermissionEntity };
