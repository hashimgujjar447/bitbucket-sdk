import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { Deployment, DeploymentLoadMatch, DeploymentCreateData, DeploymentRemoveMatch } from '../BitbucketSdkTypes';
declare class DeploymentEntity extends BitbucketSdkEntityBase<Deployment> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: DeploymentEntity): DeploymentEntity;
    load(this: any, reqmatch?: DeploymentLoadMatch, ctrl?: Control): Promise<DeploymentEntity>;
    create(this: any, reqdata?: DeploymentCreateData, ctrl?: Control): Promise<DeploymentEntity>;
    remove(this: any, reqmatch?: DeploymentRemoveMatch, ctrl?: Control): Promise<DeploymentEntity>;
}
export { DeploymentEntity };
