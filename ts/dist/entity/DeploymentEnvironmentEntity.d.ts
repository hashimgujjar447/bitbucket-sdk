import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { DeploymentEnvironment, DeploymentEnvironmentLoadMatch, DeploymentEnvironmentCreateData } from '../BitbucketSdkTypes';
declare class DeploymentEnvironmentEntity extends BitbucketSdkEntityBase<DeploymentEnvironment> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: DeploymentEnvironmentEntity): DeploymentEnvironmentEntity;
    load(this: any, reqmatch?: DeploymentEnvironmentLoadMatch, ctrl?: Control): Promise<DeploymentEnvironmentEntity>;
    create(this: any, reqdata?: DeploymentEnvironmentCreateData, ctrl?: Control): Promise<DeploymentEnvironmentEntity>;
}
export { DeploymentEnvironmentEntity };
