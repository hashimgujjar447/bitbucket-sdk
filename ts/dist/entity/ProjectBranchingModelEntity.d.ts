import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { ProjectBranchingModel, ProjectBranchingModelListMatch } from '../BitbucketSdkTypes';
declare class ProjectBranchingModelEntity extends BitbucketSdkEntityBase<ProjectBranchingModel> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: ProjectBranchingModelEntity): ProjectBranchingModelEntity;
    list(this: any, reqmatch?: ProjectBranchingModelListMatch, ctrl?: Control): Promise<ProjectBranchingModelEntity[]>;
}
export { ProjectBranchingModelEntity };
