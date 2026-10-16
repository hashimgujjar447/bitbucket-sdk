import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PaginatedPipelineSchedule, PaginatedPipelineScheduleListMatch } from '../BitbucketSdkTypes';
declare class PaginatedPipelineScheduleEntity extends BitbucketSdkEntityBase<PaginatedPipelineSchedule> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PaginatedPipelineScheduleEntity): PaginatedPipelineScheduleEntity;
    list(this: any, reqmatch?: PaginatedPipelineScheduleListMatch, ctrl?: Control): Promise<PaginatedPipelineScheduleEntity[]>;
}
export { PaginatedPipelineScheduleEntity };
