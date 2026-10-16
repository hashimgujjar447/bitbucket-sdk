import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PipelineSshKeyPair, PipelineSshKeyPairLoadMatch, PipelineSshKeyPairUpdateData } from '../BitbucketSdkTypes';
declare class PipelineSshKeyPairEntity extends BitbucketSdkEntityBase<PipelineSshKeyPair> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PipelineSshKeyPairEntity): PipelineSshKeyPairEntity;
    load(this: any, reqmatch?: PipelineSshKeyPairLoadMatch, ctrl?: Control): Promise<PipelineSshKeyPairEntity>;
    update(this: any, reqdata?: PipelineSshKeyPairUpdateData, ctrl?: Control): Promise<PipelineSshKeyPairEntity>;
}
export { PipelineSshKeyPairEntity };
