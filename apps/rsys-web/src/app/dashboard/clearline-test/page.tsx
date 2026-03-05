"use client"

import { SetDefinitionProvider } from '@clearline7/theme'
import { TechDocs } from '@clearline7/set-definitions'
import { H1, Paragraph, Button } from '@clearline7/components'

export default function ClearlineTestPage() {
  return (
    <SetDefinitionProvider setDefinition={TechDocs}>
      <main style={{ padding: '48px', display: 'grid', gap: '16px' }}>
        <H1>Clearline 7 Connected</H1>
        <Paragraph>
          This page renders Clearline 7 components with a shared SetDefinition provider.
        </Paragraph>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Button variant="primary">Primary Action</Button>
          <Button variant="outline">Secondary Action</Button>
        </div>
      </main>
    </SetDefinitionProvider>
  )
}
