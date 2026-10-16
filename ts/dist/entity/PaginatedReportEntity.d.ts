import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PaginatedReport, PaginatedReportListMatch } from '../BitbucketSdkTypes';
declare class PaginatedReportEntity extends BitbucketSdkEntityBase<PaginatedReport> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PaginatedReportEntity): PaginatedReportEntity;
    list(this: any, reqmatch?: PaginatedReportListMatch, ctrl?: Control): Promise<PaginatedReportEntity[]>;
}
export { PaginatedReportEntity };
