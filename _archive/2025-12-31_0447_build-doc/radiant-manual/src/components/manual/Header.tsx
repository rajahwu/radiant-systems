export default function Header() {
    return (
        <header className="border-b border-teal-500/20 bg-slate-950/50 backdrop-blur sticky top-0 z-10">
            <div className="max-w-6xl mx-auto px-8 py-6">
                <h1 className="text-5xl font-bold text-teal-300 tracking-tight mb-2">
                    Radiant Seven
                </h1>
                <p className="text-xl text-gray-400 mb-4">
                    Full Project Scaffolds & Implementation Manual
                </p>
                <div className="flex gap-3 flex-wrap">
                    <span className="bg-teal-500/10 text-teal-300 px-4 py-2 rounded-lg text-sm font-mono border border-teal-500/20">
                        Build Order: RDX → Grindhouse → Content Factor → Lattice Sync
                    </span>
                    <span className="bg-purple-500/10 text-purple-300 px-4 py-2 rounded-lg text-sm font-mono border border-purple-500/20">
                        Foundation → Execution → Pipeline → Coordination
                    </span>
                </div>
            </div>
        </header>)
}