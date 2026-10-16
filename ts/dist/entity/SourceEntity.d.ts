import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { Source, SourceCreateData } from '../BitbucketSdkTypes';
declare class SourceEntity extends BitbucketSdkEntityBase<Source> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: SourceEntity): SourceEntity;
    create(this: any, reqdata?: SourceCreateData, ctrl?: Control): Promise<SourceEntity>;
}
export { SourceEntity };
