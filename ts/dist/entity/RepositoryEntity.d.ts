import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { Repository, RepositoryLoadMatch, RepositoryCreateData, RepositoryUpdateData, RepositoryRemoveMatch } from '../BitbucketSdkTypes';
declare class RepositoryEntity extends BitbucketSdkEntityBase<Repository> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: RepositoryEntity): RepositoryEntity;
    load(this: any, reqmatch?: RepositoryLoadMatch, ctrl?: Control): Promise<RepositoryEntity>;
    create(this: any, reqdata?: RepositoryCreateData, ctrl?: Control): Promise<RepositoryEntity>;
    update(this: any, reqdata?: RepositoryUpdateData, ctrl?: Control): Promise<RepositoryEntity>;
    remove(this: any, reqmatch?: RepositoryRemoveMatch, ctrl?: Control): Promise<RepositoryEntity>;
}
export { RepositoryEntity };
