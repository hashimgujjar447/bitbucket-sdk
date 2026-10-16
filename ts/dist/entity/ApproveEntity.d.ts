import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { Approve, ApproveCreateData } from '../BitbucketSdkTypes';
declare class ApproveEntity extends BitbucketSdkEntityBase<Approve> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: ApproveEntity): ApproveEntity;
    create(this: any, reqdata?: ApproveCreateData, ctrl?: Control): Promise<ApproveEntity>;
}
export { ApproveEntity };
