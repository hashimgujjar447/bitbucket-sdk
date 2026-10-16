import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { RepositoryUserPermission, RepositoryUserPermissionLoadMatch, RepositoryUserPermissionUpdateData } from '../BitbucketSdkTypes';
declare class RepositoryUserPermissionEntity extends BitbucketSdkEntityBase<RepositoryUserPermission> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: RepositoryUserPermissionEntity): RepositoryUserPermissionEntity;
    load(this: any, reqmatch?: RepositoryUserPermissionLoadMatch, ctrl?: Control): Promise<RepositoryUserPermissionEntity>;
    update(this: any, reqdata?: RepositoryUserPermissionUpdateData, ctrl?: Control): Promise<RepositoryUserPermissionEntity>;
}
export { RepositoryUserPermissionEntity };
