import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { ApplicationProperty, ApplicationPropertyLoadMatch } from '../BitbucketSdkTypes';
declare class ApplicationPropertyEntity extends BitbucketSdkEntityBase<ApplicationProperty> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: ApplicationPropertyEntity): ApplicationPropertyEntity;
    load(this: any, reqmatch?: ApplicationPropertyLoadMatch, ctrl?: Control): Promise<ApplicationPropertyEntity>;
}
export { ApplicationPropertyEntity };
