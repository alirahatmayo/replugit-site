/*
 * The thin rounded window frame around the page, copied from reCore so the
 * two sites read as one product family. Hidden on phones.
 */
export default function Frame() {
  const corner = "M5.50871e-06 0C-0.00788227 37.3001 8.99616 50.0116 50 50H5.50871e-06V0Z"
  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] max-[850px]:hidden" aria-hidden="true">
      <div className="absolute top-0 left-0 right-0 h-2.5 bg-frame"></div>
      <div className="absolute bottom-0 left-0 right-0 h-2.5 bg-frame"></div>
      <div className="absolute top-0 bottom-0 left-0 w-2.5 bg-frame"></div>
      <div className="absolute top-0 bottom-0 right-0 w-2.5 bg-frame"></div>
      <svg className="absolute top-2.5 left-2.5 text-frame" width="50" height="50" viewBox="0 0 50 50" fill="none">
        <path d={corner} fill="currentColor" transform="rotate(90 25 25)"></path>
      </svg>
      <svg className="absolute top-2.5 right-2.5 text-frame" width="50" height="50" viewBox="0 0 50 50" fill="none">
        <path d={corner} fill="currentColor" transform="rotate(180 25 25)"></path>
      </svg>
      <svg className="absolute bottom-2.5 left-2.5 text-frame" width="50" height="50" viewBox="0 0 50 50" fill="none">
        <path d={corner} fill="currentColor"></path>
      </svg>
      <svg className="absolute bottom-2.5 right-2.5 text-frame" width="50" height="50" viewBox="0 0 50 50" fill="none">
        <path d={corner} fill="currentColor" transform="rotate(270 25 25)"></path>
      </svg>
    </div>
  )
}
