import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { EffectiveRepoBranchingModel, EffectiveRepoBranchingModelListMatch } from '../BitbucketSdkTypes';
declare class EffectiveRepoBranchingModelEntity extends BitbucketSdkEntityBase<EffectiveRepoBranchingModel> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: EffectiveRepoBranchingModelEntity): EffectiveRepoBranchingModelEntity;
    list(this: any, reqmatch?: EffectiveRepoBranchingModelListMatch, ctrl?: Control): Promise<EffectiveRepoBranchingModelEntity[]>;
}
export { EffectiveRepoBranchingModelEntity };
