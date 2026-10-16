import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PaginatedPipelineRunner, PaginatedPipelineRunnerListMatch } from '../BitbucketSdkTypes';
declare class PaginatedPipelineRunnerEntity extends BitbucketSdkEntityBase<PaginatedPipelineRunner> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PaginatedPipelineRunnerEntity): PaginatedPipelineRunnerEntity;
    list(this: any, reqmatch?: PaginatedPipelineRunnerListMatch, ctrl?: Control): Promise<PaginatedPipelineRunnerEntity[]>;
}
export { PaginatedPipelineRunnerEntity };
