import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { ReportAnnotation, ReportAnnotationLoadMatch, ReportAnnotationCreateData, ReportAnnotationUpdateData } from '../BitbucketSdkTypes';
declare class ReportAnnotationEntity extends BitbucketSdkEntityBase<ReportAnnotation> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: ReportAnnotationEntity): ReportAnnotationEntity;
    load(this: any, reqmatch?: ReportAnnotationLoadMatch, ctrl?: Control): Promise<ReportAnnotationEntity>;
    create(this: any, reqdata?: ReportAnnotationCreateData, ctrl?: Control): Promise<ReportAnnotationEntity>;
    update(this: any, reqdata?: ReportAnnotationUpdateData, ctrl?: Control): Promise<ReportAnnotationEntity>;
}
export { ReportAnnotationEntity };
