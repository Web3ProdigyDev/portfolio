import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schema} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'myportfolio',

  projectId: '3h2dagv2',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema,
})
