import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PaginatedDeployment, PaginatedDeploymentListMatch } from '../BitbucketSdkTypes';
declare class PaginatedDeploymentEntity extends BitbucketSdkEntityBase<PaginatedDeployment> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PaginatedDeploymentEntity): PaginatedDeploymentEntity;
    list(this: any, reqmatch?: PaginatedDeploymentListMatch, ctrl?: Control): Promise<PaginatedDeploymentEntity[]>;
}
export { PaginatedDeploymentEntity };
