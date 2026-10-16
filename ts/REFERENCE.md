# BitbucketSdk TypeScript SDK Reference

Complete API reference for the BitbucketSdk TypeScript SDK.


## BitbucketSdkSDK

### Constructor

```ts
new BitbucketSdkSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `BitbucketSdkSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = BitbucketSdkSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `BitbucketSdkSDK` instance in test mode.


### Instance Methods

#### `Addon(data?: object)`

Create a new `Addon` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AddonEntity` instance.

#### `ApplicationProperty(data?: object)`

Create a new `ApplicationProperty` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApplicationPropertyEntity` instance.

#### `Approve(data?: object)`

Create a new `Approve` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApproveEntity` instance.

#### `Branch(data?: object)`

Create a new `Branch` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BranchEntity` instance.

#### `BranchingModel(data?: object)`

Create a new `BranchingModel` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BranchingModelEntity` instance.

#### `BranchingModelSetting(data?: object)`

Create a new `BranchingModelSetting` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BranchingModelSettingEntity` instance.

#### `Branchrestriction(data?: object)`

Create a new `Branchrestriction` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BranchrestrictionEntity` instance.

#### `CommentResolution(data?: object)`

Create a new `CommentResolution` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CommentResolutionEntity` instance.

#### `Commit(data?: object)`

Create a new `Commit` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CommitEntity` instance.

#### `Commitstatus(data?: object)`

Create a new `Commitstatus` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CommitstatusEntity` instance.

#### `DefaultReviewer(data?: object)`

Create a new `DefaultReviewer` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DefaultReviewerEntity` instance.

#### `DeployKey(data?: object)`

Create a new `DeployKey` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DeployKeyEntity` instance.

#### `Deployment(data?: object)`

Create a new `Deployment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DeploymentEntity` instance.

#### `DeploymentEnvironment(data?: object)`

Create a new `DeploymentEnvironment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DeploymentEnvironmentEntity` instance.

#### `DeploymentVariable(data?: object)`

Create a new `DeploymentVariable` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DeploymentVariableEntity` instance.

#### `Download(data?: object)`

Create a new `Download` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DownloadEntity` instance.

#### `EffectiveDefaultReviewer(data?: object)`

Create a new `EffectiveDefaultReviewer` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EffectiveDefaultReviewerEntity` instance.

#### `EffectiveRepoBranchingModel(data?: object)`

Create a new `EffectiveRepoBranchingModel` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EffectiveRepoBranchingModelEntity` instance.

#### `Gpg(data?: object)`

Create a new `Gpg` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GpgEntity` instance.

#### `GpgAccountKey(data?: object)`

Create a new `GpgAccountKey` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GpgAccountKeyEntity` instance.

#### `MergeQueue(data?: object)`

Create a new `MergeQueue` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MergeQueueEntity` instance.

#### `MergeQueuePullrequest(data?: object)`

Create a new `MergeQueuePullrequest` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MergeQueuePullrequestEntity` instance.

#### `PaginatedAccount(data?: object)`

Create a new `PaginatedAccount` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginatedAccountEntity` instance.

#### `PaginatedAnnotation(data?: object)`

Create a new `PaginatedAnnotation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginatedAnnotationEntity` instance.

#### `PaginatedBranch(data?: object)`

Create a new `PaginatedBranch` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginatedBranchEntity` instance.

#### `PaginatedBranchrestriction(data?: object)`

Create a new `PaginatedBranchrestriction` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginatedBranchrestrictionEntity` instance.

#### `PaginatedChangeset(data?: object)`

Create a new `PaginatedChangeset` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginatedChangesetEntity` instance.

#### `PaginatedCommitstatus(data?: object)`

Create a new `PaginatedCommitstatus` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginatedCommitstatusEntity` instance.

#### `PaginatedDefaultReviewerAndType(data?: object)`

Create a new `PaginatedDefaultReviewerAndType` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginatedDefaultReviewerAndTypeEntity` instance.

#### `PaginatedDeployKey(data?: object)`

Create a new `PaginatedDeployKey` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginatedDeployKeyEntity` instance.

#### `PaginatedDeployment(data?: object)`

Create a new `PaginatedDeployment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginatedDeploymentEntity` instance.

#### `PaginatedDeploymentVariable(data?: object)`

Create a new `PaginatedDeploymentVariable` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginatedDeploymentVariableEntity` instance.

#### `PaginatedDiffstat(data?: object)`

Create a new `PaginatedDiffstat` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginatedDiffstatEntity` instance.

#### `PaginatedEnvironment(data?: object)`

Create a new `PaginatedEnvironment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginatedEnvironmentEntity` instance.

#### `PaginatedFile(data?: object)`

Create a new `PaginatedFile` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginatedFileEntity` instance.

#### `PaginatedFileConflict(data?: object)`

Create a new `PaginatedFileConflict` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginatedFileConflictEntity` instance.

#### `PaginatedGpgUserKey(data?: object)`

Create a new `PaginatedGpgUserKey` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginatedGpgUserKeyEntity` instance.

#### `PaginatedHookEvent(data?: object)`

Create a new `PaginatedHookEvent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginatedHookEventEntity` instance.

#### `PaginatedMergeQueue(data?: object)`

Create a new `PaginatedMergeQueue` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginatedMergeQueueEntity` instance.

#### `PaginatedMergeQueuePullrequest(data?: object)`

Create a new `PaginatedMergeQueuePullrequest` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginatedMergeQueuePullrequestEntity` instance.

#### `PaginatedPipeline(data?: object)`

Create a new `PaginatedPipeline` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginatedPipelineEntity` instance.

#### `PaginatedPipelineCache(data?: object)`

Create a new `PaginatedPipelineCache` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginatedPipelineCacheEntity` instance.

#### `PaginatedPipelineKnownHost(data?: object)`

Create a new `PaginatedPipelineKnownHost` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginatedPipelineKnownHostEntity` instance.

#### `PaginatedPipelineRunner(data?: object)`

Create a new `PaginatedPipelineRunner` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginatedPipelineRunnerEntity` instance.

#### `PaginatedPipelineSchedule(data?: object)`

Create a new `PaginatedPipelineSchedule` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginatedPipelineScheduleEntity` instance.

#### `PaginatedPipelineScheduleExecution(data?: object)`

Create a new `PaginatedPipelineScheduleExecution` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginatedPipelineScheduleExecutionEntity` instance.

#### `PaginatedPipelineStep(data?: object)`

Create a new `PaginatedPipelineStep` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginatedPipelineStepEntity` instance.

#### `PaginatedPipelineVariable(data?: object)`

Create a new `PaginatedPipelineVariable` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginatedPipelineVariableEntity` instance.

#### `PaginatedProject(data?: object)`

Create a new `PaginatedProject` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginatedProjectEntity` instance.

#### `PaginatedProjectDeployKey(data?: object)`

Create a new `PaginatedProjectDeployKey` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginatedProjectDeployKeyEntity` instance.

#### `PaginatedProjectGroupPermission(data?: object)`

Create a new `PaginatedProjectGroupPermission` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginatedProjectGroupPermissionEntity` instance.

#### `PaginatedProjectUserPermission(data?: object)`

Create a new `PaginatedProjectUserPermission` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginatedProjectUserPermissionEntity` instance.

#### `PaginatedPullrequest(data?: object)`

Create a new `PaginatedPullrequest` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginatedPullrequestEntity` instance.

#### `PaginatedPullrequestComment(data?: object)`

Create a new `PaginatedPullrequestComment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginatedPullrequestCommentEntity` instance.

#### `PaginatedRef(data?: object)`

Create a new `PaginatedRef` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginatedRefEntity` instance.

#### `PaginatedReport(data?: object)`

Create a new `PaginatedReport` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginatedReportEntity` instance.

#### `PaginatedRepository(data?: object)`

Create a new `PaginatedRepository` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginatedRepositoryEntity` instance.

#### `PaginatedRepositoryGroupPermission(data?: object)`

Create a new `PaginatedRepositoryGroupPermission` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginatedRepositoryGroupPermissionEntity` instance.

#### `PaginatedRepositoryPermission(data?: object)`

Create a new `PaginatedRepositoryPermission` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginatedRepositoryPermissionEntity` instance.

#### `PaginatedRepositoryUserPermission(data?: object)`

Create a new `PaginatedRepositoryUserPermission` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginatedRepositoryUserPermissionEntity` instance.

#### `PaginatedSnippet(data?: object)`

Create a new `PaginatedSnippet` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginatedSnippetEntity` instance.

#### `PaginatedSnippetComment(data?: object)`

Create a new `PaginatedSnippetComment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginatedSnippetCommentEntity` instance.

#### `PaginatedSnippetCommit(data?: object)`

Create a new `PaginatedSnippetCommit` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginatedSnippetCommitEntity` instance.

#### `PaginatedSshUserKey(data?: object)`

Create a new `PaginatedSshUserKey` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginatedSshUserKeyEntity` instance.

#### `PaginatedTag(data?: object)`

Create a new `PaginatedTag` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginatedTagEntity` instance.

#### `PaginatedTask(data?: object)`

Create a new `PaginatedTask` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginatedTaskEntity` instance.

#### `PaginatedTreeentry(data?: object)`

Create a new `PaginatedTreeentry` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginatedTreeentryEntity` instance.

#### `PaginatedWebhookSubscription(data?: object)`

Create a new `PaginatedWebhookSubscription` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginatedWebhookSubscriptionEntity` instance.

#### `PaginatedWorkspaceAccess(data?: object)`

Create a new `PaginatedWorkspaceAccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginatedWorkspaceAccessEntity` instance.

#### `PaginatedWorkspaceMembership(data?: object)`

Create a new `PaginatedWorkspaceMembership` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginatedWorkspaceMembershipEntity` instance.

#### `Pipeline(data?: object)`

Create a new `Pipeline` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PipelineEntity` instance.

#### `PipelineBuildNumber(data?: object)`

Create a new `PipelineBuildNumber` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PipelineBuildNumberEntity` instance.

#### `PipelineCacheContentUri(data?: object)`

Create a new `PipelineCacheContentUri` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PipelineCacheContentUriEntity` instance.

#### `PipelineKnownHost(data?: object)`

Create a new `PipelineKnownHost` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PipelineKnownHostEntity` instance.

#### `PipelineRunner(data?: object)`

Create a new `PipelineRunner` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PipelineRunnerEntity` instance.

#### `PipelineSchedule(data?: object)`

Create a new `PipelineSchedule` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PipelineScheduleEntity` instance.

#### `PipelineSshKeyPair(data?: object)`

Create a new `PipelineSshKeyPair` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PipelineSshKeyPairEntity` instance.

#### `PipelineStep(data?: object)`

Create a new `PipelineStep` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PipelineStepEntity` instance.

#### `PipelineVariable(data?: object)`

Create a new `PipelineVariable` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PipelineVariableEntity` instance.

#### `PipelinesConfig(data?: object)`

Create a new `PipelinesConfig` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PipelinesConfigEntity` instance.

#### `Project(data?: object)`

Create a new `Project` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectEntity` instance.

#### `ProjectBranchingModel(data?: object)`

Create a new `ProjectBranchingModel` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectBranchingModelEntity` instance.

#### `ProjectDeployKey(data?: object)`

Create a new `ProjectDeployKey` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectDeployKeyEntity` instance.

#### `ProjectGroupPermission(data?: object)`

Create a new `ProjectGroupPermission` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectGroupPermissionEntity` instance.

#### `ProjectUserPermission(data?: object)`

Create a new `ProjectUserPermission` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectUserPermissionEntity` instance.

#### `Property(data?: object)`

Create a new `Property` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PropertyEntity` instance.

#### `Pullrequest(data?: object)`

Create a new `Pullrequest` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PullrequestEntity` instance.

#### `PullrequestComment(data?: object)`

Create a new `PullrequestComment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PullrequestCommentEntity` instance.

#### `PullrequestCommentTask(data?: object)`

