import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PipelineSchedule, PipelineScheduleLoadMatch, PipelineScheduleCreateData, PipelineScheduleUpdateData } from '../BitbucketSdkTypes';
declare class PipelineScheduleEntity extends BitbucketSdkEntityBase<PipelineSchedule> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PipelineScheduleEntity): PipelineScheduleEntity;
    load(this: any, reqmatch?: PipelineScheduleLoadMatch, ctrl?: Control): Promise<PipelineScheduleEntity>;
    create(this: any, reqdata?: PipelineScheduleCreateData, ctrl?: Control): Promise<PipelineScheduleEntity>;
    update(this: any, reqdata?: PipelineScheduleUpdateData, ctrl?: Control): Promise<PipelineScheduleEntity>;
}
export { PipelineScheduleEntity };
