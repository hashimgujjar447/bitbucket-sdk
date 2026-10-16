"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('WebhookSubscriptionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BITBUCKET_SDK_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BitbucketSdkSDK.test();
        const ent = testsdk.WebhookSubscription();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.WebhookSubscription().create({ "workspace_id": 1, "subject": "x", "type": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'webhook_subscription.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "active": { "a": true, "h": "Active", "n": "active", "r": false, "sh": "Whether or not the webhook subscription is enabled.", "t": "`$BOOLEAN`", "key$": "active", "index$": 0 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": false, "ro": true, "sh": "The timestamp when the webhook subscription was created.", "t": "`$STRING`", "key$": "created_at", "index$": 1 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "sh": "A user-defined description of the webhook.", "t": "`$STRING`", "key$": "description", "index$": 2 }, "events": { "a": true, "h": "Events", "n": "events", "r": false, "sh": "The events this webhook is subscribed to.", "t": "`$ARRAY`", "key$": "events", "index$": 3 }, "links": { "a": true, "h": "Links", "n": "links", "r": false, "sh": "A link to a resource related to this object.", "t": "`$OBJECT`", "key$": "links", "index$": 4 }, "secret": { "a": true, "h": "Secret", "n": "secret", "r": false, "sh": "The secret to associate with the hook.", "t": "`$STRING`", "key$": "secret", "index$": 5 }, "secret_set": { "a": true, "h": "Secret Set", "n": "secret_set", "r": false, "ro": true, "sh": "Indicates whether or not the hook has an associated secret.", "t": "`$BOOLEAN`", "key$": "secret_set", "index$": 6 }, "subject": { "a": true, "h": "Subject", "n": "subject", "r": true, "ro": true, "sh": "Base type for most resource objects.", "t": "`$OBJECT`", "key$": "subject", "index$": 7 }, "subject_type": { "a": true, "h": "Subject Type", "n": "subject_type", "r": false, "ro": true, "sh": "The type of entity.", "t": "`$STRING`", "key$": "subject_type", "index$": 8 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "t": "`$STRING`", "key$": "type", "index$": 9 }, "url": { "a": true, "fo": "uri", "h": "Url", "n": "url", "r": false, "sh": "The URL events get delivered to.", "t": "`$STRING`", "key$": "url", "index$": 10 }, "uuid": { "a": true, "h": "Uuid", "n": "uuid", "r": false, "ro": true, "sh": "The webhook's id.", "t": "`$STRING`", "key$": "uuid", "index$": 11 } }, "name": "webhook_subscription", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /repositories/{workspace}/{repo_slug}/hooks", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "repo_slug", "or": "repo_slug", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "workspace", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/repositories/{workspace}/{repo_slug}/hooks", "q": { "exist": ["repo_slug", "workspace"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "repositories" }, { "var": "workspace" }, { "var": "repo_slug" }, { "lit": "hooks" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /workspaces/{workspace}/hooks", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "workspace_id", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/workspaces/{workspace}/hooks", "q": { "exist": ["workspace_id"] }, "r": { "param": { "workspace": "workspace_id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "workspaces" }, { "var": "workspace_id" }, { "lit": "hooks" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /repositories/{workspace}/{repo_slug}/hooks/{uid}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "repo_slug", "or": "repo_slug", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "uid", "or": "uid", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "workspace", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/repositories/{workspace}/{repo_slug}/hooks/{uid}", "q": { "exist": ["repo_slug", "uid", "workspace"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "repositories" }, { "var": "workspace" }, { "var": "repo_slug" }, { "lit": "hooks" }, { "var": "uid" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /workspaces/{workspace}/hooks/{uid}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "uid", "or": "uid", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "workspace_id", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/workspaces/{workspace}/hooks/{uid}", "q": { "exist": ["uid", "workspace_id"] }, "r": { "param": { "workspace": "workspace_id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "workspaces" }, { "var": "workspace_id" }, { "lit": "hooks" }, { "var": "uid" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /repositories/{workspace}/{repo_slug}/hooks/{uid}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "repo_slug", "or": "repo_slug", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "uid", "or": "uid", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "workspace", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "PUT", "o": "/repositories/{workspace}/{repo_slug}/hooks/{uid}", "q": { "exist": ["repo_slug", "uid", "workspace"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "repositories" }, { "var": "workspace" }, { "var": "repo_slug" }, { "lit": "hooks" }, { "var": "uid" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "PUT /workspaces/{workspace}/hooks/{uid}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "uid", "or": "uid", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "workspace_id", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PUT", "o": "/workspaces/{workspace}/hooks/{uid}", "q": { "exist": ["uid", "workspace_id"] }, "r": { "param": { "workspace": "workspace_id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "workspaces" }, { "var": "workspace_id" }, { "lit": "hooks" }, { "var": "uid" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.repository"], ["$.main.kit.entity.workspace"], ["$.main.kit.entity.repository"], ["$.main.kit.entity.workspace"]] }, "key$": "webhook_subscription", "name__orig": "webhook_subscription", "Name": "WebhookSubscription", "name_": "webhook_subscription", "name-": "webhook-subscription", "NAME": "WEBHOOK_SUBSCRIPTION", "index$": 108 }, { "active": true, "entity": "webhook_subscription", "key$": "BasicWebhookSubscriptionFlow", "kind": "basic", "name": "BasicWebhookSubscriptionFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "webhook_subscription_ref01" }, "m": { "repo_slug": "repo_slug01", "workspace": "workspace01", "workspace_id": "workspace01" }, "o": "create", "s": [], "v": [] }, { "a": false, "d": { "workspace_id": "workspace01" }, "i": { "ref": "webhook_subscription_ref01", "srcdatavar": "webhook_subscription_ref01_data", "suffix": "_up0", "textfield": "description" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-webhook_subscription_ref01" } }], "v": [], "unreachable": true }, { "a": false, "d": {}, "i": { "ref": "webhook_subscription_ref01", "srcdatavar": "webhook_subscription_ref01_data", "suffix": "_dt0" }, "m": { "id": "webhook_subscription01", "workspace_id": "workspace01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-webhook_subscription_ref01" } }], "unreachable": true }] }, 'WebhookSubscription', { "POST /repositories/{workspace}/{repo_slug}/hooks": { "protocol": "http", "parameters": [{ "name": "workspace", "description": "This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.", "required": true, "in": "path", "type": "string", "index$": 0 }, { "name": "repo_slug", "description": "This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`.", "required": true, "in": "path", "type": "string", "index$": 1 }] }, "POST /workspaces/{workspace}/hooks": { "protocol": "http", "parameters": [{ "name": "workspace", "description": "This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.", "required": true, "in": "path", "type": "string", "index$": 0 }] }, "GET /repositories/{workspace}/{repo_slug}/hooks/{uid}": { "protocol": "http", "parameters": [{ "name": "workspace", "description": "This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.", "required": true, "in": "path", "type": "string", "index$": 0 }, { "name": "repo_slug", "description": "This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`.", "required": true, "in": "path", "type": "string", "index$": 1 }, { "name": "uid", "description": "The webhook's id.", "required": true, "in": "path", "type": "string", "index$": 2 }] }, "GET /workspaces/{workspace}/hooks/{uid}": { "protocol": "http", "parameters": [{ "name": "workspace", "description": "This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.", "required": true, "in": "path", "type": "string", "index$": 0 }, { "name": "uid", "description": "The webhook's id.", "required": true, "in": "path", "type": "string", "index$": 1 }] }, "PUT /repositories/{workspace}/{repo_slug}/hooks/{uid}": { "protocol": "http", "parameters": [{ "name": "workspace", "description": "This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.", "required": true, "in": "path", "type": "string", "index$": 0 }, { "name": "repo_slug", "description": "This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`.", "required": true, "in": "path", "type": "string", "index$": 1 }, { "name": "uid", "description": "The webhook's id.", "required": true, "in": "path", "type": "string", "index$": 2 }] }, "PUT /workspaces/{workspace}/hooks/{uid}": { "protocol": "http", "parameters": [{ "name": "workspace", "description": "This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.", "required": true, "in": "path", "type": "string", "index$": 0 }, { "name": "uid", "description": "The webhook's id.", "required": true, "in": "path", "type": "string", "index$": 1 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const webhook_subscription_ref01_ent = client.WebhookSubscription();
        let webhook_subscription_ref01_data = setup.data.new.webhook_subscription['webhook_subscription_ref01'];
        webhook_subscription_ref01_data['repo_slug'] = setup.idmap['repo_slug01'];
        webhook_subscription_ref01_data['workspace'] = setup.idmap['workspace01'];
        webhook_subscription_ref01_data['workspace_id'] = setup.idmap['workspace01'];
        webhook_subscription_ref01_data = (await webhook_subscription_ref01_ent.create(webhook_subscription_ref01_data)).data();
        (0, node_assert_1.default)(null != webhook_subscription_ref01_data);
    });
});
// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true;
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/webhook_subscription/WebhookSubscriptionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BitbucketSdkSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['webhook_subscription01', 'webhook_subscription02', 'webhook_subscription03', 'repository01', 'repository02', 'repository03', 'workspace01', 'workspace02', 'workspace03', 'repo_slug01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BITBUCKET_SDK_TEST_WEBHOOK_SUBSCRIPTION_ENTID': idmap,
        'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
        'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
        'BITBUCKET_SDK_APIKEY': '',
    });
    idmap = env['BITBUCKET_SDK_TEST_WEBHOOK_SUBSCRIPTION_ENTID'];
    const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BITBUCKET_SDK_TEST_WEBHOOK_SUBSCRIPTION_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.BitbucketSdkSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.BITBUCKET_SDK_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.BITBUCKET_SDK_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=WebhookSubscriptionEntity.test.js.map