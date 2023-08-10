import { Argument, Command, Option } from '@commander-js/extra-typings'
import { appendEnvVariablesToDotEnvFile } from '@app/cli/dotEnvFile'

export const addNextPublicVariablesToDotEnv = new Command()
  .command('dotenv:add-next-public')
  .addArgument(new Argument('<namespace>', 'deployment namespace'))
  .addOption(new Option('--local', 'local deployment target'))
  .action(async (namespace, { local }) => {
    const targetEnv: 'local' | 'main' | 'preview' = local
      ? 'local'
      : namespace === 'main'
      ? 'main'
      : 'preview'

    await appendEnvVariablesToDotEnvFile({
      comment: 'Next public environment needed at build time',
      environmentVariables: [
        { name: 'NEXT_PUBLIC_SENTRY_ENVIRONMENT', value: namespace },
        {
          name: 'NEXT_PUBLIC_MONCOMPTEPRO_ISSUER',
          value: `$MONCOMPTEPRO_${targetEnv.toUpperCase()}_ISSUER`,
        },
        {
          name: 'NEXT_PUBLIC_MONCOMPTEPRO_CLIENT_ID',
          value: `$MONCOMPTEPRO_${targetEnv.toUpperCase()}_CLIENT_ID`,
        },
      ],
    })
  })
