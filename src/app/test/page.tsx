export default function TestPage() {
  return (
    <div className="min-h-screen bg-primary-500 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Replugit Test Page</h1>
        <p className="text-xl">If you can see this with green background and white text, Tailwind is working!</p>
        <div className="mt-8 grid grid-cols-4 gap-4">
          <div className="bg-forest-500 p-4 rounded">Forest</div>
          <div className="bg-primary-500 p-4 rounded">Primary</div>
          <div className="bg-slate-500 p-4 rounded">Slate</div>
          <div className="bg-blue-500 p-4 rounded">Blue</div>
        </div>
      </div>
    </div>
  )
}
