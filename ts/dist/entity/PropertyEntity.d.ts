import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { Property, PropertyUpdateData, PropertyRemoveMatch } from '../BitbucketSdkTypes';
declare class PropertyEntity extends BitbucketSdkEntityBase<Property> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PropertyEntity): PropertyEntity;
    update(this: any, reqdata?: PropertyUpdateData, ctrl?: Control): Promise<PropertyEntity>;
    remove(this: any, reqmatch?: PropertyRemoveMatch, ctrl?: Control): Promise<PropertyEntity>;
}
export { PropertyEntity };
