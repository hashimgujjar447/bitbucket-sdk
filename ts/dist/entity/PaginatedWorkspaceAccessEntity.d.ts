import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PaginatedWorkspaceAccess, PaginatedWorkspaceAccessListMatch } from '../BitbucketSdkTypes';
declare class PaginatedWorkspaceAccessEntity extends BitbucketSdkEntityBase<PaginatedWorkspaceAccess> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PaginatedWorkspaceAccessEntity): PaginatedWorkspaceAccessEntity;
    list(this: any, reqmatch?: PaginatedWorkspaceAccessListMatch, ctrl?: Control): Promise<PaginatedWorkspaceAccessEntity[]>;
}
export { PaginatedWorkspaceAccessEntity };
