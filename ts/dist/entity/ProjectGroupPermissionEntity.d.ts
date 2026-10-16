import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { ProjectGroupPermission, ProjectGroupPermissionLoadMatch, ProjectGroupPermissionUpdateData } from '../BitbucketSdkTypes';
declare class ProjectGroupPermissionEntity extends BitbucketSdkEntityBase<ProjectGroupPermission> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: ProjectGroupPermissionEntity): ProjectGroupPermissionEntity;
    load(this: any, reqmatch?: ProjectGroupPermissionLoadMatch, ctrl?: Control): Promise<ProjectGroupPermissionEntity>;
    update(this: any, reqdata?: ProjectGroupPermissionUpdateData, ctrl?: Control): Promise<ProjectGroupPermissionEntity>;
}
export { ProjectGroupPermissionEntity };
