import { Eyebrow, Button } from '@/components/shared/ui'
import { RECORE_URL } from '@/data/recore'

/*
 * Homepage hero. Replugit is the company behind reCore, so the hero leads
 * with the product and points to the services as the proof it works.
 */
export default function HeroBanner() {
  return (
    <section className="relative pt-24 pb-16 max-[850px]:pt-14 max-[850px]:pb-10 overflow-hidden">
      {/* Soft accent wash, like reCore's hero */}
      <div className="absolute inset-x-0 top-0 h-[520px] pointer-events-none -z-10">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-accent/10 blur-3xl opacity-70" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-6 hero-blur-in">
          <Eyebrow>The company behind reCore</Eyebrow>
        </div>
        <h1 className="text-6xl max-[850px]:text-4xl font-medium tracking-tight leading-[1.08] mb-6 hero-blur-in delay-1">
          We build reCore.
          <br />
          <span className="text-muted-foreground/50">We run it on our own floor.</span>
        </h1>
        <p className="text-lg max-[850px]:text-base text-muted-foreground max-w-2xl mx-auto leading-[1.75] hero-blur-in delay-2">
          Replugit builds reCore, the ITAD platform for hardware diagnostics, certified data erasure, cosmetic grading and compliance reporting. Our refurbishing, QC and data wiping services run on it every day.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3 hero-blur-in delay-3">
          <Button href={RECORE_URL} size="lg">
            Explore reCore
          </Button>
          <Button href="/services" variant="outline" size="lg">
            Our services
          </Button>
        </div>
      </div>
    </section>
  )
}
