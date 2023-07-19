import { resolve } from 'node:path'

export const getDataFilePath = (fileName: string) =>
  resolve(__dirname, '../../', 'public/data', fileName)
