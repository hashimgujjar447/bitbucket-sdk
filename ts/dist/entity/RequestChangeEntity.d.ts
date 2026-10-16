import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { RequestChange, RequestChangeCreateData } from '../BitbucketSdkTypes';
declare class RequestChangeEntity extends BitbucketSdkEntityBase<RequestChange> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: RequestChangeEntity): RequestChangeEntity;
    create(this: any, reqdata?: RequestChangeCreateData, ctrl?: Control): Promise<RequestChangeEntity>;
}
export { RequestChangeEntity };
