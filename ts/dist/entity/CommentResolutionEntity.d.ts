import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { CommentResolution, CommentResolutionCreateData } from '../BitbucketSdkTypes';
declare class CommentResolutionEntity extends BitbucketSdkEntityBase<CommentResolution> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: CommentResolutionEntity): CommentResolutionEntity;
    create(this: any, reqdata?: CommentResolutionCreateData, ctrl?: Control): Promise<CommentResolutionEntity>;
}
export { CommentResolutionEntity };
