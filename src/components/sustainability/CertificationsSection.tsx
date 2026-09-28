import { Target, Leaf, Globe, TrendingUp, Star, Award } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Section, Grid, StatRow, DarkPanel, Button } from '@/components/shared/ui'

const pursuitGoals: { name: string; description: string; status: string; timeline: string; icon: LucideIcon; progress: number; why: string }[] = [
  {
    name: 'HTM Certification',
    description: 'Hardware Technology Management certification for professional electronics handling',
    status: 'In Progress',
    timeline: 'Q2 2025',
    icon: Award,
    progress: 65,
    why: 'Ensuring professional standards in device management and refurbishment processes',
  },
  {
    name: 'ISO 14001 Preparation',
    description: 'Environmental Management Systems framework implementation',
    status: 'Planning',
    timeline: 'Q4 2025',
    icon: Leaf,
    progress: 30,
    why: 'Formalizing our environmental impact reduction processes and documentation',
  },
  {
    name: 'R2 Responsible Recycling',
    description: 'Electronics recycling and data security standard compliance',
    status: 'Research Phase',
    timeline: '2026',
    icon: Globe,
    progress: 20,
    why: 'Establishing industry-leading data security and electronics handling protocols',
  },
]

const commitments: { title: string; description: string; progress: number; target: string; impact: string }[] = [
  {
    title: 'Professional Excellence',
    description: 'Achieve HTM certification to formalize our technical expertise',
    progress: 65,
    target: 'Q2 2025',
    impact: 'Enhanced credibility and professional standards',
  },
  {
    title: 'Environmental Leadership',
    description: 'Implement comprehensive environmental management systems',
    progress: 40,
    target: '2025-2026',
    impact: 'Measurable environmental impact reduction',
  },
  {
    title: 'Industry Recognition',
    description: 'Establish Replugit as a certified leader in sustainable electronics',
    progress: 25,
    target: '2026-2027',
    impact: 'Market leadership in responsible electronics handling',
  },
  {
    title: 'Transparency Standards',
    description: 'Develop comprehensive reporting and accountability frameworks',
    progress: 75,
    target: 'Ongoing',
    impact: 'Complete transparency in operations and impact',
  },
]

const ambitions: { goal: string; timeline: string; icon: LucideIcon }[] = [
  {
    goal: 'Become the most certified sustainable electronics company in our region',
    timeline: 'By 2027',
    icon: Star,
  },
  {
    goal: 'Set new industry standards for device lifecycle management',
    timeline: '2025-2026',
    icon: TrendingUp,
  },
  {
    goal: 'Achieve multiple internationally recognized certifications',
    timeline: '2026-2027',
    icon: Target,
  },
]

function Pill({ children }: { children: string }) {
  return <span className="inline-flex flex-none px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-semibold text-accent">{children}</span>
}

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="w-full bg-border rounded-full h-1.5 overflow-hidden">
      <div className="bg-accent h-1.5 rounded-full" style={{ width: `${value}%` }} />
    </div>
  )
}

export default function CertificationsSection() {
  return (
    <>
      <Section
        id="progress"
        wide
        caption="Certification Journey & Goals"
        title="Building Credibility Through Excellence"
        subtitle="We're actively pursuing industry certifications and building frameworks that will establish Replugit as a leader in sustainable electronics management. Our ambitious roadmap focuses on professional excellence and environmental responsibility."
        align="center"
      >
        {/* Current Pursuit Goals */}
        <h3 className="text-xl font-semibold tracking-tight text-center mb-6">Active Certification Pursuits</h3>
        <Grid cols={3}>
          {pursuitGoals.map((goal) => (
            <div key={goal.name} className="rounded-2xl bg-card-primary p-6 flex flex-col">
              <div className="w-9 h-9 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                <goal.icon className="w-4 h-4" />
              </div>

              <div className="flex items-start justify-between gap-3 mb-1.5">
                <h4 className="text-base font-semibold">{goal.name}</h4>
                <Pill>{goal.status}</Pill>
              </div>

              <p className="text-muted-foreground text-[15px] leading-[1.75] mb-4">{goal.description}</p>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-mono font-semibold tracking-tight text-foreground">{goal.progress}%</span>
                </div>
                <ProgressBar value={goal.progress} />
              </div>

              <div className="border-t border-border pt-4 mt-auto">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-muted-foreground">Target:</span>
                  <span className="font-mono font-semibold tracking-tight text-foreground">{goal.timeline}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-[1.7]">{goal.why}</p>
              </div>
            </div>
          ))}
        </Grid>

        {/* Our Ambitious Vision */}
        <div className="rounded-3xl bg-surface p-8 max-[850px]:p-6 mt-8">
          <h3 className="text-xl font-semibold tracking-tight text-center mb-6">Our Ambitious Vision</h3>

          <div className="grid grid-cols-1 gap-3 max-w-3xl mx-auto">
            {ambitions.map((ambition) => (
              <div key={ambition.goal} className="rounded-2xl bg-background border border-border p-5 flex items-center gap-4">
                <div className="w-9 h-9 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-none">
                  <ambition.icon className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <h4 className="text-base font-semibold mb-0.5">{ambition.goal}</h4>
                  <p className="text-xs font-mono font-semibold tracking-tight text-accent">{ambition.timeline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Commitments */}
        <div className="rounded-3xl bg-card-primary p-8 max-[850px]:p-6 mt-8">
          <h3 className="text-xl font-semibold tracking-tight text-center mb-6">Strategic Development Goals</h3>

          <Grid cols={2}>
            {commitments.map((commitment) => (
              <div key={commitment.title} className="rounded-2xl bg-background p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h4 className="text-base font-semibold">{commitment.title}</h4>
                  <Pill>{commitment.target}</Pill>
                </div>

                <p className="text-muted-foreground text-[15px] leading-[1.75] mb-4">{commitment.description}</p>

                <div className="mb-3">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="text-muted-foreground">Development Progress</span>
                    <span className="font-mono font-semibold tracking-tight text-foreground">{commitment.progress}%</span>
                  </div>
                  <ProgressBar value={commitment.progress} />
                </div>

                <p className="text-sm text-muted-foreground leading-[1.7]">
                  <strong className="font-semibold text-foreground">Impact:</strong> {commitment.impact}
                </p>
              </div>
            ))}
          </Grid>

          {/* Journey Summary */}
          <div className="mt-6">
            <StatRow
              stats={[
                { value: '3', label: 'Active Pursuits' },
                { value: '2025', label: 'First Target' },
                { value: '45%', label: 'Avg. Progress' },
                { value: '100%', label: 'Committed' },
              ]}
            />
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section wide>
        <DarkPanel
          title="Join Us on Our Certification Journey"
          description="Follow our progress as we work toward industry-leading certifications and sustainable practices. We're building something meaningful, and we want you to be part of it."
        >
          <Button href="/sustainability#progress" variant="accent" size="lg">
            Track Our Progress
          </Button>
          <Button href="/contact" variant="outline" size="lg" className="border-white/20 bg-transparent text-primary-foreground hover:bg-white/10">
            Partner With Us
          </Button>
        </DarkPanel>
      </Section>
    </>
  )
}
