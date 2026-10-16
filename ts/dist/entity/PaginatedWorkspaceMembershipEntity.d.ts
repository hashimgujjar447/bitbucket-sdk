import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PaginatedWorkspaceMembership, PaginatedWorkspaceMembershipListMatch } from '../BitbucketSdkTypes';
declare class PaginatedWorkspaceMembershipEntity extends BitbucketSdkEntityBase<PaginatedWorkspaceMembership> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PaginatedWorkspaceMembershipEntity): PaginatedWorkspaceMembershipEntity;
    list(this: any, reqmatch?: PaginatedWorkspaceMembershipListMatch, ctrl?: Control): Promise<PaginatedWorkspaceMembershipEntity[]>;
}
export { PaginatedWorkspaceMembershipEntity };
