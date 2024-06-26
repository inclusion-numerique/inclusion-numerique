import { createOdtFile } from '@app/web/server/odt/createOdtFile'
import { childrenExample } from '@app/web/server/odt/createOdtContent'
import { writeFileSync } from 'node:fs'
import { createVarDirectory } from '@app/config/createVarDirectory'
import { varDirectory } from '@app/config/varDirectory'

describe('createOdtFile', () => {
  beforeAll(() => {
    createVarDirectory()
  })

  it('creates a valid odt file', async () => {
    const data = await createOdtFile({ content: childrenExample })
    expect(data).toBeInstanceOf(Buffer)
    writeFileSync(`${varDirectory}/test.odt`, data)
  })
})