Create a new `PullrequestCommentTask` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PullrequestCommentTaskEntity` instance.

#### `PullrequestMergeabilityCheck(data?: object)`

Create a new `PullrequestMergeabilityCheck` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PullrequestMergeabilityCheckEntity` instance.

#### `Ref(data?: object)`

Create a new `Ref` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RefEntity` instance.

#### `Report(data?: object)`

Create a new `Report` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ReportEntity` instance.

#### `ReportAnnotation(data?: object)`

Create a new `ReportAnnotation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ReportAnnotationEntity` instance.

#### `Repository(data?: object)`

Create a new `Repository` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RepositoryEntity` instance.

#### `RepositoryGroupPermission(data?: object)`

Create a new `RepositoryGroupPermission` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RepositoryGroupPermissionEntity` instance.

#### `RepositoryInheritanceState(data?: object)`

Create a new `RepositoryInheritanceState` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RepositoryInheritanceStateEntity` instance.

#### `RepositoryUserPermission(data?: object)`

Create a new `RepositoryUserPermission` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RepositoryUserPermissionEntity` instance.

#### `RequestChange(data?: object)`

Create a new `RequestChange` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RequestChangeEntity` instance.

#### `SearchResultPage(data?: object)`

Create a new `SearchResultPage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SearchResultPageEntity` instance.

#### `Snippet(data?: object)`

Create a new `Snippet` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SnippetEntity` instance.

#### `SnippetComment(data?: object)`

Create a new `SnippetComment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SnippetCommentEntity` instance.

#### `SnippetCommit(data?: object)`

Create a new `SnippetCommit` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SnippetCommitEntity` instance.

#### `Source(data?: object)`

Create a new `Source` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SourceEntity` instance.

#### `Ssh(data?: object)`

Create a new `Ssh` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SshEntity` instance.

#### `SshAccountKey(data?: object)`

Create a new `SshAccountKey` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SshAccountKeyEntity` instance.

#### `Tag(data?: object)`

Create a new `Tag` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TagEntity` instance.

#### `User(data?: object)`

Create a new `User` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UserEntity` instance.

#### `Watcher(data?: object)`

Create a new `Watcher` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WatcherEntity` instance.

#### `WebhookSubscription(data?: object)`

Create a new `WebhookSubscription` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WebhookSubscriptionEntity` instance.

#### `Workspace(data?: object)`

