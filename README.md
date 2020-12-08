# Automating GitHub Releases

This is an example Node project that leverages [actions/create-release](https://github.com/actions/create-release) and [auto-changelog](https://www.npmjs.com/package/auto-changelog) to automate the creation of GitHub releases, complete with release notes generated from the commit log with a customizable template.

## Usage

To publish a new release, create a tag and push to GitHub. The release is published server-side in an Actions workflow.

```bash
npm version patch
git push --follow-tags
```

When a new tag that begins with `v` (e.g. `v1.2.0`, `v3.0.1`, etc.) is pushed to GitHub, the `release` workflow runs. It generates release notes by running `auto-changelog`, then uses the `create-release` action to publish a new release.

Release notes are created based on the `RELEASE.md.bhs` template file. The template is populated with references to all commits between the last two tags, rendered into Markdown, then piped into the `create-release` action.

## License

MIT © Jesse Youngblood
