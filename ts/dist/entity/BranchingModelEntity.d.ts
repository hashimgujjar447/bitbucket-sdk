import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { BranchingModel, BranchingModelListMatch } from '../BitbucketSdkTypes';
declare class BranchingModelEntity extends BitbucketSdkEntityBase<BranchingModel> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: BranchingModelEntity): BranchingModelEntity;
    list(this: any, reqmatch?: BranchingModelListMatch, ctrl?: Control): Promise<BranchingModelEntity[]>;
}
export { BranchingModelEntity };
