import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { Branch, BranchLoadMatch, BranchCreateData } from '../BitbucketSdkTypes';
declare class BranchEntity extends BitbucketSdkEntityBase<Branch> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: BranchEntity): BranchEntity;
    load(this: any, reqmatch?: BranchLoadMatch, ctrl?: Control): Promise<BranchEntity>;
    create(this: any, reqdata?: BranchCreateData, ctrl?: Control): Promise<BranchEntity>;
}
export { BranchEntity };
