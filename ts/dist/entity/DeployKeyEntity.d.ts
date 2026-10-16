import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { DeployKey, DeployKeyLoadMatch, DeployKeyCreateData, DeployKeyUpdateData } from '../BitbucketSdkTypes';
declare class DeployKeyEntity extends BitbucketSdkEntityBase<DeployKey> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: DeployKeyEntity): DeployKeyEntity;
    load(this: any, reqmatch?: DeployKeyLoadMatch, ctrl?: Control): Promise<DeployKeyEntity>;
    create(this: any, reqdata?: DeployKeyCreateData, ctrl?: Control): Promise<DeployKeyEntity>;
    update(this: any, reqdata?: DeployKeyUpdateData, ctrl?: Control): Promise<DeployKeyEntity>;
}
export { DeployKeyEntity };
