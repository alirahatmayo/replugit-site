// SVG Icons for VerticalSlider Menu Items

export const WholesaleIcon = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Main warehouse building */}
    <rect x="20" y="35" width="60" height="50" rx="3" fill="currentColor" fillOpacity="0.15"/>
    <rect x="25" y="40" width="50" height="8" rx="1" fill="currentColor" fillOpacity="0.3"/>
    
    {/* Warehouse doors */}
    <rect x="30" y="55" width="12" height="25" rx="1" fill="currentColor" fillOpacity="0.4"/>
    <rect x="45" y="55" width="12" height="25" rx="1" fill="currentColor" fillOpacity="0.4"/>
    <rect x="60" y="55" width="12" height="25" rx="1" fill="currentColor" fillOpacity="0.4"/>
    
    {/* Roof */}
    <path d="M15 35 L50 20 L85 35 Z" fill="currentColor" fillOpacity="0.2"/>
    
    {/* Shipping trucks */}
    <rect x="5" y="70" width="18" height="8" rx="2" fill="currentColor" fillOpacity="0.5"/>
    <circle cx="10" cy="82" r="3" fill="currentColor" fillOpacity="0.6"/>
    <circle cx="18" cy="82" r="3" fill="currentColor" fillOpacity="0.6"/>
    
    <rect x="77" y="70" width="18" height="8" rx="2" fill="currentColor" fillOpacity="0.5"/>
    <circle cx="82" cy="82" r="3" fill="currentColor" fillOpacity="0.6"/>
    <circle cx="90" cy="82" r="3" fill="currentColor" fillOpacity="0.6"/>
    
    {/* Loading dock indicators */}
    <rect x="28" y="80" width="4" height="5" fill="currentColor" fillOpacity="0.4"/>
    <rect x="43" y="80" width="4" height="5" fill="currentColor" fillOpacity="0.4"/>
    <rect x="58" y="80" width="4" height="5" fill="currentColor" fillOpacity="0.4"/>
    
    {/* Quantity indicators */}
    <text x="50" y="30" textAnchor="middle" fontSize="8" fill="currentColor" opacity="0.6">10K+</text>
  </svg>
)

export const RefurbishingIcon = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Before device (broken) */}
    <rect x="15" y="35" width="20" height="30" rx="3" fill="currentColor" fillOpacity="0.2"/>
    <path d="M20 40 L30 50 M30 40 L20 50" stroke="currentColor" strokeWidth="2" opacity="0.4"/>
    <text x="25" y="75" textAnchor="middle" fontSize="6" fill="currentColor" opacity="0.5">C-Grade</text>
    
    {/* Transformation process */}
    <circle cx="50" cy="50" r="12" fill="currentColor" fillOpacity="0.1"/>
    <path d="M38 50 L44 50 L42 47 M44 50 L42 53" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6"/>
    <path d="M56 50 L62 50 L60 47 M62 50 L60 53" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6"/>
    
    {/* Tools in center */}
    <path d="M47 45 L53 51 M53 45 L47 51" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
    <circle cx="50" cy="48" r="1.5" fill="currentColor" opacity="0.6"/>
    <circle cx="50" cy="52" r="1.5" fill="currentColor" opacity="0.6"/>
    
    {/* After device (fixed) */}
    <rect x="65" y="35" width="20" height="30" rx="3" fill="currentColor" fillOpacity="0.4"/>
    <circle cx="75" cy="50" r="6" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.8"/>
    <path d="M71 50 L74 53 L79 46" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.8"/>
    <text x="75" y="75" textAnchor="middle" fontSize="6" fill="currentColor" opacity="0.7">A-Grade</text>
    
    {/* Work tools */}
    <rect x="25" y="15" width="2" height="12" fill="currentColor" opacity="0.5"/>
    <circle cx="26" cy="13" r="2" fill="currentColor" opacity="0.5"/>
    
    <rect x="73" y="15" width="2" height="12" fill="currentColor" opacity="0.5"/>
    <rect x="71" y="13" width="6" height="2" fill="currentColor" opacity="0.5"/>
    
    {/* Quality badge */}
    <circle cx="85" cy="25" r="6" fill="currentColor" fillOpacity="0.2"/>
    <path d="M82 25 L84 27 L88 22" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.7"/>
  </svg>
)

