import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { Ssh, SshRemoveMatch } from '../BitbucketSdkTypes';
declare class SshEntity extends BitbucketSdkEntityBase<Ssh> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: SshEntity): SshEntity;
    remove(this: any, reqmatch?: SshRemoveMatch, ctrl?: Control): Promise<SshEntity>;
}
export { SshEntity };
