# BitbucketSdk TypeScript SDK



The TypeScript SDK for the BitbucketSdk API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Addon()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`, see [Tags](https://github.com/hashimgujjar447/bitbucket-sdk/tags)), or from a
clone, which carries the compiled `dist/`:

```bash
git clone https://github.com/hashimgujjar447/bitbucket-sdk
npm install ./bitbucket-sdk/ts
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { BitbucketSdkSDK } from '@hashimgujjar447/bitbucket-sdk'

const client = new BitbucketSdkSDK({
  apikey: process.env.BITBUCKET_SDK_APIKEY,
})
```

### 3. Load an applicationproperty

ApplicationProperty is nested under app_key, so provide the `app_key`.
`load()` returns the entity and throws on failure; `.data()` reads its record:

```ts
try {
  const applicationproperty = await client.ApplicationProperty().load({
    app_key: 'example_app_key',
    property_name: 'example_property_name',
  })
  console.log(applicationproperty.data())
} catch (err) {
  console.error('load failed:', err)
}
```

### 4. Create, update, and remove

```ts
// Update
const updated = await client.Addon().update({})

// Remove
await client.Addon().remove()
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const paginateddiffstat = await client.PaginatedDiffstat().load({ id: "example_id", repo_slug: "example", workspace: "example" })
  console.log(paginateddiffstat.data())
} catch (err) {
  console.error('load failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
result envelope. Branch on `ok`; on failure `status` holds the HTTP status
(for error responses) and `err` holds the error:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (!result.ok) {
  console.error('request failed:', result.status, result.err)
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = BitbucketSdkSDK.test()

const paginateddiffstat = await client.PaginatedDiffstat().load({ id: 'test01', repo_slug: 'example_repo_slug', workspace: 'example_workspace' })
// paginateddiffstat is the PaginatedDiffstat entity; .data() reads its mock record
console.log(paginateddiffstat.data())
```

You can also use the instance method:

```ts
const client = new BitbucketSdkSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.PaginatedDiffstat()

// First call runs the operation and stores its result
await entity.load({ id: 'example', repo_slug: 'example_repo_slug', workspace: 'example_workspace' })

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data.id)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new BitbucketSdkSDK({
  apikey: '...',
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
BITBUCKET_SDK_TEST_LIVE=TRUE
BITBUCKET_SDK_APIKEY=<your-key>
```

Then run:

```bash
cd ts && npm test
```

Live entity tests continue independent operations after errors and attempt
supported cleanup. Their final result reports failures and missing prerequisites
after the remaining work completes. The model and test inputs determine which
API operations the generated scenarios cover.


## Reference

### BitbucketSdkSDK

#### Constructor

```ts
new BitbucketSdkSDK(options?: {
  apikey?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Addon(data?)` | `AddonEntity` | Create an Addon entity instance. |
| `ApplicationProperty(data?)` | `ApplicationPropertyEntity` | Create an ApplicationProperty entity instance. |
| `Approve(data?)` | `ApproveEntity` | Create an Approve entity instance. |
| `Branch(data?)` | `BranchEntity` | Create a Branch entity instance. |
| `BranchingModel(data?)` | `BranchingModelEntity` | Create a BranchingModel entity instance. |
| `BranchingModelSetting(data?)` | `BranchingModelSettingEntity` | Create a BranchingModelSetting entity instance. |
| `Branchrestriction(data?)` | `BranchrestrictionEntity` | Create a Branchrestriction entity instance. |
| `CommentResolution(data?)` | `CommentResolutionEntity` | Create a CommentResolution entity instance. |
| `Commit(data?)` | `CommitEntity` | Create a Commit entity instance. |
| `Commitstatus(data?)` | `CommitstatusEntity` | Create a Commitstatus entity instance. |
| `DefaultReviewer(data?)` | `DefaultReviewerEntity` | Create a DefaultReviewer entity instance. |
| `DeployKey(data?)` | `DeployKeyEntity` | Create a DeployKey entity instance. |
| `Deployment(data?)` | `DeploymentEntity` | Create a Deployment entity instance. |
| `DeploymentEnvironment(data?)` | `DeploymentEnvironmentEntity` | Create a DeploymentEnvironment entity instance. |
| `DeploymentVariable(data?)` | `DeploymentVariableEntity` | Create a DeploymentVariable entity instance. |
| `Download(data?)` | `DownloadEntity` | Create a Download entity instance. |
| `EffectiveDefaultReviewer(data?)` | `EffectiveDefaultReviewerEntity` | Create an EffectiveDefaultReviewer entity instance. |
| `EffectiveRepoBranchingModel(data?)` | `EffectiveRepoBranchingModelEntity` | Create an EffectiveRepoBranchingModel entity instance. |
| `Gpg(data?)` | `GpgEntity` | Create a Gpg entity instance. |
| `GpgAccountKey(data?)` | `GpgAccountKeyEntity` | Create a GpgAccountKey entity instance. |
| `MergeQueue(data?)` | `MergeQueueEntity` | Create a MergeQueue entity instance. |
| `MergeQueuePullrequest(data?)` | `MergeQueuePullrequestEntity` | Create a MergeQueuePullrequest entity instance. |
| `PaginatedAccount(data?)` | `PaginatedAccountEntity` | Create a PaginatedAccount entity instance. |
| `PaginatedAnnotation(data?)` | `PaginatedAnnotationEntity` | Create a PaginatedAnnotation entity instance. |
| `PaginatedBranch(data?)` | `PaginatedBranchEntity` | Create a PaginatedBranch entity instance. |
| `PaginatedBranchrestriction(data?)` | `PaginatedBranchrestrictionEntity` | Create a PaginatedBranchrestriction entity instance. |
| `PaginatedChangeset(data?)` | `PaginatedChangesetEntity` | Create a PaginatedChangeset entity instance. |
| `PaginatedCommitstatus(data?)` | `PaginatedCommitstatusEntity` | Create a PaginatedCommitstatus entity instance. |
| `PaginatedDefaultReviewerAndType(data?)` | `PaginatedDefaultReviewerAndTypeEntity` | Create a PaginatedDefaultReviewerAndType entity instance. |
| `PaginatedDeployKey(data?)` | `PaginatedDeployKeyEntity` | Create a PaginatedDeployKey entity instance. |
| `PaginatedDeployment(data?)` | `PaginatedDeploymentEntity` | Create a PaginatedDeployment entity instance. |
| `PaginatedDeploymentVariable(data?)` | `PaginatedDeploymentVariableEntity` | Create a PaginatedDeploymentVariable entity instance. |
| `PaginatedDiffstat(data?)` | `PaginatedDiffstatEntity` | Create a PaginatedDiffstat entity instance. |
| `PaginatedEnvironment(data?)` | `PaginatedEnvironmentEntity` | Create a PaginatedEnvironment entity instance. |
| `PaginatedFile(data?)` | `PaginatedFileEntity` | Create a PaginatedFile entity instance. |
| `PaginatedFileConflict(data?)` | `PaginatedFileConflictEntity` | Create a PaginatedFileConflict entity instance. |
| `PaginatedGpgUserKey(data?)` | `PaginatedGpgUserKeyEntity` | Create a PaginatedGpgUserKey entity instance. |
| `PaginatedHookEvent(data?)` | `PaginatedHookEventEntity` | Create a PaginatedHookEvent entity instance. |
| `PaginatedMergeQueue(data?)` | `PaginatedMergeQueueEntity` | Create a PaginatedMergeQueue entity instance. |
| `PaginatedMergeQueuePullrequest(data?)` | `PaginatedMergeQueuePullrequestEntity` | Create a PaginatedMergeQueuePullrequest entity instance. |
| `PaginatedPipeline(data?)` | `PaginatedPipelineEntity` | Create a PaginatedPipeline entity instance. |
| `PaginatedPipelineCache(data?)` | `PaginatedPipelineCacheEntity` | Create a PaginatedPipelineCache entity instance. |
| `PaginatedPipelineKnownHost(data?)` | `PaginatedPipelineKnownHostEntity` | Create a PaginatedPipelineKnownHost entity instance. |
| `PaginatedPipelineRunner(data?)` | `PaginatedPipelineRunnerEntity` | Create a PaginatedPipelineRunner entity instance. |
| `PaginatedPipelineSchedule(data?)` | `PaginatedPipelineScheduleEntity` | Create a PaginatedPipelineSchedule entity instance. |
| `PaginatedPipelineScheduleExecution(data?)` | `PaginatedPipelineScheduleExecutionEntity` | Create a PaginatedPipelineScheduleExecution entity instance. |
| `PaginatedPipelineStep(data?)` | `PaginatedPipelineStepEntity` | Create a PaginatedPipelineStep entity instance. |
| `PaginatedPipelineVariable(data?)` | `PaginatedPipelineVariableEntity` | Create a PaginatedPipelineVariable entity instance. |
| `PaginatedProject(data?)` | `PaginatedProjectEntity` | Create a PaginatedProject entity instance. |
| `PaginatedProjectDeployKey(data?)` | `PaginatedProjectDeployKeyEntity` | Create a PaginatedProjectDeployKey entity instance. |
| `PaginatedProjectGroupPermission(data?)` | `PaginatedProjectGroupPermissionEntity` | Create a PaginatedProjectGroupPermission entity instance. |
| `PaginatedProjectUserPermission(data?)` | `PaginatedProjectUserPermissionEntity` | Create a PaginatedProjectUserPermission entity instance. |
| `PaginatedPullrequest(data?)` | `PaginatedPullrequestEntity` | Create a PaginatedPullrequest entity instance. |
| `PaginatedPullrequestComment(data?)` | `PaginatedPullrequestCommentEntity` | Create a PaginatedPullrequestComment entity instance. |
| `PaginatedRef(data?)` | `PaginatedRefEntity` | Create a PaginatedRef entity instance. |
| `PaginatedReport(data?)` | `PaginatedReportEntity` | Create a PaginatedReport entity instance. |
| `PaginatedRepository(data?)` | `PaginatedRepositoryEntity` | Create a PaginatedRepository entity instance. |
| `PaginatedRepositoryGroupPermission(data?)` | `PaginatedRepositoryGroupPermissionEntity` | Create a PaginatedRepositoryGroupPermission entity instance. |
| `PaginatedRepositoryPermission(data?)` | `PaginatedRepositoryPermissionEntity` | Create a PaginatedRepositoryPermission entity instance. |
| `PaginatedRepositoryUserPermission(data?)` | `PaginatedRepositoryUserPermissionEntity` | Create a PaginatedRepositoryUserPermission entity instance. |
| `PaginatedSnippet(data?)` | `PaginatedSnippetEntity` | Create a PaginatedSnippet entity instance. |
| `PaginatedSnippetComment(data?)` | `PaginatedSnippetCommentEntity` | Create a PaginatedSnippetComment entity instance. |
| `PaginatedSnippetCommit(data?)` | `PaginatedSnippetCommitEntity` | Create a PaginatedSnippetCommit entity instance. |
| `PaginatedSshUserKey(data?)` | `PaginatedSshUserKeyEntity` | Create a PaginatedSshUserKey entity instance. |
| `PaginatedTag(data?)` | `PaginatedTagEntity` | Create a PaginatedTag entity instance. |
| `PaginatedTask(data?)` | `PaginatedTaskEntity` | Create a PaginatedTask entity instance. |
| `PaginatedTreeentry(data?)` | `PaginatedTreeentryEntity` | Create a PaginatedTreeentry entity instance. |
| `PaginatedWebhookSubscription(data?)` | `PaginatedWebhookSubscriptionEntity` | Create a PaginatedWebhookSubscription entity instance. |
| `PaginatedWorkspaceAccess(data?)` | `PaginatedWorkspaceAccessEntity` | Create a PaginatedWorkspaceAccess entity instance. |
| `PaginatedWorkspaceMembership(data?)` | `PaginatedWorkspaceMembershipEntity` | Create a PaginatedWorkspaceMembership entity instance. |
| `Pipeline(data?)` | `PipelineEntity` | Create a Pipeline entity instance. |
| `PipelineBuildNumber(data?)` | `PipelineBuildNumberEntity` | Create a PipelineBuildNumber entity instance. |
| `PipelineCacheContentUri(data?)` | `PipelineCacheContentUriEntity` | Create a PipelineCacheContentUri entity instance. |
| `PipelineKnownHost(data?)` | `PipelineKnownHostEntity` | Create a PipelineKnownHost entity instance. |
| `PipelineRunner(data?)` | `PipelineRunnerEntity` | Create a PipelineRunner entity instance. |
| `PipelineSchedule(data?)` | `PipelineScheduleEntity` | Create a PipelineSchedule entity instance. |
| `PipelineSshKeyPair(data?)` | `PipelineSshKeyPairEntity` | Create a PipelineSshKeyPair entity instance. |
| `PipelineStep(data?)` | `PipelineStepEntity` | Create a PipelineStep entity instance. |
| `PipelineVariable(data?)` | `PipelineVariableEntity` | Create a PipelineVariable entity instance. |
| `PipelinesConfig(data?)` | `PipelinesConfigEntity` | Create a PipelinesConfig entity instance. |
| `Project(data?)` | `ProjectEntity` | Create a Project entity instance. |
| `ProjectBranchingModel(data?)` | `ProjectBranchingModelEntity` | Create a ProjectBranchingModel entity instance. |
| `ProjectDeployKey(data?)` | `ProjectDeployKeyEntity` | Create a ProjectDeployKey entity instance. |
| `ProjectGroupPermission(data?)` | `ProjectGroupPermissionEntity` | Create a ProjectGroupPermission entity instance. |
| `ProjectUserPermission(data?)` | `ProjectUserPermissionEntity` | Create a ProjectUserPermission entity instance. |
| `Property(data?)` | `PropertyEntity` | Create a Property entity instance. |
| `Pullrequest(data?)` | `PullrequestEntity` | Create a Pullrequest entity instance. |
| `PullrequestComment(data?)` | `PullrequestCommentEntity` | Create a PullrequestComment entity instance. |
| `PullrequestCommentTask(data?)` | `PullrequestCommentTaskEntity` | Create a PullrequestCommentTask entity instance. |
| `PullrequestMergeabilityCheck(data?)` | `PullrequestMergeabilityCheckEntity` | Create a PullrequestMergeabilityCheck entity instance. |
| `Ref(data?)` | `RefEntity` | Create a Ref entity instance. |
| `Report(data?)` | `ReportEntity` | Create a Report entity instance. |
| `ReportAnnotation(data?)` | `ReportAnnotationEntity` | Create a ReportAnnotation entity instance. |
| `Repository(data?)` | `RepositoryEntity` | Create a Repository entity instance. |
| `RepositoryGroupPermission(data?)` | `RepositoryGroupPermissionEntity` | Create a RepositoryGroupPermission entity instance. |
| `RepositoryInheritanceState(data?)` | `RepositoryInheritanceStateEntity` | Create a RepositoryInheritanceState entity instance. |
| `RepositoryUserPermission(data?)` | `RepositoryUserPermissionEntity` | Create a RepositoryUserPermission entity instance. |
| `RequestChange(data?)` | `RequestChangeEntity` | Create a RequestChange entity instance. |
| `SearchResultPage(data?)` | `SearchResultPageEntity` | Create a SearchResultPage entity instance. |
| `Snippet(data?)` | `SnippetEntity` | Create a Snippet entity instance. |
| `SnippetComment(data?)` | `SnippetCommentEntity` | Create a SnippetComment entity instance. |
| `SnippetCommit(data?)` | `SnippetCommitEntity` | Create a SnippetCommit entity instance. |
| `Source(data?)` | `SourceEntity` | Create a Source entity instance. |
| `Ssh(data?)` | `SshEntity` | Create a Ssh entity instance. |
| `SshAccountKey(data?)` | `SshAccountKeyEntity` | Create a SshAccountKey entity instance. |
| `Tag(data?)` | `TagEntity` | Create a Tag entity instance. |
| `User(data?)` | `UserEntity` | Create an User entity instance. |
| `Watcher(data?)` | `WatcherEntity` | Create a Watcher entity instance. |
| `WebhookSubscription(data?)` | `WebhookSubscriptionEntity` | Create a WebhookSubscription entity instance. |
| `Workspace(data?)` | `WorkspaceEntity` | Create a Workspace entity instance. |
| `WorkspaceMembership(data?)` | `WorkspaceMembershipEntity` | Create a WorkspaceMembership entity instance. |
| `tester(testopts?, sdkopts?)` | `BitbucketSdkSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `BitbucketSdkSDK.test(testopts?, sdkopts?)` | `BitbucketSdkSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria, and return it. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria, one per record. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity, and return it. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity, and return it. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<Entity>` | Remove an entity, and return it marked as deleted. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): BitbucketSdkSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity itself — there is no result
envelope, and an entity's `data()` reads its record:

- `load`, `create` and `update` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).
- `remove` resolves to the entity, marked as deleted.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### Addon

| Field | Description |
| --- | --- |

Operations: load, remove, update.

API path: `/addon/{addon_key}/client-key`

#### ApplicationProperty

| Field | Description |
| --- | --- |
| `attributes` |  |
| `id` |  |

Operations: load.

API path: `/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}`

#### Approve

| Field | Description |
| --- | --- |
| `approved` |  |
| `participated_on` | The ISO8601 timestamp of the participant's action. |
| `role` |  |
| `state` |  |
| `type` |  |
| `user` |  |

Operations: create.

API path: `/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/approve`

#### Branch

| Field | Description |
| --- | --- |
| `default_merge_strategy` | The default merge strategy for pull requests targeting this branch. |
| `id` |  |
| `links` |  |
| `merge_strategies` | Available merge strategies for pull requests targeting this branch. |
| `name` | The name of the ref. |
| `target` |  |
| `type` |  |

Operations: create, load.

API path: `/repositories/{workspace}/{repo_slug}/refs/branches`

#### BranchingModel

| Field | Description |
| --- | --- |
| `branch_types` | The active branch types. |
| `development` |  |
| `production` |  |
| `type` |  |

Operations: list.

API path: `/repositories/{workspace}/{repo_slug}/branching-model`

#### BranchingModelSetting

| Field | Description |
| --- | --- |
| `branch_types` |  |
| `development` |  |
| `links` |  |
| `production` |  |
| `type` |  |

Operations: list, update.

API path: `/workspaces/{workspace}/projects/{project_key}/branching-model/settings`

#### Branchrestriction

| Field | Description |
| --- | --- |
| `branch_match_kind` | Indicates how the restriction is matched against a branch. |
| `branch_type` | Apply the restriction to branches of this type. |
| `groups` |  |
| `id` | The branch restriction status' id. |
| `kind` | The type of restriction that is being applied. |
| `links` |  |
| `pattern` | Apply the restriction to branches that match this pattern. |
| `pipelines_source_branches` | List of source branch names allowed to push back to the restricted branch. |
| `type` |  |
| `users` |  |
| `value` | Value with kind-specific semantics: * `require_approvals_to_merge` uses it to require a minimum number of approvals on a PR. |

Operations: create, load, remove, update.

API path: `/repositories/{workspace}/{repo_slug}/branch-restrictions`

#### CommentResolution

| Field | Description |
| --- | --- |
| `created_on` | The ISO8601 timestamp the resolution was created. |
| `id` |  |
| `type` |  |
| `user` |  |

Operations: create.

API path: `/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}/resolve`

#### Commit

| Field | Description |
| --- | --- |
| `author` |  |
| `commit` |  |
| `committer` |  |
| `content` |  |
| `created_on` |  |
| `date` |  |
| `deleted` |  |
| `hash` |  |
| `id` |  |
| `inline` |  |
| `links` |  |
| `message` |  |
| `parent` |  |
| `parents` |  |
| `participants` |  |
| `repository` |  |
| `summary` |  |
| `type` |  |
| `updated_on` |  |
| `user` |  |

Operations: create, list, load, remove, update.

API path: `/repositories/{workspace}/{repo_slug}/commit/{commit}/approve`

#### Commitstatus

| Field | Description |
| --- | --- |
| `created_on` |  |
| `description` | A description of the build (e.g. |
| `key` | An identifier for the status that's unique to its type (current "build" is the only supported type) and the vendor, e.g. |
| `links` |  |
| `name` | An identifier for the build itself, e.g. |
| `refname` | The name of the ref that pointed to this commit at the time the status object was created. |
| `state` | Provides some indication of the status of this commit |
| `type` |  |
| `updated_on` |  |
| `url` | A URL linking back to the vendor or build system, for providing more information about whatever process produced this status. |

Operations: create, load, update.

API path: `/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build`

#### DefaultReviewer

| Field | Description |
| --- | --- |
| `created_on` |  |
| `display_name` |  |
| `id` |  |
| `links` | Links related to an Account. |
| `type` |  |
| `uuid` |  |

Operations: load, update.

API path: `/repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}`

#### DeployKey

| Field | Description |
| --- | --- |
| `added_on` |  |
| `comment` | The comment parsed from the deploy key (if present) |
| `id` |  |
| `key` | The deploy key value. |
| `label` | The user-defined label for the deploy key |
| `last_used` |  |
| `links` |  |
| `owner` |  |
| `repository` |  |
| `type` |  |

Operations: create, load, update.

API path: `/repositories/{workspace}/{repo_slug}/deploy-keys`

#### Deployment

| Field | Description |
| --- | --- |
| `environment` | A deployment environment. |
| `id` |  |
| `release` | The release associated with this deployment. |
| `state` |  |
| `type` |  |
| `uuid` | The UUID identifying the deployment. |

Operations: create, load, remove.

API path: `/repositories/{workspace}/{repo_slug}/environments/{environment_uuid}/changes`

#### DeploymentEnvironment

| Field | Description |
| --- | --- |
| `id` |  |
| `name` | The name of the environment. |
| `type` |  |
| `uuid` | The UUID identifying the environment. |

Operations: create, load.

API path: `/repositories/{workspace}/{repo_slug}/environments`

#### DeploymentVariable

| Field | Description |
| --- | --- |
| `id` |  |
| `key` | The unique name of the variable. |
| `secured` | If true, this variable will be treated as secured. |
| `type` |  |
| `uuid` | The UUID identifying the variable. |
| `value` | The value of the variable. |

Operations: create, update.

API path: `/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables`

#### Download

| Field | Description |
| --- | --- |
| `id` |  |

Operations: create, load, remove.

API path: `/repositories/{workspace}/{repo_slug}/downloads`

#### EffectiveDefaultReviewer

| Field | Description |
| --- | --- |
| `reviewer_type` |  |
| `type` |  |
| `user` |  |

Operations: list.

API path: `/repositories/{workspace}/{repo_slug}/effective-default-reviewers`

#### EffectiveRepoBranchingModel

| Field | Description |
| --- | --- |
| `branch_types` | The active branch types. |
| `development` |  |
| `production` |  |
| `type` |  |

Operations: list.

API path: `/repositories/{workspace}/{repo_slug}/effective-branching-model`

#### Gpg

| Field | Description |
| --- | --- |

Operations: remove.

API path: `/users/{selected_user}/gpg-keys/{fingerprint}`

#### GpgAccountKey

| Field | Description |
| --- | --- |
| `added_on` |  |
| `created_on` |  |
| `expires_on` |  |
| `fingerprint` | The GPG key fingerprint. |
| `key` | The GPG key value in X format. |
| `key_id` | The unique identifier for the GPG key |
| `last_used` |  |
| `links` |  |
| `name` | The user-defined label for the GPG key |
| `owner` |  |
| `parent_fingerprint` | The fingerprint of the parent key. |
| `subkeys` |  |
| `type` |  |

Operations: create, load.

API path: `/users/{selected_user}/gpg-keys`

#### MergeQueue

| Field | Description |
| --- | --- |
| `id` |  |
| `name` | The merge queue name. |
| `state` | The configuration state returned by the merge queue service. |
| `type` |  |
| `uuid` | The merge queue UUID. |

Operations: load, remove.

API path: `/repositories/{workspace}/{repo_slug}/merge-queues/{merge_queue_uuid}`

#### MergeQueuePullrequest

| Field | Description |
| --- | --- |
| `last_activity_on` |  |
| `merge_queue` | A reference to the merge queue holding a pullrequest. |
| `pipeline` |  |
| `pullrequest` |  |
| `queued_on` |  |
| `rank` | The one-based position of the pullrequest in the merge queue. |
| `status` |  |
| `type` |  |

Operations: load.

API path: `/repositories/{workspace}/{repo_slug}/merge-queues/{merge_queue_uuid}/queue/{pullrequest_id}`

#### PaginatedAccount

| Field | Description |
| --- | --- |
| `created_on` |  |
| `display_name` |  |
| `links` | Links related to an Account. |
| `type` |  |
| `uuid` |  |

Operations: list.

API path: `/repositories/{workspace}/{repo_slug}/default-reviewers`

#### PaginatedAnnotation

| Field | Description |
| --- | --- |
| `annotation_type` | The type of the report. |
| `created_on` | The timestamp when the report was created. |
| `details` | The details to show to users when clicking on the annotation. |
| `external_id` | ID of the annotation provided by the annotation creator. |
| `line` | The line number that the annotation should belong to. |
| `link` | A URL linking to the annotation in an external tool. |
| `path` | The path of the file on which this annotation should be placed. |
| `result` | The state of the report. |
| `severity` | The severity of the annotation. |
| `summary` | The message to display to users. |
| `type` |  |
| `updated_on` | The timestamp when the report was updated. |
| `uuid` | The UUID that can be used to identify the annotation. |

Operations: list.

API path: `/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations`

#### PaginatedBranch

| Field | Description |
| --- | --- |
| `default_merge_strategy` | The default merge strategy for pull requests targeting this branch. |
| `links` |  |
| `merge_strategies` | Available merge strategies for pull requests targeting this branch. |
| `name` | The name of the ref. |
| `target` |  |
| `type` |  |

Operations: list.

API path: `/repositories/{workspace}/{repo_slug}/refs/branches`

#### PaginatedBranchrestriction

| Field | Description |
| --- | --- |
| `branch_match_kind` | Indicates how the restriction is matched against a branch. |
| `branch_type` | Apply the restriction to branches of this type. |
| `groups` |  |
| `id` | The branch restriction status' id. |
| `kind` | The type of restriction that is being applied. |
| `links` |  |
| `pattern` | Apply the restriction to branches that match this pattern. |
| `pipelines_source_branches` | List of source branch names allowed to push back to the restricted branch. |
| `type` |  |
| `users` |  |
| `value` | Value with kind-specific semantics: * `require_approvals_to_merge` uses it to require a minimum number of approvals on a PR. |

Operations: list.

API path: `/repositories/{workspace}/{repo_slug}/branch-restrictions`

#### PaginatedChangeset

| Field | Description |
| --- | --- |
| `author` |  |
| `committer` |  |
| `date` |  |
| `hash` |  |
| `message` |  |
| `next` | Link to the next page if it exists. |
| `page` | Page number of the current results. |
| `pagelen` | Current number of objects on the existing page. |
| `parents` |  |
| `previous` | Link to previous page if it exists. |
| `size` | Total number of objects in the response. |
| `summary` |  |
| `type` |  |
| `values` |  |

Operations: create, list, load.

API path: `/repositories/{workspace}/{repo_slug}/commits/{revision}`

#### PaginatedCommitstatus

| Field | Description |
| --- | --- |
| `created_on` |  |
| `description` | A description of the build (e.g. |
| `key` | An identifier for the status that's unique to its type (current "build" is the only supported type) and the vendor, e.g. |
| `links` |  |
| `name` | An identifier for the build itself, e.g. |
| `refname` | The name of the ref that pointed to this commit at the time the status object was created. |
| `state` | Provides some indication of the status of this commit |
| `type` |  |
| `updated_on` |  |
| `url` | A URL linking back to the vendor or build system, for providing more information about whatever process produced this status. |

Operations: list.

API path: `/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses`

#### PaginatedDefaultReviewerAndType

| Field | Description |
| --- | --- |
| `reviewer_type` |  |
| `type` |  |
| `user` |  |

Operations: list.

API path: `/workspaces/{workspace}/projects/{project_key}/default-reviewers`

#### PaginatedDeployKey

| Field | Description |
| --- | --- |
| `added_on` |  |
| `comment` | The comment parsed from the deploy key (if present) |
| `key` | The deploy key value. |
| `label` | The user-defined label for the deploy key |
| `last_used` |  |
| `links` |  |
| `owner` |  |
| `repository` |  |
| `type` |  |

Operations: list.

API path: `/repositories/{workspace}/{repo_slug}/deploy-keys`

#### PaginatedDeployment

| Field | Description |
| --- | --- |
| `environment` | A deployment environment. |
| `release` | The release associated with this deployment. |
| `state` |  |
| `type` |  |
| `uuid` | The UUID identifying the deployment. |

Operations: list.

API path: `/repositories/{workspace}/{repo_slug}/deployments`

#### PaginatedDeploymentVariable

| Field | Description |
| --- | --- |
| `key` | The unique name of the variable. |
| `secured` | If true, this variable will be treated as secured. |
| `type` |  |
| `uuid` | The UUID identifying the variable. |
| `value` | The value of the variable. |

Operations: list.

API path: `/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables`

#### PaginatedDiffstat

| Field | Description |
| --- | --- |
| `id` |  |
| `next` | Link to the next page if it exists. |
| `page` | Page number of the current results. |
| `pagelen` | Current number of objects on the existing page. |
| `previous` | Link to previous page if it exists. |
| `size` | Total number of objects in the response. |
| `values` |  |

Operations: load.

API path: `/repositories/{workspace}/{repo_slug}/diffstat/{spec}`

#### PaginatedEnvironment

| Field | Description |
| --- | --- |
| `name` | The name of the environment. |
| `type` |  |
| `uuid` | The UUID identifying the environment. |

Operations: list.

API path: `/repositories/{workspace}/{repo_slug}/environments`

#### PaginatedFile

| Field | Description |
| --- | --- |
| `id` |  |
| `next` | Link to the next page if it exists. |
| `page` | Page number of the current results. |
| `pagelen` | Current number of objects on the existing page. |
| `previous` | Link to previous page if it exists. |
| `size` | Total number of objects in the response. |
| `values` |  |

Operations: load.

API path: `/repositories/{workspace}/{repo_slug}/filehistory/{commit}/{path}`

#### PaginatedFileConflict

| Field | Description |
| --- | --- |
| `id` |  |
| `next` | Link to the next page if it exists. |
| `page` | Page number of the current results. |
| `pagelen` | Current number of objects on the existing page. |
| `previous` | Link to previous page if it exists. |
| `size` | Total number of objects in the response. |
| `values` |  |

Operations: load.

API path: `/repositories/{workspace}/{repo_slug}/file-conflicts/{spec}`

#### PaginatedGpgUserKey

| Field | Description |
| --- | --- |
| `added_on` |  |
| `created_on` |  |
| `expires_on` |  |
| `fingerprint` | The GPG key fingerprint. |
| `key` | The GPG key value in X format. |
| `key_id` | The unique identifier for the GPG key |
| `last_used` |  |
| `links` |  |
| `name` | The user-defined label for the GPG key |
| `owner` |  |
| `parent_fingerprint` | The fingerprint of the parent key. |
| `subkeys` |  |
| `type` |  |

Operations: list.

API path: `/users/{selected_user}/gpg-keys`

#### PaginatedHookEvent

| Field | Description |
| --- | --- |
| `id` |  |
| `next` | Link to the next page if it exists. |
| `page` | Page number of the current results. |
| `pagelen` | Current number of objects on the existing page. |
| `previous` | Link to previous page if it exists. |
| `repository` |  |
| `size` | Total number of objects in the response. |
| `values` |  |
| `workspace` |  |

Operations: load.

API path: `/hook_events/{subject_type}`

#### PaginatedMergeQueue

| Field | Description |
| --- | --- |
| `name` | The merge queue name. |
| `state` | The configuration state returned by the merge queue service. |
| `type` |  |
| `uuid` | The merge queue UUID. |

Operations: list.

API path: `/repositories/{workspace}/{repo_slug}/merge-queues`

#### PaginatedMergeQueuePullrequest

| Field | Description |
| --- | --- |
| `last_activity_on` |  |
| `merge_queue` | A reference to the merge queue holding a pullrequest. |
| `pipeline` |  |
| `pullrequest` |  |
| `queued_on` |  |
| `rank` | The one-based position of the pullrequest in the merge queue. |
| `status` |  |
| `type` |  |

Operations: list.

API path: `/repositories/{workspace}/{repo_slug}/merge-queues/{merge_queue_uuid}/queue`

#### PaginatedPipeline

| Field | Description |
| --- | --- |
| `build_number` | The build number of the pipeline. |
| `build_seconds_used` | The number of build seconds used by this pipeline. |
| `completed_on` | The timestamp when the Pipeline was completed. |
| `configuration_sources` | An ordered list of sources of the pipeline configuration |
| `created_on` | The timestamp when the pipeline was created. |
| `creator` | The Bitbucket account that was used to create the pipeline. |
| `links` |  |
| `repository` |  |
| `state` |  |
| `target` | The target that the pipeline built. |
| `trigger` | The trigger used for the pipeline. |
| `type` |  |
| `uuid` | The UUID identifying the pipeline. |
| `variables` | The variables for the pipeline. |

Operations: list.

API path: `/repositories/{workspace}/{repo_slug}/pipelines`

#### PaginatedPipelineCache

| Field | Description |
| --- | --- |
| `created_on` | The timestamp when the cache was created. |
| `file_size_bytes` | The size of the file containing the archive of the cache. |
| `key_hash` | The key hash of the cache version. |
| `name` | The name of the cache. |
| `path` | The path where the cache contents were retrieved from. |
| `pipeline_uuid` | The UUID of the pipeline that created the cache. |
| `step_uuid` | The uuid of the step that created the cache. |
| `type` |  |
| `uuid` | The UUID identifying the pipeline cache. |

Operations: list.

API path: `/repositories/{workspace}/{repo_slug}/pipelines-config/caches`

#### PaginatedPipelineKnownHost

| Field | Description |
| --- | --- |
| `hostname` | The hostname of the known host. |
| `public_key` | The public key of the known host. |
| `type` |  |
| `uuid` | The UUID identifying the known host. |

Operations: list.

API path: `/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts`

#### PaginatedPipelineRunner

| Field | Description |
| --- | --- |
| `created_on` | The timestamp when the runner was created. |
| `labels` | Labels assigned to the runner for identification and routing. |
| `name` | The name of the runner. |
| `oauth_client` | OAuth client configuration for the runner. |
| `state` | The current state of the runner. |
| `type` |  |
| `updated_on` | The timestamp when the runner was last updated. |
| `uuid` | The UUID identifying the runner. |

Operations: list.

API path: `/repositories/{workspace}/{repo_slug}/pipelines-config/runners`

#### PaginatedPipelineSchedule

| Field | Description |
| --- | --- |
| `created_on` | The timestamp when the schedule was created. |
| `cron_pattern` | The cron expression with second precision (7 fields) that the schedule applies. |
| `enabled` | Whether the schedule is enabled. |
| `target` | The target on which the schedule will be executed. |
| `type` |  |
| `updated_on` | The timestamp when the schedule was updated. |
| `uuid` | The UUID identifying the schedule. |

Operations: list.

API path: `/repositories/{workspace}/{repo_slug}/pipelines_config/schedules`

#### PaginatedPipelineScheduleExecution

| Field | Description |
| --- | --- |
| `type` |  |

Operations: list.

API path: `/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}/executions`

#### PaginatedPipelineStep

| Field | Description |
| --- | --- |
| `completed_on` | The timestamp when the step execution was completed. |
| `image` | The Docker image used as the build container for the step. |
| `script_commands` | The list of build commands. |
| `setup_commands` | The list of commands that are executed as part of the setup phase of the build. |
| `started_on` | The timestamp when the step execution was started. |
| `state` | The current state of the step |
| `type` |  |
| `uuid` | The UUID identifying the step. |

Operations: list.

API path: `/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps`

#### PaginatedPipelineVariable

| Field | Description |
| --- | --- |
| `key` | The unique name of the variable. |
| `secured` | If true, this variable will be treated as secured. |
| `type` |  |
| `uuid` | The UUID identifying the variable. |
| `value` | The value of the variable. |

Operations: list.

API path: `/repositories/{workspace}/{repo_slug}/pipelines_config/variables`

#### PaginatedProject

| Field | Description |
| --- | --- |
| `created_on` |  |
| `description` |  |
| `has_publicly_visible_repos` | Indicates whether the project contains publicly visible repositories. |
| `is_private` | Indicates whether the project is publicly accessible, or whether it is private to the team and consequently only visible to team members. |
| `key` | The project's key. |
| `links` |  |
| `name` | The name of the project. |
| `owner` |  |
| `type` |  |
| `updated_on` |  |
| `uuid` | The project's immutable id. |

Operations: list.

API path: `/workspaces/{workspace}/projects`

#### PaginatedProjectDeployKey

| Field | Description |
| --- | --- |
| `added_on` |  |
| `comment` | The comment parsed from the deploy key (if present) |
| `created_by` |  |
| `key` | The deploy key value. |
| `label` | The user-defined label for the deploy key |
| `last_used` |  |
| `links` |  |
| `project` |  |
| `type` |  |

Operations: list.

API path: `/workspaces/{workspace}/projects/{project_key}/deploy-keys`

#### PaginatedProjectGroupPermission

| Field | Description |
| --- | --- |
| `group` |  |
| `links` |  |
| `permission` |  |
| `project` |  |
| `type` |  |

Operations: list.

API path: `/workspaces/{workspace}/projects/{project_key}/permissions-config/groups`

#### PaginatedProjectUserPermission

| Field | Description |
| --- | --- |
| `links` |  |
| `permission` |  |
| `project` |  |
| `type` |  |
| `user` |  |

Operations: list.

API path: `/workspaces/{workspace}/projects/{project_key}/permissions-config/users`

#### PaginatedPullrequest

| Field | Description |
| --- | --- |
| `author` |  |
| `close_source_branch` | A boolean flag indicating if merging the pull request closes the source branch. |
| `closed_by` |  |
| `comment_count` | The number of comments for a specific pull request. |
| `created_on` | The ISO8601 timestamp the request was created. |
| `destination` |  |
| `draft` | A boolean flag indicating whether the pull request is a draft. |
| `id` | The pull request's unique ID. |
| `links` |  |
| `merge_commit` |  |
| `next` | Link to the next page if it exists. |
| `page` | Page number of the current results. |
| `pagelen` | Current number of objects on the existing page. |
| `participants` | The list of users that are collaborating on this pull request. |
| `previous` | Link to previous page if it exists. |
| `queued` | A boolean flag indicating whether the pull request is queued |
| `reason` | Explains why a pull request was declined. |
| `rendered` | User provided pull request text, interpreted in a markup language and rendered in HTML |
| `reviewers` | The list of users that were added as reviewers on this pull request when it was created. |
| `size` | Total number of objects in the response. |
| `source` |  |
| `state` | The pull request's current status. |
| `summary` |  |
| `task_count` | The number of open tasks for a specific pull request. |
| `title` | Title of the pull request. |
| `type` |  |
| `updated_on` | The ISO8601 timestamp the request was last updated. |
| `values` |  |

Operations: list, load.

API path: `/repositories/{workspace}/{repo_slug}/commit/{commit}/pullrequests`

#### PaginatedPullrequestComment

| Field | Description |
| --- | --- |
| `content` |  |
| `created_on` |  |
| `deleted` |  |
| `id` |  |
| `inline` |  |
| `links` |  |
| `parent` |  |
| `pending` |  |
| `pullrequest` |  |
| `resolution` | The resolution object for a Comment. |
| `type` |  |
| `updated_on` |  |
| `user` |  |

Operations: list.

API path: `/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments`

#### PaginatedRef

| Field | Description |
| --- | --- |
| `links` |  |
| `name` | The name of the ref. |
| `target` |  |
| `type` |  |

Operations: list.

API path: `/repositories/{workspace}/{repo_slug}/refs`

#### PaginatedReport

| Field | Description |
| --- | --- |
| `created_on` | The timestamp when the report was created. |
| `data` | An array of data fields to display information on the report. |
| `details` | A string to describe the purpose of the report. |
| `external_id` | ID of the report provided by the report creator. |
| `link` | A URL linking to the results of the report in an external tool. |
| `logo_url` | A URL to the report logo. |
| `remote_link_enabled` | If enabled, a remote link is created in Jira for the work item associated with the commit the report belongs to. |
| `report_type` | The type of the report. |
| `reporter` | A string to describe the tool or company who created the report. |
| `result` | The state of the report. |
| `title` | The title of the report. |
| `type` |  |
| `updated_on` | The timestamp when the report was updated. |
| `uuid` | The UUID that can be used to identify the report. |

Operations: list.

API path: `/repositories/{workspace}/{repo_slug}/commit/{commit}/reports`

#### PaginatedRepository

| Field | Description |
| --- | --- |
| `created_on` |  |
| `description` |  |
| `fork_policy` | Controls the rules for forking this repository. |
| `full_name` | The concatenation of the repository owner's username and the slugified name, e.g. |
| `has_issues` | The issue tracker for this repository is enabled. |
| `has_wiki` | The wiki for this repository is enabled. |
| `id` |  |
| `is_private` |  |
| `language` |  |
| `links` |  |
| `mainbranch` |  |
| `name` |  |
| `next` | Link to the next page if it exists. |
| `owner` |  |
| `page` | Page number of the current results. |
| `pagelen` | Current number of objects on the existing page. |
| `parent` |  |
| `previous` | Link to previous page if it exists. |
| `project` |  |
| `scm` |  |
| `size` | Total number of objects in the response. |
| `type` |  |
| `updated_on` |  |
| `uuid` | The repository's immutable id. |
| `values` |  |

Operations: list, load.

API path: `/repositories/{workspace}/{repo_slug}/forks`

#### PaginatedRepositoryGroupPermission

| Field | Description |
| --- | --- |
| `group` |  |
| `links` |  |
| `permission` |  |
| `repository` |  |
| `type` |  |

Operations: list.

API path: `/repositories/{workspace}/{repo_slug}/permissions-config/groups`

#### PaginatedRepositoryPermission

| Field | Description |
| --- | --- |
| `next` | Link to the next page if it exists. |
| `page` | Page number of the current results. |
| `pagelen` | Current number of objects on the existing page. |
| `permission` |  |
| `previous` | Link to previous page if it exists. |
| `repository` |  |
| `size` | Total number of objects in the response. |
| `type` |  |
| `user` |  |
| `values` |  |

Operations: list, load.

API path: `/user/workspaces/{workspace}/permissions/repositories`

#### PaginatedRepositoryUserPermission

| Field | Description |
| --- | --- |
| `links` |  |
| `permission` |  |
| `repository` |  |
| `type` |  |
| `user` |  |

Operations: list.

API path: `/repositories/{workspace}/{repo_slug}/permissions-config/users`

#### PaginatedSnippet

| Field | Description |
| --- | --- |
| `id` |  |
| `next` | Link to the next page if it exists. |
| `page` | Page number of the current results. |
| `pagelen` | Current number of objects on the existing page. |
| `previous` | Link to previous page if it exists. |
| `size` | Total number of objects in the response. |
| `values` |  |

Operations: load.

API path: `/snippets/{workspace}`

#### PaginatedSnippetComment

| Field | Description |
| --- | --- |
| `links` |  |
| `snippet` |  |
| `type` |  |

Operations: list.

API path: `/snippets/{workspace}/{encoded_id}/comments`

#### PaginatedSnippetCommit

| Field | Description |
| --- | --- |
| `author` |  |
| `committer` |  |
| `date` |  |
| `hash` |  |
| `links` |  |
| `message` |  |
| `parents` |  |
| `snippet` |  |
| `summary` |  |
| `type` |  |

Operations: list.

API path: `/snippets/{workspace}/{encoded_id}/commits`

#### PaginatedSshUserKey

| Field | Description |
| --- | --- |
| `comment` | The comment parsed from the SSH key (if present) |
| `created_on` |  |
| `expires_on` |  |
| `fingerprint` | The SSH key fingerprint in SHA-256 format. |
| `key` | The SSH public key value in OpenSSH format. |
| `label` | The user-defined label for the SSH key |
| `last_used` |  |
| `links` |  |
| `owner` |  |
| `type` |  |
| `uuid` | The SSH key's immutable ID. |

Operations: list.

API path: `/users/{selected_user}/ssh-keys`

#### PaginatedTag

| Field | Description |
| --- | --- |
| `date` | The date that the tag was created, if available |
| `links` |  |
| `message` | The message associated with the tag, if available. |
| `name` | The name of the ref. |
| `tagger` |  |
| `target` |  |
| `type` |  |

Operations: list.

API path: `/repositories/{workspace}/{repo_slug}/refs/tags`

#### PaginatedTask

| Field | Description |
| --- | --- |
| `comment` |  |
| `content` |  |
| `created_on` |  |
| `creator` |  |
| `id` |  |
| `links` |  |
| `pending` |  |
| `resolved_by` |  |
| `resolved_on` | The ISO8601 timestamp for when the task was resolved. |
| `state` |  |
| `updated_on` |  |

Operations: list.

API path: `/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks`

#### PaginatedTreeentry

| Field | Description |
| --- | --- |
| `commit` |  |
| `id` |  |
| `next` | Link to the next page if it exists. |
| `page` | Page number of the current results. |
| `pagelen` | Current number of objects on the existing page. |
| `path` | The path in the repository |
| `previous` | Link to previous page if it exists. |
| `size` | Total number of objects in the response. |
| `type` |  |
| `values` |  |

Operations: list, load.

API path: `/repositories/{workspace}/{repo_slug}/src`

#### PaginatedWebhookSubscription

| Field | Description |
| --- | --- |
| `active` | Whether or not the webhook subscription is enabled. |
| `created_at` | The timestamp when the webhook subscription was created. |
| `description` | A user-defined description of the webhook. |
| `events` | The events this webhook is subscribed to. |
| `links` | A link to a resource related to this object. |
| `secret` | The secret to associate with the hook. |
| `secret_set` | Indicates whether or not the hook has an associated secret. |
| `subject` | Base type for most resource objects. |
| `subject_type` | The type of entity. |
| `type` |  |
| `url` | The URL events get delivered to. |
| `uuid` | The webhook's id. |

Operations: list.

API path: `/repositories/{workspace}/{repo_slug}/hooks`

#### PaginatedWorkspaceAccess

| Field | Description |
| --- | --- |
| `administrator` | The permission level the user has for the workspace. |
| `type` |  |
| `workspace` |  |

Operations: list.

API path: `/user/workspaces`

#### PaginatedWorkspaceMembership

| Field | Description |
| --- | --- |
| `links` |  |
| `type` |  |
| `user` |  |
| `workspace` |  |

Operations: list.

API path: `/workspaces/{workspace}/members`

#### Pipeline

| Field | Description |
| --- | --- |
| `build_number` | The build number of the pipeline. |
| `build_seconds_used` | The number of build seconds used by this pipeline. |
| `completed_on` | The timestamp when the Pipeline was completed. |
| `configuration_sources` | An ordered list of sources of the pipeline configuration |
| `created_on` | The timestamp when the pipeline was created. |
| `creator` | The Bitbucket account that was used to create the pipeline. |
| `id` |  |
| `links` |  |
| `repository` |  |
| `state` |  |
| `target` | The target that the pipeline built. |
| `trigger` | The trigger used for the pipeline. |
| `type` |  |
| `uuid` | The UUID identifying the pipeline. |
| `variables` | The variables for the pipeline. |

Operations: create, load, remove.

API path: `/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/stopPipeline`

#### PipelineBuildNumber

| Field | Description |
| --- | --- |
| `next` | The next number that will be used as build number. |
| `type` |  |

Operations: update.

API path: `/repositories/{workspace}/{repo_slug}/pipelines_config/build_number`

#### PipelineCacheContentUri

| Field | Description |
| --- | --- |
| `uri` | The uri for pipeline cache content. |

Operations: load.

API path: `/repositories/{workspace}/{repo_slug}/pipelines-config/caches/{cache_uuid}/content-uri`

#### PipelineKnownHost

| Field | Description |
| --- | --- |
| `hostname` | The hostname of the known host. |
| `id` |  |
| `public_key` | The public key of the known host. |
| `type` |  |
| `uuid` | The UUID identifying the known host. |

Operations: create, load, update.

API path: `/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts`

#### PipelineRunner

| Field | Description |
| --- | --- |
| `created_on` | The timestamp when the runner was created. |
| `id` |  |
| `labels` | Labels assigned to the runner for identification and routing. |
| `name` | The name of the runner. |
| `oauth_client` | OAuth client configuration for the runner. |
| `state` | The current state of the runner. |
| `type` |  |
| `updated_on` | The timestamp when the runner was last updated. |
| `uuid` | The UUID identifying the runner. |

Operations: create, load, update.

API path: `/repositories/{workspace}/{repo_slug}/pipelines-config/runners`

#### PipelineSchedule

| Field | Description |
| --- | --- |
| `created_on` | The timestamp when the schedule was created. |
| `cron_pattern` | The cron expression with second precision (7 fields) that the schedule applies. |
| `enabled` | Whether the schedule is enabled. |
| `id` |  |
| `target` | The target on which the schedule will be executed. |
| `type` |  |
| `updated_on` | The timestamp when the schedule was updated. |
| `uuid` | The UUID identifying the schedule. |

Operations: create, load, update.

API path: `/repositories/{workspace}/{repo_slug}/pipelines_config/schedules`

#### PipelineSshKeyPair

| Field | Description |
| --- | --- |
| `private_key` | The SSH private key. |
| `public_key` | The SSH public key. |
| `type` |  |

Operations: load, update.

API path: `/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair`

#### PipelineStep

| Field | Description |
| --- | --- |
| `completed_on` | The timestamp when the step execution was completed. |
| `id` |  |
| `image` | The Docker image used as the build container for the step. |
| `script_commands` | The list of build commands. |
| `setup_commands` | The list of commands that are executed as part of the setup phase of the build. |
| `started_on` | The timestamp when the step execution was started. |
| `state` | The current state of the step |
| `type` |  |
| `uuid` | The UUID identifying the step. |

Operations: load.

API path: `/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}`

#### PipelineVariable

| Field | Description |
| --- | --- |
| `id` |  |
| `key` | The unique name of the variable. |
| `secured` | If true, this variable will be treated as secured. |
| `type` |  |
| `uuid` | The UUID identifying the variable. |
| `value` | The value of the variable. |

Operations: create, load, update.

API path: `/repositories/{workspace}/{repo_slug}/pipelines_config/variables`

#### PipelinesConfig

| Field | Description |
| --- | --- |
| `enabled` | Whether Pipelines is enabled for the repository. |
| `repository` |  |
| `type` |  |

Operations: load, update.

API path: `/repositories/{workspace}/{repo_slug}/pipelines_config`

#### Project

| Field | Description |
| --- | --- |
| `created_on` |  |
| `description` |  |
| `has_publicly_visible_repos` | Indicates whether the project contains publicly visible repositories. |
| `id` |  |
| `is_private` | Indicates whether the project is publicly accessible, or whether it is private to the team and consequently only visible to team members. |
| `key` | The project's key. |
| `links` |  |
| `name` | The name of the project. |
| `owner` |  |
| `type` |  |
| `updated_on` |  |
| `uuid` | The project's immutable id. |

Operations: create, load, remove, update.

API path: `/workspaces/{workspace}/projects`

#### ProjectBranchingModel

| Field | Description |
| --- | --- |
| `branch_types` | The active branch types. |
| `development` |  |
| `production` |  |
| `type` |  |

Operations: list.

API path: `/workspaces/{workspace}/projects/{project_key}/branching-model`

#### ProjectDeployKey

| Field | Description |
| --- | --- |
| `added_on` |  |
| `comment` | The comment parsed from the deploy key (if present) |
| `created_by` |  |
| `id` |  |
| `key` | The deploy key value. |
| `label` | The user-defined label for the deploy key |
| `last_used` |  |
| `links` |  |
| `project` |  |
| `type` |  |

Operations: create, load.

API path: `/workspaces/{workspace}/projects/{project_key}/deploy-keys`

#### ProjectGroupPermission

| Field | Description |
| --- | --- |
| `group` |  |
| `links` |  |
| `permission` |  |
| `project` |  |
| `type` |  |

Operations: load, update.

API path: `/workspaces/{workspace}/projects/{project_key}/permissions-config/groups/{group_slug}`

#### ProjectUserPermission

| Field | Description |
| --- | --- |
| `links` |  |
| `permission` |  |
| `project` |  |
| `type` |  |
| `user` |  |

Operations: load, update.

API path: `/workspaces/{workspace}/projects/{project_key}/permissions-config/users/{selected_user_id}`

#### Property

| Field | Description |
| --- | --- |
| `attributes` |  |
| `id` |  |

Operations: remove, update.

API path: `/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}`

#### Pullrequest

| Field | Description |
| --- | --- |
| `author` |  |
| `close_source_branch` | A boolean flag indicating if merging the pull request closes the source branch. |
| `closed_by` |  |
| `comment_count` | The number of comments for a specific pull request. |
| `created_on` | The ISO8601 timestamp the request was created. |
| `destination` |  |
| `draft` | A boolean flag indicating whether the pull request is a draft. |
| `id` | The pull request's unique ID. |
| `links` |  |
| `merge_commit` |  |
| `participants` | The list of users that are collaborating on this pull request. |
| `queued` | A boolean flag indicating whether the pull request is queued |
| `reason` | Explains why a pull request was declined. |
| `rendered` | User provided pull request text, interpreted in a markup language and rendered in HTML |
| `reviewers` | The list of users that were added as reviewers on this pull request when it was created. |
| `source` |  |
| `state` | The pull request's current status. |
| `summary` |  |
| `task_count` | The number of open tasks for a specific pull request. |
| `title` | Title of the pull request. |
| `type` |  |
| `updated_on` | The ISO8601 timestamp the request was last updated. |

Operations: create, load, remove, update.

API path: `/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/decline`

#### PullrequestComment

| Field | Description |
| --- | --- |
| `content` |  |
| `created_on` |  |
| `deleted` |  |
| `id` |  |
| `inline` |  |
| `links` |  |
| `parent` |  |
| `pending` |  |
| `pullrequest` |  |
| `resolution` | The resolution object for a Comment. |
| `type` |  |
| `updated_on` |  |
| `user` |  |

Operations: create, load, remove, update.

API path: `/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments`

#### PullrequestCommentTask

| Field | Description |
| --- | --- |
| `comment` |  |
| `content` | task raw content |
| `created_on` |  |
| `creator` |  |
| `id` |  |
| `links` |  |
| `pending` |  |
| `resolved_by` |  |
| `resolved_on` | The ISO8601 timestamp for when the task was resolved. |
| `state` |  |
| `updated_on` |  |

Operations: create, load, update.

API path: `/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks`

#### PullrequestMergeabilityCheck

| Field | Description |
| --- | --- |
| `blocking` | Whether this check is currently preventing the pull request from being merged. |
| `required` | Whether this check must pass for the pull request to be mergeable. |
| `status` | Whether this check passed. |
| `type` |  |

Operations: list.

API path: `/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/mergeability/checks`

#### Ref

| Field | Description |
| --- | --- |

Operations: remove.

API path: `/repositories/{workspace}/{repo_slug}/refs/branches/{name}`

#### Report

| Field | Description |
| --- | --- |
| `created_on` | The timestamp when the report was created. |
| `data` | An array of data fields to display information on the report. |
| `details` | A string to describe the purpose of the report. |
| `external_id` | ID of the report provided by the report creator. |
| `id` |  |
| `link` | A URL linking to the results of the report in an external tool. |
| `logo_url` | A URL to the report logo. |
| `remote_link_enabled` | If enabled, a remote link is created in Jira for the work item associated with the commit the report belongs to. |
| `report_type` | The type of the report. |
| `reporter` | A string to describe the tool or company who created the report. |
| `result` | The state of the report. |
| `title` | The title of the report. |
| `type` |  |
| `updated_on` | The timestamp when the report was updated. |
| `uuid` | The UUID that can be used to identify the report. |

Operations: load, remove, update.

API path: `/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}`

#### ReportAnnotation

| Field | Description |
| --- | --- |
| `annotation_type` | The type of the report. |
| `created_on` | The timestamp when the report was created. |
| `details` | The details to show to users when clicking on the annotation. |
| `external_id` | ID of the annotation provided by the annotation creator. |
| `id` |  |
| `line` | The line number that the annotation should belong to. |
| `link` | A URL linking to the annotation in an external tool. |
| `path` | The path of the file on which this annotation should be placed. |
| `report_annotations` | The annotations to create or update |
| `result` | The state of the report. |
| `severity` | The severity of the annotation. |
| `summary` | The message to display to users. |
| `type` |  |
| `updated_on` | The timestamp when the report was updated. |
| `uuid` | The UUID that can be used to identify the annotation. |

Operations: create, load, update.

API path: `/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations`

#### Repository

| Field | Description |
| --- | --- |
| `created_on` |  |
| `description` |  |
| `fork_policy` | Controls the rules for forking this repository. |
| `full_name` | The concatenation of the repository owner's username and the slugified name, e.g. |
| `has_issues` | The issue tracker for this repository is enabled. |
| `has_wiki` | The wiki for this repository is enabled. |
| `id` |  |
| `is_private` |  |
| `language` |  |
| `links` |  |
| `mainbranch` |  |
| `name` |  |
| `owner` |  |
| `parent` |  |
| `project` |  |
| `scm` |  |
| `size` |  |
| `type` |  |
| `updated_on` |  |
| `uuid` | The repository's immutable id. |

Operations: create, load, remove, update.

API path: `/repositories/{workspace}/{repo_slug}`

#### RepositoryGroupPermission

| Field | Description |
| --- | --- |
| `group` |  |
| `links` |  |
| `permission` |  |
| `repository` |  |
| `type` |  |

Operations: load, update.

API path: `/repositories/{workspace}/{repo_slug}/permissions-config/groups/{group_slug}`

#### RepositoryInheritanceState

| Field | Description |
| --- | --- |
| `override_settings` |  |
| `type` |  |

Operations: load.

API path: `/repositories/{workspace}/{repo_slug}/override-settings`

#### RepositoryUserPermission

| Field | Description |
| --- | --- |
| `links` |  |
| `permission` |  |
| `repository` |  |
| `type` |  |
| `user` |  |

Operations: load, update.

API path: `/repositories/{workspace}/{repo_slug}/permissions-config/users/{selected_user_id}`

#### RequestChange

| Field | Description |
| --- | --- |
| `approved` |  |
| `participated_on` | The ISO8601 timestamp of the participant's action. |
| `role` |  |
| `state` |  |
| `type` |  |
| `user` |  |

Operations: create.

API path: `/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/request-changes`

#### SearchResultPage

| Field | Description |
| --- | --- |
| `content_match_count` |  |
| `content_matches` |  |
| `file` | A file object, representing a file at a commit in a repository |
| `path_matches` |  |
| `type` |  |

Operations: list.

API path: `/users/{selected_user}/search/code`

#### Snippet

| Field | Description |
| --- | --- |
| `bitbucket-sdk_id` |  |
| `created_on` |  |
| `creator` |  |
| `id` |  |
| `is_private` |  |
| `owner` |  |
| `scm` | The DVCS used to store the snippet. |
| `title` |  |
| `type` |  |
| `updated_on` |  |

Operations: create, load, remove, update.

API path: `/snippets/{workspace}`

#### SnippetComment

| Field | Description |
| --- | --- |
| `id` |  |
| `links` |  |
| `snippet` |  |
| `type` |  |

Operations: create, load, update.

API path: `/snippets/{workspace}/{encoded_id}/comments`

#### SnippetCommit

| Field | Description |
| --- | --- |
| `author` |  |
| `committer` |  |
| `date` |  |
| `hash` |  |
| `id` |  |
| `links` |  |
| `message` |  |
| `parents` |  |
| `snippet` |  |
| `summary` |  |
| `type` |  |

Operations: load.

API path: `/snippets/{workspace}/{encoded_id}/commits/{revision}`

#### Source

| Field | Description |
| --- | --- |

Operations: create.

API path: `/repositories/{workspace}/{repo_slug}/src`

#### Ssh

| Field | Description |
| --- | --- |

Operations: remove.

API path: `/users/{selected_user}/ssh-keys/{key_id}`

#### SshAccountKey

| Field | Description |
| --- | --- |
| `comment` | The comment parsed from the SSH key (if present) |
| `created_on` |  |
| `expires_on` |  |
| `fingerprint` | The SSH key fingerprint in SHA-256 format. |
| `key` | The SSH public key value in OpenSSH format. |
| `label` | The user-defined label for the SSH key |
| `last_used` |  |
| `links` |  |
| `owner` |  |
| `type` |  |
| `uuid` | The SSH key's immutable ID. |

Operations: create, load, update.

API path: `/users/{selected_user}/ssh-keys`

#### Tag

| Field | Description |
| --- | --- |
| `date` | The date that the tag was created, if available |
| `id` |  |
| `links` |  |
| `message` | The message associated with the tag, if available. |
| `name` | The name of the ref. |
| `tagger` |  |
| `target` |  |
| `type` |  |

Operations: create, load.

API path: `/repositories/{workspace}/{repo_slug}/refs/tags`

#### User

| Field | Description |
| --- | --- |
| `account_id` | The user's Atlassian account ID. |
| `account_status` | The status of the account. |
| `created_on` |  |
| `display_name` |  |
| `has_2fa_enabled` |  |
| `id` |  |
| `is_staff` |  |
| `links` | Links related to an Account. |
| `nickname` | Account name defined by the owner. |
| `type` |  |
| `uuid` |  |

Operations: load, update.

API path: `/workspaces/{workspace}/projects/{project_key}/default-reviewers/{selected_user}`

#### Watcher

| Field | Description |
| --- | --- |
| `created_on` |  |
| `display_name` |  |
| `links` | Links related to an Account. |
| `type` |  |
| `uuid` |  |

Operations: list.

API path: `/snippets/{workspace}/{encoded_id}/watchers`

#### WebhookSubscription

| Field | Description |
| --- | --- |
| `active` | Whether or not the webhook subscription is enabled. |
| `created_at` | The timestamp when the webhook subscription was created. |
| `description` | A user-defined description of the webhook. |
| `events` | The events this webhook is subscribed to. |
| `links` | A link to a resource related to this object. |
| `secret` | The secret to associate with the hook. |
| `secret_set` | Indicates whether or not the hook has an associated secret. |
| `subject` | Base type for most resource objects. |
| `subject_type` | The type of entity. |
| `type` |  |
| `url` | The URL events get delivered to. |
| `uuid` | The webhook's id. |

Operations: create, load, update.

API path: `/repositories/{workspace}/{repo_slug}/hooks`

#### Workspace

| Field | Description |
| --- | --- |
| `created_on` |  |
| `forking_mode` | Controls the rules for forking repositories within this workspace. |
| `id` |  |
| `is_personal` | Indicates whether the workspace belongs to an individual user. |
| `is_privacy_enforced` | Indicates whether the workspace enforces private content, or whether it allows public content. |
| `is_private` | Indicates whether the workspace is publicly accessible, or whether it is private to the members and consequently only visible to members. |
| `links` |  |
| `name` | The name of the workspace. |
| `slug` | The short label that identifies this workspace. |
| `type` |  |
| `updated_on` |  |
| `uuid` | The workspace's immutable id. |

Operations: load, remove.

API path: `/workspaces/{workspace}`

#### WorkspaceMembership

| Field | Description |
| --- | --- |
| `id` |  |
| `links` |  |
| `type` |  |
| `user` |  |
| `workspace` |  |

Operations: load.

API path: `/workspaces/{workspace}/members/{member}`



## Entities


### Addon

Create an instance: `const addon = client.Addon()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Example: Load

```ts
const addon = await client.Addon().load({ addon_key: 'addon_key' })
```


### ApplicationProperty

Create an instance: `const application_property = client.ApplicationProperty()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attributes` | `any[]` |  |
| `id` | `string` |  |

#### Example: Load

```ts
const application_property = await client.ApplicationProperty().load({ app_key: 'app_key', property_name: 'property_name' })
```


### Approve

Create an instance: `const approve = client.Approve()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `approved` | `boolean` |  |
| `participated_on` | `string` | The ISO8601 timestamp of the participant's action. |
| `role` | `string` |  |
| `state` | `string` |  |
| `type` | `string` |  |
| `user` | `any` |  |

#### Example: Create

```ts
const approve = await client.Approve().create({
  pullrequest_id: 1,
  repo_slug: 'example_repo_slug',
  workspace: 'example_workspace',
  type: 'example_type',
})
```


### Branch

Create an instance: `const branch = client.Branch()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `default_merge_strategy` | `string` | The default merge strategy for pull requests targeting this branch. |
| `id` | `string` |  |
| `links` | `Record<string, any>` |  |
| `merge_strategies` | `any[]` | Available merge strategies for pull requests targeting this branch. |
| `name` | `string` | The name of the ref. |
| `target` | `any` |  |
| `type` | `string` |  |

#### Example: Load

```ts
const branch = await client.Branch().load({ id: 'branch_id', repo_slug: 'repo_slug', workspace: 'workspace' })
```

#### Example: Create

```ts
const branch = await client.Branch().create({
  repo_slug: 'example_repo_slug',
  workspace: 'example_workspace',
  type: 'example_type',
})
```


### BranchingModel

Create an instance: `const branching_model = client.BranchingModel()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `branch_types` | `any[]` | The active branch types. |
| `development` | `Record<string, any>` |  |
| `production` | `Record<string, any>` |  |
| `type` | `string` |  |

#### Example: List

```ts
const branching_models = await client.BranchingModel().list({ repo_slug: "example", workspace: "example" })
```


### BranchingModelSetting

Create an instance: `const branching_model_setting = client.BranchingModelSetting()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `branch_types` | `any[]` |  |
| `development` | `Record<string, any>` |  |
| `links` | `Record<string, any>` |  |
| `production` | `Record<string, any>` |  |
| `type` | `string` |  |

#### Example: List

```ts
const branching_model_settings = await client.BranchingModelSetting().list({ repo_slug: "example", workspace: "example" })
```


### Branchrestriction

Create an instance: `const branchrestriction = client.Branchrestriction()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `branch_match_kind` | `string` | Indicates how the restriction is matched against a branch. |
| `branch_type` | `string` | Apply the restriction to branches of this type. |
| `groups` | `any[]` |  |
| `id` | `number` | The branch restriction status' id. |
| `kind` | `string` | The type of restriction that is being applied. |
| `links` | `Record<string, any>` |  |
| `pattern` | `string` | Apply the restriction to branches that match this pattern. |
| `pipelines_source_branches` | `any[]` | List of source branch names allowed to push back to the restricted branch. |
| `type` | `string` |  |
| `users` | `any[]` |  |
| `value` | `number` | Value with kind-specific semantics: * `require_approvals_to_merge` uses it to require a minimum number of approvals on a PR. |

#### Example: Load

```ts
const branchrestriction = await client.Branchrestriction().load({ id: 'branchrestriction_id', repo_slug: 'repo_slug', workspace: 'workspace' })
```

#### Example: Create

```ts
const branchrestriction = await client.Branchrestriction().create({
  repo_slug: 'example_repo_slug',
  workspace: 'example_workspace',
  branch_match_kind: 'example_branch_match_kind',
  kind: 'example_kind',
  pattern: 'example_pattern',
  type: 'example_type',
})
```


### CommentResolution

Create an instance: `const comment_resolution = client.CommentResolution()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_on` | `string` | The ISO8601 timestamp the resolution was created. |
| `id` | `string` |  |
| `type` | `string` |  |
| `user` | `any` |  |

#### Example: Create

```ts
const comment_resolution = await client.CommentResolution().create({
  id: 1,
  pullrequest_id: 1,
  repo_slug: 'example_repo_slug',
  workspace: 'example_workspace',
  type: 'example_type',
})
```


### Commit

Create an instance: `const commit = client.Commit()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | `any` |  |
| `commit` | `any` |  |
| `committer` | `any` |  |
| `content` | `Record<string, any>` |  |
| `created_on` | `string` |  |
| `date` | `string` |  |
| `deleted` | `boolean` |  |
| `hash` | `string` |  |
| `id` | `number` |  |
| `inline` | `Record<string, any>` |  |
| `links` | `Record<string, any>` |  |
| `message` | `string` |  |
| `parent` | `any` |  |
| `parents` | `any[]` |  |
| `participants` | `any[]` |  |
| `repository` | `any` |  |
| `summary` | `Record<string, any>` |  |
| `type` | `string` |  |
| `updated_on` | `string` |  |
| `user` | `any` |  |

#### Example: Load

```ts
const commit = await client.Commit().load({ id: 'commit_id', repo_slug: 'repo_slug', workspace: 'workspace' })
```

#### Example: List

```ts
const commits = await client.Commit().list({ id: "example", repo_slug: "example", workspace: "example" })
```


### Commitstatus

Create an instance: `const commitstatus = client.Commitstatus()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_on` | `string` |  |
| `description` | `string` | A description of the build (e.g. |
| `key` | `string` | An identifier for the status that's unique to its type (current "build" is the only supported type) and the vendor, e.g. |
| `links` | `Record<string, any>` |  |
| `name` | `string` | An identifier for the build itself, e.g. |
| `refname` | `string` | The name of the ref that pointed to this commit at the time the status object was created. |
| `state` | `string` | Provides some indication of the status of this commit |
| `type` | `string` |  |
| `updated_on` | `string` |  |
| `url` | `string` | A URL linking back to the vendor or build system, for providing more information about whatever process produced this status. |

#### Example: Load

```ts
const commitstatus = await client.Commitstatus().load({ commit_id: 'commit_id', key: 'key', repo_slug: 'repo_slug', workspace: 'workspace' })
```

#### Example: Create

```ts
const commitstatus = await client.Commitstatus().create({
  commit_id: 'example_commit_id',
  repo_slug: 'example_repo_slug',
  workspace: 'example_workspace',
  key: 'example_key',
  state: 'example_state',
  type: 'example_type',
})
```


### DefaultReviewer

Create an instance: `const default_reviewer = client.DefaultReviewer()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_on` | `string` |  |
| `display_name` | `string` |  |
| `id` | `string` |  |
| `links` | `Record<string, any>` | Links related to an Account. |
| `type` | `string` |  |
| `uuid` | `string` |  |

#### Example: Load

```ts
const default_reviewer = await client.DefaultReviewer().load({ id: 'default_reviewer_id', repo_slug: 'repo_slug', workspace: 'workspace' })
```


### DeployKey

Create an instance: `const deploy_key = client.DeployKey()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `added_on` | `string` |  |
| `comment` | `string` | The comment parsed from the deploy key (if present) |
| `id` | `string` |  |
| `key` | `string` | The deploy key value. |
| `label` | `string` | The user-defined label for the deploy key |
| `last_used` | `string` |  |
| `links` | `Record<string, any>` |  |
| `owner` | `any` |  |
| `repository` | `any` |  |
| `type` | `string` |  |

#### Example: Load

```ts
const deploy_key = await client.DeployKey().load({ id: 'deploy_key_id', repo_slug: 'repo_slug', workspace: 'workspace' })
```

#### Example: Create

```ts
const deploy_key = await client.DeployKey().create({
  repo_slug: 'example_repo_slug',
  workspace: 'example_workspace',
  type: 'example_type',
})
```


### Deployment

Create an instance: `const deployment = client.Deployment()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `environment` | `any` | A deployment environment. |
| `id` | `string` |  |
| `release` | `any` | The release associated with this deployment. |
| `state` | `any` |  |
| `type` | `string` |  |
| `uuid` | `string` | The UUID identifying the deployment. |

#### Example: Load

```ts
const deployment = await client.Deployment().load({ id: 'deployment_id', repo_slug: 'repo_slug', workspace: 'workspace' })
```

#### Example: Create

```ts
const deployment = await client.Deployment().create({
  environment_uuid: 'example_environment_uuid',
  repo_slug: 'example_repo_slug',
  workspace: 'example_workspace',
  type: 'example_type',
})
```


### DeploymentEnvironment

Create an instance: `const deployment_environment = client.DeploymentEnvironment()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `name` | `string` | The name of the environment. |
| `type` | `string` |  |
| `uuid` | `string` | The UUID identifying the environment. |

#### Example: Load

```ts
const deployment_environment = await client.DeploymentEnvironment().load({ id: 'deployment_environment_id', repo_slug: 'repo_slug', workspace: 'workspace' })
```

#### Example: Create

```ts
const deployment_environment = await client.DeploymentEnvironment().create({
  repo_slug: 'example_repo_slug',
  workspace: 'example_workspace',
  type: 'example_type',
})
```


### DeploymentVariable

Create an instance: `const deployment_variable = client.DeploymentVariable()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `key` | `string` | The unique name of the variable. |
| `secured` | `boolean` | If true, this variable will be treated as secured. |
| `type` | `string` |  |
| `uuid` | `string` | The UUID identifying the variable. |
| `value` | `string` | The value of the variable. |

#### Example: Create

```ts
const deployment_variable = await client.DeploymentVariable().create({
  environment_id: 'example_environment_id',
  repo_slug: 'example_repo_slug',
  workspace: 'example_workspace',
  type: 'example_type',
})
```


### Download

Create an instance: `const download = client.Download()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```ts
const download = await client.Download().load({ id: 'download_id', repo_slug: 'repo_slug', workspace: 'workspace' })
```

#### Example: Create

```ts
const download = await client.Download().create({
  repo_slug: 'example_repo_slug',
  workspace: 'example_workspace',
})
```


### EffectiveDefaultReviewer

Create an instance: `const effective_default_reviewer = client.EffectiveDefaultReviewer()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `reviewer_type` | `string` |  |
| `type` | `string` |  |
| `user` | `any` |  |

#### Example: List

```ts
const effective_default_reviewers = await client.EffectiveDefaultReviewer().list({ repo_slug: "example", workspace: "example" })
```


### EffectiveRepoBranchingModel

Create an instance: `const effective_repo_branching_model = client.EffectiveRepoBranchingModel()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `branch_types` | `any[]` | The active branch types. |
| `development` | `Record<string, any>` |  |
| `production` | `Record<string, any>` |  |
| `type` | `string` |  |

#### Example: List

```ts
const effective_repo_branching_models = await client.EffectiveRepoBranchingModel().list({ repo_slug: "example", workspace: "example" })
```


### Gpg

Create an instance: `const gpg = client.Gpg()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### GpgAccountKey

Create an instance: `const gpg_account_key = client.GpgAccountKey()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `added_on` | `string` |  |
| `created_on` | `string` |  |
| `expires_on` | `string` |  |
| `fingerprint` | `string` | The GPG key fingerprint. |
| `key` | `string` | The GPG key value in X format. |
| `key_id` | `string` | The unique identifier for the GPG key |
| `last_used` | `string` |  |
| `links` | `Record<string, any>` |  |
| `name` | `string` | The user-defined label for the GPG key |
| `owner` | `any` |  |
| `parent_fingerprint` | `string` | The fingerprint of the parent key. |
| `subkeys` | `any[]` |  |
| `type` | `string` |  |

#### Example: Load

```ts
const gpg_account_key = await client.GpgAccountKey().load({ fingerprint: 'fingerprint', selected_user: 'selected_user' })
```

#### Example: Create

```ts
const gpg_account_key = await client.GpgAccountKey().create({
  selected_user: 'example_selected_user',
  type: 'example_type',
})
```


### MergeQueue

Create an instance: `const merge_queue = client.MergeQueue()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `name` | `string` | The merge queue name. |
| `state` | `string` | The configuration state returned by the merge queue service. |
| `type` | `string` |  |
| `uuid` | `string` | The merge queue UUID. |

#### Example: Load

```ts
const merge_queue = await client.MergeQueue().load({ id: 'merge_queue_id', repo_slug: 'repo_slug', workspace: 'workspace' })
```


### MergeQueuePullrequest

Create an instance: `const merge_queue_pullrequest = client.MergeQueuePullrequest()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `last_activity_on` | `string` |  |
| `merge_queue` | `Record<string, any>` | A reference to the merge queue holding a pullrequest. |
| `pipeline` | `any` |  |
| `pullrequest` | `any` |  |
| `queued_on` | `string` |  |
| `rank` | `number` | The one-based position of the pullrequest in the merge queue. |
| `status` | `string` |  |
| `type` | `string` |  |

#### Example: Load

```ts
const merge_queue_pullrequest = await client.MergeQueuePullrequest().load({ merge_queue_id: 'merge_queue_id', pullrequest_id: 1, repo_slug: 'repo_slug', workspace: 'workspace' })
```


### PaginatedAccount

Create an instance: `const paginated_account = client.PaginatedAccount()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_on` | `string` |  |
| `display_name` | `string` |  |
| `links` | `Record<string, any>` | Links related to an Account. |
| `type` | `string` |  |
| `uuid` | `string` |  |

#### Example: List

```ts
const paginated_accounts = await client.PaginatedAccount().list({ repo_slug: "example", workspace: "example" })
```


### PaginatedAnnotation

Create an instance: `const paginated_annotation = client.PaginatedAnnotation()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `annotation_type` | `string` | The type of the report. |
| `created_on` | `string` | The timestamp when the report was created. |
| `details` | `string` | The details to show to users when clicking on the annotation. |
| `external_id` | `string` | ID of the annotation provided by the annotation creator. |
| `line` | `number` | The line number that the annotation should belong to. |
| `link` | `string` | A URL linking to the annotation in an external tool. |
| `path` | `string` | The path of the file on which this annotation should be placed. |
| `result` | `string` | The state of the report. |
| `severity` | `string` | The severity of the annotation. |
| `summary` | `string` | The message to display to users. |
| `type` | `string` |  |
| `updated_on` | `string` | The timestamp when the report was updated. |
| `uuid` | `string` | The UUID that can be used to identify the annotation. |

#### Example: List

```ts
const paginated_annotations = await client.PaginatedAnnotation().list({ commit_id: "example", repo_slug: "example", report_id: "example", workspace: "example" })
```


### PaginatedBranch

Create an instance: `const paginated_branch = client.PaginatedBranch()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `default_merge_strategy` | `string` | The default merge strategy for pull requests targeting this branch. |
| `links` | `Record<string, any>` |  |
| `merge_strategies` | `any[]` | Available merge strategies for pull requests targeting this branch. |
| `name` | `string` | The name of the ref. |
| `target` | `any` |  |
| `type` | `string` |  |

#### Example: List

```ts
const paginated_branchs = await client.PaginatedBranch().list({ repo_slug: "example", workspace: "example" })
```


### PaginatedBranchrestriction

Create an instance: `const paginated_branchrestriction = client.PaginatedBranchrestriction()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `branch_match_kind` | `string` | Indicates how the restriction is matched against a branch. |
| `branch_type` | `string` | Apply the restriction to branches of this type. |
| `groups` | `any[]` |  |
| `id` | `number` | The branch restriction status' id. |
| `kind` | `string` | The type of restriction that is being applied. |
| `links` | `Record<string, any>` |  |
| `pattern` | `string` | Apply the restriction to branches that match this pattern. |
| `pipelines_source_branches` | `any[]` | List of source branch names allowed to push back to the restricted branch. |
| `type` | `string` |  |
| `users` | `any[]` |  |
| `value` | `number` | Value with kind-specific semantics: * `require_approvals_to_merge` uses it to require a minimum number of approvals on a PR. |

#### Example: List

```ts
const paginated_branchrestrictions = await client.PaginatedBranchrestriction().list({ repo_slug: "example", workspace: "example" })
```


### PaginatedChangeset

Create an instance: `const paginated_changeset = client.PaginatedChangeset()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | `any` |  |
| `committer` | `any` |  |
| `date` | `string` |  |
| `hash` | `string` |  |
| `message` | `string` |  |
| `next` | `string` | Link to the next page if it exists. |
| `page` | `number` | Page number of the current results. |
| `pagelen` | `number` | Current number of objects on the existing page. |
| `parents` | `any[]` |  |
| `previous` | `string` | Link to previous page if it exists. |
| `size` | `number` | Total number of objects in the response. |
| `summary` | `Record<string, any>` |  |
| `type` | `string` |  |
| `values` | `any[]` |  |

#### Example: Load

```ts
const paginated_changeset = await client.PaginatedChangeset().load({ repo_slug: 'repo_slug', revision: 'revision', workspace: 'workspace' })
```

#### Example: List

```ts
const paginated_changesets = await client.PaginatedChangeset().list({ repo_slug: "example", workspace: "example" })
```

#### Example: Create

```ts
const paginated_changeset = await client.PaginatedChangeset().create({
  repo_slug: 'example_repo_slug',
  workspace: 'example_workspace',
  type: 'example_type',
})
```


### PaginatedCommitstatus

Create an instance: `const paginated_commitstatus = client.PaginatedCommitstatus()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_on` | `string` |  |
| `description` | `string` | A description of the build (e.g. |
| `key` | `string` | An identifier for the status that's unique to its type (current "build" is the only supported type) and the vendor, e.g. |
| `links` | `Record<string, any>` |  |
| `name` | `string` | An identifier for the build itself, e.g. |
| `refname` | `string` | The name of the ref that pointed to this commit at the time the status object was created. |
| `state` | `string` | Provides some indication of the status of this commit |
| `type` | `string` |  |
| `updated_on` | `string` |  |
| `url` | `string` | A URL linking back to the vendor or build system, for providing more information about whatever process produced this status. |

#### Example: List

```ts
const paginated_commitstatuss = await client.PaginatedCommitstatus().list({ commit_id: "example", repo_slug: "example", workspace: "example" })
```


### PaginatedDefaultReviewerAndType

Create an instance: `const paginated_default_reviewer_and_type = client.PaginatedDefaultReviewerAndType()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `reviewer_type` | `string` |  |
| `type` | `string` |  |
| `user` | `any` |  |

#### Example: List

```ts
const paginated_default_reviewer_and_types = await client.PaginatedDefaultReviewerAndType().list({ project_key: "example", workspace_id: "example" })
```


### PaginatedDeployKey

Create an instance: `const paginated_deploy_key = client.PaginatedDeployKey()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `added_on` | `string` |  |
| `comment` | `string` | The comment parsed from the deploy key (if present) |
| `key` | `string` | The deploy key value. |
| `label` | `string` | The user-defined label for the deploy key |
| `last_used` | `string` |  |
| `links` | `Record<string, any>` |  |
| `owner` | `any` |  |
| `repository` | `any` |  |
| `type` | `string` |  |

#### Example: List

```ts
const paginated_deploy_keys = await client.PaginatedDeployKey().list({ repo_slug: "example", workspace: "example" })
```


### PaginatedDeployment

Create an instance: `const paginated_deployment = client.PaginatedDeployment()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `environment` | `any` | A deployment environment. |
| `release` | `any` | The release associated with this deployment. |
| `state` | `any` |  |
| `type` | `string` |  |
| `uuid` | `string` | The UUID identifying the deployment. |

#### Example: List

```ts
const paginated_deployments = await client.PaginatedDeployment().list({ repo_slug: "example", workspace: "example" })
```


### PaginatedDeploymentVariable

Create an instance: `const paginated_deployment_variable = client.PaginatedDeploymentVariable()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `key` | `string` | The unique name of the variable. |
| `secured` | `boolean` | If true, this variable will be treated as secured. |
| `type` | `string` |  |
| `uuid` | `string` | The UUID identifying the variable. |
| `value` | `string` | The value of the variable. |

#### Example: List

```ts
const paginated_deployment_variables = await client.PaginatedDeploymentVariable().list({ environment_id: "example", repo_slug: "example", workspace: "example" })
```


### PaginatedDiffstat

Create an instance: `const paginated_diffstat = client.PaginatedDiffstat()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `next` | `string` | Link to the next page if it exists. |
| `page` | `number` | Page number of the current results. |
| `pagelen` | `number` | Current number of objects on the existing page. |
| `previous` | `string` | Link to previous page if it exists. |
| `size` | `number` | Total number of objects in the response. |
| `values` | `any[]` |  |

#### Example: Load

```ts
const paginated_diffstat = await client.PaginatedDiffstat().load({ id: 'paginated_diffstat_id', repo_slug: 'repo_slug', workspace: 'workspace' })
```


### PaginatedEnvironment

Create an instance: `const paginated_environment = client.PaginatedEnvironment()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `name` | `string` | The name of the environment. |
| `type` | `string` |  |
| `uuid` | `string` | The UUID identifying the environment. |

#### Example: List

```ts
const paginated_environments = await client.PaginatedEnvironment().list({ repo_slug: "example", workspace: "example" })
```


### PaginatedFile

Create an instance: `const paginated_file = client.PaginatedFile()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `next` | `string` | Link to the next page if it exists. |
| `page` | `number` | Page number of the current results. |
| `pagelen` | `number` | Current number of objects on the existing page. |
| `previous` | `string` | Link to previous page if it exists. |
| `size` | `number` | Total number of objects in the response. |
| `values` | `any[]` |  |

#### Example: Load

```ts
const paginated_file = await client.PaginatedFile().load({ commit: 'commit', path: 'path', repo_slug: 'repo_slug', workspace: 'workspace' })
```


### PaginatedFileConflict

Create an instance: `const paginated_file_conflict = client.PaginatedFileConflict()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `next` | `string` | Link to the next page if it exists. |
| `page` | `number` | Page number of the current results. |
| `pagelen` | `number` | Current number of objects on the existing page. |
| `previous` | `string` | Link to previous page if it exists. |
| `size` | `number` | Total number of objects in the response. |
| `values` | `any[]` |  |

#### Example: Load

```ts
const paginated_file_conflict = await client.PaginatedFileConflict().load({ id: 'paginated_file_conflict_id', repo_slug: 'repo_slug', workspace: 'workspace' })
```


### PaginatedGpgUserKey

Create an instance: `const paginated_gpg_user_key = client.PaginatedGpgUserKey()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `added_on` | `string` |  |
| `created_on` | `string` |  |
| `expires_on` | `string` |  |
| `fingerprint` | `string` | The GPG key fingerprint. |
| `key` | `string` | The GPG key value in X format. |
| `key_id` | `string` | The unique identifier for the GPG key |
| `last_used` | `string` |  |
| `links` | `Record<string, any>` |  |
| `name` | `string` | The user-defined label for the GPG key |
| `owner` | `any` |  |
| `parent_fingerprint` | `string` | The fingerprint of the parent key. |
| `subkeys` | `any[]` |  |
| `type` | `string` |  |

#### Example: List

```ts
const paginated_gpg_user_keys = await client.PaginatedGpgUserKey().list({ selected_user: "example" })
```


### PaginatedHookEvent

Create an instance: `const paginated_hook_event = client.PaginatedHookEvent()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `next` | `string` | Link to the next page if it exists. |
| `page` | `number` | Page number of the current results. |
| `pagelen` | `number` | Current number of objects on the existing page. |
| `previous` | `string` | Link to previous page if it exists. |
| `repository` | `Record<string, any>` |  |
| `size` | `number` | Total number of objects in the response. |
| `values` | `any[]` |  |
| `workspace` | `Record<string, any>` |  |

#### Example: Load

```ts
const paginated_hook_event = await client.PaginatedHookEvent().load({ id: 'paginated_hook_event_id' })
```


### PaginatedMergeQueue

Create an instance: `const paginated_merge_queue = client.PaginatedMergeQueue()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `name` | `string` | The merge queue name. |
| `state` | `string` | The configuration state returned by the merge queue service. |
| `type` | `string` |  |
| `uuid` | `string` | The merge queue UUID. |

#### Example: List

```ts
const paginated_merge_queues = await client.PaginatedMergeQueue().list({ repo_slug: "example", workspace: "example" })
```


### PaginatedMergeQueuePullrequest

Create an instance: `const paginated_merge_queue_pullrequest = client.PaginatedMergeQueuePullrequest()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `last_activity_on` | `string` |  |
| `merge_queue` | `Record<string, any>` | A reference to the merge queue holding a pullrequest. |
| `pipeline` | `any` |  |
| `pullrequest` | `any` |  |
| `queued_on` | `string` |  |
| `rank` | `number` | The one-based position of the pullrequest in the merge queue. |
| `status` | `string` |  |
| `type` | `string` |  |

#### Example: List

```ts
const paginated_merge_queue_pullrequests = await client.PaginatedMergeQueuePullrequest().list({ merge_queue_id: "example", repo_slug: "example", workspace: "example" })
```


### PaginatedPipeline

Create an instance: `const paginated_pipeline = client.PaginatedPipeline()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `build_number` | `number` | The build number of the pipeline. |
| `build_seconds_used` | `number` | The number of build seconds used by this pipeline. |
| `completed_on` | `string` | The timestamp when the Pipeline was completed. |
| `configuration_sources` | `any[]` | An ordered list of sources of the pipeline configuration |
| `created_on` | `string` | The timestamp when the pipeline was created. |
| `creator` | `any` | The Bitbucket account that was used to create the pipeline. |
| `links` | `any` |  |
| `repository` | `any` |  |
| `state` | `any` |  |
| `target` | `any` | The target that the pipeline built. |
| `trigger` | `any` | The trigger used for the pipeline. |
| `type` | `string` |  |
| `uuid` | `string` | The UUID identifying the pipeline. |
| `variables` | `any[]` | The variables for the pipeline. |

#### Example: List

```ts
const paginated_pipelines = await client.PaginatedPipeline().list({ repo_slug: "example", workspace: "example" })
```


### PaginatedPipelineCache

Create an instance: `const paginated_pipeline_cache = client.PaginatedPipelineCache()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_on` | `string` | The timestamp when the cache was created. |
| `file_size_bytes` | `number` | The size of the file containing the archive of the cache. |
| `key_hash` | `string` | The key hash of the cache version. |
| `name` | `string` | The name of the cache. |
| `path` | `string` | The path where the cache contents were retrieved from. |
| `pipeline_uuid` | `string` | The UUID of the pipeline that created the cache. |
| `step_uuid` | `string` | The uuid of the step that created the cache. |
| `type` | `string` |  |
| `uuid` | `string` | The UUID identifying the pipeline cache. |

#### Example: List

```ts
const paginated_pipeline_caches = await client.PaginatedPipelineCache().list({ repo_slug: "example", workspace: "example" })
```


### PaginatedPipelineKnownHost

Create an instance: `const paginated_pipeline_known_host = client.PaginatedPipelineKnownHost()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `hostname` | `string` | The hostname of the known host. |
| `public_key` | `any` | The public key of the known host. |
| `type` | `string` |  |
| `uuid` | `string` | The UUID identifying the known host. |

#### Example: List

```ts
const paginated_pipeline_known_hosts = await client.PaginatedPipelineKnownHost().list({ repo_slug: "example", workspace: "example" })
```


### PaginatedPipelineRunner

Create an instance: `const paginated_pipeline_runner = client.PaginatedPipelineRunner()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_on` | `string` | The timestamp when the runner was created. |
| `labels` | `any[]` | Labels assigned to the runner for identification and routing. |
| `name` | `string` | The name of the runner. |
| `oauth_client` | `any` | OAuth client configuration for the runner. |
| `state` | `any` | The current state of the runner. |
| `type` | `string` |  |
| `updated_on` | `string` | The timestamp when the runner was last updated. |
| `uuid` | `string` | The UUID identifying the runner. |

#### Example: List

```ts
const paginated_pipeline_runners = await client.PaginatedPipelineRunner().list({ workspace_id: "example" })
```


### PaginatedPipelineSchedule

Create an instance: `const paginated_pipeline_schedule = client.PaginatedPipelineSchedule()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_on` | `string` | The timestamp when the schedule was created. |
| `cron_pattern` | `string` | The cron expression with second precision (7 fields) that the schedule applies. |
| `enabled` | `boolean` | Whether the schedule is enabled. |
| `target` | `any` | The target on which the schedule will be executed. |
| `type` | `string` |  |
| `updated_on` | `string` | The timestamp when the schedule was updated. |
| `uuid` | `string` | The UUID identifying the schedule. |

#### Example: List

```ts
const paginated_pipeline_schedules = await client.PaginatedPipelineSchedule().list({ repo_slug: "example", workspace: "example" })
```


### PaginatedPipelineScheduleExecution

Create an instance: `const paginated_pipeline_schedule_execution = client.PaginatedPipelineScheduleExecution()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `type` | `string` |  |

#### Example: List

```ts
const paginated_pipeline_schedule_executions = await client.PaginatedPipelineScheduleExecution().list({ repo_slug: "example", schedule_id: "example", workspace: "example" })
```


### PaginatedPipelineStep

Create an instance: `const paginated_pipeline_step = client.PaginatedPipelineStep()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completed_on` | `string` | The timestamp when the step execution was completed. |
| `image` | `Record<string, any>` | The Docker image used as the build container for the step. |
| `script_commands` | `any[]` | The list of build commands. |
| `setup_commands` | `any[]` | The list of commands that are executed as part of the setup phase of the build. |
| `started_on` | `string` | The timestamp when the step execution was started. |
| `state` | `any` | The current state of the step |
| `type` | `string` |  |
| `uuid` | `string` | The UUID identifying the step. |

#### Example: List

```ts
const paginated_pipeline_steps = await client.PaginatedPipelineStep().list({ pipeline_id: "example", repo_slug: "example", workspace: "example" })
```


### PaginatedPipelineVariable

Create an instance: `const paginated_pipeline_variable = client.PaginatedPipelineVariable()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `key` | `string` | The unique name of the variable. |
| `secured` | `boolean` | If true, this variable will be treated as secured. |
| `type` | `string` |  |
| `uuid` | `string` | The UUID identifying the variable. |
| `value` | `string` | The value of the variable. |

#### Example: List

```ts
const paginated_pipeline_variables = await client.PaginatedPipelineVariable().list({ selected_user: "example" })
```


### PaginatedProject

Create an instance: `const paginated_project = client.PaginatedProject()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_on` | `string` |  |
| `description` | `string` |  |
| `has_publicly_visible_repos` | `boolean` | Indicates whether the project contains publicly visible repositories. |
| `is_private` | `boolean` | Indicates whether the project is publicly accessible, or whether it is private to the team and consequently only visible to team members. |
| `key` | `string` | The project's key. |
| `links` | `Record<string, any>` |  |
| `name` | `string` | The name of the project. |
| `owner` | `any` |  |
| `type` | `string` |  |
| `updated_on` | `string` |  |
| `uuid` | `string` | The project's immutable id. |

#### Example: List

```ts
const paginated_projects = await client.PaginatedProject().list({ workspace_id: "example" })
```


### PaginatedProjectDeployKey

Create an instance: `const paginated_project_deploy_key = client.PaginatedProjectDeployKey()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `added_on` | `string` |  |
| `comment` | `string` | The comment parsed from the deploy key (if present) |
| `created_by` | `any` |  |
| `key` | `string` | The deploy key value. |
| `label` | `string` | The user-defined label for the deploy key |
| `last_used` | `string` |  |
| `links` | `Record<string, any>` |  |
| `project` | `any` |  |
| `type` | `string` |  |

#### Example: List

```ts
const paginated_project_deploy_keys = await client.PaginatedProjectDeployKey().list({ project_key: "example", workspace_id: "example" })
```


### PaginatedProjectGroupPermission

Create an instance: `const paginated_project_group_permission = client.PaginatedProjectGroupPermission()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `group` | `any` |  |
| `links` | `Record<string, any>` |  |
| `permission` | `string` |  |
| `project` | `any` |  |
| `type` | `string` |  |

#### Example: List

```ts
const paginated_project_group_permissions = await client.PaginatedProjectGroupPermission().list({ project_id: "example", workspace_id: "example" })
```


### PaginatedProjectUserPermission

Create an instance: `const paginated_project_user_permission = client.PaginatedProjectUserPermission()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `links` | `Record<string, any>` |  |
| `permission` | `string` |  |
| `project` | `any` |  |
| `type` | `string` |  |
| `user` | `any` |  |

#### Example: List

```ts
const paginated_project_user_permissions = await client.PaginatedProjectUserPermission().list({ project_id: "example", workspace_id: "example" })
```


### PaginatedPullrequest

Create an instance: `const paginated_pullrequest = client.PaginatedPullrequest()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | `any` |  |
| `close_source_branch` | `boolean` | A boolean flag indicating if merging the pull request closes the source branch. |
| `closed_by` | `any` |  |
| `comment_count` | `number` | The number of comments for a specific pull request. |
| `created_on` | `string` | The ISO8601 timestamp the request was created. |
| `destination` | `Record<string, any>` |  |
| `draft` | `boolean` | A boolean flag indicating whether the pull request is a draft. |
| `id` | `number` | The pull request's unique ID. |
| `links` | `Record<string, any>` |  |
| `merge_commit` | `Record<string, any>` |  |
| `next` | `string` | Link to the next page if it exists. |
| `page` | `number` | Page number of the current results. |
| `pagelen` | `number` | Current number of objects on the existing page. |
| `participants` | `any[]` | The list of users that are collaborating on this pull request. |
| `previous` | `string` | Link to previous page if it exists. |
| `queued` | `boolean` | A boolean flag indicating whether the pull request is queued |
| `reason` | `string` | Explains why a pull request was declined. |
| `rendered` | `Record<string, any>` | User provided pull request text, interpreted in a markup language and rendered in HTML |
| `reviewers` | `any[]` | The list of users that were added as reviewers on this pull request when it was created. |
| `size` | `number` | Total number of objects in the response. |
| `source` | `Record<string, any>` |  |
| `state` | `string` | The pull request's current status. |
| `summary` | `Record<string, any>` |  |
| `task_count` | `number` | The number of open tasks for a specific pull request. |
| `title` | `string` | Title of the pull request. |
| `type` | `string` |  |
| `updated_on` | `string` | The ISO8601 timestamp the request was last updated. |
| `values` | `any[]` |  |

#### Example: Load

```ts
const paginated_pullrequest = await client.PaginatedPullrequest().load({ id: 'paginated_pullrequest_id', workspace_id: 'workspace_id' })
```

#### Example: List

```ts
const paginated_pullrequests = await client.PaginatedPullrequest().list({ repo_slug: "example", workspace: "example" })
```


### PaginatedPullrequestComment

Create an instance: `const paginated_pullrequest_comment = client.PaginatedPullrequestComment()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `Record<string, any>` |  |
| `created_on` | `string` |  |
| `deleted` | `boolean` |  |
| `id` | `number` |  |
| `inline` | `Record<string, any>` |  |
| `links` | `Record<string, any>` |  |
| `parent` | `any` |  |
| `pending` | `boolean` |  |
| `pullrequest` | `any` |  |
| `resolution` | `Record<string, any>` | The resolution object for a Comment. |
| `type` | `string` |  |
| `updated_on` | `string` |  |
| `user` | `any` |  |

#### Example: List

```ts
const paginated_pullrequest_comments = await client.PaginatedPullrequestComment().list({ pullrequest_id: 1, repo_slug: "example", workspace: "example" })
```


### PaginatedRef

Create an instance: `const paginated_ref = client.PaginatedRef()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `links` | `Record<string, any>` |  |
| `name` | `string` | The name of the ref. |
| `target` | `any` |  |
| `type` | `string` |  |

#### Example: List

```ts
const paginated_refs = await client.PaginatedRef().list({ repo_slug: "example", workspace: "example" })
```


### PaginatedReport

Create an instance: `const paginated_report = client.PaginatedReport()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_on` | `string` | The timestamp when the report was created. |
| `data` | `any[]` | An array of data fields to display information on the report. |
| `details` | `string` | A string to describe the purpose of the report. |
| `external_id` | `string` | ID of the report provided by the report creator. |
| `link` | `string` | A URL linking to the results of the report in an external tool. |
| `logo_url` | `string` | A URL to the report logo. |
| `remote_link_enabled` | `boolean` | If enabled, a remote link is created in Jira for the work item associated with the commit the report belongs to. |
| `report_type` | `string` | The type of the report. |
| `reporter` | `string` | A string to describe the tool or company who created the report. |
| `result` | `string` | The state of the report. |
| `title` | `string` | The title of the report. |
| `type` | `string` |  |
| `updated_on` | `string` | The timestamp when the report was updated. |
| `uuid` | `string` | The UUID that can be used to identify the report. |

#### Example: List

```ts
const paginated_reports = await client.PaginatedReport().list({ commit_id: "example", repo_slug: "example", workspace: "example" })
```


### PaginatedRepository

Create an instance: `const paginated_repository = client.PaginatedRepository()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_on` | `string` |  |
| `description` | `string` |  |
| `fork_policy` | `string` | Controls the rules for forking this repository. |
| `full_name` | `string` | The concatenation of the repository owner's username and the slugified name, e.g. |
| `has_issues` | `boolean` | The issue tracker for this repository is enabled. |
| `has_wiki` | `boolean` | The wiki for this repository is enabled. |
| `id` | `string` |  |
| `is_private` | `boolean` |  |
| `language` | `string` |  |
| `links` | `Record<string, any>` |  |
| `mainbranch` | `any` |  |
| `name` | `string` |  |
| `next` | `string` | Link to the next page if it exists. |
| `owner` | `any` |  |
| `page` | `number` | Page number of the current results. |
| `pagelen` | `number` | Current number of objects on the existing page. |
| `parent` | `any` |  |
| `previous` | `string` | Link to previous page if it exists. |
| `project` | `any` |  |
| `scm` | `string` |  |
| `size` | `number` | Total number of objects in the response. |
| `type` | `string` |  |
| `updated_on` | `string` |  |
| `uuid` | `string` | The repository's immutable id. |
| `values` | `any[]` |  |

#### Example: Load

```ts
const paginated_repository = await client.PaginatedRepository().load({ id: 'paginated_repository_id' })
```

#### Example: List

```ts
const paginated_repositorys = await client.PaginatedRepository().list({ repo_slug: "example", workspace: "example" })
```


### PaginatedRepositoryGroupPermission

Create an instance: `const paginated_repository_group_permission = client.PaginatedRepositoryGroupPermission()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `group` | `any` |  |
| `links` | `Record<string, any>` |  |
| `permission` | `string` |  |
| `repository` | `any` |  |
| `type` | `string` |  |

#### Example: List

```ts
const paginated_repository_group_permissions = await client.PaginatedRepositoryGroupPermission().list({ repo_slug: "example", workspace: "example" })
```


### PaginatedRepositoryPermission

Create an instance: `const paginated_repository_permission = client.PaginatedRepositoryPermission()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `next` | `string` | Link to the next page if it exists. |
| `page` | `number` | Page number of the current results. |
| `pagelen` | `number` | Current number of objects on the existing page. |
| `permission` | `string` |  |
| `previous` | `string` | Link to previous page if it exists. |
| `repository` | `any` |  |
| `size` | `number` | Total number of objects in the response. |
| `type` | `string` |  |
| `user` | `any` |  |
| `values` | `any[]` |  |

#### Example: Load

```ts
const paginated_repository_permission = await client.PaginatedRepositoryPermission().load({ repo_slug: 'repo_slug', workspace_id: 'workspace_id' })
```

#### Example: List

```ts
const paginated_repository_permissions = await client.PaginatedRepositoryPermission().list({ workspace_id: "example" })
```


### PaginatedRepositoryUserPermission

Create an instance: `const paginated_repository_user_permission = client.PaginatedRepositoryUserPermission()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `links` | `Record<string, any>` |  |
| `permission` | `string` |  |
| `repository` | `any` |  |
| `type` | `string` |  |
| `user` | `any` |  |

#### Example: List

```ts
const paginated_repository_user_permissions = await client.PaginatedRepositoryUserPermission().list({ repo_slug: "example", workspace: "example" })
```


### PaginatedSnippet

Create an instance: `const paginated_snippet = client.PaginatedSnippet()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `next` | `string` | Link to the next page if it exists. |
| `page` | `number` | Page number of the current results. |
| `pagelen` | `number` | Current number of objects on the existing page. |
| `previous` | `string` | Link to previous page if it exists. |
| `size` | `number` | Total number of objects in the response. |
| `values` | `any[]` |  |

#### Example: Load

```ts
const paginated_snippet = await client.PaginatedSnippet().load({ id: 'paginated_snippet_id' })
```


### PaginatedSnippetComment

Create an instance: `const paginated_snippet_comment = client.PaginatedSnippetComment()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `links` | `Record<string, any>` |  |
| `snippet` | `any` |  |
| `type` | `string` |  |

#### Example: List

```ts
const paginated_snippet_comments = await client.PaginatedSnippetComment().list({ encoded_id: "example", workspace: "example" })
```


### PaginatedSnippetCommit

Create an instance: `const paginated_snippet_commit = client.PaginatedSnippetCommit()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | `any` |  |
| `committer` | `any` |  |
| `date` | `string` |  |
| `hash` | `string` |  |
| `links` | `Record<string, any>` |  |
| `message` | `string` |  |
| `parents` | `any[]` |  |
| `snippet` | `any` |  |
| `summary` | `Record<string, any>` |  |
| `type` | `string` |  |

#### Example: List

```ts
const paginated_snippet_commits = await client.PaginatedSnippetCommit().list({ encoded_id: "example", workspace: "example" })
```


### PaginatedSshUserKey

Create an instance: `const paginated_ssh_user_key = client.PaginatedSshUserKey()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comment` | `string` | The comment parsed from the SSH key (if present) |
| `created_on` | `string` |  |
| `expires_on` | `string` |  |
| `fingerprint` | `string` | The SSH key fingerprint in SHA-256 format. |
| `key` | `string` | The SSH public key value in OpenSSH format. |
| `label` | `string` | The user-defined label for the SSH key |
| `last_used` | `string` |  |
| `links` | `Record<string, any>` |  |
| `owner` | `any` |  |
| `type` | `string` |  |
| `uuid` | `string` | The SSH key's immutable ID. |

#### Example: List

```ts
const paginated_ssh_user_keys = await client.PaginatedSshUserKey().list({ selected_user: "example" })
```


### PaginatedTag

Create an instance: `const paginated_tag = client.PaginatedTag()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | `string` | The date that the tag was created, if available |
| `links` | `Record<string, any>` |  |
| `message` | `string` | The message associated with the tag, if available. |
| `name` | `string` | The name of the ref. |
| `tagger` | `any` |  |
| `target` | `any` |  |
| `type` | `string` |  |

#### Example: List

```ts
const paginated_tags = await client.PaginatedTag().list({ repo_slug: "example", workspace: "example" })
```


### PaginatedTask

Create an instance: `const paginated_task = client.PaginatedTask()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comment` | `any` |  |
| `content` | `Record<string, any>` |  |
| `created_on` | `string` |  |
| `creator` | `any` |  |
| `id` | `number` |  |
| `links` | `Record<string, any>` |  |
| `pending` | `boolean` |  |
| `resolved_by` | `any` |  |
| `resolved_on` | `string` | The ISO8601 timestamp for when the task was resolved. |
| `state` | `string` |  |
| `updated_on` | `string` |  |

#### Example: List

```ts
const paginated_tasks = await client.PaginatedTask().list({ pullrequest_id: 1, repo_slug: "example", workspace: "example" })
```


### PaginatedTreeentry

Create an instance: `const paginated_treeentry = client.PaginatedTreeentry()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `commit` | `any` |  |
| `id` | `string` |  |
| `next` | `string` | Link to the next page if it exists. |
| `page` | `number` | Page number of the current results. |
| `pagelen` | `number` | Current number of objects on the existing page. |
| `path` | `string` | The path in the repository |
| `previous` | `string` | Link to previous page if it exists. |
| `size` | `number` | Total number of objects in the response. |
| `type` | `string` |  |
| `values` | `any[]` |  |

#### Example: Load

```ts
const paginated_treeentry = await client.PaginatedTreeentry().load({ commit: 'commit', path: 'path', repo_slug: 'repo_slug', workspace: 'workspace' })
```

#### Example: List

```ts
const paginated_treeentrys = await client.PaginatedTreeentry().list({ repo_slug: "example", workspace: "example" })
```


### PaginatedWebhookSubscription

Create an instance: `const paginated_webhook_subscription = client.PaginatedWebhookSubscription()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` | Whether or not the webhook subscription is enabled. |
| `created_at` | `string` | The timestamp when the webhook subscription was created. |
| `description` | `string` | A user-defined description of the webhook. |
| `events` | `any[]` | The events this webhook is subscribed to. |
| `links` | `Record<string, any>` | A link to a resource related to this object. |
| `secret` | `string` | The secret to associate with the hook. |
| `secret_set` | `boolean` | Indicates whether or not the hook has an associated secret. |
| `subject` | `Record<string, any>` | Base type for most resource objects. |
| `subject_type` | `string` | The type of entity. |
| `type` | `string` |  |
| `url` | `string` | The URL events get delivered to. |
| `uuid` | `string` | The webhook's id. |

#### Example: List

```ts
const paginated_webhook_subscriptions = await client.PaginatedWebhookSubscription().list({ workspace_id: "example" })
```


### PaginatedWorkspaceAccess

Create an instance: `const paginated_workspace_access = client.PaginatedWorkspaceAccess()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `administrator` | `boolean` | The permission level the user has for the workspace. |
| `type` | `string` |  |
| `workspace` | `any` |  |

#### Example: List

```ts
const paginated_workspace_accesss = await client.PaginatedWorkspaceAccess().list()
```


### PaginatedWorkspaceMembership

Create an instance: `const paginated_workspace_membership = client.PaginatedWorkspaceMembership()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `links` | `Record<string, any>` |  |
| `type` | `string` |  |
| `user` | `any` |  |
| `workspace` | `any` |  |

#### Example: List

```ts
const paginated_workspace_memberships = await client.PaginatedWorkspaceMembership().list({ workspace_id: "example" })
```


### Pipeline

Create an instance: `const pipeline = client.Pipeline()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `build_number` | `number` | The build number of the pipeline. |
| `build_seconds_used` | `number` | The number of build seconds used by this pipeline. |
| `completed_on` | `string` | The timestamp when the Pipeline was completed. |
| `configuration_sources` | `any[]` | An ordered list of sources of the pipeline configuration |
| `created_on` | `string` | The timestamp when the pipeline was created. |
| `creator` | `any` | The Bitbucket account that was used to create the pipeline. |
| `id` | `string` |  |
| `links` | `any` |  |
| `repository` | `any` |  |
| `state` | `any` |  |
| `target` | `any` | The target that the pipeline built. |
| `trigger` | `any` | The trigger used for the pipeline. |
| `type` | `string` |  |
| `uuid` | `string` | The UUID identifying the pipeline. |
| `variables` | `any[]` | The variables for the pipeline. |

#### Example: Load

```ts
const pipeline = await client.Pipeline().load({ id: 'pipeline_id', repo_slug: 'repo_slug', workspace: 'workspace' })
```

#### Example: Create

```ts
const pipeline = await client.Pipeline().create({
  repo_slug: 'example_repo_slug',
  workspace: 'example_workspace',
  type: 'example_type',
})
```


### PipelineBuildNumber

Create an instance: `const pipeline_build_number = client.PipelineBuildNumber()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `next` | `number` | The next number that will be used as build number. |
| `type` | `string` |  |


### PipelineCacheContentUri

Create an instance: `const pipeline_cache_content_uri = client.PipelineCacheContentUri()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `uri` | `string` | The uri for pipeline cache content. |

#### Example: Load

```ts
const pipeline_cache_content_uri = await client.PipelineCacheContentUri().load({ cache_id: 'cache_id', repo_slug: 'repo_slug', workspace: 'workspace' })
```


### PipelineKnownHost

Create an instance: `const pipeline_known_host = client.PipelineKnownHost()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `hostname` | `string` | The hostname of the known host. |
| `id` | `string` |  |
| `public_key` | `any` | The public key of the known host. |
| `type` | `string` |  |
| `uuid` | `string` | The UUID identifying the known host. |

#### Example: Load

```ts
const pipeline_known_host = await client.PipelineKnownHost().load({ id: 'pipeline_known_host_id', repo_slug: 'repo_slug', workspace: 'workspace' })
```

#### Example: Create

```ts
const pipeline_known_host = await client.PipelineKnownHost().create({
  repo_slug: 'example_repo_slug',
  workspace: 'example_workspace',
  type: 'example_type',
})
```


### PipelineRunner

Create an instance: `const pipeline_runner = client.PipelineRunner()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_on` | `string` | The timestamp when the runner was created. |
| `id` | `string` |  |
| `labels` | `any[]` | Labels assigned to the runner for identification and routing. |
| `name` | `string` | The name of the runner. |
| `oauth_client` | `any` | OAuth client configuration for the runner. |
| `state` | `any` | The current state of the runner. |
| `type` | `string` |  |
| `updated_on` | `string` | The timestamp when the runner was last updated. |
| `uuid` | `string` | The UUID identifying the runner. |

#### Example: Load

```ts
const pipeline_runner = await client.PipelineRunner().load({ id: 'pipeline_runner_id' })
```

#### Example: Create

```ts
const pipeline_runner = await client.PipelineRunner().create({
  workspace_id: 'example_workspace_id',
  type: 'example_type',
})
```


### PipelineSchedule

Create an instance: `const pipeline_schedule = client.PipelineSchedule()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_on` | `string` | The timestamp when the schedule was created. |
| `cron_pattern` | `string` | The cron expression with second precision (7 fields) that the schedule applies. |
| `enabled` | `boolean` | Whether the schedule is enabled. |
| `id` | `string` |  |
| `target` | `any` | The target on which the schedule will be executed. |
| `type` | `string` |  |
| `updated_on` | `string` | The timestamp when the schedule was updated. |
| `uuid` | `string` | The UUID identifying the schedule. |

#### Example: Load

```ts
const pipeline_schedule = await client.PipelineSchedule().load({ id: 'pipeline_schedule_id', repo_slug: 'repo_slug', workspace: 'workspace' })
```

#### Example: Create

```ts
const pipeline_schedule = await client.PipelineSchedule().create({
  repo_slug: 'example_repo_slug',
  workspace: 'example_workspace',
  type: 'example_type',
})
```


### PipelineSshKeyPair

Create an instance: `const pipeline_ssh_key_pair = client.PipelineSshKeyPair()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `private_key` | `string` | The SSH private key. |
| `public_key` | `string` | The SSH public key. |
| `type` | `string` |  |

#### Example: Load

```ts
const pipeline_ssh_key_pair = await client.PipelineSshKeyPair().load({ repo_slug: 'repo_slug', workspace: 'workspace' })
```


### PipelineStep

Create an instance: `const pipeline_step = client.PipelineStep()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completed_on` | `string` | The timestamp when the step execution was completed. |
| `id` | `string` |  |
| `image` | `Record<string, any>` | The Docker image used as the build container for the step. |
| `script_commands` | `any[]` | The list of build commands. |
| `setup_commands` | `any[]` | The list of commands that are executed as part of the setup phase of the build. |
| `started_on` | `string` | The timestamp when the step execution was started. |
| `state` | `any` | The current state of the step |
| `type` | `string` |  |
| `uuid` | `string` | The UUID identifying the step. |

#### Example: Load

```ts
const pipeline_step = await client.PipelineStep().load({ id: 'pipeline_step_id', pipeline_id: 'pipeline_id', repo_slug: 'repo_slug', workspace: 'workspace' })
```


### PipelineVariable

Create an instance: `const pipeline_variable = client.PipelineVariable()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `key` | `string` | The unique name of the variable. |
| `secured` | `boolean` | If true, this variable will be treated as secured. |
| `type` | `string` |  |
| `uuid` | `string` | The UUID identifying the variable. |
| `value` | `string` | The value of the variable. |

#### Example: Load

```ts
const pipeline_variable = await client.PipelineVariable().load({ id: 'pipeline_variable_id' })
```

#### Example: Create

```ts
const pipeline_variable = await client.PipelineVariable().create({
  selected_user: 'example_selected_user',
  type: 'example_type',
})
```


### PipelinesConfig

Create an instance: `const pipelines_config = client.PipelinesConfig()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `boolean` | Whether Pipelines is enabled for the repository. |
| `repository` | `any` |  |
| `type` | `string` |  |

#### Example: Load

```ts
const pipelines_config = await client.PipelinesConfig().load({ repo_slug: 'repo_slug', workspace: 'workspace' })
```


### Project

Create an instance: `const project = client.Project()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_on` | `string` |  |
| `description` | `string` |  |
| `has_publicly_visible_repos` | `boolean` | Indicates whether the project contains publicly visible repositories. |
| `id` | `string` |  |
| `is_private` | `boolean` | Indicates whether the project is publicly accessible, or whether it is private to the team and consequently only visible to team members. |
| `key` | `string` | The project's key. |
| `links` | `Record<string, any>` |  |
| `name` | `string` | The name of the project. |
| `owner` | `any` |  |
| `type` | `string` |  |
| `updated_on` | `string` |  |
| `uuid` | `string` | The project's immutable id. |

#### Example: Load

```ts
const project = await client.Project().load({ id: 'project_id', workspace_id: 'workspace_id' })
```

#### Example: Create

```ts
const project = await client.Project().create({
  workspace_id: 'example_workspace_id',
  type: 'example_type',
})
```


### ProjectBranchingModel

Create an instance: `const project_branching_model = client.ProjectBranchingModel()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `branch_types` | `any[]` | The active branch types. |
| `development` | `Record<string, any>` |  |
| `production` | `Record<string, any>` |  |
| `type` | `string` |  |

#### Example: List

```ts
const project_branching_models = await client.ProjectBranchingModel().list({ project_key: "example", workspace_id: "example" })
```


### ProjectDeployKey

Create an instance: `const project_deploy_key = client.ProjectDeployKey()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `added_on` | `string` |  |
| `comment` | `string` | The comment parsed from the deploy key (if present) |
| `created_by` | `any` |  |
| `id` | `string` |  |
| `key` | `string` | The deploy key value. |
| `label` | `string` | The user-defined label for the deploy key |
| `last_used` | `string` |  |
| `links` | `Record<string, any>` |  |
| `project` | `any` |  |
| `type` | `string` |  |

#### Example: Load

```ts
const project_deploy_key = await client.ProjectDeployKey().load({ id: 'project_deploy_key_id', project_key: 'project_key', workspace_id: 'workspace_id' })
```

#### Example: Create

```ts
const project_deploy_key = await client.ProjectDeployKey().create({
  project_key: 'example_project_key',
  workspace_id: 'example_workspace_id',
  type: 'example_type',
})
```


### ProjectGroupPermission

Create an instance: `const project_group_permission = client.ProjectGroupPermission()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `group` | `any` |  |
| `links` | `Record<string, any>` |  |
| `permission` | `string` |  |
| `project` | `any` |  |
| `type` | `string` |  |

#### Example: Load

```ts
const project_group_permission = await client.ProjectGroupPermission().load({ group_slug: 'group_slug', project_id: 'project_id', workspace_id: 'workspace_id' })
```


### ProjectUserPermission

Create an instance: `const project_user_permission = client.ProjectUserPermission()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `links` | `Record<string, any>` |  |
| `permission` | `string` |  |
| `project` | `any` |  |
| `type` | `string` |  |
| `user` | `any` |  |

#### Example: Load

```ts
const project_user_permission = await client.ProjectUserPermission().load({ project_id: 'project_id', selected_user_id: 'selected_user_id', workspace_id: 'workspace_id' })
```


### Property

Create an instance: `const property = client.Property()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attributes` | `any[]` |  |
| `id` | `string` |  |


### Pullrequest

Create an instance: `const pullrequest = client.Pullrequest()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | `any` |  |
| `close_source_branch` | `boolean` | A boolean flag indicating if merging the pull request closes the source branch. |
| `closed_by` | `any` |  |
| `comment_count` | `number` | The number of comments for a specific pull request. |
| `created_on` | `string` | The ISO8601 timestamp the request was created. |
| `destination` | `Record<string, any>` |  |
| `draft` | `boolean` | A boolean flag indicating whether the pull request is a draft. |
| `id` | `number` | The pull request's unique ID. |
| `links` | `Record<string, any>` |  |
| `merge_commit` | `Record<string, any>` |  |
| `participants` | `any[]` | The list of users that are collaborating on this pull request. |
| `queued` | `boolean` | A boolean flag indicating whether the pull request is queued |
| `reason` | `string` | Explains why a pull request was declined. |
| `rendered` | `Record<string, any>` | User provided pull request text, interpreted in a markup language and rendered in HTML |
| `reviewers` | `any[]` | The list of users that were added as reviewers on this pull request when it was created. |
| `source` | `Record<string, any>` |  |
| `state` | `string` | The pull request's current status. |
| `summary` | `Record<string, any>` |  |
| `task_count` | `number` | The number of open tasks for a specific pull request. |
| `title` | `string` | Title of the pull request. |
| `type` | `string` |  |
| `updated_on` | `string` | The ISO8601 timestamp the request was last updated. |

#### Example: Load

```ts
const pullrequest = await client.Pullrequest().load({ id: 1, repo_slug: 'repo_slug', workspace: 'workspace' })
```

#### Example: Create

```ts
const pullrequest = await client.Pullrequest().create({
  repo_slug: 'example_repo_slug',
  workspace: 'example_workspace',
  type: 'example_type',
})
```


### PullrequestComment

Create an instance: `const pullrequest_comment = client.PullrequestComment()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `Record<string, any>` |  |
| `created_on` | `string` |  |
| `deleted` | `boolean` |  |
| `id` | `number` |  |
| `inline` | `Record<string, any>` |  |
| `links` | `Record<string, any>` |  |
| `parent` | `any` |  |
| `pending` | `boolean` |  |
| `pullrequest` | `any` |  |
| `resolution` | `Record<string, any>` | The resolution object for a Comment. |
| `type` | `string` |  |
| `updated_on` | `string` |  |
| `user` | `any` |  |

#### Example: Load

```ts
const pullrequest_comment = await client.PullrequestComment().load({ id: 1, pullrequest_id: 1, repo_slug: 'repo_slug', workspace: 'workspace' })
```

#### Example: Create

```ts
const pullrequest_comment = await client.PullrequestComment().create({
  id: 1,
  repo_slug: 'example_repo_slug',
  workspace: 'example_workspace',
  inline: {},
  resolution: {},
  type: 'example_type',
})
```


### PullrequestCommentTask

Create an instance: `const pullrequest_comment_task = client.PullrequestCommentTask()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comment` | `any` |  |
| `content` | `Record<string, any>` | task raw content |
| `created_on` | `string` |  |
| `creator` | `any` |  |
| `id` | `number` |  |
| `links` | `Record<string, any>` |  |
| `pending` | `boolean` |  |
| `resolved_by` | `any` |  |
| `resolved_on` | `string` | The ISO8601 timestamp for when the task was resolved. |
| `state` | `string` |  |
| `updated_on` | `string` |  |

#### Example: Load

```ts
const pullrequest_comment_task = await client.PullrequestCommentTask().load({ id: 1, pullrequest_id: 1, repo_slug: 'repo_slug', workspace: 'workspace' })
```

#### Example: Create

```ts
const pullrequest_comment_task = await client.PullrequestCommentTask().create({
  id: 1,
  repo_slug: 'example_repo_slug',
  workspace: 'example_workspace',
  content: {},
  created_on: 'example_created_on',
  creator: 'example_creator',
  state: 'example_state',
  updated_on: 'example_updated_on',
})
```


### PullrequestMergeabilityCheck

Create an instance: `const pullrequest_mergeability_check = client.PullrequestMergeabilityCheck()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `blocking` | `boolean` | Whether this check is currently preventing the pull request from being merged. |
| `required` | `boolean` | Whether this check must pass for the pull request to be mergeable. |
| `status` | `string` | Whether this check passed. |
| `type` | `string` |  |

#### Example: List

```ts
const pullrequest_mergeability_checks = await client.PullrequestMergeabilityCheck().list({ pullrequest_id: 1, repo_slug: "example", workspace: "example" })
```


### Ref

Create an instance: `const ref = client.Ref()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Report

Create an instance: `const report = client.Report()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_on` | `string` | The timestamp when the report was created. |
| `data` | `any[]` | An array of data fields to display information on the report. |
| `details` | `string` | A string to describe the purpose of the report. |
| `external_id` | `string` | ID of the report provided by the report creator. |
| `id` | `string` |  |
| `link` | `string` | A URL linking to the results of the report in an external tool. |
| `logo_url` | `string` | A URL to the report logo. |
| `remote_link_enabled` | `boolean` | If enabled, a remote link is created in Jira for the work item associated with the commit the report belongs to. |
| `report_type` | `string` | The type of the report. |
| `reporter` | `string` | A string to describe the tool or company who created the report. |
| `result` | `string` | The state of the report. |
| `title` | `string` | The title of the report. |
| `type` | `string` |  |
| `updated_on` | `string` | The timestamp when the report was updated. |
| `uuid` | `string` | The UUID that can be used to identify the report. |

#### Example: Load

```ts
const report = await client.Report().load({ id: 'report_id', commit_id: 'commit_id', repo_slug: 'repo_slug', workspace: 'workspace' })
```


### ReportAnnotation

Create an instance: `const report_annotation = client.ReportAnnotation()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `annotation_type` | `string` | The type of the report. |
| `created_on` | `string` | The timestamp when the report was created. |
| `details` | `string` | The details to show to users when clicking on the annotation. |
| `external_id` | `string` | ID of the annotation provided by the annotation creator. |
| `id` | `string` |  |
| `line` | `number` | The line number that the annotation should belong to. |
| `link` | `string` | A URL linking to the annotation in an external tool. |
| `path` | `string` | The path of the file on which this annotation should be placed. |
| `report_annotations` | `any[]` | The annotations to create or update |
| `result` | `string` | The state of the report. |
| `severity` | `string` | The severity of the annotation. |
| `summary` | `string` | The message to display to users. |
| `type` | `string` |  |
| `updated_on` | `string` | The timestamp when the report was updated. |
| `uuid` | `string` | The UUID that can be used to identify the annotation. |

#### Example: Load

```ts
const report_annotation = await client.ReportAnnotation().load({ id: 'report_annotation_id', commit_id: 'commit_id', repo_slug: 'repo_slug', report_id: 'report_id', workspace: 'workspace' })
```

#### Example: Create

```ts
const report_annotation = await client.ReportAnnotation().create({
  commit_id: 'example_commit_id',
  id: 'example_id',
  repo_slug: 'example_repo_slug',
  workspace: 'example_workspace',
  type: 'example_type',
})
```


### Repository

Create an instance: `const repository = client.Repository()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_on` | `string` |  |
| `description` | `string` |  |
| `fork_policy` | `string` | Controls the rules for forking this repository. |
| `full_name` | `string` | The concatenation of the repository owner's username and the slugified name, e.g. |
| `has_issues` | `boolean` | The issue tracker for this repository is enabled. |
| `has_wiki` | `boolean` | The wiki for this repository is enabled. |
| `id` | `string` |  |
| `is_private` | `boolean` |  |
| `language` | `string` |  |
| `links` | `Record<string, any>` |  |
| `mainbranch` | `any` |  |
| `name` | `string` |  |
| `owner` | `any` |  |
| `parent` | `any` |  |
| `project` | `any` |  |
| `scm` | `string` |  |
| `size` | `number` |  |
| `type` | `string` |  |
| `updated_on` | `string` |  |
| `uuid` | `string` | The repository's immutable id. |

#### Example: Load

```ts
const repository = await client.Repository().load({ repo_slug: 'repo_slug', workspace: 'workspace' })
```

#### Example: Create

```ts
const repository = await client.Repository().create({
  repo_slug: 'example_repo_slug',
  workspace: 'example_workspace',
  type: 'example_type',
})
```


### RepositoryGroupPermission

Create an instance: `const repository_group_permission = client.RepositoryGroupPermission()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `group` | `any` |  |
| `links` | `Record<string, any>` |  |
| `permission` | `string` |  |
| `repository` | `any` |  |
| `type` | `string` |  |

#### Example: Load

```ts
const repository_group_permission = await client.RepositoryGroupPermission().load({ group_slug: 'group_slug', repo_slug: 'repo_slug', workspace: 'workspace' })
```


### RepositoryInheritanceState

Create an instance: `const repository_inheritance_state = client.RepositoryInheritanceState()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `override_settings` | `Record<string, any>` |  |
| `type` | `string` |  |

#### Example: Load

```ts
const repository_inheritance_state = await client.RepositoryInheritanceState().load({ repo_slug: 'repo_slug', workspace: 'workspace' })
```


### RepositoryUserPermission

Create an instance: `const repository_user_permission = client.RepositoryUserPermission()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `links` | `Record<string, any>` |  |
| `permission` | `string` |  |
| `repository` | `any` |  |
| `type` | `string` |  |
| `user` | `any` |  |

#### Example: Load

```ts
const repository_user_permission = await client.RepositoryUserPermission().load({ repo_slug: 'repo_slug', selected_user_id: 'selected_user_id', workspace: 'workspace' })
```


### RequestChange

Create an instance: `const request_change = client.RequestChange()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `approved` | `boolean` |  |
| `participated_on` | `string` | The ISO8601 timestamp of the participant's action. |
| `role` | `string` |  |
| `state` | `string` |  |
| `type` | `string` |  |
| `user` | `any` |  |

#### Example: Create

```ts
const request_change = await client.RequestChange().create({
  pullrequest_id: 1,
  repo_slug: 'example_repo_slug',
  workspace: 'example_workspace',
  type: 'example_type',
})
```


### SearchResultPage

Create an instance: `const search_result_page = client.SearchResultPage()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content_match_count` | `number` |  |
| `content_matches` | `any[]` |  |
| `file` | `Record<string, any>` | A file object, representing a file at a commit in a repository |
| `path_matches` | `any[]` |  |
| `type` | `string` |  |

#### Example: List

```ts
const search_result_pages = await client.SearchResultPage().list({ selected_user: "example", search_query: "example" })
```


### Snippet

Create an instance: `const snippet = client.Snippet()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bitbucket-sdk_id` | `number` |  |
| `created_on` | `string` |  |
| `creator` | `any` |  |
| `id` | `string` |  |
| `is_private` | `boolean` |  |
| `owner` | `any` |  |
| `scm` | `string` | The DVCS used to store the snippet. |
| `title` | `string` |  |
| `type` | `string` |  |
| `updated_on` | `string` |  |

#### Example: Load

```ts
const snippet = await client.Snippet().load({ encoded_id: 'encoded_id', workspace: 'workspace' })
```

#### Example: Create

```ts
const snippet = await client.Snippet().create({
  id: 'example_id',
  type: 'example_type',
})
```


### SnippetComment

Create an instance: `const snippet_comment = client.SnippetComment()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `links` | `Record<string, any>` |  |
| `snippet` | `any` |  |
| `type` | `string` |  |

#### Example: Load

```ts
const snippet_comment = await client.SnippetComment().load({ id: 1, encoded_id: 'encoded_id', workspace: 'workspace' })
```

#### Example: Create

```ts
const snippet_comment = await client.SnippetComment().create({
  encoded_id: 'example_encoded_id',
  workspace: 'example_workspace',
  type: 'example_type',
})
```


### SnippetCommit

Create an instance: `const snippet_commit = client.SnippetCommit()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | `any` |  |
| `committer` | `any` |  |
| `date` | `string` |  |
| `hash` | `string` |  |
| `id` | `string` |  |
| `links` | `Record<string, any>` |  |
| `message` | `string` |  |
| `parents` | `any[]` |  |
| `snippet` | `any` |  |
| `summary` | `Record<string, any>` |  |
| `type` | `string` |  |

#### Example: Load

```ts
const snippet_commit = await client.SnippetCommit().load({ id: 'snippet_commit_id', encoded_id: 'encoded_id', workspace: 'workspace' })
```


### Source

Create an instance: `const source = client.Source()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ts
const source = await client.Source().create({
  repo_slug: 'example_repo_slug',
  workspace: 'example_workspace',
})
```


### Ssh

Create an instance: `const ssh = client.Ssh()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### SshAccountKey

Create an instance: `const ssh_account_key = client.SshAccountKey()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comment` | `string` | The comment parsed from the SSH key (if present) |
| `created_on` | `string` |  |
| `expires_on` | `string` |  |
| `fingerprint` | `string` | The SSH key fingerprint in SHA-256 format. |
| `key` | `string` | The SSH public key value in OpenSSH format. |
| `label` | `string` | The user-defined label for the SSH key |
| `last_used` | `string` |  |
| `links` | `Record<string, any>` |  |
| `owner` | `any` |  |
| `type` | `string` |  |
| `uuid` | `string` | The SSH key's immutable ID. |

#### Example: Load

```ts
const ssh_account_key = await client.SshAccountKey().load({ key_id: 'key_id', selected_user: 'selected_user' })
```

#### Example: Create

```ts
const ssh_account_key = await client.SshAccountKey().create({
  selected_user: 'example_selected_user',
  type: 'example_type',
})
```


### Tag

Create an instance: `const tag = client.Tag()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | `string` | The date that the tag was created, if available |
| `id` | `string` |  |
| `links` | `Record<string, any>` |  |
| `message` | `string` | The message associated with the tag, if available. |
| `name` | `string` | The name of the ref. |
| `tagger` | `any` |  |
| `target` | `any` |  |
| `type` | `string` |  |

#### Example: Load

```ts
const tag = await client.Tag().load({ id: 'tag_id', repo_slug: 'repo_slug', workspace: 'workspace' })
```

#### Example: Create

```ts
const tag = await client.Tag().create({
  repo_slug: 'example_repo_slug',
  workspace: 'example_workspace',
  type: 'example_type',
})
```


### User

Create an instance: `const user = client.User()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `string` | The user's Atlassian account ID. |
| `account_status` | `string` | The status of the account. |
| `created_on` | `string` |  |
| `display_name` | `string` |  |
| `has_2fa_enabled` | `boolean` |  |
| `id` | `string` |  |
| `is_staff` | `boolean` |  |
| `links` | `Record<string, any>` | Links related to an Account. |
| `nickname` | `string` | Account name defined by the owner. |
| `type` | `string` |  |
| `uuid` | `string` |  |

#### Example: Load

```ts
const user = await client.User().load({ id: 'user_id' })
```


### Watcher

Create an instance: `const watcher = client.Watcher()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_on` | `string` |  |
| `display_name` | `string` |  |
| `links` | `Record<string, any>` | Links related to an Account. |
| `type` | `string` |  |
| `uuid` | `string` |  |

#### Example: List

```ts
const watchers = await client.Watcher().list({ encoded_id: "example", workspace: "example" })
```


### WebhookSubscription

Create an instance: `const webhook_subscription = client.WebhookSubscription()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` | Whether or not the webhook subscription is enabled. |
| `created_at` | `string` | The timestamp when the webhook subscription was created. |
| `description` | `string` | A user-defined description of the webhook. |
| `events` | `any[]` | The events this webhook is subscribed to. |
| `links` | `Record<string, any>` | A link to a resource related to this object. |
| `secret` | `string` | The secret to associate with the hook. |
| `secret_set` | `boolean` | Indicates whether or not the hook has an associated secret. |
| `subject` | `Record<string, any>` | Base type for most resource objects. |
| `subject_type` | `string` | The type of entity. |
| `type` | `string` |  |
| `url` | `string` | The URL events get delivered to. |
| `uuid` | `string` | The webhook's id. |

#### Example: Load

```ts
const webhook_subscription = await client.WebhookSubscription().load({ uid: 'uid' })
```

#### Example: Create

```ts
const webhook_subscription = await client.WebhookSubscription().create({
  workspace_id: 'example_workspace_id',
  subject: {},
  type: 'example_type',
})
```


### Workspace

Create an instance: `const workspace = client.Workspace()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_on` | `string` |  |
| `forking_mode` | `string` | Controls the rules for forking repositories within this workspace. |
| `id` | `string` |  |
| `is_personal` | `boolean` | Indicates whether the workspace belongs to an individual user. |
| `is_privacy_enforced` | `boolean` | Indicates whether the workspace enforces private content, or whether it allows public content. |
| `is_private` | `boolean` | Indicates whether the workspace is publicly accessible, or whether it is private to the members and consequently only visible to members. |
| `links` | `Record<string, any>` |  |
| `name` | `string` | The name of the workspace. |
| `slug` | `string` | The short label that identifies this workspace. |
| `type` | `string` |  |
| `updated_on` | `string` |  |
| `uuid` | `string` | The workspace's immutable id. |

#### Example: Load

```ts
const workspace = await client.Workspace().load({ id: 'workspace_id' })
```


### WorkspaceMembership

Create an instance: `const workspace_membership = client.WorkspaceMembership()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `links` | `Record<string, any>` |  |
| `type` | `string` |  |
| `user` | `any` |  |
| `workspace` | `any` |  |

#### Example: Load

```ts
const workspace_membership = await client.WorkspaceMembership().load({ member: 'member', workspace_id: 'workspace_id' })
```

## Features

This SDK ships 1 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`test`](#test) | Test transport |

### test

Test transport.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
bitbucket-sdk/
├── src/
│   ├── BitbucketSdkSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { BitbucketSdkSDK } from '@hashimgujjar447/bitbucket-sdk'
```

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const paginateddiffstat = client.PaginatedDiffstat()
await paginateddiffstat.load({ id: "example_id", repo_slug: "example", workspace: "example" })

// paginateddiffstat.data() now returns the paginateddiffstat data from the last `load`
// paginateddiffstat.match() returns { id: "example_id" }
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
