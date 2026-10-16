import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PaginatedRepositoryPermission, PaginatedRepositoryPermissionLoadMatch, PaginatedRepositoryPermissionListMatch } from '../BitbucketSdkTypes';
declare class PaginatedRepositoryPermissionEntity extends BitbucketSdkEntityBase<PaginatedRepositoryPermission> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PaginatedRepositoryPermissionEntity): PaginatedRepositoryPermissionEntity;
    load(this: any, reqmatch?: PaginatedRepositoryPermissionLoadMatch, ctrl?: Control): Promise<PaginatedRepositoryPermissionEntity>;
    list(this: any, reqmatch?: PaginatedRepositoryPermissionListMatch, ctrl?: Control): Promise<PaginatedRepositoryPermissionEntity[]>;
}
export { PaginatedRepositoryPermissionEntity };
