import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PipelineKnownHost, PipelineKnownHostLoadMatch, PipelineKnownHostCreateData, PipelineKnownHostUpdateData } from '../BitbucketSdkTypes';
declare class PipelineKnownHostEntity extends BitbucketSdkEntityBase<PipelineKnownHost> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PipelineKnownHostEntity): PipelineKnownHostEntity;
    load(this: any, reqmatch?: PipelineKnownHostLoadMatch, ctrl?: Control): Promise<PipelineKnownHostEntity>;
    create(this: any, reqdata?: PipelineKnownHostCreateData, ctrl?: Control): Promise<PipelineKnownHostEntity>;
    update(this: any, reqdata?: PipelineKnownHostUpdateData, ctrl?: Control): Promise<PipelineKnownHostEntity>;
}
export { PipelineKnownHostEntity };
