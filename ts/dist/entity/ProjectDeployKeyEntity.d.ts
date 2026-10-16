import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { ProjectDeployKey, ProjectDeployKeyLoadMatch, ProjectDeployKeyCreateData } from '../BitbucketSdkTypes';
declare class ProjectDeployKeyEntity extends BitbucketSdkEntityBase<ProjectDeployKey> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: ProjectDeployKeyEntity): ProjectDeployKeyEntity;
    load(this: any, reqmatch?: ProjectDeployKeyLoadMatch, ctrl?: Control): Promise<ProjectDeployKeyEntity>;
    create(this: any, reqdata?: ProjectDeployKeyCreateData, ctrl?: Control): Promise<ProjectDeployKeyEntity>;
}
export { ProjectDeployKeyEntity };
