import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { Project, ProjectLoadMatch, ProjectCreateData, ProjectUpdateData, ProjectRemoveMatch } from '../BitbucketSdkTypes';
declare class ProjectEntity extends BitbucketSdkEntityBase<Project> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: ProjectEntity): ProjectEntity;
    load(this: any, reqmatch?: ProjectLoadMatch, ctrl?: Control): Promise<ProjectEntity>;
    create(this: any, reqdata?: ProjectCreateData, ctrl?: Control): Promise<ProjectEntity>;
    update(this: any, reqdata?: ProjectUpdateData, ctrl?: Control): Promise<ProjectEntity>;
    remove(this: any, reqmatch?: ProjectRemoveMatch, ctrl?: Control): Promise<ProjectEntity>;
}
export { ProjectEntity };
