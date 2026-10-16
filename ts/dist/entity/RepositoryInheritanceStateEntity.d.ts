import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { RepositoryInheritanceState, RepositoryInheritanceStateLoadMatch } from '../BitbucketSdkTypes';
declare class RepositoryInheritanceStateEntity extends BitbucketSdkEntityBase<RepositoryInheritanceState> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: RepositoryInheritanceStateEntity): RepositoryInheritanceStateEntity;
    load(this: any, reqmatch?: RepositoryInheritanceStateLoadMatch, ctrl?: Control): Promise<RepositoryInheritanceStateEntity>;
}
export { RepositoryInheritanceStateEntity };
