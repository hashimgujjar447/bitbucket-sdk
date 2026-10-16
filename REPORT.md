# Voxgig SDK generator observations

## Project

- API: Bitbucket Cloud REST API
- SDK: TypeScript, generated with the Voxgig SDK generator
- Repository: https://github.com/hashimgujjar447/bitbucket-sdk
- License: MIT
- Generated surface: 111 semantic entities, 175 paths, and 299 HTTP methods

## Developer experience

The entity-oriented client, offline mock transport, and generated reference material provide a useful starting point from an API definition. The generated TypeScript test suite also gives broad offline coverage without requiring a Bitbucket account or API token.

On Windows, I encountered a path resolution failure in `@tabnas/multisource` when the generator resolved the model's included Aontu files. I locally patched its installed `file.js` and `pkg.js` to handle Windows paths and optional `require.main`. The changes are currently in `.sdk/node_modules`, which is ignored by Git and will not survive a clean install; this is a generator dependency issue that should be fixed upstream or carried as a reproducible dependency patch before claiming clean Windows regeneration.

Bitbucket's Swagger tags split branch restriction operations across `branch_restriction` and `branchrestriction`. The project guide merges the DELETE route into `branchrestriction` and disables the duplicate entity to avoid a case-insensitive Windows filename collision.

The generated README example runner did not have all route-discriminator parameters for a multi-route entity. The generator component currently treats the resulting “no endpoint whose path parameters are all given” error like an expected missing fixture. This allows examples to pass offline, but those particular calls are not exercised; a future improvement would generate route-specific example arguments.

The definition test control skips `commit.load` because one route returns a comment object where the model expects a commit. The skip applies to all three generated `commit.load` routes, not only the comment endpoint, so that broader coverage loss should be narrowed if the test configuration supports route-level skips.

## Verification and limits

Ran `npm.cmd test` in `ts/` on Windows with Node v24.22.0: **1,022 tests across 238 suites; 902 passed, 120 skipped, 0 failed**. The suite uses offline/mock behavior. I did not run live API tests or verify calls using a Bitbucket credential.

The SDK was regenerated with `npm.cmd run generate` in `.sdk/`. The OpenAPI import emitted additional selector-ambiguity warnings for routes that share the same inferred parameters; these need API-specific actions or route-discriminating inputs if those operations must be selected reliably.
