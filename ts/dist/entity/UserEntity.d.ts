import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { User, UserLoadMatch, UserUpdateData } from '../BitbucketSdkTypes';
declare class UserEntity extends BitbucketSdkEntityBase<User> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: UserEntity): UserEntity;
    load(this: any, reqmatch?: UserLoadMatch, ctrl?: Control): Promise<UserEntity>;
    update(this: any, reqdata?: UserUpdateData, ctrl?: Control): Promise<UserEntity>;
}
export { UserEntity };
