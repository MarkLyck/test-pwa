[![codecov](https://codecov.io/gh/MarkLyck/test-pwa/branch/main/graph/badge.svg?token=G5RYDGL8TI)](https://codecov.io/gh/MarkLyck/test-pwa)
[![Maintainability](https://api.codeclimate.com/v1/badges/689a3c0ed7e7bdedb26b/maintainability)](https://codeclimate.com/github/MarkLyck/test-pwa/maintainability)
[![Known Vulnerabilities](https://snyk.io/test/github/MarkLyck/test-pwa/badge.svg)](https://snyk.io/test/github/MarkLyck/test-pwa)
[![Cypress](https://img.shields.io/badge/cypress-dashboard-brightgreen.svg)](https://dashboard.cypress.io/projects/548hkt/analytics/runs-over-time)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

# Cloud-one

Built with create-react-app.

### Dev tools
| tool | link |
| --- | ----------- |
| Commits | [![gitmoji badge](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square)](https://github.com/carloscuesta/gitmoji) |
| Changelog | [![gitmoji-changelog](https://img.shields.io/badge/Changelog-gitmoji-brightgreen.svg)](https://github.com/frinyvonnick/gitmoji-changelog) |

### CI tools

| tool | link |
| --- | ----------- |
| Unit test | Github Action |
| bundle-size | Github Action |
| Integration test | [![Cypress](https://img.shields.io/badge/cypress-dashboard-brightgreen.svg)](https://dashboard.cypress.io/projects/548hkt/analytics/runs-over-time) |
| code coverage | [![codecov](https://codecov.io/gh/MarkLyck/test-pwa/branch/main/graph/badge.svg?token=G5RYDGL8TI)](https://codecov.io/gh/MarkLyck/test-pwa) |
| code grade | https://codeclimate.com/ |
| preview deployments | https://vercel.com |
| WIP | https://github.com/apps/wip |
| Security check | [![Known Vulnerabilities](https://snyk.io/test/github/MarkLyck/test-pwa/badge.svg)](https://snyk.io/test/github/MarkLyck/test-pwa) |
| PWA & Performance | lighthouse |


# Contributing

## Commits
Always use gitmoji for commits. (this is used to keep commits clean and auto-generate our CHANGELOG)

To commit (Git Commit):
```
  yarn gc
```

To commit all files (Git Commit All):
```
  yarn gca
```

To commit all files & push (Git Commit All Push):
```
  yarn gcap
```

Alternatively if  you want to use your regular git commands w/ a git commit hook, you can run:
```
yarn gitmoji --init
```
this will disable the yarn commands and add gitmoji to your regular commit commands.

## releases
We use automated CI tools to handle new releases & changelog generation.

Based on the commit messages, increment the version from the latest release.
- If the string "BREAKING CHANGE", "major" or the Attention pattern `refactor!: drop support for Node 6` is found anywhere in any of the commit messages or descriptions the major version will be incremented.
- If a commit message includes "minor" then the minor version will be increased.
- If a commit message contains the word "pre-alpha" or "pre-beta" or "pre-rc" then the pre-release version will be increased 
(for example specifying pre-alpha: 1.6.0-alpha.1 -> 1.6.0-alpha.2 or, specifying pre-beta: 1.6.0-alpha.1 -> 1.6.0-beta.0)
- All other changes will increment the patch version.

# Deployment

....


## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://markdid.it"><img src="https://avatars.githubusercontent.com/u/6841110?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mark Lyck</b></sub></a><br /><a href="https://github.com/MarkLyck/test-pwa/commits?author=MarkLyck" title="Code">💻</a> <a href="https://github.com/MarkLyck/test-pwa/commits?author=MarkLyck" title="Documentation">📖</a> <a href="https://github.com/MarkLyck/test-pwa/commits?author=MarkLyck" title="Tests">⚠️</a> <a href="#design-MarkLyck" title="Design">🎨</a> <a href="#infra-MarkLyck" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-MarkLyck" title="Maintenance">🚧</a> <a href="#ideas-MarkLyck" title="Ideas, Planning, & Feedback">🤔</a> <a href="#mentoring-MarkLyck" title="Mentoring">🧑‍🏫</a> <a href="#translation-MarkLyck" title="Translation">🌍</a> <a href="#security-MarkLyck" title="Security">🛡️</a> <a href="https://github.com/MarkLyck/test-pwa/pulls?q=is%3Apr+reviewed-by%3AMarkLyck" title="Reviewed Pull Requests">👀</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!