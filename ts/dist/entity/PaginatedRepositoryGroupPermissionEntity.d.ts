import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PaginatedRepositoryGroupPermission, PaginatedRepositoryGroupPermissionListMatch } from '../BitbucketSdkTypes';
declare class PaginatedRepositoryGroupPermissionEntity extends BitbucketSdkEntityBase<PaginatedRepositoryGroupPermission> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PaginatedRepositoryGroupPermissionEntity): PaginatedRepositoryGroupPermissionEntity;
    list(this: any, reqmatch?: PaginatedRepositoryGroupPermissionListMatch, ctrl?: Control): Promise<PaginatedRepositoryGroupPermissionEntity[]>;
}
export { PaginatedRepositoryGroupPermissionEntity };
