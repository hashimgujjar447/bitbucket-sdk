import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PipelineRunner, PipelineRunnerLoadMatch, PipelineRunnerCreateData, PipelineRunnerUpdateData } from '../BitbucketSdkTypes';
declare class PipelineRunnerEntity extends BitbucketSdkEntityBase<PipelineRunner> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PipelineRunnerEntity): PipelineRunnerEntity;
    load(this: any, reqmatch?: PipelineRunnerLoadMatch, ctrl?: Control): Promise<PipelineRunnerEntity>;
    create(this: any, reqdata?: PipelineRunnerCreateData, ctrl?: Control): Promise<PipelineRunnerEntity>;
    update(this: any, reqdata?: PipelineRunnerUpdateData, ctrl?: Control): Promise<PipelineRunnerEntity>;
}
export { PipelineRunnerEntity };
