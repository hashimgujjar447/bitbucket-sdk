import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PaginatedRepositoryUserPermission, PaginatedRepositoryUserPermissionListMatch } from '../BitbucketSdkTypes';
declare class PaginatedRepositoryUserPermissionEntity extends BitbucketSdkEntityBase<PaginatedRepositoryUserPermission> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PaginatedRepositoryUserPermissionEntity): PaginatedRepositoryUserPermissionEntity;
    list(this: any, reqmatch?: PaginatedRepositoryUserPermissionListMatch, ctrl?: Control): Promise<PaginatedRepositoryUserPermissionEntity[]>;
}
export { PaginatedRepositoryUserPermissionEntity };
