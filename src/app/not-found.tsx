export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">404</h1>
        <p className="text-slate-600 mb-8">Page not found</p>
        <a 
          href="/" 
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          Go Home
        </a>
      </div>
    </div>
  )
}
