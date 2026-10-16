import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PaginatedChangeset, PaginatedChangesetLoadMatch, PaginatedChangesetListMatch, PaginatedChangesetCreateData } from '../BitbucketSdkTypes';
declare class PaginatedChangesetEntity extends BitbucketSdkEntityBase<PaginatedChangeset> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PaginatedChangesetEntity): PaginatedChangesetEntity;
    load(this: any, reqmatch?: PaginatedChangesetLoadMatch, ctrl?: Control): Promise<PaginatedChangesetEntity>;
    list(this: any, reqmatch?: PaginatedChangesetListMatch, ctrl?: Control): Promise<PaginatedChangesetEntity[]>;
    create(this: any, reqdata?: PaginatedChangesetCreateData, ctrl?: Control): Promise<PaginatedChangesetEntity>;
}
export { PaginatedChangesetEntity };
