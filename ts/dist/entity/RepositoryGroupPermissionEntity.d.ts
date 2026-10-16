import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { RepositoryGroupPermission, RepositoryGroupPermissionLoadMatch, RepositoryGroupPermissionUpdateData } from '../BitbucketSdkTypes';
declare class RepositoryGroupPermissionEntity extends BitbucketSdkEntityBase<RepositoryGroupPermission> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: RepositoryGroupPermissionEntity): RepositoryGroupPermissionEntity;
    load(this: any, reqmatch?: RepositoryGroupPermissionLoadMatch, ctrl?: Control): Promise<RepositoryGroupPermissionEntity>;
    update(this: any, reqdata?: RepositoryGroupPermissionUpdateData, ctrl?: Control): Promise<RepositoryGroupPermissionEntity>;
}
export { RepositoryGroupPermissionEntity };
