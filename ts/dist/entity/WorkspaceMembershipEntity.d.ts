import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { WorkspaceMembership, WorkspaceMembershipLoadMatch } from '../BitbucketSdkTypes';
declare class WorkspaceMembershipEntity extends BitbucketSdkEntityBase<WorkspaceMembership> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: WorkspaceMembershipEntity): WorkspaceMembershipEntity;
    load(this: any, reqmatch?: WorkspaceMembershipLoadMatch, ctrl?: Control): Promise<WorkspaceMembershipEntity>;
}
export { WorkspaceMembershipEntity };
