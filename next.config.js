// next.config.js
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repo = 'ChristellePhotography';

module.exports = {
  output: 'export',
  basePath: isGithubPages ? `/${repo}` : '',
  assetPrefix: isGithubPages ? `/${repo}/` : '',
};
