import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { Addon, AddonLoadMatch, AddonUpdateData, AddonRemoveMatch } from '../BitbucketSdkTypes';
declare class AddonEntity extends BitbucketSdkEntityBase<Addon> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: AddonEntity): AddonEntity;
    load(this: any, reqmatch?: AddonLoadMatch, ctrl?: Control): Promise<AddonEntity>;
    update(this: any, reqdata?: AddonUpdateData, ctrl?: Control): Promise<AddonEntity>;
    remove(this: any, reqmatch?: AddonRemoveMatch, ctrl?: Control): Promise<AddonEntity>;
}
export { AddonEntity };
