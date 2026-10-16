import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PipelineStep, PipelineStepLoadMatch } from '../BitbucketSdkTypes';
declare class PipelineStepEntity extends BitbucketSdkEntityBase<PipelineStep> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PipelineStepEntity): PipelineStepEntity;
    load(this: any, reqmatch?: PipelineStepLoadMatch, ctrl?: Control): Promise<PipelineStepEntity>;
}
export { PipelineStepEntity };
