'use client'

export default function GlobalError({}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <h2>Global Error</h2>
      </body>
    </html>
  )
}