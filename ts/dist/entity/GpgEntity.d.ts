import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { Gpg, GpgRemoveMatch } from '../BitbucketSdkTypes';
declare class GpgEntity extends BitbucketSdkEntityBase<Gpg> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: GpgEntity): GpgEntity;
    remove(this: any, reqmatch?: GpgRemoveMatch, ctrl?: Control): Promise<GpgEntity>;
}
export { GpgEntity };
