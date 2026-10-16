import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PaginatedCommitstatus, PaginatedCommitstatusListMatch } from '../BitbucketSdkTypes';
declare class PaginatedCommitstatusEntity extends BitbucketSdkEntityBase<PaginatedCommitstatus> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PaginatedCommitstatusEntity): PaginatedCommitstatusEntity;
    list(this: any, reqmatch?: PaginatedCommitstatusListMatch, ctrl?: Control): Promise<PaginatedCommitstatusEntity[]>;
}
export { PaginatedCommitstatusEntity };