export const SoftwareIcon = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Main computer screen */}
    <rect x="25" y="25" width="50" height="35" rx="3" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
    <rect x="30" y="30" width="40" height="25" rx="1" fill="currentColor" fillOpacity="0.05"/>
    
    {/* Dashboard elements */}
    <rect x="32" y="32" width="8" height="4" fill="currentColor" opacity="0.4"/>
    <rect x="32" y="38" width="12" height="2" fill="currentColor" opacity="0.3"/>
    <rect x="32" y="42" width="6" height="2" fill="currentColor" opacity="0.3"/>
    
    {/* Charts */}
    <rect x="50" y="35" width="2" height="8" fill="currentColor" opacity="0.5"/>
    <rect x="53" y="40" width="2" height="3" fill="currentColor" opacity="0.5"/>
    <rect x="56" y="37" width="2" height="6" fill="currentColor" opacity="0.5"/>
    <rect x="59" y="32" width="2" height="11" fill="currentColor" opacity="0.5"/>
    
    {/* Analytics line */}
    <path d="M62 50 L65 47 L68 49 L72 45" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6"/>
    
    {/* Monitor stand */}
    <rect x="47" y="60" width="6" height="8" fill="currentColor" fillOpacity="0.3"/>
    <rect x="40" y="68" width="20" height="3" fill="currentColor" fillOpacity="0.3"/>
    
    {/* Cloud connections */}
    <ellipse cx="20" cy="15" rx="8" ry="4" fill="currentColor" fillOpacity="0.2"/>
    <ellipse cx="80" cy="15" rx="8" ry="4" fill="currentColor" fillOpacity="0.2"/>
    
    {/* Connection lines to cloud */}
    <path d="M35 25 L25 19" stroke="currentColor" strokeWidth="1" opacity="0.4" strokeDasharray="2,2"/>
    <path d="M65 25 L75 19" stroke="currentColor" strokeWidth="1" opacity="0.4" strokeDasharray="2,2"/>
    
    {/* Mobile devices */}
    <rect x="10" y="50" width="8" height="12" rx="2" fill="currentColor" fillOpacity="0.3"/>
    <rect x="82" y="50" width="8" height="12" rx="2" fill="currentColor" fillOpacity="0.3"/>
    
    {/* Data indicators */}
    <circle cx="14" cy="56" r="1" fill="currentColor" opacity="0.6"/>
    <circle cx="86" cy="56" r="1" fill="currentColor" opacity="0.6"/>
    
    {/* 24/7 indicator */}
    <text x="50" y="85" textAnchor="middle" fontSize="7" fill="currentColor" opacity="0.6">24/7</text>
  </svg>
)

export const QualityIcon = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Main certification shield */}
    <path d="M50 15 L65 25 L65 50 Q65 60 50 70 Q35 60 35 50 L35 25 Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
    
    {/* Large checkmark */}
    <path d="M40 48 L47 55 L62 35" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.8"/>
    
    {/* Quality badge ribbons */}
    <path d="M35 60 L30 75 L35 70 L40 75 Z" fill="currentColor" fillOpacity="0.4"/>
    <path d="M65 60 L60 75 L65 70 L70 75 Z" fill="currentColor" fillOpacity="0.4"/>
    
    {/* Testing equipment */}
    <rect x="15" y="25" width="15" height="8" rx="2" fill="currentColor" fillOpacity="0.3"/>
    <circle cx="22" cy="29" r="2" fill="currentColor" opacity="0.5"/>
    <path d="M22 31 L22 40" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
    
    <rect x="70" y="25" width="15" height="8" rx="2" fill="currentColor" fillOpacity="0.3"/>
    <rect x="72" y="27" width="11" height="1" fill="currentColor" opacity="0.5"/>
    <rect x="72" y="29" width="7" height="1" fill="currentColor" opacity="0.5"/>
    <rect x="72" y="31" width="9" height="1" fill="currentColor" opacity="0.5"/>
    
    {/* Magnifying glass */}
    <circle cx="80" cy="50" r="6" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
    <path d="M85 55 L90 60" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
    <circle cx="80" cy="50" r="3" fill="currentColor" fillOpacity="0.1"/>
    
    {/* Inspection checklist */}
    <rect x="10" y="55" width="12" height="2" fill="currentColor" opacity="0.4"/>
    <rect x="10" y="60" width="8" height="2" fill="currentColor" opacity="0.4"/>
    <rect x="10" y="65" width="10" height="2" fill="currentColor" opacity="0.4"/>
    
    {/* Check marks for list */}
    <path d="M8 56 L9 57 L11 55" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6"/>
    <path d="M8 61 L9 62 L11 60" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6"/>
    <path d="M8 66 L9 67 L11 65" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6"/>
    
    {/* Quality percentage */}
    <text x="50" y="85" textAnchor="middle" fontSize="8" fill="currentColor" opacity="0.7">99%</text>
  </svg>
)

