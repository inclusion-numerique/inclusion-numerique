import { defineConfig } from 'cypress'
import 'tsconfig-paths/register'
import { cypressProjectId } from '../../packages/config/src/config'
import { tasks } from './cypress/support/tasks'

export default defineConfig({
  projectId: cypressProjectId,

  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
  video: true,
  videoCompression: true,
  viewportWidth: 1024,
  viewportHeight: 768,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', tasks)
    },
    env: {
      INCLUSION_CONNECT_TEST_USER_EMAIL:
        process.env.INCLUSION_CONNECT_TEST_USER_EMAIL,
      INCLUSION_CONNECT_TEST_USER_PASSWORD:
        process.env.INCLUSION_CONNECT_TEST_USER_PASSWORD,
      MON_COMPTE_PRO_TEST_USER_EMAIL:
        process.env.MON_COMPTE_PRO_TEST_USER_EMAIL,
      MON_COMPTE_PRO_TEST_USER_PASSWORD:
        process.env.MON_COMPTE_PRO_TEST_USER_PASSWORD,
    },
    baseUrl:
      process.env.CYPRESS_BASE_URL ??
      `http://localhost:${process.env.PORT ?? 3000}`,
    chromeWebSecurity: false,
  },
})
