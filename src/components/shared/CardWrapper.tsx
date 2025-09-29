'use client'

export default function CardWrapper({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6 md:p-8 lg:p-12 ${className}`}>
      {children}
    </div>
  )
}
