import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PaginatedDiffstat, PaginatedDiffstatLoadMatch } from '../BitbucketSdkTypes';
declare class PaginatedDiffstatEntity extends BitbucketSdkEntityBase<PaginatedDiffstat> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PaginatedDiffstatEntity): PaginatedDiffstatEntity;
    load(this: any, reqmatch?: PaginatedDiffstatLoadMatch, ctrl?: Control): Promise<PaginatedDiffstatEntity>;
}
export { PaginatedDiffstatEntity };
