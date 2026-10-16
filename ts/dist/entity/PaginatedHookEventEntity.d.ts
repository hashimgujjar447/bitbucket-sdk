import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PaginatedHookEvent, PaginatedHookEventLoadMatch } from '../BitbucketSdkTypes';
declare class PaginatedHookEventEntity extends BitbucketSdkEntityBase<PaginatedHookEvent> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PaginatedHookEventEntity): PaginatedHookEventEntity;
    load(this: any, reqmatch?: PaginatedHookEventLoadMatch, ctrl?: Control): Promise<PaginatedHookEventEntity>;
}
export { PaginatedHookEventEntity };
