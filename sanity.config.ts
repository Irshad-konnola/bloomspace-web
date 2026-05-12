'use client'

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
// This now correctly points to the Node Module
import { structureTool } from 'sanity/structure' 

import { apiVersion, dataset, projectId } from './sanity/env'
import { schema } from './sanity/schemaTypes'
// Update this to point to your renamed local file
import { structure } from './sanity/deskStructure' 

export default defineConfig({
  basePath: '/admin',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({ structure }), // 'structure' comes from your local deskStructure.ts
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})