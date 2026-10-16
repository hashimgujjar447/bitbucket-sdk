import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { Pullrequest, PullrequestLoadMatch, PullrequestCreateData, PullrequestUpdateData, PullrequestRemoveMatch } from '../BitbucketSdkTypes';
declare class PullrequestEntity extends BitbucketSdkEntityBase<Pullrequest> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PullrequestEntity): PullrequestEntity;
    load(this: any, reqmatch?: PullrequestLoadMatch, ctrl?: Control): Promise<PullrequestEntity>;
    create(this: any, reqdata?: PullrequestCreateData, ctrl?: Control): Promise<PullrequestEntity>;
    update(this: any, reqdata?: PullrequestUpdateData, ctrl?: Control): Promise<PullrequestEntity>;
    remove(this: any, reqmatch?: PullrequestRemoveMatch, ctrl?: Control): Promise<PullrequestEntity>;
}
export { PullrequestEntity };
