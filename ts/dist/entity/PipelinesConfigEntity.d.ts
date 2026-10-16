import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PipelinesConfig, PipelinesConfigLoadMatch, PipelinesConfigUpdateData } from '../BitbucketSdkTypes';
declare class PipelinesConfigEntity extends BitbucketSdkEntityBase<PipelinesConfig> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PipelinesConfigEntity): PipelinesConfigEntity;
    load(this: any, reqmatch?: PipelinesConfigLoadMatch, ctrl?: Control): Promise<PipelinesConfigEntity>;
    update(this: any, reqdata?: PipelinesConfigUpdateData, ctrl?: Control): Promise<PipelinesConfigEntity>;
}
export { PipelinesConfigEntity };
