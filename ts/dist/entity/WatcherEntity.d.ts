import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { Watcher, WatcherListMatch } from '../BitbucketSdkTypes';
declare class WatcherEntity extends BitbucketSdkEntityBase<Watcher> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: WatcherEntity): WatcherEntity;
    list(this: any, reqmatch?: WatcherListMatch, ctrl?: Control): Promise<WatcherEntity[]>;
}
export { WatcherEntity };
