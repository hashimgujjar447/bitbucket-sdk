import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PaginatedRef, PaginatedRefListMatch } from '../BitbucketSdkTypes';
declare class PaginatedRefEntity extends BitbucketSdkEntityBase<PaginatedRef> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PaginatedRefEntity): PaginatedRefEntity;
    list(this: any, reqmatch?: PaginatedRefListMatch, ctrl?: Control): Promise<PaginatedRefEntity[]>;
}
export { PaginatedRefEntity };
