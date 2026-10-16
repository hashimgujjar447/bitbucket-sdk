import { BitbucketSdkEntityBase } from '../BitbucketSdkEntityBase';
import type { BitbucketSdkSDK } from '../BitbucketSdkSDK';
import type { Control } from '../types';
import type { WebhookSubscription, WebhookSubscriptionLoadMatch, WebhookSubscriptionCreateData, WebhookSubscriptionUpdateData } from '../BitbucketSdkTypes';
declare class WebhookSubscriptionEntity extends BitbucketSdkEntityBase<WebhookSubscription> {
    constructor(client: BitbucketSdkSDK, entopts: any);
    make(this: WebhookSubscriptionEntity): WebhookSubscriptionEntity;
    load(this: any, reqmatch?: WebhookSubscriptionLoadMatch, ctrl?: Control): Promise<WebhookSubscriptionEntity>;
    create(this: any, reqdata?: WebhookSubscriptionCreateData, ctrl?: Control): Promise<WebhookSubscriptionEntity>;
    update(this: any, reqdata?: WebhookSubscriptionUpdateData, ctrl?: Control): Promise<WebhookSubscriptionEntity>;
}
export { WebhookSubscriptionEntity };
