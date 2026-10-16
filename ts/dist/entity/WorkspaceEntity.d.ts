import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { Workspace, WorkspaceLoadMatch, WorkspaceRemoveMatch } from '../BitbucketSdkTypes';
declare class WorkspaceEntity extends BitbucketSdkEntityBase<Workspace> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: WorkspaceEntity): WorkspaceEntity;
    load(this: any, reqmatch?: WorkspaceLoadMatch, ctrl?: Control): Promise<WorkspaceEntity>;
    remove(this: any, reqmatch?: WorkspaceRemoveMatch, ctrl?: Control): Promise<WorkspaceEntity>;
}
export { WorkspaceEntity };
