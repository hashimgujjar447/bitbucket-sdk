import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { Commit, CommitLoadMatch, CommitListMatch, CommitCreateData, CommitUpdateData, CommitRemoveMatch } from '../BitbucketSdkTypes';
declare class CommitEntity extends BitbucketSdkEntityBase<Commit> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: CommitEntity): CommitEntity;
    load(this: any, reqmatch?: CommitLoadMatch, ctrl?: Control): Promise<CommitEntity>;
    list(this: any, reqmatch?: CommitListMatch, ctrl?: Control): Promise<CommitEntity[]>;
    create(this: any, reqdata?: CommitCreateData, ctrl?: Control): Promise<CommitEntity>;
    update(this: any, reqdata?: CommitUpdateData, ctrl?: Control): Promise<CommitEntity>;
    remove(this: any, reqmatch?: CommitRemoveMatch, ctrl?: Control): Promise<CommitEntity>;
}
export { CommitEntity };
