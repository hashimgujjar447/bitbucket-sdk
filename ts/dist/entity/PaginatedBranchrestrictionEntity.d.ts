import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PaginatedBranchrestriction, PaginatedBranchrestrictionListMatch } from '../BitbucketSdkTypes';
declare class PaginatedBranchrestrictionEntity extends BitbucketSdkEntityBase<PaginatedBranchrestriction> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PaginatedBranchrestrictionEntity): PaginatedBranchrestrictionEntity;
    list(this: any, reqmatch?: PaginatedBranchrestrictionListMatch, ctrl?: Control): Promise<PaginatedBranchrestrictionEntity[]>;
}
export { PaginatedBranchrestrictionEntity };
