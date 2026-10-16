import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PaginatedFileConflict, PaginatedFileConflictLoadMatch } from '../BitbucketSdkTypes';
declare class PaginatedFileConflictEntity extends BitbucketSdkEntityBase<PaginatedFileConflict> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PaginatedFileConflictEntity): PaginatedFileConflictEntity;
    load(this: any, reqmatch?: PaginatedFileConflictLoadMatch, ctrl?: Control): Promise<PaginatedFileConflictEntity>;
}
export { PaginatedFileConflictEntity };
