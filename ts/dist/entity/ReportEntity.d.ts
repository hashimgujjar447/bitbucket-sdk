import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { Report, ReportLoadMatch, ReportUpdateData, ReportRemoveMatch } from '../BitbucketSdkTypes';
declare class ReportEntity extends BitbucketSdkEntityBase<Report> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: ReportEntity): ReportEntity;
    load(this: any, reqmatch?: ReportLoadMatch, ctrl?: Control): Promise<ReportEntity>;
    update(this: any, reqdata?: ReportUpdateData, ctrl?: Control): Promise<ReportEntity>;
    remove(this: any, reqmatch?: ReportRemoveMatch, ctrl?: Control): Promise<ReportEntity>;
}
export { ReportEntity };