Create a new `Workspace` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkspaceEntity` instance.

#### `WorkspaceMembership(data?: object)`

Create a new `WorkspaceMembership` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkspaceMembershipEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |
| `fetchargs.ctrl.signal` | `AbortSignal` | Aborts the request in flight: `ok` is then `false` and `err.code` is `request_aborted`. |

**Returns:** `Promise<{ ok, status, headers, data }>`. On a failure
`ok` is `false` and `err` holds the error.

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `BitbucketSdkSDK.test()`.

**Returns:** `BitbucketSdkSDK` instance in test mode.

#### Cancelling a call

Every entity operation takes an optional `ctrl` object after its match or
data, and an `AbortSignal` in `ctrl.signal` cancels the request in flight.
The operation then rejects with an error whose `code` is
`request_aborted` and whose `cause` is the signal's reason. A request
whose signal has already aborted is not sent. `stream()` takes the signal
as `callopts.signal`, and ends when it aborts.


---

## AddonEntity

```ts
const addon = client.Addon()
```

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `client_key` | `/addon/{addon_key}/client-key` | `client.Addon().load({ $action: 'client_key', ... })` |

An action returns that action's OWN response, which is not necessarily a
Addon record — check the API definition for its shape.

```ts
const result = await client.Addon().load({
  $action: 'client_key',
  /* ...the action's own arguments */
})
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Addon().load({ addon_key: 'addon_key' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.Addon().remove()
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.Addon().update({
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AddonEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApplicationPropertyEntity

```ts
const application_property = client.ApplicationProperty()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attributes` | `any[]` | No |  |
| `id` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.ApplicationProperty().load({ app_key: 'app_key', property_name: 'property_name' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApplicationPropertyEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApproveEntity

```ts
const approve = client.Approve()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approved` | `boolean` | No |  |
| `participated_on` | `string` | No | The ISO8601 timestamp of the participant's action. |
| `role` | `string` | No |  |
| `state` | `string` | No |  |
| `type` | `string` | Yes |  |
| `user` | `any` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Approve().create({
  pullrequest_id: 1,
  repo_slug: 'example_repo_slug',
  workspace: 'example_workspace',
  type: 'example_type',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApproveEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BranchEntity

```ts
const branch = client.Branch()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `default_merge_strategy` | `string` | No | The default merge strategy for pull requests targeting this branch. |
| `id` | `string` | No |  |
| `links` | `Record<string, any>` | No |  |
| `merge_strategies` | `any[]` | No | Available merge strategies for pull requests targeting this branch. |
| `name` | `string` | No | The name of the ref. |
| `target` | `any` | No |  |
| `type` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Branch().create({
  repo_slug: 'example_repo_slug',
  workspace: 'example_workspace',
  type: 'example_type',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Branch().load({ id: 'branch_id', repo_slug: 'repo_slug', workspace: 'workspace' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BranchEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BranchingModelEntity

```ts
const branching_model = client.BranchingModel()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch_types` | `any[]` | No | The active branch types. |
| `development` | `Record<string, any>` | Yes |  |
| `production` | `Record<string, any>` | Yes |  |
| `type` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.BranchingModel().list({ repo_slug: "example", workspace: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BranchingModelEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BranchingModelSettingEntity

```ts
const branching_model_setting = client.BranchingModelSetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch_types` | `any[]` | No |  |
| `development` | `Record<string, any>` | No |  |
| `links` | `Record<string, any>` | No |  |
| `production` | `Record<string, any>` | No |  |
| `type` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.BranchingModelSetting().list({ repo_slug: "example", workspace: "example" })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.BranchingModelSetting().update({
  repo_slug: 'repo_slug',
  workspace: 'workspace',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BranchingModelSettingEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BranchrestrictionEntity

```ts
const branchrestriction = client.Branchrestriction()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch_match_kind` | `string` | Yes | Indicates how the restriction is matched against a branch. |
| `branch_type` | `string` | No | Apply the restriction to branches of this type. |
| `groups` | `any[]` | No |  |
| `id` | `number` | No | The branch restriction status' id. |
| `kind` | `string` | Yes | The type of restriction that is being applied. |
| `links` | `Record<string, any>` | No |  |
| `pattern` | `string` | Yes | Apply the restriction to branches that match this pattern. |
| `pipelines_source_branches` | `any[]` | No | List of source branch names allowed to push back to the restricted branch. |
| `type` | `string` | Yes |  |
| `users` | `any[]` | No |  |
| `value` | `number` | No | Value with kind-specific semantics: * `require_approvals_to_merge` uses it to require a minimum number of approvals on a PR. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Branchrestriction().create({
  repo_slug: 'example_repo_slug',
  workspace: 'example_workspace',
  branch_match_kind: 'example_branch_match_kind',
  kind: 'example_kind',
  pattern: 'example_pattern',
  type: 'example_type',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Branchrestriction().load({ id: 'branchrestriction_id', repo_slug: 'repo_slug', workspace: 'workspace' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.Branchrestriction().remove({ id: 'branchrestriction_id', repo_slug: 'repo_slug', workspace: 'workspace' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.Branchrestriction().update({
  id: 'branchrestriction_id',
  repo_slug: 'repo_slug',
  workspace: 'workspace',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BranchrestrictionEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CommentResolutionEntity

```ts
const comment_resolution = client.CommentResolution()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_on` | `string` | No | The ISO8601 timestamp the resolution was created. |
| `id` | `string` | No |  |
| `type` | `string` | Yes |  |
| `user` | `any` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `resolve` | `/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}/resolve` | `client.CommentResolution().create({ $action: 'resolve', ... })` |

An action returns that action's OWN response, which is not necessarily a
CommentResolution record — check the API definition for its shape.

```ts
const result = await client.CommentResolution().create({
  $action: 'resolve',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.CommentResolution().create({
  id: 1,
  pullrequest_id: 1,
  repo_slug: 'example_repo_slug',
  workspace: 'example_workspace',
  type: 'example_type',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CommentResolutionEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CommitEntity

```ts
const commit = client.Commit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `any` | No |  |
| `commit` | `any` | No |  |
| `committer` | `any` | No |  |
| `content` | `Record<string, any>` | No |  |
| `created_on` | `string` | No |  |
| `date` | `string` | No |  |
| `deleted` | `boolean` | No |  |
| `hash` | `string` | No |  |
| `id` | `number` | No |  |
| `inline` | `Record<string, any>` | Yes |  |
| `links` | `Record<string, any>` | No |  |
| `message` | `string` | No |  |
| `parent` | `any` | No |  |
| `parents` | `any[]` | No |  |
| `participants` | `any[]` | No |  |
| `repository` | `any` | No |  |
| `summary` | `Record<string, any>` | No |  |
| `type` | `string` | Yes |  |
| `updated_on` | `string` | No |  |
| `user` | `any` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `approve` | `/repositories/{workspace}/{repo_slug}/commit/{commit}/approve` | `client.Commit().create({ $action: 'approve', ... })` |
| `comment` | `/repositories/{workspace}/{repo_slug}/commit/{commit}/comments` | `client.Commit().create({ $action: 'comment', ... })` |
| `comment` | `/repositories/{workspace}/{repo_slug}/commit/{commit}/comments` | `client.Commit().list({ $action: 'comment', ... })` |
| `approve` | `/repositories/{workspace}/{repo_slug}/commit/{commit}/approve` | `client.Commit().remove({ $action: 'approve', ... })` |

An action returns that action's OWN response, which is not necessarily a
Commit record — check the API definition for its shape.

```ts
const result = await client.Commit().create({
  $action: 'approve',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Commit().list({ id: "example", repo_slug: "example", workspace: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Commit().load({ id: 'commit_id', repo_slug: 'repo_slug', workspace: 'workspace' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.Commit().remove({ id: 'commit_id', comment_id: 1, repo_slug: 'repo_slug', workspace: 'workspace' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.Commit().update({
  id: 'commit_id',
  comment_id: 1,
  repo_slug: 'repo_slug',
  workspace: 'workspace',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CommitEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CommitstatusEntity

```ts
const commitstatus = client.Commitstatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_on` | `string` | No |  |
| `description` | `string` | No | A description of the build (e.g. |
| `key` | `string` | Yes | An identifier for the status that's unique to its type (current "build" is the only supported type) and the vendor, e.g. |
| `links` | `Record<string, any>` | No |  |
| `name` | `string` | No | An identifier for the build itself, e.g. |
| `refname` | `string` | No | The name of the ref that pointed to this commit at the time the status object was created. |
| `state` | `string` | Yes | Provides some indication of the status of this commit |
| `type` | `string` | Yes |  |
| `updated_on` | `string` | No |  |
| `url` | `string` | No | A URL linking back to the vendor or build system, for providing more information about whatever process produced this status. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Commitstatus().create({
  commit_id: 'example_commit_id',
  repo_slug: 'example_repo_slug',
  workspace: 'example_workspace',
  key: 'example_key',
  state: 'example_state',
  type: 'example_type',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Commitstatus().load({ commit_id: 'commit_id', key: 'key', repo_slug: 'repo_slug', workspace: 'workspace' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.Commitstatus().update({
  commit_id: 'commit_id',
  key: 'key',
  repo_slug: 'repo_slug',
  workspace: 'workspace',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CommitstatusEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DefaultReviewerEntity

```ts
const default_reviewer = client.DefaultReviewer()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_on` | `string` | No |  |
| `display_name` | `string` | No |  |
| `id` | `string` | No |  |
| `links` | `Record<string, any>` | No | Links related to an Account. |
| `type` | `string` | Yes |  |
| `uuid` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.DefaultReviewer().load({ id: 'default_reviewer_id', repo_slug: 'repo_slug', workspace: 'workspace' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.DefaultReviewer().update({
  id: 'default_reviewer_id',
  repo_slug: 'repo_slug',
  workspace: 'workspace',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DefaultReviewerEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DeployKeyEntity

```ts
const deploy_key = client.DeployKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `added_on` | `string` | No |  |
| `comment` | `string` | No | The comment parsed from the deploy key (if present) |
| `id` | `string` | No |  |
| `key` | `string` | No | The deploy key value. |
| `label` | `string` | No | The user-defined label for the deploy key |
| `last_used` | `string` | No |  |
| `links` | `Record<string, any>` | No |  |
| `owner` | `any` | No |  |
| `repository` | `any` | No |  |
| `type` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.DeployKey().create({
  repo_slug: 'example_repo_slug',
  workspace: 'example_workspace',
  type: 'example_type',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.DeployKey().load({ id: 'deploy_key_id', repo_slug: 'repo_slug', workspace: 'workspace' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.DeployKey().update({
  id: 'deploy_key_id',
  repo_slug: 'repo_slug',
  workspace: 'workspace',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DeployKeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DeploymentEntity

```ts
const deployment = client.Deployment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `environment` | `any` | No | A deployment environment. |
| `id` | `string` | No |  |
| `release` | `any` | No | The release associated with this deployment. |
| `state` | `any` | No |  |
| `type` | `string` | Yes |  |
| `uuid` | `string` | No | The UUID identifying the deployment. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Deployment().create({
  environment_uuid: 'example_environment_uuid',
  repo_slug: 'example_repo_slug',
  workspace: 'example_workspace',
  type: 'example_type',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Deployment().load({ id: 'deployment_id', repo_slug: 'repo_slug', workspace: 'workspace' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.Deployment().remove({ environment_uuid: 'environment_uuid', repo_slug: 'repo_slug', workspace: 'workspace' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DeploymentEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DeploymentEnvironmentEntity

```ts
const deployment_environment = client.DeploymentEnvironment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `name` | `string` | No | The name of the environment. |
| `type` | `string` | Yes |  |
| `uuid` | `string` | No | The UUID identifying the environment. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.DeploymentEnvironment().create({
  repo_slug: 'example_repo_slug',
  workspace: 'example_workspace',
  type: 'example_type',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.DeploymentEnvironment().load({ id: 'deployment_environment_id', repo_slug: 'repo_slug', workspace: 'workspace' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DeploymentEnvironmentEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DeploymentVariableEntity

```ts
const deployment_variable = client.DeploymentVariable()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `key` | `string` | No | The unique name of the variable. |
| `secured` | `boolean` | No | If true, this variable will be treated as secured. |
| `type` | `string` | Yes |  |
| `uuid` | `string` | No | The UUID identifying the variable. |
| `value` | `string` | No | The value of the variable. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.DeploymentVariable().create({
  environment_id: 'example_environment_id',
  repo_slug: 'example_repo_slug',
  workspace: 'example_workspace',
  type: 'example_type',
})
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.DeploymentVariable().update({
  environment_id: 'environment_id',
  id: 'id',
  repo_slug: 'repo_slug',
  workspace: 'workspace',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DeploymentVariableEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DownloadEntity

```ts
const download = client.Download()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Download().create({
  repo_slug: 'example_repo_slug',
  workspace: 'example_workspace',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Download().load({ id: 'download_id', repo_slug: 'repo_slug', workspace: 'workspace' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.Download().remove({ id: 'download_id', repo_slug: 'repo_slug', workspace: 'workspace' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DownloadEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EffectiveDefaultReviewerEntity

```ts
const effective_default_reviewer = client.EffectiveDefaultReviewer()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `reviewer_type` | `string` | No |  |
| `type` | `string` | Yes |  |
| `user` | `any` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.EffectiveDefaultReviewer().list({ repo_slug: "example", workspace: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EffectiveDefaultReviewerEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EffectiveRepoBranchingModelEntity

```ts
const effective_repo_branching_model = client.EffectiveRepoBranchingModel()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch_types` | `any[]` | No | The active branch types. |
| `development` | `Record<string, any>` | Yes |  |
| `production` | `Record<string, any>` | Yes |  |
| `type` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.EffectiveRepoBranchingModel().list({ repo_slug: "example", workspace: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EffectiveRepoBranchingModelEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GpgEntity

```ts
const gpg = client.Gpg()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.Gpg().remove({ fingerprint: 'fingerprint', selected_user: 'selected_user' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GpgEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GpgAccountKeyEntity

```ts
const gpg_account_key = client.GpgAccountKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `added_on` | `string` | No |  |
| `created_on` | `string` | No |  |
| `expires_on` | `string` | No |  |
| `fingerprint` | `string` | No | The GPG key fingerprint. |
| `key` | `string` | No | The GPG key value in X format. |
| `key_id` | `string` | No | The unique identifier for the GPG key |
| `last_used` | `string` | No |  |
| `links` | `Record<string, any>` | No |  |
| `name` | `string` | No | The user-defined label for the GPG key |
| `owner` | `any` | No |  |
| `parent_fingerprint` | `string` | No | The fingerprint of the parent key. |
| `subkeys` | `any[]` | No |  |
| `type` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.GpgAccountKey().create({
  selected_user: 'example_selected_user',
  type: 'example_type',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.GpgAccountKey().load({ fingerprint: 'fingerprint', selected_user: 'selected_user' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GpgAccountKeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MergeQueueEntity

```ts
const merge_queue = client.MergeQueue()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `name` | `string` | Yes | The merge queue name. |
| `state` | `string` | Yes | The configuration state returned by the merge queue service. |
| `type` | `string` | Yes |  |
| `uuid` | `string` | Yes | The merge queue UUID. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.MergeQueue().load({ id: 'merge_queue_id', repo_slug: 'repo_slug', workspace: 'workspace' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.MergeQueue().remove({ id: 'merge_queue_id', pullrequest_id: 1, repo_slug: 'repo_slug', workspace: 'workspace' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MergeQueueEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MergeQueuePullrequestEntity

```ts
const merge_queue_pullrequest = client.MergeQueuePullrequest()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `last_activity_on` | `string` | No |  |
| `merge_queue` | `Record<string, any>` | No | A reference to the merge queue holding a pullrequest. |
| `pipeline` | `any` | No |  |
| `pullrequest` | `any` | No |  |
| `queued_on` | `string` | No |  |
| `rank` | `number` | No | The one-based position of the pullrequest in the merge queue. |
| `status` | `string` | No |  |
| `type` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.MergeQueuePullrequest().load({ merge_queue_id: 'merge_queue_id', pullrequest_id: 1, repo_slug: 'repo_slug', workspace: 'workspace' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MergeQueuePullrequestEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginatedAccountEntity

```ts
const paginated_account = client.PaginatedAccount()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_on` | `string` | No |  |
| `display_name` | `string` | No |  |
| `links` | `Record<string, any>` | No | Links related to an Account. |
| `type` | `string` | Yes |  |
| `uuid` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PaginatedAccount().list({ repo_slug: "example", workspace: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginatedAccountEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginatedAnnotationEntity

```ts
const paginated_annotation = client.PaginatedAnnotation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotation_type` | `string` | No | The type of the report. |
| `created_on` | `string` | No | The timestamp when the report was created. |
| `details` | `string` | No | The details to show to users when clicking on the annotation. |
| `external_id` | `string` | No | ID of the annotation provided by the annotation creator. |
| `line` | `number` | No | The line number that the annotation should belong to. |
| `link` | `string` | No | A URL linking to the annotation in an external tool. |
| `path` | `string` | No | The path of the file on which this annotation should be placed. |
| `result` | `string` | No | The state of the report. |
| `severity` | `string` | No | The severity of the annotation. |
| `summary` | `string` | No | The message to display to users. |
| `type` | `string` | Yes |  |
| `updated_on` | `string` | No | The timestamp when the report was updated. |
| `uuid` | `string` | No | The UUID that can be used to identify the annotation. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PaginatedAnnotation().list({ commit_id: "example", repo_slug: "example", report_id: "example", workspace: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginatedAnnotationEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginatedBranchEntity

```ts
const paginated_branch = client.PaginatedBranch()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `default_merge_strategy` | `string` | No | The default merge strategy for pull requests targeting this branch. |
| `links` | `Record<string, any>` | No |  |
| `merge_strategies` | `any[]` | No | Available merge strategies for pull requests targeting this branch. |
| `name` | `string` | No | The name of the ref. |
| `target` | `any` | No |  |
| `type` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PaginatedBranch().list({ repo_slug: "example", workspace: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginatedBranchEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginatedBranchrestrictionEntity

```ts
const paginated_branchrestriction = client.PaginatedBranchrestriction()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch_match_kind` | `string` | Yes | Indicates how the restriction is matched against a branch. |
| `branch_type` | `string` | No | Apply the restriction to branches of this type. |
| `groups` | `any[]` | No |  |
| `id` | `number` | No | The branch restriction status' id. |
| `kind` | `string` | Yes | The type of restriction that is being applied. |
| `links` | `Record<string, any>` | No |  |
| `pattern` | `string` | Yes | Apply the restriction to branches that match this pattern. |
| `pipelines_source_branches` | `any[]` | No | List of source branch names allowed to push back to the restricted branch. |
| `type` | `string` | Yes |  |
| `users` | `any[]` | No |  |
| `value` | `number` | No | Value with kind-specific semantics: * `require_approvals_to_merge` uses it to require a minimum number of approvals on a PR. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PaginatedBranchrestriction().list({ repo_slug: "example", workspace: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginatedBranchrestrictionEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginatedChangesetEntity

```ts
const paginated_changeset = client.PaginatedChangeset()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `any` | No |  |
| `committer` | `any` | No |  |
| `date` | `string` | No |  |
| `hash` | `string` | No |  |
| `message` | `string` | No |  |
| `next` | `string` | No | Link to the next page if it exists. |
| `page` | `number` | No | Page number of the current results. |
| `pagelen` | `number` | No | Current number of objects on the existing page. |
| `parents` | `any[]` | No |  |
| `previous` | `string` | No | Link to previous page if it exists. |
| `size` | `number` | No | Total number of objects in the response. |
| `summary` | `Record<string, any>` | No |  |
| `type` | `string` | Yes |  |
| `values` | `any[]` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.PaginatedChangeset().create({
  repo_slug: 'example_repo_slug',
  workspace: 'example_workspace',
  type: 'example_type',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PaginatedChangeset().list({ repo_slug: "example", workspace: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.PaginatedChangeset().load({ repo_slug: 'repo_slug', revision: 'revision', workspace: 'workspace' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginatedChangesetEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginatedCommitstatusEntity

```ts
const paginated_commitstatus = client.PaginatedCommitstatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_on` | `string` | No |  |
| `description` | `string` | No | A description of the build (e.g. |
| `key` | `string` | Yes | An identifier for the status that's unique to its type (current "build" is the only supported type) and the vendor, e.g. |
| `links` | `Record<string, any>` | No |  |
| `name` | `string` | No | An identifier for the build itself, e.g. |
| `refname` | `string` | No | The name of the ref that pointed to this commit at the time the status object was created. |
| `state` | `string` | Yes | Provides some indication of the status of this commit |
| `type` | `string` | Yes |  |
| `updated_on` | `string` | No |  |
| `url` | `string` | No | A URL linking back to the vendor or build system, for providing more information about whatever process produced this status. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PaginatedCommitstatus().list({ commit_id: "example", repo_slug: "example", workspace: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginatedCommitstatusEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginatedDefaultReviewerAndTypeEntity

```ts
const paginated_default_reviewer_and_type = client.PaginatedDefaultReviewerAndType()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `reviewer_type` | `string` | No |  |
| `type` | `string` | Yes |  |
| `user` | `any` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PaginatedDefaultReviewerAndType().list({ project_key: "example", workspace_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginatedDefaultReviewerAndTypeEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginatedDeployKeyEntity

```ts
const paginated_deploy_key = client.PaginatedDeployKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `added_on` | `string` | No |  |
| `comment` | `string` | No | The comment parsed from the deploy key (if present) |
| `key` | `string` | No | The deploy key value. |
| `label` | `string` | No | The user-defined label for the deploy key |
| `last_used` | `string` | No |  |
| `links` | `Record<string, any>` | No |  |
| `owner` | `any` | No |  |
| `repository` | `any` | No |  |
| `type` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PaginatedDeployKey().list({ repo_slug: "example", workspace: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginatedDeployKeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginatedDeploymentEntity

```ts
const paginated_deployment = client.PaginatedDeployment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `environment` | `any` | No | A deployment environment. |
| `release` | `any` | No | The release associated with this deployment. |
| `state` | `any` | No |  |
| `type` | `string` | Yes |  |
| `uuid` | `string` | No | The UUID identifying the deployment. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PaginatedDeployment().list({ repo_slug: "example", workspace: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginatedDeploymentEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginatedDeploymentVariableEntity

```ts
const paginated_deployment_variable = client.PaginatedDeploymentVariable()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `string` | No | The unique name of the variable. |
| `secured` | `boolean` | No | If true, this variable will be treated as secured. |
| `type` | `string` | Yes |  |
| `uuid` | `string` | No | The UUID identifying the variable. |
| `value` | `string` | No | The value of the variable. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PaginatedDeploymentVariable().list({ environment_id: "example", repo_slug: "example", workspace: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginatedDeploymentVariableEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginatedDiffstatEntity

```ts
const paginated_diffstat = client.PaginatedDiffstat()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `next` | `string` | No | Link to the next page if it exists. |
| `page` | `number` | No | Page number of the current results. |
| `pagelen` | `number` | No | Current number of objects on the existing page. |
| `previous` | `string` | No | Link to previous page if it exists. |
| `size` | `number` | No | Total number of objects in the response. |
| `values` | `any[]` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.PaginatedDiffstat().load({ id: 'paginated_diffstat_id', repo_slug: 'repo_slug', workspace: 'workspace' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginatedDiffstatEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginatedEnvironmentEntity

```ts
const paginated_environment = client.PaginatedEnvironment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No | The name of the environment. |
| `type` | `string` | Yes |  |
| `uuid` | `string` | No | The UUID identifying the environment. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PaginatedEnvironment().list({ repo_slug: "example", workspace: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginatedEnvironmentEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginatedFileEntity

```ts
const paginated_file = client.PaginatedFile()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `next` | `string` | No | Link to the next page if it exists. |
| `page` | `number` | No | Page number of the current results. |
| `pagelen` | `number` | No | Current number of objects on the existing page. |
| `previous` | `string` | No | Link to previous page if it exists. |
| `size` | `number` | No | Total number of objects in the response. |
| `values` | `any[]` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.PaginatedFile().load({ commit: 'commit', path: 'path', repo_slug: 'repo_slug', workspace: 'workspace' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginatedFileEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginatedFileConflictEntity

```ts
const paginated_file_conflict = client.PaginatedFileConflict()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `next` | `string` | No | Link to the next page if it exists. |
| `page` | `number` | No | Page number of the current results. |
| `pagelen` | `number` | No | Current number of objects on the existing page. |
| `previous` | `string` | No | Link to previous page if it exists. |
| `size` | `number` | No | Total number of objects in the response. |
| `values` | `any[]` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.PaginatedFileConflict().load({ id: 'paginated_file_conflict_id', repo_slug: 'repo_slug', workspace: 'workspace' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginatedFileConflictEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginatedGpgUserKeyEntity

```ts
const paginated_gpg_user_key = client.PaginatedGpgUserKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `added_on` | `string` | No |  |
| `created_on` | `string` | No |  |
| `expires_on` | `string` | No |  |
| `fingerprint` | `string` | No | The GPG key fingerprint. |
| `key` | `string` | No | The GPG key value in X format. |
| `key_id` | `string` | No | The unique identifier for the GPG key |
| `last_used` | `string` | No |  |
| `links` | `Record<string, any>` | No |  |
| `name` | `string` | No | The user-defined label for the GPG key |
| `owner` | `any` | No |  |
| `parent_fingerprint` | `string` | No | The fingerprint of the parent key. |
| `subkeys` | `any[]` | No |  |
| `type` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PaginatedGpgUserKey().list({ selected_user: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginatedGpgUserKeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginatedHookEventEntity

```ts
const paginated_hook_event = client.PaginatedHookEvent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `next` | `string` | No | Link to the next page if it exists. |
| `page` | `number` | No | Page number of the current results. |
| `pagelen` | `number` | No | Current number of objects on the existing page. |
| `previous` | `string` | No | Link to previous page if it exists. |
| `repository` | `Record<string, any>` | No |  |
| `size` | `number` | No | Total number of objects in the response. |
| `values` | `any[]` | No |  |
| `workspace` | `Record<string, any>` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.PaginatedHookEvent().load({ id: 'paginated_hook_event_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginatedHookEventEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginatedMergeQueueEntity

```ts
const paginated_merge_queue = client.PaginatedMergeQueue()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | The merge queue name. |
| `state` | `string` | Yes | The configuration state returned by the merge queue service. |
| `type` | `string` | Yes |  |
| `uuid` | `string` | Yes | The merge queue UUID. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PaginatedMergeQueue().list({ repo_slug: "example", workspace: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginatedMergeQueueEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginatedMergeQueuePullrequestEntity

```ts
const paginated_merge_queue_pullrequest = client.PaginatedMergeQueuePullrequest()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `last_activity_on` | `string` | No |  |
| `merge_queue` | `Record<string, any>` | No | A reference to the merge queue holding a pullrequest. |
| `pipeline` | `any` | No |  |
| `pullrequest` | `any` | No |  |
| `queued_on` | `string` | No |  |
| `rank` | `number` | No | The one-based position of the pullrequest in the merge queue. |
| `status` | `string` | No |  |
| `type` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PaginatedMergeQueuePullrequest().list({ merge_queue_id: "example", repo_slug: "example", workspace: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginatedMergeQueuePullrequestEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginatedPipelineEntity

```ts
const paginated_pipeline = client.PaginatedPipeline()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `build_number` | `number` | No | The build number of the pipeline. |
| `build_seconds_used` | `number` | No | The number of build seconds used by this pipeline. |
| `completed_on` | `string` | No | The timestamp when the Pipeline was completed. |
| `configuration_sources` | `any[]` | No | An ordered list of sources of the pipeline configuration |
| `created_on` | `string` | No | The timestamp when the pipeline was created. |
| `creator` | `any` | No | The Bitbucket account that was used to create the pipeline. |
| `links` | `any` | No |  |
| `repository` | `any` | No |  |
| `state` | `any` | No |  |
| `target` | `any` | No | The target that the pipeline built. |
| `trigger` | `any` | No | The trigger used for the pipeline. |
| `type` | `string` | Yes |  |
| `uuid` | `string` | No | The UUID identifying the pipeline. |
| `variables` | `any[]` | No | The variables for the pipeline. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PaginatedPipeline().list({ repo_slug: "example", workspace: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginatedPipelineEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginatedPipelineCacheEntity

```ts
const paginated_pipeline_cache = client.PaginatedPipelineCache()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_on` | `string` | No | The timestamp when the cache was created. |
| `file_size_bytes` | `number` | No | The size of the file containing the archive of the cache. |
| `key_hash` | `string` | No | The key hash of the cache version. |
| `name` | `string` | No | The name of the cache. |
| `path` | `string` | No | The path where the cache contents were retrieved from. |
| `pipeline_uuid` | `string` | No | The UUID of the pipeline that created the cache. |
| `step_uuid` | `string` | No | The uuid of the step that created the cache. |
| `type` | `string` | Yes |  |
| `uuid` | `string` | No | The UUID identifying the pipeline cache. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PaginatedPipelineCache().list({ repo_slug: "example", workspace: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginatedPipelineCacheEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginatedPipelineKnownHostEntity

```ts
const paginated_pipeline_known_host = client.PaginatedPipelineKnownHost()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `hostname` | `string` | No | The hostname of the known host. |
| `public_key` | `any` | No | The public key of the known host. |
| `type` | `string` | Yes |  |
| `uuid` | `string` | No | The UUID identifying the known host. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PaginatedPipelineKnownHost().list({ repo_slug: "example", workspace: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginatedPipelineKnownHostEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginatedPipelineRunnerEntity

```ts
const paginated_pipeline_runner = client.PaginatedPipelineRunner()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_on` | `string` | No | The timestamp when the runner was created. |
| `labels` | `any[]` | No | Labels assigned to the runner for identification and routing. |
| `name` | `string` | No | The name of the runner. |
| `oauth_client` | `any` | No | OAuth client configuration for the runner. |
| `state` | `any` | No | The current state of the runner. |
| `type` | `string` | Yes |  |
| `updated_on` | `string` | No | The timestamp when the runner was last updated. |
| `uuid` | `string` | No | The UUID identifying the runner. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PaginatedPipelineRunner().list({ workspace_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginatedPipelineRunnerEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginatedPipelineScheduleEntity

```ts
const paginated_pipeline_schedule = client.PaginatedPipelineSchedule()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_on` | `string` | No | The timestamp when the schedule was created. |
| `cron_pattern` | `string` | No | The cron expression with second precision (7 fields) that the schedule applies. |
| `enabled` | `boolean` | No | Whether the schedule is enabled. |
| `target` | `any` | No | The target on which the schedule will be executed. |
| `type` | `string` | Yes |  |
| `updated_on` | `string` | No | The timestamp when the schedule was updated. |
| `uuid` | `string` | No | The UUID identifying the schedule. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PaginatedPipelineSchedule().list({ repo_slug: "example", workspace: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginatedPipelineScheduleEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginatedPipelineScheduleExecutionEntity

```ts
const paginated_pipeline_schedule_execution = client.PaginatedPipelineScheduleExecution()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PaginatedPipelineScheduleExecution().list({ repo_slug: "example", schedule_id: "example", workspace: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginatedPipelineScheduleExecutionEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginatedPipelineStepEntity

```ts
const paginated_pipeline_step = client.PaginatedPipelineStep()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completed_on` | `string` | No | The timestamp when the step execution was completed. |
| `image` | `Record<string, any>` | No | The Docker image used as the build container for the step. |
| `script_commands` | `any[]` | No | The list of build commands. |
| `setup_commands` | `any[]` | No | The list of commands that are executed as part of the setup phase of the build. |
| `started_on` | `string` | No | The timestamp when the step execution was started. |
| `state` | `any` | No | The current state of the step |
| `type` | `string` | Yes |  |
| `uuid` | `string` | No | The UUID identifying the step. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PaginatedPipelineStep().list({ pipeline_id: "example", repo_slug: "example", workspace: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginatedPipelineStepEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginatedPipelineVariableEntity

```ts
const paginated_pipeline_variable = client.PaginatedPipelineVariable()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `string` | No | The unique name of the variable. |
| `secured` | `boolean` | No | If true, this variable will be treated as secured. |
| `type` | `string` | Yes |  |
| `uuid` | `string` | No | The UUID identifying the variable. |
| `value` | `string` | No | The value of the variable. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PaginatedPipelineVariable().list({ selected_user: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginatedPipelineVariableEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginatedProjectEntity

```ts
const paginated_project = client.PaginatedProject()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_on` | `string` | No |  |
| `description` | `string` | No |  |
| `has_publicly_visible_repos` | `boolean` | No | Indicates whether the project contains publicly visible repositories. |
| `is_private` | `boolean` | No | Indicates whether the project is publicly accessible, or whether it is private to the team and consequently only visible to team members. |
| `key` | `string` | No | The project's key. |
| `links` | `Record<string, any>` | No |  |
| `name` | `string` | No | The name of the project. |
| `owner` | `any` | No |  |
| `type` | `string` | Yes |  |
| `updated_on` | `string` | No |  |
| `uuid` | `string` | No | The project's immutable id. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PaginatedProject().list({ workspace_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginatedProjectEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginatedProjectDeployKeyEntity

```ts
const paginated_project_deploy_key = client.PaginatedProjectDeployKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `added_on` | `string` | No |  |
| `comment` | `string` | No | The comment parsed from the deploy key (if present) |
| `created_by` | `any` | No |  |
| `key` | `string` | No | The deploy key value. |
| `label` | `string` | No | The user-defined label for the deploy key |
| `last_used` | `string` | No |  |
| `links` | `Record<string, any>` | No |  |
| `project` | `any` | No |  |
| `type` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PaginatedProjectDeployKey().list({ project_key: "example", workspace_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginatedProjectDeployKeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginatedProjectGroupPermissionEntity

```ts
const paginated_project_group_permission = client.PaginatedProjectGroupPermission()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `group` | `any` | No |  |
| `links` | `Record<string, any>` | No |  |
| `permission` | `string` | No |  |
| `project` | `any` | No |  |
| `type` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PaginatedProjectGroupPermission().list({ project_id: "example", workspace_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginatedProjectGroupPermissionEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginatedProjectUserPermissionEntity

```ts
const paginated_project_user_permission = client.PaginatedProjectUserPermission()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `links` | `Record<string, any>` | No |  |
| `permission` | `string` | No |  |
| `project` | `any` | No |  |
| `type` | `string` | Yes |  |
| `user` | `any` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PaginatedProjectUserPermission().list({ project_id: "example", workspace_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginatedProjectUserPermissionEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginatedPullrequestEntity

```ts
const paginated_pullrequest = client.PaginatedPullrequest()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `any` | No |  |
| `close_source_branch` | `boolean` | No | A boolean flag indicating if merging the pull request closes the source branch. |
| `closed_by` | `any` | No |  |
| `comment_count` | `number` | No | The number of comments for a specific pull request. |
| `created_on` | `string` | No | The ISO8601 timestamp the request was created. |
| `destination` | `Record<string, any>` | No |  |
| `draft` | `boolean` | No | A boolean flag indicating whether the pull request is a draft. |
| `id` | `number` | No | The pull request's unique ID. |
| `links` | `Record<string, any>` | No |  |
| `merge_commit` | `Record<string, any>` | No |  |
| `next` | `string` | No | Link to the next page if it exists. |
| `page` | `number` | No | Page number of the current results. |
| `pagelen` | `number` | No | Current number of objects on the existing page. |
| `participants` | `any[]` | No | The list of users that are collaborating on this pull request. |
| `previous` | `string` | No | Link to previous page if it exists. |
| `queued` | `boolean` | No | A boolean flag indicating whether the pull request is queued |
| `reason` | `string` | No | Explains why a pull request was declined. |
| `rendered` | `Record<string, any>` | No | User provided pull request text, interpreted in a markup language and rendered in HTML |
| `reviewers` | `any[]` | No | The list of users that were added as reviewers on this pull request when it was created. |
| `size` | `number` | No | Total number of objects in the response. |
| `source` | `Record<string, any>` | No |  |
| `state` | `string` | No | The pull request's current status. |
| `summary` | `Record<string, any>` | No |  |
| `task_count` | `number` | No | The number of open tasks for a specific pull request. |
| `title` | `string` | No | Title of the pull request. |
| `type` | `string` | Yes |  |
| `updated_on` | `string` | No | The ISO8601 timestamp the request was last updated. |
| `values` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PaginatedPullrequest().list({ repo_slug: "example", workspace: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.PaginatedPullrequest().load({ id: 'paginated_pullrequest_id', workspace_id: 'workspace_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginatedPullrequestEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginatedPullrequestCommentEntity

```ts
const paginated_pullrequest_comment = client.PaginatedPullrequestComment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `Record<string, any>` | No |  |
| `created_on` | `string` | No |  |
| `deleted` | `boolean` | No |  |
| `id` | `number` | No |  |
| `inline` | `Record<string, any>` | Yes |  |
| `links` | `Record<string, any>` | No |  |
| `parent` | `any` | No |  |
| `pending` | `boolean` | No |  |
| `pullrequest` | `any` | No |  |
| `resolution` | `Record<string, any>` | Yes | The resolution object for a Comment. |
| `type` | `string` | Yes |  |
| `updated_on` | `string` | No |  |
| `user` | `any` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PaginatedPullrequestComment().list({ pullrequest_id: 1, repo_slug: "example", workspace: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginatedPullrequestCommentEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginatedRefEntity

```ts
const paginated_ref = client.PaginatedRef()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `links` | `Record<string, any>` | No |  |
| `name` | `string` | No | The name of the ref. |
| `target` | `any` | No |  |
| `type` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PaginatedRef().list({ repo_slug: "example", workspace: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginatedRefEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginatedReportEntity

```ts
const paginated_report = client.PaginatedReport()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_on` | `string` | No | The timestamp when the report was created. |
| `data` | `any[]` | No | An array of data fields to display information on the report. |
| `details` | `string` | No | A string to describe the purpose of the report. |
| `external_id` | `string` | No | ID of the report provided by the report creator. |
| `link` | `string` | No | A URL linking to the results of the report in an external tool. |
| `logo_url` | `string` | No | A URL to the report logo. |
| `remote_link_enabled` | `boolean` | No | If enabled, a remote link is created in Jira for the work item associated with the commit the report belongs to. |
| `report_type` | `string` | No | The type of the report. |
| `reporter` | `string` | No | A string to describe the tool or company who created the report. |
| `result` | `string` | No | The state of the report. |
| `title` | `string` | No | The title of the report. |
| `type` | `string` | Yes |  |
| `updated_on` | `string` | No | The timestamp when the report was updated. |
| `uuid` | `string` | No | The UUID that can be used to identify the report. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PaginatedReport().list({ commit_id: "example", repo_slug: "example", workspace: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginatedReportEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginatedRepositoryEntity

```ts
const paginated_repository = client.PaginatedRepository()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_on` | `string` | No |  |
| `description` | `string` | No |  |
| `fork_policy` | `string` | No | Controls the rules for forking this repository. |
| `full_name` | `string` | No | The concatenation of the repository owner's username and the slugified name, e.g. |
| `has_issues` | `boolean` | No | The issue tracker for this repository is enabled. |
| `has_wiki` | `boolean` | No | The wiki for this repository is enabled. |
| `id` | `string` | No |  |
| `is_private` | `boolean` | No |  |
| `language` | `string` | No |  |
| `links` | `Record<string, any>` | No |  |
| `mainbranch` | `any` | No |  |
| `name` | `string` | No |  |
| `next` | `string` | No | Link to the next page if it exists. |
| `owner` | `any` | No |  |
| `page` | `number` | No | Page number of the current results. |
| `pagelen` | `number` | No | Current number of objects on the existing page. |
| `parent` | `any` | No |  |
| `previous` | `string` | No | Link to previous page if it exists. |
| `project` | `any` | No |  |
| `scm` | `string` | No |  |
| `size` | `number` | No | Total number of objects in the response. |
| `type` | `string` | Yes |  |
| `updated_on` | `string` | No |  |
| `uuid` | `string` | No | The repository's immutable id. |
| `values` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PaginatedRepository().list({ repo_slug: "example", workspace: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.PaginatedRepository().load({ id: 'paginated_repository_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginatedRepositoryEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginatedRepositoryGroupPermissionEntity

```ts
const paginated_repository_group_permission = client.PaginatedRepositoryGroupPermission()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `group` | `any` | No |  |
| `links` | `Record<string, any>` | No |  |
| `permission` | `string` | No |  |
| `repository` | `any` | No |  |
| `type` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PaginatedRepositoryGroupPermission().list({ repo_slug: "example", workspace: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginatedRepositoryGroupPermissionEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginatedRepositoryPermissionEntity

```ts
const paginated_repository_permission = client.PaginatedRepositoryPermission()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `next` | `string` | No | Link to the next page if it exists. |
| `page` | `number` | No | Page number of the current results. |
| `pagelen` | `number` | No | Current number of objects on the existing page. |
| `permission` | `string` | No |  |
| `previous` | `string` | No | Link to previous page if it exists. |
| `repository` | `any` | No |  |
| `size` | `number` | No | Total number of objects in the response. |
| `type` | `string` | Yes |  |
| `user` | `any` | No |  |
| `values` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PaginatedRepositoryPermission().list({ workspace_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.PaginatedRepositoryPermission().load({ repo_slug: 'repo_slug', workspace_id: 'workspace_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginatedRepositoryPermissionEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginatedRepositoryUserPermissionEntity

```ts
const paginated_repository_user_permission = client.PaginatedRepositoryUserPermission()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `links` | `Record<string, any>` | No |  |
| `permission` | `string` | No |  |
| `repository` | `any` | No |  |
| `type` | `string` | Yes |  |
| `user` | `any` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PaginatedRepositoryUserPermission().list({ repo_slug: "example", workspace: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginatedRepositoryUserPermissionEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginatedSnippetEntity

```ts
const paginated_snippet = client.PaginatedSnippet()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `next` | `string` | No | Link to the next page if it exists. |
| `page` | `number` | No | Page number of the current results. |
| `pagelen` | `number` | No | Current number of objects on the existing page. |
| `previous` | `string` | No | Link to previous page if it exists. |
| `size` | `number` | No | Total number of objects in the response. |
| `values` | `any[]` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.PaginatedSnippet().load({ id: 'paginated_snippet_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginatedSnippetEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginatedSnippetCommentEntity

```ts
const paginated_snippet_comment = client.PaginatedSnippetComment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `links` | `Record<string, any>` | No |  |
| `snippet` | `any` | No |  |
| `type` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PaginatedSnippetComment().list({ encoded_id: "example", workspace: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginatedSnippetCommentEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginatedSnippetCommitEntity

```ts
const paginated_snippet_commit = client.PaginatedSnippetCommit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `any` | No |  |
| `committer` | `any` | No |  |
| `date` | `string` | No |  |
| `hash` | `string` | No |  |
| `links` | `Record<string, any>` | No |  |
| `message` | `string` | No |  |
| `parents` | `any[]` | No |  |
| `snippet` | `any` | No |  |
| `summary` | `Record<string, any>` | No |  |
| `type` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PaginatedSnippetCommit().list({ encoded_id: "example", workspace: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginatedSnippetCommitEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginatedSshUserKeyEntity

```ts
const paginated_ssh_user_key = client.PaginatedSshUserKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `string` | No | The comment parsed from the SSH key (if present) |
| `created_on` | `string` | No |  |
| `expires_on` | `string` | No |  |
| `fingerprint` | `string` | No | The SSH key fingerprint in SHA-256 format. |
| `key` | `string` | No | The SSH public key value in OpenSSH format. |
| `label` | `string` | No | The user-defined label for the SSH key |
| `last_used` | `string` | No |  |
| `links` | `Record<string, any>` | No |  |
| `owner` | `any` | No |  |
| `type` | `string` | Yes |  |
| `uuid` | `string` | No | The SSH key's immutable ID. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PaginatedSshUserKey().list({ selected_user: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginatedSshUserKeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginatedTagEntity

```ts
const paginated_tag = client.PaginatedTag()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `string` | No | The date that the tag was created, if available |
| `links` | `Record<string, any>` | No |  |
| `message` | `string` | No | The message associated with the tag, if available. |
| `name` | `string` | No | The name of the ref. |
| `tagger` | `any` | No |  |
| `target` | `any` | No |  |
| `type` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PaginatedTag().list({ repo_slug: "example", workspace: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginatedTagEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginatedTaskEntity

```ts
const paginated_task = client.PaginatedTask()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `any` | No |  |
| `content` | `Record<string, any>` | Yes |  |
| `created_on` | `string` | Yes |  |
| `creator` | `any` | Yes |  |
| `id` | `number` | No |  |
| `links` | `Record<string, any>` | No |  |
| `pending` | `boolean` | No |  |
| `resolved_by` | `any` | No |  |
| `resolved_on` | `string` | No | The ISO8601 timestamp for when the task was resolved. |
| `state` | `string` | Yes |  |
| `updated_on` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PaginatedTask().list({ pullrequest_id: 1, repo_slug: "example", workspace: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginatedTaskEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginatedTreeentryEntity

```ts
const paginated_treeentry = client.PaginatedTreeentry()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commit` | `any` | No |  |
| `id` | `string` | No |  |
| `next` | `string` | No | Link to the next page if it exists. |
| `page` | `number` | No | Page number of the current results. |
| `pagelen` | `number` | No | Current number of objects on the existing page. |
| `path` | `string` | No | The path in the repository |
| `previous` | `string` | No | Link to previous page if it exists. |
| `size` | `number` | No | Total number of objects in the response. |
| `type` | `string` | Yes |  |
| `values` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PaginatedTreeentry().list({ repo_slug: "example", workspace: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.PaginatedTreeentry().load({ commit: 'commit', path: 'path', repo_slug: 'repo_slug', workspace: 'workspace' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginatedTreeentryEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginatedWebhookSubscriptionEntity

```ts
const paginated_webhook_subscription = client.PaginatedWebhookSubscription()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | No | Whether or not the webhook subscription is enabled. |
| `created_at` | `string` | No | The timestamp when the webhook subscription was created. |
| `description` | `string` | No | A user-defined description of the webhook. |
| `events` | `any[]` | No | The events this webhook is subscribed to. |
| `links` | `Record<string, any>` | No | A link to a resource related to this object. |
| `secret` | `string` | No | The secret to associate with the hook. |
| `secret_set` | `boolean` | No | Indicates whether or not the hook has an associated secret. |
| `subject` | `Record<string, any>` | Yes | Base type for most resource objects. |
| `subject_type` | `string` | No | The type of entity. |
| `type` | `string` | Yes |  |
| `url` | `string` | No | The URL events get delivered to. |
| `uuid` | `string` | No | The webhook's id. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PaginatedWebhookSubscription().list({ workspace_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginatedWebhookSubscriptionEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginatedWorkspaceAccessEntity

```ts
const paginated_workspace_access = client.PaginatedWorkspaceAccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `administrator` | `boolean` | No | The permission level the user has for the workspace. |
| `type` | `string` | Yes |  |
| `workspace` | `any` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PaginatedWorkspaceAccess().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginatedWorkspaceAccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginatedWorkspaceMembershipEntity

```ts
const paginated_workspace_membership = client.PaginatedWorkspaceMembership()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `links` | `Record<string, any>` | No |  |
| `type` | `string` | Yes |  |
| `user` | `any` | No |  |
| `workspace` | `any` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PaginatedWorkspaceMembership().list({ workspace_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginatedWorkspaceMembershipEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PipelineEntity

```ts
const pipeline = client.Pipeline()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `build_number` | `number` | No | The build number of the pipeline. |
| `build_seconds_used` | `number` | No | The number of build seconds used by this pipeline. |
| `completed_on` | `string` | No | The timestamp when the Pipeline was completed. |
| `configuration_sources` | `any[]` | No | An ordered list of sources of the pipeline configuration |
| `created_on` | `string` | No | The timestamp when the pipeline was created. |
| `creator` | `any` | No | The Bitbucket account that was used to create the pipeline. |
| `id` | `string` | No |  |
| `links` | `any` | No |  |
| `repository` | `any` | No |  |
| `state` | `any` | No |  |
| `target` | `any` | No | The target that the pipeline built. |
| `trigger` | `any` | No | The trigger used for the pipeline. |
| `type` | `string` | Yes |  |
| `uuid` | `string` | No | The UUID identifying the pipeline. |
| `variables` | `any[]` | No | The variables for the pipeline. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `stop_pipeline` | `/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/stopPipeline` | `client.Pipeline().create({ $action: 'stop_pipeline', ... })` |

An action returns that action's OWN response, which is not necessarily a
Pipeline record — check the API definition for its shape.

```ts
const result = await client.Pipeline().create({
  $action: 'stop_pipeline',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Pipeline().create({
  repo_slug: 'example_repo_slug',
  workspace: 'example_workspace',
  type: 'example_type',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Pipeline().load({ id: 'pipeline_id', repo_slug: 'repo_slug', workspace: 'workspace' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.Pipeline().remove({ runner_uuid: 'runner_uuid', workspace_id: 'workspace_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PipelineEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PipelineBuildNumberEntity

```ts
const pipeline_build_number = client.PipelineBuildNumber()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `next` | `number` | No | The next number that will be used as build number. |
| `type` | `string` | Yes |  |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.PipelineBuildNumber().update({
  repo_slug: 'repo_slug',
  workspace: 'workspace',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PipelineBuildNumberEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PipelineCacheContentUriEntity

```ts
const pipeline_cache_content_uri = client.PipelineCacheContentUri()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `uri` | `string` | No | The uri for pipeline cache content. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.PipelineCacheContentUri().load({ cache_id: 'cache_id', repo_slug: 'repo_slug', workspace: 'workspace' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PipelineCacheContentUriEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PipelineKnownHostEntity

```ts
const pipeline_known_host = client.PipelineKnownHost()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `hostname` | `string` | No | The hostname of the known host. |
| `id` | `string` | No |  |
| `public_key` | `any` | No | The public key of the known host. |
| `type` | `string` | Yes |  |
| `uuid` | `string` | No | The UUID identifying the known host. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.PipelineKnownHost().create({
  repo_slug: 'example_repo_slug',
  workspace: 'example_workspace',
  type: 'example_type',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.PipelineKnownHost().load({ id: 'pipeline_known_host_id', repo_slug: 'repo_slug', workspace: 'workspace' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.PipelineKnownHost().update({
  id: 'pipeline_known_host_id',
  repo_slug: 'repo_slug',
  workspace: 'workspace',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PipelineKnownHostEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PipelineRunnerEntity

```ts
const pipeline_runner = client.PipelineRunner()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_on` | `string` | No | The timestamp when the runner was created. |
| `id` | `string` | No |  |
| `labels` | `any[]` | No | Labels assigned to the runner for identification and routing. |
| `name` | `string` | No | The name of the runner. |
| `oauth_client` | `any` | No | OAuth client configuration for the runner. |
| `state` | `any` | No | The current state of the runner. |
| `type` | `string` | Yes |  |
| `updated_on` | `string` | No | The timestamp when the runner was last updated. |
| `uuid` | `string` | No | The UUID identifying the runner. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.PipelineRunner().create({
  workspace_id: 'example_workspace_id',
  type: 'example_type',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.PipelineRunner().load({ id: 'pipeline_runner_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.PipelineRunner().update({
  id: 'pipeline_runner_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PipelineRunnerEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PipelineScheduleEntity

```ts
const pipeline_schedule = client.PipelineSchedule()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_on` | `string` | No | The timestamp when the schedule was created. |
| `cron_pattern` | `string` | No | The cron expression with second precision (7 fields) that the schedule applies. |
| `enabled` | `boolean` | No | Whether the schedule is enabled. |
| `id` | `string` | No |  |
| `target` | `any` | No | The target on which the schedule will be executed. |
| `type` | `string` | Yes |  |
| `updated_on` | `string` | No | The timestamp when the schedule was updated. |
| `uuid` | `string` | No | The UUID identifying the schedule. |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `created_on` | - | - | - |
| `cron_pattern` | - | Yes | - |
| `enabled` | - | - | - |
| `id` | - | - | - |
| `target` | - | Yes | - |
| `type` | - | - | - |
| `updated_on` | - | - | - |
| `uuid` | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.PipelineSchedule().create({
  repo_slug: 'example_repo_slug',
  workspace: 'example_workspace',
  type: 'example_type',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.PipelineSchedule().load({ id: 'pipeline_schedule_id', repo_slug: 'repo_slug', workspace: 'workspace' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.PipelineSchedule().update({
  id: 'pipeline_schedule_id',
  repo_slug: 'repo_slug',
  workspace: 'workspace',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PipelineScheduleEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PipelineSshKeyPairEntity

```ts
const pipeline_ssh_key_pair = client.PipelineSshKeyPair()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `private_key` | `string` | No | The SSH private key. |
| `public_key` | `string` | No | The SSH public key. |
| `type` | `string` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.PipelineSshKeyPair().load({ repo_slug: 'repo_slug', workspace: 'workspace' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.PipelineSshKeyPair().update({
  repo_slug: 'repo_slug',
  workspace: 'workspace',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PipelineSshKeyPairEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PipelineStepEntity

```ts
const pipeline_step = client.PipelineStep()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completed_on` | `string` | No | The timestamp when the step execution was completed. |
| `id` | `string` | No |  |
| `image` | `Record<string, any>` | No | The Docker image used as the build container for the step. |
| `script_commands` | `any[]` | No | The list of build commands. |
| `setup_commands` | `any[]` | No | The list of commands that are executed as part of the setup phase of the build. |
| `started_on` | `string` | No | The timestamp when the step execution was started. |
| `state` | `any` | No | The current state of the step |
| `type` | `string` | Yes |  |
| `uuid` | `string` | No | The UUID identifying the step. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.PipelineStep().load({ id: 'pipeline_step_id', pipeline_id: 'pipeline_id', repo_slug: 'repo_slug', workspace: 'workspace' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PipelineStepEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PipelineVariableEntity

```ts
const pipeline_variable = client.PipelineVariable()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `key` | `string` | No | The unique name of the variable. |
| `secured` | `boolean` | No | If true, this variable will be treated as secured. |
| `type` | `string` | Yes |  |
| `uuid` | `string` | No | The UUID identifying the variable. |
| `value` | `string` | No | The value of the variable. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.PipelineVariable().create({
  selected_user: 'example_selected_user',
  type: 'example_type',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.PipelineVariable().load({ id: 'pipeline_variable_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.PipelineVariable().update({
  id: 'pipeline_variable_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PipelineVariableEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PipelinesConfigEntity

```ts
const pipelines_config = client.PipelinesConfig()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `boolean` | No | Whether Pipelines is enabled for the repository. |
| `repository` | `any` | No |  |
| `type` | `string` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.PipelinesConfig().load({ repo_slug: 'repo_slug', workspace: 'workspace' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.PipelinesConfig().update({
  repo_slug: 'repo_slug',
  workspace: 'workspace',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PipelinesConfigEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectEntity

```ts
const project = client.Project()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_on` | `string` | No |  |
| `description` | `string` | No |  |
| `has_publicly_visible_repos` | `boolean` | No | Indicates whether the project contains publicly visible repositories. |
| `id` | `string` | No |  |
| `is_private` | `boolean` | No | Indicates whether the project is publicly accessible, or whether it is private to the team and consequently only visible to team members. |
| `key` | `string` | No | The project's key. |
| `links` | `Record<string, any>` | No |  |
| `name` | `string` | No | The name of the project. |
| `owner` | `any` | No |  |
| `type` | `string` | Yes |  |
| `updated_on` | `string` | No |  |
| `uuid` | `string` | No | The project's immutable id. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Project().create({
  workspace_id: 'example_workspace_id',
  type: 'example_type',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Project().load({ id: 'project_id', workspace_id: 'workspace_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.Project().remove({ id: 'project_id', workspace_id: 'workspace_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.Project().update({
  id: 'project_id',
  workspace_id: 'workspace_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectBranchingModelEntity

```ts
const project_branching_model = client.ProjectBranchingModel()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch_types` | `any[]` | No | The active branch types. |
| `development` | `Record<string, any>` | Yes |  |
| `production` | `Record<string, any>` | Yes |  |
| `type` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.ProjectBranchingModel().list({ project_key: "example", workspace_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectBranchingModelEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectDeployKeyEntity

```ts
const project_deploy_key = client.ProjectDeployKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `added_on` | `string` | No |  |
| `comment` | `string` | No | The comment parsed from the deploy key (if present) |
| `created_by` | `any` | No |  |
| `id` | `string` | No |  |
| `key` | `string` | No | The deploy key value. |
| `label` | `string` | No | The user-defined label for the deploy key |
| `last_used` | `string` | No |  |
| `links` | `Record<string, any>` | No |  |
| `project` | `any` | No |  |
| `type` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.ProjectDeployKey().create({
  project_key: 'example_project_key',
  workspace_id: 'example_workspace_id',
  type: 'example_type',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.ProjectDeployKey().load({ id: 'project_deploy_key_id', project_key: 'project_key', workspace_id: 'workspace_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectDeployKeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectGroupPermissionEntity

```ts
const project_group_permission = client.ProjectGroupPermission()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `group` | `any` | No |  |
| `links` | `Record<string, any>` | No |  |
| `permission` | `string` | No |  |
| `project` | `any` | No |  |
| `type` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | update |
| --- | --- | --- |
| `group` | - | - |
| `links` | - | - |
| `permission` | - | Yes |
| `project` | - | - |
| `type` | - | - |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.ProjectGroupPermission().load({ group_slug: 'group_slug', project_id: 'project_id', workspace_id: 'workspace_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.ProjectGroupPermission().update({
  group_slug: 'group_slug',
  project_id: 'project_id',
  workspace_id: 'workspace_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectGroupPermissionEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectUserPermissionEntity

```ts
const project_user_permission = client.ProjectUserPermission()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `links` | `Record<string, any>` | No |  |
| `permission` | `string` | No |  |
| `project` | `any` | No |  |
| `type` | `string` | Yes |  |
| `user` | `any` | No |  |

### Field Usage by Operation

| Field | load | update |
| --- | --- | --- |
| `links` | - | - |
| `permission` | - | Yes |
| `project` | - | - |
| `type` | - | - |
| `user` | - | - |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.ProjectUserPermission().load({ project_id: 'project_id', selected_user_id: 'selected_user_id', workspace_id: 'workspace_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.ProjectUserPermission().update({
  project_id: 'project_id',
  selected_user_id: 'selected_user_id',
  workspace_id: 'workspace_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectUserPermissionEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PropertyEntity

```ts
const property = client.Property()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attributes` | `any[]` | No |  |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.Property().remove({ app_key: 'app_key', property_name: 'property_name' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.Property().update({
  app_key: 'app_key',
  property_name: 'property_name',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PropertyEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PullrequestEntity

```ts
const pullrequest = client.Pullrequest()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `any` | No |  |
| `close_source_branch` | `boolean` | No | A boolean flag indicating if merging the pull request closes the source branch. |
| `closed_by` | `any` | No |  |
| `comment_count` | `number` | No | The number of comments for a specific pull request. |
| `created_on` | `string` | No | The ISO8601 timestamp the request was created. |
| `destination` | `Record<string, any>` | No |  |
| `draft` | `boolean` | No | A boolean flag indicating whether the pull request is a draft. |
| `id` | `number` | No | The pull request's unique ID. |
| `links` | `Record<string, any>` | No |  |
| `merge_commit` | `Record<string, any>` | No |  |
| `participants` | `any[]` | No | The list of users that are collaborating on this pull request. |
| `queued` | `boolean` | No | A boolean flag indicating whether the pull request is queued |
| `reason` | `string` | No | Explains why a pull request was declined. |
| `rendered` | `Record<string, any>` | No | User provided pull request text, interpreted in a markup language and rendered in HTML |
| `reviewers` | `any[]` | No | The list of users that were added as reviewers on this pull request when it was created. |
| `source` | `Record<string, any>` | No |  |
| `state` | `string` | No | The pull request's current status. |
| `summary` | `Record<string, any>` | No |  |
| `task_count` | `number` | No | The number of open tasks for a specific pull request. |
| `title` | `string` | No | Title of the pull request. |
| `type` | `string` | Yes |  |
| `updated_on` | `string` | No | The ISO8601 timestamp the request was last updated. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `decline` | `/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/decline` | `client.Pullrequest().create({ $action: 'decline', ... })` |
| `merge` | `/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/merge` | `client.Pullrequest().create({ $action: 'merge', ... })` |
| `activity` | `/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/activity` | `client.Pullrequest().load({ $action: 'activity', ... })` |
| `activity` | `/repositories/{workspace}/{repo_slug}/pullrequests/activity` | `client.Pullrequest().load({ $action: 'activity', ... })` |
| `commit` | `/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/commits` | `client.Pullrequest().load({ $action: 'commit', ... })` |
| `conflict` | `/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/conflicts` | `client.Pullrequest().load({ $action: 'conflict', ... })` |
| `diff` | `/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/diff` | `client.Pullrequest().load({ $action: 'diff', ... })` |
| `diffstat` | `/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/diffstat` | `client.Pullrequest().load({ $action: 'diffstat', ... })` |
| `patch` | `/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/patch` | `client.Pullrequest().load({ $action: 'patch', ... })` |
| `approve` | `/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/approve` | `client.Pullrequest().remove({ $action: 'approve', ... })` |
| `request_change` | `/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/request-changes` | `client.Pullrequest().remove({ $action: 'request_change', ... })` |

An action returns that action's OWN response, which is not necessarily a
Pullrequest record — check the API definition for its shape.

```ts
const result = await client.Pullrequest().create({
  $action: 'decline',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Pullrequest().create({
  repo_slug: 'example_repo_slug',
  workspace: 'example_workspace',
  type: 'example_type',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Pullrequest().load({ id: 1, repo_slug: 'repo_slug', workspace: 'workspace' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.Pullrequest().remove({ id: 1, repo_slug: 'repo_slug', workspace: 'workspace' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.Pullrequest().update({
  id: 1,
  repo_slug: 'repo_slug',
  workspace: 'workspace',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PullrequestEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PullrequestCommentEntity

```ts
const pullrequest_comment = client.PullrequestComment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `Record<string, any>` | No |  |
| `created_on` | `string` | No |  |
| `deleted` | `boolean` | No |  |
| `id` | `number` | No |  |
| `inline` | `Record<string, any>` | Yes |  |
| `links` | `Record<string, any>` | No |  |
| `parent` | `any` | No |  |
| `pending` | `boolean` | No |  |
| `pullrequest` | `any` | No |  |
| `resolution` | `Record<string, any>` | Yes | The resolution object for a Comment. |
| `type` | `string` | Yes |  |
| `updated_on` | `string` | No |  |
| `user` | `any` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `resolve` | `/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}/resolve` | `client.PullrequestComment().remove({ $action: 'resolve', ... })` |

An action returns that action's OWN response, which is not necessarily a
PullrequestComment record — check the API definition for its shape.

```ts
const result = await client.PullrequestComment().remove({
  $action: 'resolve',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.PullrequestComment().create({
  id: 1,
  repo_slug: 'example_repo_slug',
  workspace: 'example_workspace',
  inline: {},
  resolution: {},
  type: 'example_type',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.PullrequestComment().load({ id: 1, pullrequest_id: 1, repo_slug: 'repo_slug', workspace: 'workspace' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.PullrequestComment().remove({ comment_id: 1, pullrequest_id: 1, repo_slug: 'repo_slug', workspace: 'workspace' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.PullrequestComment().update({
  id: 1,
  pullrequest_id: 1,
  repo_slug: 'repo_slug',
  workspace: 'workspace',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PullrequestCommentEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PullrequestCommentTaskEntity

```ts
const pullrequest_comment_task = client.PullrequestCommentTask()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `any` | No |  |
| `content` | `Record<string, any>` | Yes | task raw content |
| `created_on` | `string` | Yes |  |
| `creator` | `any` | Yes |  |
| `id` | `number` | No |  |
| `links` | `Record<string, any>` | No |  |
| `pending` | `boolean` | No |  |
| `resolved_by` | `any` | No |  |
| `resolved_on` | `string` | No | The ISO8601 timestamp for when the task was resolved. |
| `state` | `string` | Yes |  |
| `updated_on` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `comment` | - | - | - |
| `content` | - | - | - |
| `created_on` | - | - | - |
| `creator` | - | - | - |
| `id` | - | - | - |
| `links` | - | - | - |
| `pending` | - | - | - |
| `resolved_by` | - | - | - |
| `resolved_on` | - | - | - |
| `state` | - | - | Yes |
| `updated_on` | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.PullrequestCommentTask().create({
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.PullrequestCommentTask().load({ id: 1, pullrequest_id: 1, repo_slug: 'repo_slug', workspace: 'workspace' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.PullrequestCommentTask().update({
  id: 1,
  pullrequest_id: 1,
  repo_slug: 'repo_slug',
  workspace: 'workspace',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PullrequestCommentTaskEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PullrequestMergeabilityCheckEntity

```ts
const pullrequest_mergeability_check = client.PullrequestMergeabilityCheck()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `blocking` | `boolean` | Yes | Whether this check is currently preventing the pull request from being merged. |
| `required` | `boolean` | Yes | Whether this check must pass for the pull request to be mergeable. |
| `status` | `string` | Yes | Whether this check passed. |
| `type` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PullrequestMergeabilityCheck().list({ pullrequest_id: 1, repo_slug: "example", workspace: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PullrequestMergeabilityCheckEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RefEntity

```ts
const ref = client.Ref()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.Ref().remove({ name: 'name', repo_slug: 'repo_slug', workspace: 'workspace' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RefEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ReportEntity

```ts
const report = client.Report()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_on` | `string` | No | The timestamp when the report was created. |
| `data` | `any[]` | No | An array of data fields to display information on the report. |
| `details` | `string` | No | A string to describe the purpose of the report. |
| `external_id` | `string` | No | ID of the report provided by the report creator. |
| `id` | `string` | No |  |
| `link` | `string` | No | A URL linking to the results of the report in an external tool. |
| `logo_url` | `string` | No | A URL to the report logo. |
| `remote_link_enabled` | `boolean` | No | If enabled, a remote link is created in Jira for the work item associated with the commit the report belongs to. |
| `report_type` | `string` | No | The type of the report. |
| `reporter` | `string` | No | A string to describe the tool or company who created the report. |
| `result` | `string` | No | The state of the report. |
| `title` | `string` | No | The title of the report. |
| `type` | `string` | Yes |  |
| `updated_on` | `string` | No | The timestamp when the report was updated. |
| `uuid` | `string` | No | The UUID that can be used to identify the report. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Report().load({ id: 'report_id', commit_id: 'commit_id', repo_slug: 'repo_slug', workspace: 'workspace' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.Report().remove({ id: 'report_id', commit_id: 'commit_id', repo_slug: 'repo_slug', workspace: 'workspace' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.Report().update({
  id: 'report_id',
  commit_id: 'commit_id',
  repo_slug: 'repo_slug',
  workspace: 'workspace',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ReportEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ReportAnnotationEntity

```ts
const report_annotation = client.ReportAnnotation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotation_type` | `string` | No | The type of the report. |
| `created_on` | `string` | No | The timestamp when the report was created. |
| `details` | `string` | No | The details to show to users when clicking on the annotation. |
| `external_id` | `string` | No | ID of the annotation provided by the annotation creator. |
| `id` | `string` | No |  |
| `line` | `number` | No | The line number that the annotation should belong to. |
| `link` | `string` | No | A URL linking to the annotation in an external tool. |
| `path` | `string` | No | The path of the file on which this annotation should be placed. |
| `report_annotations` | `any[]` | No | The annotations to create or update |
| `result` | `string` | No | The state of the report. |
| `severity` | `string` | No | The severity of the annotation. |
| `summary` | `string` | No | The message to display to users. |
| `type` | `string` | Yes |  |
| `updated_on` | `string` | No | The timestamp when the report was updated. |
| `uuid` | `string` | No | The UUID that can be used to identify the annotation. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.ReportAnnotation().create({
  commit_id: 'example_commit_id',
  id: 'example_id',
  repo_slug: 'example_repo_slug',
  workspace: 'example_workspace',
  type: 'example_type',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.ReportAnnotation().load({ id: 'report_annotation_id', commit_id: 'commit_id', repo_slug: 'repo_slug', report_id: 'report_id', workspace: 'workspace' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.ReportAnnotation().update({
  id: 'report_annotation_id',
  commit_id: 'commit_id',
  repo_slug: 'repo_slug',
  report_id: 'report_id',
  workspace: 'workspace',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ReportAnnotationEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RepositoryEntity

```ts
const repository = client.Repository()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_on` | `string` | No |  |
| `description` | `string` | No |  |
| `fork_policy` | `string` | No | Controls the rules for forking this repository. |
| `full_name` | `string` | No | The concatenation of the repository owner's username and the slugified name, e.g. |
| `has_issues` | `boolean` | No | The issue tracker for this repository is enabled. |
| `has_wiki` | `boolean` | No | The wiki for this repository is enabled. |
| `id` | `string` | No |  |
| `is_private` | `boolean` | No |  |
| `language` | `string` | No |  |
| `links` | `Record<string, any>` | No |  |
| `mainbranch` | `any` | No |  |
| `name` | `string` | No |  |
| `owner` | `any` | No |  |
| `parent` | `any` | No |  |
| `project` | `any` | No |  |
| `scm` | `string` | No |  |
| `size` | `number` | No |  |
| `type` | `string` | Yes |  |
| `updated_on` | `string` | No |  |
| `uuid` | `string` | No | The repository's immutable id. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Repository().create({
  repo_slug: 'example_repo_slug',
  workspace: 'example_workspace',
  type: 'example_type',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Repository().load({ repo_slug: 'repo_slug', workspace: 'workspace' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.Repository().remove({ repo_slug: 'repo_slug', workspace: 'workspace' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.Repository().update({
  repo_slug: 'repo_slug',
  workspace: 'workspace',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RepositoryEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RepositoryGroupPermissionEntity

```ts
const repository_group_permission = client.RepositoryGroupPermission()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `group` | `any` | No |  |
| `links` | `Record<string, any>` | No |  |
| `permission` | `string` | No |  |
| `repository` | `any` | No |  |
| `type` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | update |
| --- | --- | --- |
| `group` | - | - |
| `links` | - | - |
| `permission` | - | Yes |
| `repository` | - | - |
| `type` | - | - |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.RepositoryGroupPermission().load({ group_slug: 'group_slug', repo_slug: 'repo_slug', workspace: 'workspace' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.RepositoryGroupPermission().update({
  group_slug: 'group_slug',
  repo_slug: 'repo_slug',
  workspace: 'workspace',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RepositoryGroupPermissionEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RepositoryInheritanceStateEntity

```ts
const repository_inheritance_state = client.RepositoryInheritanceState()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `override_settings` | `Record<string, any>` | No |  |
| `type` | `string` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.RepositoryInheritanceState().load({ repo_slug: 'repo_slug', workspace: 'workspace' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RepositoryInheritanceStateEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RepositoryUserPermissionEntity

```ts
const repository_user_permission = client.RepositoryUserPermission()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `links` | `Record<string, any>` | No |  |
| `permission` | `string` | No |  |
| `repository` | `any` | No |  |
| `type` | `string` | Yes |  |
| `user` | `any` | No |  |

### Field Usage by Operation

| Field | load | update |
| --- | --- | --- |
| `links` | - | - |
| `permission` | - | Yes |
| `repository` | - | - |
| `type` | - | - |
| `user` | - | - |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.RepositoryUserPermission().load({ repo_slug: 'repo_slug', selected_user_id: 'selected_user_id', workspace: 'workspace' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.RepositoryUserPermission().update({
  repo_slug: 'repo_slug',
  selected_user_id: 'selected_user_id',
  workspace: 'workspace',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RepositoryUserPermissionEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RequestChangeEntity

```ts
const request_change = client.RequestChange()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approved` | `boolean` | No |  |
| `participated_on` | `string` | No | The ISO8601 timestamp of the participant's action. |
| `role` | `string` | No |  |
| `state` | `string` | No |  |
| `type` | `string` | Yes |  |
| `user` | `any` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.RequestChange().create({
  pullrequest_id: 1,
  repo_slug: 'example_repo_slug',
  workspace: 'example_workspace',
  type: 'example_type',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RequestChangeEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SearchResultPageEntity

```ts
const search_result_page = client.SearchResultPage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content_match_count` | `number` | No |  |
| `content_matches` | `any[]` | No |  |
| `file` | `Record<string, any>` | Yes | A file object, representing a file at a commit in a repository |
| `path_matches` | `any[]` | No |  |
| `type` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.SearchResultPage().list({ selected_user: "example", search_query: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SearchResultPageEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SnippetEntity

```ts
const snippet = client.Snippet()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bitbucket-sdk_id` | `number` | No |  |
| `created_on` | `string` | No |  |
| `creator` | `any` | No |  |
| `id` | `string` | No |  |
| `is_private` | `boolean` | No |  |
| `owner` | `any` | No |  |
| `scm` | `string` | No | The DVCS used to store the snippet. |
| `title` | `string` | No |  |
| `type` | `string` | Yes |  |
| `updated_on` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Snippet().create({
  id: 'example_id',
  type: 'example_type',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Snippet().load({ encoded_id: 'encoded_id', workspace: 'workspace' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.Snippet().remove({ encoded_id: 'encoded_id', workspace: 'workspace' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.Snippet().update({
  encoded_id: 'encoded_id',
  workspace: 'workspace',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SnippetEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SnippetCommentEntity

```ts
const snippet_comment = client.SnippetComment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `links` | `Record<string, any>` | No |  |
| `snippet` | `any` | No |  |
| `type` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.SnippetComment().create({
  encoded_id: 'example_encoded_id',
  workspace: 'example_workspace',
  type: 'example_type',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.SnippetComment().load({ id: 1, encoded_id: 'encoded_id', workspace: 'workspace' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.SnippetComment().update({
  id: 1,
  encoded_id: 'encoded_id',
  workspace: 'workspace',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SnippetCommentEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SnippetCommitEntity

```ts
const snippet_commit = client.SnippetCommit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `any` | No |  |
| `committer` | `any` | No |  |
| `date` | `string` | No |  |
| `hash` | `string` | No |  |
| `id` | `string` | No |  |
| `links` | `Record<string, any>` | No |  |
| `message` | `string` | No |  |
| `parents` | `any[]` | No |  |
| `snippet` | `any` | No |  |
| `summary` | `Record<string, any>` | No |  |
| `type` | `string` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.SnippetCommit().load({ id: 'snippet_commit_id', encoded_id: 'encoded_id', workspace: 'workspace' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SnippetCommitEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SourceEntity

```ts
const source = client.Source()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Source().create({
  repo_slug: 'example_repo_slug',
  workspace: 'example_workspace',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SourceEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SshEntity

```ts
const ssh = client.Ssh()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.Ssh().remove({ key_id: 'key_id', selected_user: 'selected_user' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SshEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SshAccountKeyEntity

```ts
const ssh_account_key = client.SshAccountKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `string` | No | The comment parsed from the SSH key (if present) |
| `created_on` | `string` | No |  |
| `expires_on` | `string` | No |  |
| `fingerprint` | `string` | No | The SSH key fingerprint in SHA-256 format. |
| `key` | `string` | No | The SSH public key value in OpenSSH format. |
| `label` | `string` | No | The user-defined label for the SSH key |
| `last_used` | `string` | No |  |
| `links` | `Record<string, any>` | No |  |
| `owner` | `any` | No |  |
| `type` | `string` | Yes |  |
| `uuid` | `string` | No | The SSH key's immutable ID. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.SshAccountKey().create({
  selected_user: 'example_selected_user',
  type: 'example_type',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.SshAccountKey().load({ key_id: 'key_id', selected_user: 'selected_user' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.SshAccountKey().update({
  key_id: 'key_id',
  selected_user: 'selected_user',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SshAccountKeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TagEntity

```ts
const tag = client.Tag()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `string` | No | The date that the tag was created, if available |
| `id` | `string` | No |  |
| `links` | `Record<string, any>` | No |  |
| `message` | `string` | No | The message associated with the tag, if available. |
| `name` | `string` | No | The name of the ref. |
| `tagger` | `any` | No |  |
| `target` | `any` | No |  |
| `type` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Tag().create({
  repo_slug: 'example_repo_slug',
  workspace: 'example_workspace',
  type: 'example_type',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Tag().load({ id: 'tag_id', repo_slug: 'repo_slug', workspace: 'workspace' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TagEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UserEntity

```ts
const user = client.User()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | No | The user's Atlassian account ID. |
| `account_status` | `string` | No | The status of the account. |
| `created_on` | `string` | No |  |
| `display_name` | `string` | No |  |
| `has_2fa_enabled` | `boolean` | No |  |
| `id` | `string` | No |  |
| `is_staff` | `boolean` | No |  |
| `links` | `Record<string, any>` | No | Links related to an Account. |
| `nickname` | `string` | No | Account name defined by the owner. |
| `type` | `string` | Yes |  |
| `uuid` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `email` | `/user/emails` | `client.User().load({ $action: 'email', ... })` |

An action returns that action's OWN response, which is not necessarily a
User record — check the API definition for its shape.

```ts
const result = await client.User().load({
  $action: 'email',
  /* ...the action's own arguments */
})
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.User().load({ id: 'user_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.User().update({
  id: 'user_id',
  project_id: 'project_id',
  selected_user: 'selected_user',
  workspace_id: 'workspace_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UserEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WatcherEntity

```ts
const watcher = client.Watcher()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_on` | `string` | No |  |
| `display_name` | `string` | No |  |
| `links` | `Record<string, any>` | No | Links related to an Account. |
| `type` | `string` | Yes |  |
| `uuid` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Watcher().list({ encoded_id: "example", workspace: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WatcherEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WebhookSubscriptionEntity

```ts
const webhook_subscription = client.WebhookSubscription()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | No | Whether or not the webhook subscription is enabled. |
| `created_at` | `string` | No | The timestamp when the webhook subscription was created. |
| `description` | `string` | No | A user-defined description of the webhook. |
| `events` | `any[]` | No | The events this webhook is subscribed to. |
| `links` | `Record<string, any>` | No | A link to a resource related to this object. |
| `secret` | `string` | No | The secret to associate with the hook. |
| `secret_set` | `boolean` | No | Indicates whether or not the hook has an associated secret. |
| `subject` | `Record<string, any>` | Yes | Base type for most resource objects. |
| `subject_type` | `string` | No | The type of entity. |
| `type` | `string` | Yes |  |
| `url` | `string` | No | The URL events get delivered to. |
| `uuid` | `string` | No | The webhook's id. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.WebhookSubscription().create({
  workspace_id: 'example_workspace_id',
  subject: {},
  type: 'example_type',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.WebhookSubscription().load({ uid: 'uid' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.WebhookSubscription().update({
  uid: 'uid',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WebhookSubscriptionEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkspaceEntity

```ts
const workspace = client.Workspace()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_on` | `string` | No |  |
| `forking_mode` | `string` | No | Controls the rules for forking repositories within this workspace. |
| `id` | `string` | No |  |
| `is_personal` | `boolean` | No | Indicates whether the workspace belongs to an individual user. |
| `is_privacy_enforced` | `boolean` | No | Indicates whether the workspace enforces private content, or whether it allows public content. |
| `is_private` | `boolean` | No | Indicates whether the workspace is publicly accessible, or whether it is private to the members and consequently only visible to members. |
| `links` | `Record<string, any>` | No |  |
| `name` | `string` | No | The name of the workspace. |
| `slug` | `string` | No | The short label that identifies this workspace. |
| `type` | `string` | Yes |  |
| `updated_on` | `string` | No |  |
| `uuid` | `string` | No | The workspace's immutable id. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Workspace().load({ id: 'workspace_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.Workspace().remove({ id: 'workspace_id', uid: 'uid' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkspaceEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkspaceMembershipEntity

```ts
const workspace_membership = client.WorkspaceMembership()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `links` | `Record<string, any>` | No |  |
| `type` | `string` | Yes |  |
| `user` | `any` | No |  |
| `workspace` | `any` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `permission` | `/user/workspaces/{workspace}/permission` | `client.WorkspaceMembership().load({ $action: 'permission', ... })` |

An action returns that action's OWN response, which is not necessarily a
WorkspaceMembership record — check the API definition for its shape.

```ts
const result = await client.WorkspaceMembership().load({
  $action: 'permission',
  /* ...the action's own arguments */
})
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.WorkspaceMembership().load({ member: 'member', workspace_id: 'workspace_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkspaceMembershipEntity` instance with the same client and
options.

#### `client()`

Return the parent `BitbucketSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```ts
const client = new BitbucketSdkSDK({
  feature: {
    test: { active: true },
  }
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

Test transport.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

