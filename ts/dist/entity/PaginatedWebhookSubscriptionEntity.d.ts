import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { PaginatedWebhookSubscription, PaginatedWebhookSubscriptionListMatch } from '../BitbucketSdkTypes';
declare class PaginatedWebhookSubscriptionEntity extends BitbucketSdkEntityBase<PaginatedWebhookSubscription> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: PaginatedWebhookSubscriptionEntity): PaginatedWebhookSubscriptionEntity;
    list(this: any, reqmatch?: PaginatedWebhookSubscriptionListMatch, ctrl?: Control): Promise<PaginatedWebhookSubscriptionEntity[]>;
}
export { PaginatedWebhookSubscriptionEntity };
