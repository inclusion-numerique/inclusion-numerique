import { extractMetadataFromId } from '@app/web/data/dataInclusion'

describe('extractMetadataFromId', () => {
  it('should return the correct id when it is present', () => {
    const id =
      'mediation-conseiller-numerique-62ab017b8255a806e299c725-autre-chose'
    expect(extractMetadataFromId(id)).toEqual({
      cnfsPermanenceId: '62ab017b8255a806e299c725',
    })
  })

  it('should return undefined when the id is missing', () => {
    const id = 'conseiller-numerique-autre-chose'
    expect(extractMetadataFromId(id)).toEqual({})
  })

  it('should return undefined when the input does not match the expected format', () => {
    const id = 'conseillernumerique62ab017b8255a806e299c725-autre-chose'
    expect(extractMetadataFromId(id)).toEqual({})
  })

  it('should return undefined when the input is empty', () => {
    const id = ''
    expect(extractMetadataFromId(id)).toEqual({})
  })
})
