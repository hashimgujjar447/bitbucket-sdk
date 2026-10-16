import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PipelineBuildNumber, PipelineBuildNumberUpdateData } from '../BitbucketSdkTypes';
declare class PipelineBuildNumberEntity extends BitbucketSdkEntityBase<PipelineBuildNumber> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PipelineBuildNumberEntity): PipelineBuildNumberEntity;
    update(this: any, reqdata?: PipelineBuildNumberUpdateData, ctrl?: Control): Promise<PipelineBuildNumberEntity>;
}
export { PipelineBuildNumberEntity };
