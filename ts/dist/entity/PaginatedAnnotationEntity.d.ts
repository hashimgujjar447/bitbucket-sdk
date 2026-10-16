import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PaginatedAnnotation, PaginatedAnnotationListMatch } from '../BitbucketSdkTypes';
declare class PaginatedAnnotationEntity extends BitbucketSdkEntityBase<PaginatedAnnotation> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PaginatedAnnotationEntity): PaginatedAnnotationEntity;
    list(this: any, reqmatch?: PaginatedAnnotationListMatch, ctrl?: Control): Promise<PaginatedAnnotationEntity[]>;
}
export { PaginatedAnnotationEntity };
