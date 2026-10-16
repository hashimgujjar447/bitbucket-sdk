import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PaginatedTag, PaginatedTagListMatch } from '../BitbucketSdkTypes';
declare class PaginatedTagEntity extends BitbucketSdkEntityBase<PaginatedTag> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PaginatedTagEntity): PaginatedTagEntity;
    list(this: any, reqmatch?: PaginatedTagListMatch, ctrl?: Control): Promise<PaginatedTagEntity[]>;
}
export { PaginatedTagEntity };
