import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PaginatedDefaultReviewerAndType, PaginatedDefaultReviewerAndTypeListMatch } from '../BitbucketSdkTypes';
declare class PaginatedDefaultReviewerAndTypeEntity extends BitbucketSdkEntityBase<PaginatedDefaultReviewerAndType> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PaginatedDefaultReviewerAndTypeEntity): PaginatedDefaultReviewerAndTypeEntity;
    list(this: any, reqmatch?: PaginatedDefaultReviewerAndTypeListMatch, ctrl?: Control): Promise<PaginatedDefaultReviewerAndTypeEntity[]>;
}
export { PaginatedDefaultReviewerAndTypeEntity };
