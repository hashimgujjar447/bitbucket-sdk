import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PaginatedTask, PaginatedTaskListMatch } from '../BitbucketSdkTypes';
declare class PaginatedTaskEntity extends BitbucketSdkEntityBase<PaginatedTask> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PaginatedTaskEntity): PaginatedTaskEntity;
    list(this: any, reqmatch?: PaginatedTaskListMatch, ctrl?: Control): Promise<PaginatedTaskEntity[]>;
}
export { PaginatedTaskEntity };
