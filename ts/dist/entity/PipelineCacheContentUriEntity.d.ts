import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PipelineCacheContentUri, PipelineCacheContentUriLoadMatch } from '../BitbucketSdkTypes';
declare class PipelineCacheContentUriEntity extends BitbucketSdkEntityBase<PipelineCacheContentUri> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PipelineCacheContentUriEntity): PipelineCacheContentUriEntity;
    load(this: any, reqmatch?: PipelineCacheContentUriLoadMatch, ctrl?: Control): Promise<PipelineCacheContentUriEntity>;
}
export { PipelineCacheContentUriEntity };
