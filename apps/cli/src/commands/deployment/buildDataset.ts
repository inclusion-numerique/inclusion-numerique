import axios from 'axios'
import { Command } from '@commander-js/extra-typings'
import { output } from '@app/cli/output'

export const buildDataset = new Command()
  .command('deployment:build-data')
  .argument('<url>', 'deployment url')
  .action(async (url) => {
    const client = axios.create({
      baseURL: url,
    })

    const result = await client.post<{ status: string }>('/jobs/build-data')
    output(result.data)
  })
