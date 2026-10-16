import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PaginatedPullrequest, PaginatedPullrequestLoadMatch, PaginatedPullrequestListMatch } from '../BitbucketSdkTypes';
declare class PaginatedPullrequestEntity extends BitbucketSdkEntityBase<PaginatedPullrequest> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PaginatedPullrequestEntity): PaginatedPullrequestEntity;
    load(this: any, reqmatch?: PaginatedPullrequestLoadMatch, ctrl?: Control): Promise<PaginatedPullrequestEntity>;
    list(this: any, reqmatch?: PaginatedPullrequestListMatch, ctrl?: Control): Promise<PaginatedPullrequestEntity[]>;
}
export { PaginatedPullrequestEntity };
