import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { Commitstatus, CommitstatusLoadMatch, CommitstatusCreateData, CommitstatusUpdateData } from '../BitbucketSdkTypes';
declare class CommitstatusEntity extends BitbucketSdkEntityBase<Commitstatus> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: CommitstatusEntity): CommitstatusEntity;
    load(this: any, reqmatch?: CommitstatusLoadMatch, ctrl?: Control): Promise<CommitstatusEntity>;
    create(this: any, reqdata?: CommitstatusCreateData, ctrl?: Control): Promise<CommitstatusEntity>;
    update(this: any, reqdata?: CommitstatusUpdateData, ctrl?: Control): Promise<CommitstatusEntity>;
}
export { CommitstatusEntity };
