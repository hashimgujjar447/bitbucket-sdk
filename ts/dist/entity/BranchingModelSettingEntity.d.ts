import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { BranchingModelSetting, BranchingModelSettingListMatch, BranchingModelSettingUpdateData } from '../BitbucketSdkTypes';
declare class BranchingModelSettingEntity extends BitbucketSdkEntityBase<BranchingModelSetting> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: BranchingModelSettingEntity): BranchingModelSettingEntity;
    list(this: any, reqmatch?: BranchingModelSettingListMatch, ctrl?: Control): Promise<BranchingModelSettingEntity[]>;
    update(this: any, reqdata?: BranchingModelSettingUpdateData, ctrl?: Control): Promise<BranchingModelSettingEntity>;
}
export { BranchingModelSettingEntity };
