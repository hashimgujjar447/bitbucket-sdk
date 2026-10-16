import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { ProjectUserPermission, ProjectUserPermissionLoadMatch, ProjectUserPermissionUpdateData } from '../BitbucketSdkTypes';
declare class ProjectUserPermissionEntity extends BitbucketSdkEntityBase<ProjectUserPermission> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: ProjectUserPermissionEntity): ProjectUserPermissionEntity;
    load(this: any, reqmatch?: ProjectUserPermissionLoadMatch, ctrl?: Control): Promise<ProjectUserPermissionEntity>;
    update(this: any, reqdata?: ProjectUserPermissionUpdateData, ctrl?: Control): Promise<ProjectUserPermissionEntity>;
}
export { ProjectUserPermissionEntity };
