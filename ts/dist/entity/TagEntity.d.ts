import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { Tag, TagLoadMatch, TagCreateData } from '../BitbucketSdkTypes';
declare class TagEntity extends BitbucketSdkEntityBase<Tag> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: TagEntity): TagEntity;
    load(this: any, reqmatch?: TagLoadMatch, ctrl?: Control): Promise<TagEntity>;
    create(this: any, reqdata?: TagCreateData, ctrl?: Control): Promise<TagEntity>;
}
export { TagEntity };
