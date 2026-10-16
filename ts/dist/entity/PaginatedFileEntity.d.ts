import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PaginatedFile, PaginatedFileLoadMatch } from '../BitbucketSdkTypes';
declare class PaginatedFileEntity extends BitbucketSdkEntityBase<PaginatedFile> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PaginatedFileEntity): PaginatedFileEntity;
    load(this: any, reqmatch?: PaginatedFileLoadMatch, ctrl?: Control): Promise<PaginatedFileEntity>;
}
export { PaginatedFileEntity };
