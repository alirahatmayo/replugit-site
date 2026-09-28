import type { LucideIcon } from 'lucide-react'
import {
  Cpu,
  Shield,
  ClipboardCheck,
  HardDrive,
  FileCheck,
  BarChart3,
  Lock,
  Zap,
  Cloud,
  Users,
  FileSpreadsheet,
  BookOpen,
} from 'lucide-react'

/*
 * What Replugit offers as a service: reCore. This list mirrors the features
 * and platform capabilities on recore.replugit.com and feeds both the
 * Services menu in the nav and the /services page, so the two never drift.
 */
export const RECORE_URL = 'https://recore.replugit.com'

export type RecoreItem = {
  title: string
  description: string
  href: string
  icon: LucideIcon
}

export const recoreFeatures: RecoreItem[] = [
  {
    title: 'Diagnostics & Stress Testing',
    description: 'Multi-core burn-in, hardware discovery and technician QC checklists.',
    href: `${RECORE_URL}/features/diagnostics`,
    icon: Cpu,
  },
  {
    title: 'Certified Data Erasure',
    description: 'NIST SP 800-88 Rev 2 and IEEE 2883-2022 workflows with tamper-evident certificates.',
    href: `${RECORE_URL}/features/data-wipe`,
    icon: Shield,
  },
  {
    title: 'R2v3 REC & Cosmetic Grading',
    description: 'Defect catalogs and component scoring aligned with R2v3 REC.',
    href: `${RECORE_URL}/features/grading`,
    icon: ClipboardCheck,
  },
  {
    title: 'Hybrid Wipe Execution',
    description: 'Local client and network PXE erasure from the same platform.',
    href: `${RECORE_URL}/features/hybrid-wipe`,
    icon: HardDrive,
  },
  {
    title: 'Compliance & Audit',
    description: 'Immutable audit trails and audit-ready SHA-256 PDF certificates.',
    href: `${RECORE_URL}/features/compliance`,
    icon: FileCheck,
  },
  {
    title: 'Real-Time Dashboard',
    description: 'Live monitoring of every device and technician from any browser.',
    href: `${RECORE_URL}/features/dashboard`,
    icon: BarChart3,
  },
  {
    title: 'Security & Access Control',
    description: 'Multi-tenant isolation, role-based permissions and PIN login.',
    href: `${RECORE_URL}/features/security`,
    icon: Lock,
  },
]

export const recorePlatform: RecoreItem[] = [
  {
    title: 'Zero-Touch Deployment',
    description: 'PXE network and USB flash booting, no on-site server.',
    href: `${RECORE_URL}/capabilities/zero-setup`,
    icon: Zap,
  },
  {
    title: 'Cloud-First Architecture',
    description: 'No on-prem servers. Sign up and start processing.',
    href: `${RECORE_URL}/features/cloud`,
    icon: Cloud,
  },
  {
    title: 'Team & Technician Management',
    description: 'Technician PINs and separation of duties.',
    href: `${RECORE_URL}/features/team`,
    icon: Users,
  },
  {
    title: 'Batch Export & Reports',
    description: 'Multi-sheet Excel exports and serialized manifests.',
    href: `${RECORE_URL}/features/management`,
    icon: FileSpreadsheet,
  },
  {
    title: 'Standards Hub',
    description: 'Plain-language guides to NIST, IEEE and R2v3 requirements.',
    href: `${RECORE_URL}/standards`,
    icon: BookOpen,
  },
]
