import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { DeploymentVariable, DeploymentVariableCreateData, DeploymentVariableUpdateData } from '../BitbucketSdkTypes';
declare class DeploymentVariableEntity extends BitbucketSdkEntityBase<DeploymentVariable> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: DeploymentVariableEntity): DeploymentVariableEntity;
    create(this: any, reqdata?: DeploymentVariableCreateData, ctrl?: Control): Promise<DeploymentVariableEntity>;
    update(this: any, reqdata?: DeploymentVariableUpdateData, ctrl?: Control): Promise<DeploymentVariableEntity>;
}
export { DeploymentVariableEntity };
