import { PageHero, Button } from '@/components/shared/ui'

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <PageHero title="404" description="Page not found" align="center">
        <Button href="/">Go Home</Button>
      </PageHero>
    </main>
  )
}
