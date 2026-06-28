import {defineConfig} from 'astro/config'

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true'

export default defineConfig({
  site: isGitHubPages ? 'https://jamesbrooks010.github.io' : 'https://yimbyadelaide.org',
  base: isGitHubPages ? '/YIMBYAdelaide' : '/'
})

