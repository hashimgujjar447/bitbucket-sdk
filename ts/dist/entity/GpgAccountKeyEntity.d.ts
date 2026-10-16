import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { GpgAccountKey, GpgAccountKeyLoadMatch, GpgAccountKeyCreateData } from '../BitbucketSdkTypes';
declare class GpgAccountKeyEntity extends BitbucketSdkEntityBase<GpgAccountKey> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: GpgAccountKeyEntity): GpgAccountKeyEntity;
    load(this: any, reqmatch?: GpgAccountKeyLoadMatch, ctrl?: Control): Promise<GpgAccountKeyEntity>;
    create(this: any, reqdata?: GpgAccountKeyCreateData, ctrl?: Control): Promise<GpgAccountKeyEntity>;
}
export { GpgAccountKeyEntity };
