import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { Pipeline, PipelineLoadMatch, PipelineCreateData, PipelineRemoveMatch } from '../BitbucketSdkTypes';
declare class PipelineEntity extends BitbucketSdkEntityBase<Pipeline> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PipelineEntity): PipelineEntity;
    load(this: any, reqmatch?: PipelineLoadMatch, ctrl?: Control): Promise<PipelineEntity>;
    create(this: any, reqdata?: PipelineCreateData, ctrl?: Control): Promise<PipelineEntity>;
    remove(this: any, reqmatch?: PipelineRemoveMatch, ctrl?: Control): Promise<PipelineEntity>;
}
export { PipelineEntity };
