import CoverPreview from '@/components/CoverPreview';
import EditPanel from '@/components/EditPanel';

export default function Home() {
  return (
    <div className="h-screen flex overflow-hidden" style={{ background: 'var(--bg-deep)' }}>

      {/* Left Panel */}
      <aside
        className="h-screen flex-shrink-0 flex flex-col border-r overflow-hidden"
        style={{
          width: '372px',
          background: 'linear-gradient(180deg, var(--bg-surface) 0%, var(--bg-deep) 100%)',
          borderColor: 'rgba(30,41,59,0.5)',
        }}
      >
        <EditPanel />
      </aside>

      {/* Right Preview */}
      <main className="flex-1 relative flex items-center justify-center overflow-hidden">
        {/* Ambient background */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-[0.03]"
            style={{
              background: 'radial-gradient(ellipse, rgba(59,130,246,0.4), transparent 70%)',
              filter: 'blur(40px)',
            }}
          />
          <div
            className="absolute bottom-0 right-1/4 w-[500px] h-[300px] rounded-full opacity-[0.02]"
            style={{
              background: 'radial-gradient(ellipse, rgba(139,92,246,0.4), transparent 65%)',
              filter: 'blur(35px)',
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-[1080px] px-10 py-8">
          {/* Preview header */}
          <div className="flex items-end justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span
                  className="inline-flex items-center justify-center w-2 h-2 rounded-full animate-pulse"
                  style={{ background: 'var(--accent-blue)', boxShadow: '0 0 8px var(--accent-blue)' }}
                />
                <span className="text-[11px] font-medium tracking-wider uppercase" style={{ color: 'var(--text-muted)' }}>
                  Live Preview
                </span>
              </div>
              <h2 className="text-lg font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
                封面预览
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <span
                className="px-3 py-1.5 rounded-lg text-[11px] font-mono font-medium"
                style={{
                  background: 'var(--bg-elevated)',
                  color: 'var(--text-muted)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                900 × 383
              </span>
              <span
                className="text-[11px] font-medium"
                style={{ color: 'var(--text-muted)' }}
              >
                2.35 : 1
              </span>
            </div>
          </div>

          {/* Cover */}
          <CoverPreview />
        </div>
      </main>
    </div>
  );
}
