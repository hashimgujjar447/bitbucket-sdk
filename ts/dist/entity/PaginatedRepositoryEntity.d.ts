import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PaginatedRepository, PaginatedRepositoryLoadMatch, PaginatedRepositoryListMatch } from '../BitbucketSdkTypes';
declare class PaginatedRepositoryEntity extends BitbucketSdkEntityBase<PaginatedRepository> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PaginatedRepositoryEntity): PaginatedRepositoryEntity;
    load(this: any, reqmatch?: PaginatedRepositoryLoadMatch, ctrl?: Control): Promise<PaginatedRepositoryEntity>;
    list(this: any, reqmatch?: PaginatedRepositoryListMatch, ctrl?: Control): Promise<PaginatedRepositoryEntity[]>;
}
export { PaginatedRepositoryEntity };
