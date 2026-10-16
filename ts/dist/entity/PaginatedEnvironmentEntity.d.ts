import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PaginatedEnvironment, PaginatedEnvironmentListMatch } from '../BitbucketSdkTypes';
declare class PaginatedEnvironmentEntity extends BitbucketSdkEntityBase<PaginatedEnvironment> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PaginatedEnvironmentEntity): PaginatedEnvironmentEntity;
    list(this: any, reqmatch?: PaginatedEnvironmentListMatch, ctrl?: Control): Promise<PaginatedEnvironmentEntity[]>;
}
export { PaginatedEnvironmentEntity };
