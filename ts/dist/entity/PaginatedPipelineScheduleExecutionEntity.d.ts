import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PaginatedPipelineScheduleExecution, PaginatedPipelineScheduleExecutionListMatch } from '../BitbucketSdkTypes';
declare class PaginatedPipelineScheduleExecutionEntity extends BitbucketSdkEntityBase<PaginatedPipelineScheduleExecution> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PaginatedPipelineScheduleExecutionEntity): PaginatedPipelineScheduleExecutionEntity;
    list(this: any, reqmatch?: PaginatedPipelineScheduleExecutionListMatch, ctrl?: Control): Promise<PaginatedPipelineScheduleExecutionEntity[]>;
}
export { PaginatedPipelineScheduleExecutionEntity };
