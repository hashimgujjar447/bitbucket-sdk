import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { Branchrestriction, BranchrestrictionLoadMatch, BranchrestrictionCreateData, BranchrestrictionUpdateData, BranchrestrictionRemoveMatch } from '../BitbucketSdkTypes';
declare class BranchrestrictionEntity extends BitbucketSdkEntityBase<Branchrestriction> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: BranchrestrictionEntity): BranchrestrictionEntity;
    load(this: any, reqmatch?: BranchrestrictionLoadMatch, ctrl?: Control): Promise<BranchrestrictionEntity>;
    create(this: any, reqdata?: BranchrestrictionCreateData, ctrl?: Control): Promise<BranchrestrictionEntity>;
    update(this: any, reqdata?: BranchrestrictionUpdateData, ctrl?: Control): Promise<BranchrestrictionEntity>;
    remove(this: any, reqmatch?: BranchrestrictionRemoveMatch, ctrl?: Control): Promise<BranchrestrictionEntity>;
}
export { BranchrestrictionEntity };
