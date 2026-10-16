import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PaginatedProject, PaginatedProjectListMatch } from '../BitbucketSdkTypes';
declare class PaginatedProjectEntity extends BitbucketSdkEntityBase<PaginatedProject> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PaginatedProjectEntity): PaginatedProjectEntity;
    list(this: any, reqmatch?: PaginatedProjectListMatch, ctrl?: Control): Promise<PaginatedProjectEntity[]>;
}
export { PaginatedProjectEntity };
