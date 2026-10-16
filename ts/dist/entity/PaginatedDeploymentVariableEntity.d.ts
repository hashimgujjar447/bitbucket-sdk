import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PaginatedDeploymentVariable, PaginatedDeploymentVariableListMatch } from '../BitbucketSdkTypes';
declare class PaginatedDeploymentVariableEntity extends BitbucketSdkEntityBase<PaginatedDeploymentVariable> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PaginatedDeploymentVariableEntity): PaginatedDeploymentVariableEntity;
    list(this: any, reqmatch?: PaginatedDeploymentVariableListMatch, ctrl?: Control): Promise<PaginatedDeploymentVariableEntity[]>;
}
export { PaginatedDeploymentVariableEntity };
