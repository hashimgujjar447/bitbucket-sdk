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
(0, node_test_1.describe)('CommitstatusEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BITBUCKET_SDK_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BitbucketSdkSDK.test();
        const ent = testsdk.Commitstatus();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.Commitstatus().load({ "commit_id": 1, "key": "x", "repo_slug": "x", "workspace": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE;
        for (const op of ['create', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'commitstatus.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "created_on": { "a": true, "fo": "date-time", "h": "Created On", "n": "created_on", "r": false, "t": "`$STRING`", "key$": "created_on", "index$": 0 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "sh": "A description of the build (e.g.", "t": "`$STRING`", "key$": "description", "index$": 1 }, "key": { "a": true, "h": "Key", "n": "key", "r": true, "sh": "An identifier for the status that's unique to its type (current \"build\" is the only supported type) and the vendor, e.g.", "t": "`$STRING`", "key$": "key", "index$": 2 }, "links": { "a": true, "h": "Links", "n": "links", "r": false, "t": "`$OBJECT`", "key$": "links", "index$": 3 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "sh": "An identifier for the build itself, e.g.", "t": "`$STRING`", "key$": "name", "index$": 4 }, "refname": { "a": true, "h": "Refname", "n": "refname", "r": false, "sh": "The name of the ref that pointed to this commit at the time the status object was created.", "t": "`$STRING`", "key$": "refname", "index$": 5 }, "state": { "a": true, "h": "State", "n": "state", "r": true, "sh": "Provides some indication of the status of this commit", "t": "`$STRING`", "key$": "state", "index$": 6 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "t": "`$STRING`", "key$": "type", "index$": 7 }, "updated_on": { "a": true, "fo": "date-time", "h": "Updated On", "n": "updated_on", "r": false, "t": "`$STRING`", "key$": "updated_on", "index$": 8 }, "url": { "a": true, "h": "Url", "n": "url", "r": false, "sh": "A URL linking back to the vendor or build system, for providing more information about whatever process produced this status.", "t": "`$STRING`", "key$": "url", "index$": 9 } }, "name": "commitstatus", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["created_on", "description", "key", "links", "name", "refname", "state", "type", "updated_on", "url"], "co": { "id": "POST /repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "commit_id", "or": "commit", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "repo_slug", "or": "repo_slug", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "workspace", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "POST", "o": "/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build", "q": { "exist": ["commit_id", "repo_slug", "workspace"] }, "r": { "param": { "commit": "commit_id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "repositories" }, { "var": "workspace" }, { "var": "repo_slug" }, { "lit": "commit" }, { "var": "commit_id" }, { "lit": "statuses" }, { "lit": "build" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build/{key}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "commit_id", "or": "commit", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "key", "or": "key", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "repo_slug", "or": "repo_slug", "r": true, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "param", "n": "workspace", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build/{key}", "q": { "exist": ["commit_id", "key", "repo_slug", "workspace"] }, "r": { "param": { "commit": "commit_id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "repositories" }, { "var": "workspace" }, { "var": "repo_slug" }, { "lit": "commit" }, { "var": "commit_id" }, { "lit": "statuses" }, { "lit": "build" }, { "var": "key" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "bf": ["created_on", "description", "key", "links", "name", "refname", "state", "type", "updated_on", "url"], "co": { "id": "PUT /repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build/{key}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "commit_id", "or": "commit", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "key", "or": "key", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "repo_slug", "or": "repo_slug", "r": true, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "param", "n": "workspace", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 3 }] }, "k": "http", "m": "PUT", "o": "/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build/{key}", "q": { "exist": ["commit_id", "key", "repo_slug", "workspace"] }, "r": { "param": { "commit": "commit_id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "repositories" }, { "var": "workspace" }, { "var": "repo_slug" }, { "lit": "commit" }, { "var": "commit_id" }, { "lit": "statuses" }, { "lit": "build" }, { "var": "key" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.repository", "$.main.kit.entity.commit"], ["$.main.kit.entity.repository", "$.main.kit.entity.commit"]] }, "key$": "commitstatus", "name__orig": "commitstatus", "Name": "Commitstatus", "name_": "commitstatus", "name-": "commitstatus", "NAME": "COMMITSTATUS", "index$": 9 }, { "active": true, "entity": "commitstatus", "key$": "BasicCommitstatusFlow", "kind": "basic", "name": "BasicCommitstatusFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "commitstatus_ref01" }, "m": { "commit_id": "commit01", "repo_slug": "repo_slug01", "workspace": "workspace01" }, "o": "create", "s": [], "v": [] }, { "a": true, "d": { "commit_id": "commit01", "repo_slug": "repo_slug01", "workspace": "workspace01" }, "i": { "ref": "commitstatus_ref01", "srcdatavar": "commitstatus_ref01_data", "suffix": "_up0", "textfield": "created_on" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-commitstatus_ref01" } }], "v": [] }, { "a": true, "d": {}, "i": { "ref": "commitstatus_ref01", "srcdatavar": "commitstatus_ref01_data", "suffix": "_dt0" }, "m": { "commit_id": "commit01", "id": "commitstatus01", "repo_slug": "repo_slug01", "workspace": "workspace01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-commitstatus_ref01" } }] }] }, 'Commitstatus', { "POST /repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build": { "protocol": "http", "parameters": [{ "name": "commit", "in": "path", "description": "The commit's SHA1.", "required": true, "type": "string", "index$": 0 }, { "name": "repo_slug", "in": "path", "description": "This can either be the repository slug or the UUID of the repository,\nsurrounded by curly-braces, for example: `{repository UUID}`.\n", "required": true, "type": "string", "index$": 1 }, { "name": "workspace", "in": "path", "description": "This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n", "required": true, "type": "string", "index$": 2 }, { "name": "_body", "in": "body", "description": "The new commit status object.", "required": false, "schema": { "allOf": [{ "type": "object", "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`.", "properties": { "type": { "type": "string", "key$": "type" } }, "required": ["type"], "additionalProperties": true, "discriminator": "type", "x-ref": "#/definitions/object" }, { "type": "object", "title": "Commit Status", "description": "A commit status object.", "properties": { "links": { "type": "object", "properties": { "self": { "type": "object", "title": "Link", "description": "A link to a resource related to this object.", "properties": {}, "additionalProperties": false }, "commit": { "type": "object", "title": "Link", "description": "A link to a resource related to this object.", "properties": {}, "additionalProperties": false } }, "additionalProperties": false, "key$": "links" }, "key": { "type": "string", "description": "An identifier for the status that's unique to\n        its type (current \"build\" is the only supported type) and the vendor,\n        e.g. BB-DEPLOY", "key$": "key" }, "refname": { "type": "string", "description": "\nThe name of the ref that pointed to this commit at the time the status\nobject was created. Note that this the ref may since have moved off of\nthe commit. This optional field can be useful for build systems whose\nbuild triggers and configuration are branch-dependent (e.g. a Pipeline\nbuild).\nIt is legitimate for this field to not be set, or even apply (e.g. a\nstatic linting job).", "key$": "refname" }, "url": { "type": "string", "description": "A URL linking back to the vendor or build system, for providing more information about whatever process produced this status. Accepts context variables `repository` and `commit` that Bitbucket will evaluate at runtime whenever at runtime. For example, one could use https://foo.com/builds/{repository.full_name} which Bitbucket will turn into https://foo.com/builds/foo/bar at render time.", "key$": "url" }, "state": { "type": "string", "description": "Provides some indication of the status of this commit", "enum": ["FAILED", "INPROGRESS", "STOPPED", "SUCCESSFUL"], "key$": "state" }, "name": { "type": "string", "description": "An identifier for the build itself, e.g. BB-DEPLOY-1", "key$": "name" }, "description": { "type": "string", "description": "A description of the build (e.g. \"Unit tests in Bamboo\")", "key$": "description" }, "created_on": { "type": "string", "format": "date-time", "key$": "created_on" }, "updated_on": { "type": "string", "format": "date-time", "key$": "updated_on" } }, "required": ["key", "state"], "additionalProperties": true }], "x-ref": "#/definitions/commitstatus", "index$": 1 }, "index$": 3 }] }, "GET /repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build/{key}": { "protocol": "http", "parameters": [{ "name": "commit", "in": "path", "description": "The commit's SHA1.", "required": true, "type": "string", "index$": 0 }, { "name": "key", "in": "path", "description": "The build status' unique key", "required": true, "type": "string", "index$": 1 }, { "name": "repo_slug", "in": "path", "description": "This can either be the repository slug or the UUID of the repository,\nsurrounded by curly-braces, for example: `{repository UUID}`.\n", "required": true, "type": "string", "index$": 2 }, { "name": "workspace", "in": "path", "description": "This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n", "required": true, "type": "string", "index$": 3 }] }, "PUT /repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build/{key}": { "protocol": "http", "parameters": [{ "name": "commit", "in": "path", "description": "The commit's SHA1.", "required": true, "type": "string", "index$": 0 }, { "name": "key", "in": "path", "description": "The build status' unique key", "required": true, "type": "string", "index$": 1 }, { "name": "repo_slug", "in": "path", "description": "This can either be the repository slug or the UUID of the repository,\nsurrounded by curly-braces, for example: `{repository UUID}`.\n", "required": true, "type": "string", "index$": 2 }, { "name": "workspace", "in": "path", "description": "This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n", "required": true, "type": "string", "index$": 3 }, { "name": "_body", "in": "body", "description": "The updated build status object", "required": false, "schema": { "allOf": [{ "type": "object", "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`.", "properties": { "type": { "type": "string", "key$": "type" } }, "required": ["type"], "additionalProperties": true, "discriminator": "type", "x-ref": "#/definitions/object" }, { "type": "object", "title": "Commit Status", "description": "A commit status object.", "properties": { "links": { "type": "object", "properties": { "self": { "type": "object", "title": "Link", "description": "A link to a resource related to this object.", "properties": {}, "additionalProperties": false }, "commit": { "type": "object", "title": "Link", "description": "A link to a resource related to this object.", "properties": {}, "additionalProperties": false } }, "additionalProperties": false, "key$": "links" }, "key": { "type": "string", "description": "An identifier for the status that's unique to\n        its type (current \"build\" is the only supported type) and the vendor,\n        e.g. BB-DEPLOY", "key$": "key" }, "refname": { "type": "string", "description": "\nThe name of the ref that pointed to this commit at the time the status\nobject was created. Note that this the ref may since have moved off of\nthe commit. This optional field can be useful for build systems whose\nbuild triggers and configuration are branch-dependent (e.g. a Pipeline\nbuild).\nIt is legitimate for this field to not be set, or even apply (e.g. a\nstatic linting job).", "key$": "refname" }, "url": { "type": "string", "description": "A URL linking back to the vendor or build system, for providing more information about whatever process produced this status. Accepts context variables `repository` and `commit` that Bitbucket will evaluate at runtime whenever at runtime. For example, one could use https://foo.com/builds/{repository.full_name} which Bitbucket will turn into https://foo.com/builds/foo/bar at render time.", "key$": "url" }, "state": { "type": "string", "description": "Provides some indication of the status of this commit", "enum": ["FAILED", "INPROGRESS", "STOPPED", "SUCCESSFUL"], "key$": "state" }, "name": { "type": "string", "description": "An identifier for the build itself, e.g. BB-DEPLOY-1", "key$": "name" }, "description": { "type": "string", "description": "A description of the build (e.g. \"Unit tests in Bamboo\")", "key$": "description" }, "created_on": { "type": "string", "format": "date-time", "key$": "created_on" }, "updated_on": { "type": "string", "format": "date-time", "key$": "updated_on" } }, "required": ["key", "state"], "additionalProperties": true }], "x-ref": "#/definitions/commitstatus", "index$": 1 }, "index$": 4 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const commitstatus_ref01_ent = client.Commitstatus();
        let commitstatus_ref01_data = setup.data.new.commitstatus['commitstatus_ref01'];
        commitstatus_ref01_data['commit_id'] = setup.idmap['commit01'];
        commitstatus_ref01_data['repo_slug'] = setup.idmap['repo_slug01'];
        commitstatus_ref01_data['workspace'] = setup.idmap['workspace01'];
        commitstatus_ref01_data = (await commitstatus_ref01_ent.create(commitstatus_ref01_data)).data();
        (0, node_assert_1.default)(null != commitstatus_ref01_data);
        // UPDATE
        const commitstatus_ref01_data_up0 = {};
        commitstatus_ref01_data_up0['commit_id'] = setup.idmap['commit_id'] ?? setup.idmap['commit01'];
        commitstatus_ref01_data_up0['repo_slug'] = setup.idmap['repo_slug'] ?? setup.idmap['repo_slug01'];
        commitstatus_ref01_data_up0['workspace'] = setup.idmap['workspace'] ?? setup.idmap['workspace01'];
        const commitstatus_ref01_markdef_up0 = { name: 'created_on', value: 'Mark01-commitstatus_ref01_' + setup.now };
        commitstatus_ref01_data_up0[commitstatus_ref01_markdef_up0.name] = commitstatus_ref01_markdef_up0.value;
        const commitstatus_ref01_resdata_up0 = (await commitstatus_ref01_ent.update(commitstatus_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != commitstatus_ref01_resdata_up0);
        (0, node_assert_1.default)(commitstatus_ref01_resdata_up0[commitstatus_ref01_markdef_up0.name] === commitstatus_ref01_markdef_up0.value);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/commitstatus/CommitstatusTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BitbucketSdkSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['commitstatus01', 'commitstatus02', 'commitstatus03', 'repository01', 'repository02', 'repository03', 'commit01', 'commit02', 'commit03', 'repo_slug01', 'workspace01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BITBUCKET_SDK_TEST_COMMITSTATUS_ENTID': idmap,
        'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
        'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
        'BITBUCKET_SDK_APIKEY': '',
    });
    idmap = env['BITBUCKET_SDK_TEST_COMMITSTATUS_ENTID'];
    const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BITBUCKET_SDK_TEST_COMMITSTATUS_ENTID'];
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
//# sourceMappingURL=CommitstatusEntity.test.js.map