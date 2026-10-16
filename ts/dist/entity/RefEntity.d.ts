import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { Ref, RefRemoveMatch } from '../BitbucketSdkTypes';
declare class RefEntity extends BitbucketSdkEntityBase<Ref> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: RefEntity): RefEntity;
    remove(this: any, reqmatch?: RefRemoveMatch, ctrl?: Control): Promise<RefEntity>;
}
export { RefEntity };
