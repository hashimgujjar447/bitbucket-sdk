import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { SshAccountKey, SshAccountKeyLoadMatch, SshAccountKeyCreateData, SshAccountKeyUpdateData } from '../BitbucketSdkTypes';
declare class SshAccountKeyEntity extends BitbucketSdkEntityBase<SshAccountKey> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: SshAccountKeyEntity): SshAccountKeyEntity;
    load(this: any, reqmatch?: SshAccountKeyLoadMatch, ctrl?: Control): Promise<SshAccountKeyEntity>;
    create(this: any, reqdata?: SshAccountKeyCreateData, ctrl?: Control): Promise<SshAccountKeyEntity>;
    update(this: any, reqdata?: SshAccountKeyUpdateData, ctrl?: Control): Promise<SshAccountKeyEntity>;
}
export { SshAccountKeyEntity };
