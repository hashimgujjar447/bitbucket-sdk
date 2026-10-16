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
(0, node_test_1.describe)('PaginatedHookEventEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BITBUCKET_SDK_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BitbucketSdkSDK.test();
        const ent = testsdk.PaginatedHookEvent();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.PaginatedHookEvent().load({ "id": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'paginated_hook_event.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 0 }, "next": { "a": true, "fo": "uri", "h": "Next", "n": "next", "r": false, "sh": "Link to the next page if it exists.", "t": "`$STRING`", "key$": "next", "index$": 1 }, "page": { "a": true, "h": "Page", "n": "page", "r": false, "sh": "Page number of the current results.", "t": "`$INTEGER`", "key$": "page", "index$": 2 }, "pagelen": { "a": true, "h": "Pagelen", "n": "pagelen", "r": false, "sh": "Current number of objects on the existing page.", "t": "`$INTEGER`", "key$": "pagelen", "index$": 3 }, "previous": { "a": true, "fo": "uri", "h": "Previous", "n": "previous", "r": false, "sh": "Link to previous page if it exists.", "t": "`$STRING`", "key$": "previous", "index$": 4 }, "repository": { "a": true, "h": "Repository", "n": "repository", "r": false, "t": "`$OBJECT`", "key$": "repository", "index$": 5 }, "size": { "a": true, "h": "Size", "n": "size", "r": false, "sh": "Total number of objects in the response.", "t": "`$INTEGER`", "key$": "size", "index$": 6 }, "values": { "a": true, "h": "Values", "n": "values", "r": false, "t": "`$ARRAY`", "key$": "values", "index$": 7 }, "workspace": { "a": true, "h": "Workspace", "n": "workspace", "r": false, "t": "`$OBJECT`", "key$": "workspace", "index$": 8 } }, "id": { "field": "id", "name": "id" }, "name": "paginated_hook_event", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /hook_events/{subject_type}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "subject_type", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/hook_events/{subject_type}", "q": { "exist": ["id"] }, "r": { "param": { "subject_type": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "hook_events" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /hook_events", "source": "swagger2", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/hook_events", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "hook_events" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "paginated_hook_event", "name__orig": "paginated_hook_event", "Name": "PaginatedHookEvent", "name_": "paginated_hook_event", "name-": "paginated-hook-event", "NAME": "PAGINATED_HOOK_EVENT", "index$": 37 }, { "active": true, "entity": "paginated_hook_event", "key$": "BasicPaginatedHookEventFlow", "kind": "basic", "name": "BasicPaginatedHookEventFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "paginated_hook_event_ref01", "srcdatavar": "paginated_hook_event_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-paginated_hook_event_ref01" } }] }] }, 'PaginatedHookEvent', { "GET /hook_events/{subject_type}": { "protocol": "http", "parameters": [{ "name": "subject_type", "description": "A resource or subject type.", "required": true, "in": "path", "type": "string", "enum": ["repository", "workspace"], "index$": 0 }] }, "GET /hook_events": { "protocol": "http", "parameters": [] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let paginated_hook_event_ref01_data = Object.values(setup.data.existing.paginated_hook_event)[0];
        // LOAD
        const paginated_hook_event_ref01_ent = client.PaginatedHookEvent();
        const paginated_hook_event_ref01_match_dt0 = {};
        paginated_hook_event_ref01_match_dt0.id = paginated_hook_event_ref01_data.id;
        const paginated_hook_event_ref01_data_dt0 = (await paginated_hook_event_ref01_ent.load(paginated_hook_event_ref01_match_dt0)).data();
        (0, node_assert_1.default)(paginated_hook_event_ref01_data_dt0.id === paginated_hook_event_ref01_data.id);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/paginated_hook_event/PaginatedHookEventTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BitbucketSdkSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['paginated_hook_event01', 'paginated_hook_event02', 'paginated_hook_event03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BITBUCKET_SDK_TEST_PAGINATED_HOOK_EVENT_ENTID': idmap,
        'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
        'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
        'BITBUCKET_SDK_APIKEY': '',
    });
    idmap = env['BITBUCKET_SDK_TEST_PAGINATED_HOOK_EVENT_ENTID'];
    const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BITBUCKET_SDK_TEST_PAGINATED_HOOK_EVENT_ENTID'];
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
//# sourceMappingURL=PaginatedHookEventEntity.test.js.map