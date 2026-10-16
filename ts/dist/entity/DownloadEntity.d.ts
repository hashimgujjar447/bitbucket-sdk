import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { Download, DownloadLoadMatch, DownloadCreateData, DownloadRemoveMatch } from '../BitbucketSdkTypes';
declare class DownloadEntity extends BitbucketSdkEntityBase<Download> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: DownloadEntity): DownloadEntity;
    load(this: any, reqmatch?: DownloadLoadMatch, ctrl?: Control): Promise<DownloadEntity>;
    create(this: any, reqdata?: DownloadCreateData, ctrl?: Control): Promise<DownloadEntity>;
    remove(this: any, reqmatch?: DownloadRemoveMatch, ctrl?: Control): Promise<DownloadEntity>;
}
export { DownloadEntity };
