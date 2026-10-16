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
(0, node_test_1.describe)('ProjectEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BITBUCKET_SDK_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BitbucketSdkSDK.test();
        const ent = testsdk.Project();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.Project().load({ "id": 1, "workspace_id": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE;
        for (const op of ['create', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'project.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "created_on": { "a": true, "fo": "date-time", "h": "Created On", "n": "created_on", "r": false, "t": "`$STRING`", "key$": "created_on", "index$": 0 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "t": "`$STRING`", "key$": "description", "index$": 1 }, "has_publicly_visible_repos": { "a": true, "h": "Has Publicly Visible Repos", "n": "has_publicly_visible_repos", "r": false, "sh": "Indicates whether the project contains publicly visible repositories.", "t": "`$BOOLEAN`", "key$": "has_publicly_visible_repos", "index$": 2 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 3 }, "is_private": { "a": true, "h": "Is Private", "n": "is_private", "r": false, "sh": "Indicates whether the project is publicly accessible, or whether it is private to the team and consequently only visible to team members.", "t": "`$BOOLEAN`", "key$": "is_private", "index$": 4 }, "key": { "a": true, "h": "Key", "n": "key", "r": false, "sh": "The project's key.", "t": "`$STRING`", "key$": "key", "index$": 5 }, "links": { "a": true, "h": "Links", "n": "links", "r": false, "t": "`$OBJECT`", "key$": "links", "index$": 6 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "sh": "The name of the project.", "t": "`$STRING`", "key$": "name", "index$": 7 }, "owner": { "a": true, "h": "Owner", "n": "owner", "r": false, "t": "`$ANY`", "key$": "owner", "index$": 8 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "t": "`$STRING`", "key$": "type", "index$": 9 }, "updated_on": { "a": true, "fo": "date-time", "h": "Updated On", "n": "updated_on", "r": false, "t": "`$STRING`", "key$": "updated_on", "index$": 10 }, "uuid": { "a": true, "h": "Uuid", "n": "uuid", "r": false, "sh": "The project's immutable id.", "t": "`$STRING`", "key$": "uuid", "index$": 11 } }, "id": { "field": "id", "name": "id" }, "name": "project", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["created_on", "description", "has_publicly_visible_repos", "is_private", "key", "links", "name", "owner", "type", "updated_on", "uuid"], "co": { "id": "POST /workspaces/{workspace}/projects", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "workspace_id", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/workspaces/{workspace}/projects", "q": { "exist": ["workspace_id"] }, "r": { "param": { "workspace": "workspace_id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "workspaces" }, { "var": "workspace_id" }, { "lit": "projects" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /workspaces/{workspace}/projects/{project_key}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "project_key", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "workspace_id", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/workspaces/{workspace}/projects/{project_key}", "q": { "exist": ["id", "workspace_id"] }, "r": { "param": { "project_key": "id", "workspace": "workspace_id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "workspaces" }, { "var": "workspace_id" }, { "lit": "projects" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /workspaces/{workspace}/projects/{project_key}/permissions-config/groups/{group_slug}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "group_slug", "or": "group_slug", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "project_key", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "workspace_id", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "DELETE", "o": "/workspaces/{workspace}/projects/{project_key}/permissions-config/groups/{group_slug}", "q": { "exist": ["group_slug", "project_id", "workspace_id"] }, "r": { "param": { "project_key": "project_id", "workspace": "workspace_id" } }, "s": [{ "lit": "workspaces" }, { "var": "workspace_id" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "permissions-config" }, { "lit": "groups" }, { "var": "group_slug" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "DELETE /workspaces/{workspace}/projects/{project_key}/default-reviewers/{selected_user}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "project_id", "or": "project_key", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "selected_user", "or": "selected_user", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "workspace_id", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "DELETE", "o": "/workspaces/{workspace}/projects/{project_key}/default-reviewers/{selected_user}", "q": { "exist": ["project_id", "selected_user", "workspace_id"] }, "r": { "param": { "project_key": "project_id", "workspace": "workspace_id" } }, "s": [{ "lit": "workspaces" }, { "var": "workspace_id" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "default-reviewers" }, { "var": "selected_user" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "DELETE /workspaces/{workspace}/projects/{project_key}/permissions-config/users/{selected_user_id}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "project_id", "or": "project_key", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "selected_user_id", "or": "selected_user_id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "workspace_id", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "DELETE", "o": "/workspaces/{workspace}/projects/{project_key}/permissions-config/users/{selected_user_id}", "q": { "exist": ["project_id", "selected_user_id", "workspace_id"] }, "r": { "param": { "project_key": "project_id", "workspace": "workspace_id" } }, "s": [{ "lit": "workspaces" }, { "var": "workspace_id" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "permissions-config" }, { "lit": "users" }, { "var": "selected_user_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }, { "a": true, "co": { "id": "DELETE /workspaces/{workspace}/projects/{project_key}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "project_key", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "workspace_id", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/workspaces/{workspace}/projects/{project_key}", "q": { "exist": ["id", "workspace_id"] }, "r": { "param": { "project_key": "id", "workspace": "workspace_id" } }, "s": [{ "lit": "workspaces" }, { "var": "workspace_id" }, { "lit": "projects" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 3 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "bf": ["created_on", "description", "has_publicly_visible_repos", "is_private", "key", "links", "name", "owner", "type", "updated_on", "uuid"], "co": { "id": "PUT /workspaces/{workspace}/projects/{project_key}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "project_key", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "workspace_id", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PUT", "o": "/workspaces/{workspace}/projects/{project_key}", "q": { "exist": ["id", "workspace_id"] }, "r": { "param": { "project_key": "id", "workspace": "workspace_id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "workspaces" }, { "var": "workspace_id" }, { "lit": "projects" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.workspace"], ["$.main.kit.entity.workspace", "$.main.kit.entity.default_reviewer"], ["$.main.kit.entity.workspace"], ["$.main.kit.entity.workspace", "$.main.kit.entity.user"]] }, "key$": "project", "name__orig": "project", "Name": "Project", "name_": "project", "name-": "project", "NAME": "PROJECT", "index$": 80 }, { "active": true, "entity": "project", "key$": "BasicProjectFlow", "kind": "basic", "name": "BasicProjectFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "project_ref01" }, "m": { "project_id": "project01", "workspace_id": "workspace01" }, "o": "create", "s": [], "v": [] }, { "a": true, "d": { "workspace_id": "workspace01" }, "i": { "ref": "project_ref01", "srcdatavar": "project_ref01_data", "suffix": "_up0", "textfield": "created_on" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-project_ref01" } }], "v": [] }, { "a": true, "d": {}, "i": { "ref": "project_ref01", "srcdatavar": "project_ref01_data", "suffix": "_dt0" }, "m": { "id": "project01", "workspace_id": "workspace01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-project_ref01" } }] }, { "a": true, "d": {}, "i": { "ref": "project_ref01", "suffix": "_rm0" }, "m": { "id": "project01", "workspace_id": "workspace01" }, "o": "remove", "s": [], "v": [] }] }, 'Project', { "POST /workspaces/{workspace}/projects": { "protocol": "http", "parameters": [{ "name": "workspace", "in": "path", "description": "This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n", "required": true, "type": "string", "index$": 0 }, { "name": "_body", "in": "body", "required": true, "schema": { "allOf": [{ "type": "object", "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`.", "properties": { "type": { "type": "string", "key$": "type" } }, "required": ["type"], "additionalProperties": true, "discriminator": "type", "x-ref": "#/definitions/object" }, { "type": "object", "title": "Project", "description": "A Bitbucket project.\n            Projects are used by teams to organize repositories.", "properties": { "links": { "type": "object", "properties": { "html": { "type": "object", "title": "Link", "description": "A link to a resource related to this object.", "properties": {}, "additionalProperties": false }, "avatar": { "type": "object", "title": "Link", "description": "A link to a resource related to this object.", "properties": {}, "additionalProperties": false } }, "additionalProperties": false, "key$": "links" }, "uuid": { "type": "string", "description": "The project's immutable id.", "key$": "uuid" }, "key": { "type": "string", "description": "The project's key.", "key$": "key" }, "owner": { "allOf": [{ "allOf": [], "x-ref": "#/definitions/account" }, { "type": "object", "title": "Team", "description": "A team object.", "properties": {}, "additionalProperties": true }], "x-ref": "#/definitions/team", "key$": "owner" }, "name": { "type": "string", "description": "The name of the project.", "key$": "name" }, "description": { "type": "string", "key$": "description" }, "is_private": { "type": "boolean", "description": "\nIndicates whether the project is publicly accessible, or whether it is\nprivate to the team and consequently only visible to team members.\nNote that private projects cannot contain public repositories.", "key$": "is_private" }, "created_on": { "type": "string", "format": "date-time", "key$": "created_on" }, "updated_on": { "type": "string", "format": "date-time", "key$": "updated_on" }, "has_publicly_visible_repos": { "type": "boolean", "description": "\nIndicates whether the project contains publicly visible repositories.\nNote that private projects cannot contain public repositories.", "key$": "has_publicly_visible_repos" } }, "additionalProperties": true }], "x-ref": "#/definitions/project", "index$": 1 }, "index$": 1 }] }, "GET /workspaces/{workspace}/projects/{project_key}": { "protocol": "http", "parameters": [{ "name": "project_key", "in": "path", "description": "The project in question. This is the actual `key` assigned\nto the project.\n", "required": true, "type": "string", "index$": 0 }, { "name": "workspace", "in": "path", "description": "This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n", "required": true, "type": "string", "index$": 1 }] }, "DELETE /workspaces/{workspace}/projects/{project_key}/permissions-config/groups/{group_slug}": { "protocol": "http", "parameters": [{ "name": "group_slug", "in": "path", "description": "Slug of the requested group.", "required": true, "type": "string", "index$": 0 }, { "name": "project_key", "in": "path", "description": "The project in question. This is the actual key assigned to the project.\n", "required": true, "type": "string", "index$": 1 }, { "name": "workspace", "in": "path", "description": "This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n", "required": true, "type": "string", "index$": 2 }] }, "DELETE /workspaces/{workspace}/projects/{project_key}/default-reviewers/{selected_user}": { "protocol": "http", "parameters": [{ "name": "project_key", "in": "path", "description": "The project in question. This can either be the actual `key` assigned\nto the project or the `UUID` (surrounded by curly-braces (`{}`)).\n", "required": true, "type": "string", "index$": 0 }, { "name": "selected_user", "in": "path", "description": "This can either be the username or the UUID of the default reviewer,\nsurrounded by curly-braces, for example: `{account UUID}`.\n", "required": true, "type": "string", "index$": 1 }, { "name": "workspace", "in": "path", "description": "This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n", "required": true, "type": "string", "index$": 2 }] }, "DELETE /workspaces/{workspace}/projects/{project_key}/permissions-config/users/{selected_user_id}": { "protocol": "http", "parameters": [{ "name": "project_key", "in": "path", "description": "The project in question. This is the actual key assigned to the project.\n", "required": true, "type": "string", "index$": 0 }, { "name": "selected_user_id", "in": "path", "description": "This can either be the username, the user's UUID surrounded by curly-braces,\nfor example: {account UUID}, or the user's Atlassian ID.\n", "required": true, "type": "string", "index$": 1 }, { "name": "workspace", "in": "path", "description": "This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n", "required": true, "type": "string", "index$": 2 }] }, "DELETE /workspaces/{workspace}/projects/{project_key}": { "protocol": "http", "parameters": [{ "name": "project_key", "in": "path", "description": "The project in question. This is the actual `key` assigned\nto the project.\n", "required": true, "type": "string", "index$": 0 }, { "name": "workspace", "in": "path", "description": "This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n", "required": true, "type": "string", "index$": 1 }] }, "PUT /workspaces/{workspace}/projects/{project_key}": { "protocol": "http", "parameters": [{ "name": "project_key", "in": "path", "description": "The project in question. This is the actual `key` assigned\nto the project.\n", "required": true, "type": "string", "index$": 0 }, { "name": "workspace", "in": "path", "description": "This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n", "required": true, "type": "string", "index$": 1 }, { "name": "_body", "in": "body", "required": true, "schema": { "allOf": [{ "type": "object", "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`.", "properties": { "type": { "type": "string", "key$": "type" } }, "required": ["type"], "additionalProperties": true, "discriminator": "type", "x-ref": "#/definitions/object" }, { "type": "object", "title": "Project", "description": "A Bitbucket project.\n            Projects are used by teams to organize repositories.", "properties": { "links": { "type": "object", "properties": { "html": { "type": "object", "title": "Link", "description": "A link to a resource related to this object.", "properties": {}, "additionalProperties": false }, "avatar": { "type": "object", "title": "Link", "description": "A link to a resource related to this object.", "properties": {}, "additionalProperties": false } }, "additionalProperties": false, "key$": "links" }, "uuid": { "type": "string", "description": "The project's immutable id.", "key$": "uuid" }, "key": { "type": "string", "description": "The project's key.", "key$": "key" }, "owner": { "allOf": [{ "allOf": [], "x-ref": "#/definitions/account" }, { "type": "object", "title": "Team", "description": "A team object.", "properties": {}, "additionalProperties": true }], "x-ref": "#/definitions/team", "key$": "owner" }, "name": { "type": "string", "description": "The name of the project.", "key$": "name" }, "description": { "type": "string", "key$": "description" }, "is_private": { "type": "boolean", "description": "\nIndicates whether the project is publicly accessible, or whether it is\nprivate to the team and consequently only visible to team members.\nNote that private projects cannot contain public repositories.", "key$": "is_private" }, "created_on": { "type": "string", "format": "date-time", "key$": "created_on" }, "updated_on": { "type": "string", "format": "date-time", "key$": "updated_on" }, "has_publicly_visible_repos": { "type": "boolean", "description": "\nIndicates whether the project contains publicly visible repositories.\nNote that private projects cannot contain public repositories.", "key$": "has_publicly_visible_repos" } }, "additionalProperties": true }], "x-ref": "#/definitions/project", "index$": 1 }, "index$": 2 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const project_ref01_ent = client.Project();
        let project_ref01_data = setup.data.new.project['project_ref01'];
        project_ref01_data['project_id'] = setup.idmap['project01'];
        project_ref01_data['workspace_id'] = setup.idmap['workspace01'];
        project_ref01_data = (await project_ref01_ent.create(project_ref01_data)).data();
        (0, node_assert_1.default)(null != project_ref01_data.id);
        // UPDATE
        const project_ref01_data_up0 = {};
        project_ref01_data_up0.id = project_ref01_data.id;
        project_ref01_data_up0['workspace_id'] = setup.idmap['workspace_id'] ?? setup.idmap['workspace01'];
        const project_ref01_markdef_up0 = { name: 'created_on', value: 'Mark01-project_ref01_' + setup.now };
        project_ref01_data_up0[project_ref01_markdef_up0.name] = project_ref01_markdef_up0.value;
        const project_ref01_resdata_up0 = (await project_ref01_ent.update(project_ref01_data_up0)).data();
        (0, node_assert_1.default)(project_ref01_resdata_up0.id === project_ref01_data_up0.id);
        (0, node_assert_1.default)(project_ref01_resdata_up0[project_ref01_markdef_up0.name] === project_ref01_markdef_up0.value);
        // LOAD
        const project_ref01_match_dt0 = {};
        project_ref01_match_dt0.id = project_ref01_data.id;
        project_ref01_match_dt0['workspace_id'] = setup.idmap['workspace_id'] ?? setup.idmap['workspace01'];
        const project_ref01_data_dt0 = (await project_ref01_ent.load(project_ref01_match_dt0)).data();
        (0, node_assert_1.default)(project_ref01_data_dt0.id === project_ref01_data.id);
        // REMOVE
        const project_ref01_match_rm0 = { id: project_ref01_data.id };
        project_ref01_match_rm0['workspace_id'] = setup.idmap['workspace_id'] ?? setup.idmap['workspace01'];
        await project_ref01_ent.remove(project_ref01_match_rm0);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/project/ProjectTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BitbucketSdkSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['project01', 'project02', 'project03', 'workspace01', 'workspace02', 'workspace03', 'default_reviewer01', 'default_reviewer02', 'default_reviewer03', 'user01', 'user02', 'user03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BITBUCKET_SDK_TEST_PROJECT_ENTID': idmap,
        'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
        'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
        'BITBUCKET_SDK_APIKEY': '',
    });
    idmap = env['BITBUCKET_SDK_TEST_PROJECT_ENTID'];
    const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BITBUCKET_SDK_TEST_PROJECT_ENTID'];
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
//# sourceMappingURL=ProjectEntity.test.js.map