export const EnvironmentalIcon = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Central Earth */}
    <circle cx="50" cy="45" r="18" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
    
    {/* Continents */}
    <path d="M38 40 Q45 35 52 40 Q48 50 42 45 Z" fill="currentColor" fillOpacity="0.3"/>
    <path d="M55 35 Q62 38 58 48 Q55 42 55 35 Z" fill="currentColor" fillOpacity="0.3"/>
    
    {/* Large recycling arrows around earth */}
    <path d="M25 20 Q15 25 20 35 L25 30" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.7"/>
    <path d="M23 32 L20 35 L26 34" fill="currentColor" opacity="0.7"/>
    
    <path d="M75 20 Q85 25 80 35 L75 30" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.7"/>
    <path d="M77 32 L80 35 L74 34" fill="currentColor" opacity="0.7"/>
    
    <path d="M75 70 Q85 65 80 55 L75 60" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.7"/>
    <path d="M77 58 L80 55 L74 56" fill="currentColor" opacity="0.7"/>
    
    {/* Electronics being recycled */}
    <rect x="15" y="75" width="12" height="8" rx="1" fill="currentColor" fillOpacity="0.3"/>
    <rect x="16" y="76" width="10" height="3" fill="currentColor" fillOpacity="0.1"/>
    <circle cx="19" cy="79" r="1" fill="currentColor" opacity="0.5"/>
    <circle cx="23" cy="79" r="1" fill="currentColor" opacity="0.5"/>
    
    <rect x="73" y="75" width="12" height="8" rx="1" fill="currentColor" fillOpacity="0.3"/>
    <rect x="74" y="76" width="10" height="3" fill="currentColor" fillOpacity="0.1"/>
    <circle cx="77" cy="79" r="1" fill="currentColor" opacity="0.5"/>
    <circle cx="81" cy="79" r="1" fill="currentColor" opacity="0.5"/>
    
    {/* Plants growing from devices */}
    <path d="M21 75 Q21 70 18 65" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6"/>
    <ellipse cx="17" cy="65" rx="3" ry="4" fill="currentColor" opacity="0.5"/>
    
    <path d="M79 75 Q79 70 82 65" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6"/>
    <ellipse cx="83" cy="65" rx="3" ry="4" fill="currentColor" opacity="0.5"/>
    
    {/* Carbon reduction arrows */}
    <path d="M30 10 L35 10 M32.5 7 L32.5 13" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
    <path d="M70 10 L65 10 M67.5 7 L67.5 13" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
    
    {/* Eco certification badges */}
    <circle cx="15" cy="50" r="5" fill="currentColor" fillOpacity="0.2"/>
    <path d="M12 50 L14 52 L18 47" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.7"/>
    
    <circle cx="85" cy="50" r="5" fill="currentColor" fillOpacity="0.2"/>
    <text x="85" y="52" textAnchor="middle" fontSize="5" fill="currentColor" opacity="0.7">ECO</text>
    
    {/* Percentage indicator */}
    <text x="50" y="90" textAnchor="middle" fontSize="8" fill="currentColor" opacity="0.7">75%</text>
  </svg>
)
