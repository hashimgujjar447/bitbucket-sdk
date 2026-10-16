import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PaginatedBranch, PaginatedBranchListMatch } from '../BitbucketSdkTypes';
declare class PaginatedBranchEntity extends BitbucketSdkEntityBase<PaginatedBranch> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PaginatedBranchEntity): PaginatedBranchEntity;
    list(this: any, reqmatch?: PaginatedBranchListMatch, ctrl?: Control): Promise<PaginatedBranchEntity[]>;
}
export { PaginatedBranchEntity };
