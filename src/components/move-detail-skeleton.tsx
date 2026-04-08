export function MoveDetailSkeleton() {
  return (
    <main>
      <section className="page-hero">
        <div className="shell">
          <div className="move-meta">
            <span className="tag h-6 w-20 bg-gray-700 rounded-full animate-pulse" />
            <span className="tag h-6 w-16 bg-gray-700 rounded-full animate-pulse" />
          </div>

          <h1 className="page-title h-12 w-3/4 bg-gray-700 rounded-lg animate-pulse" />
          <p className="page-subtitle h-6 w-full bg-gray-700 rounded-lg animate-pulse mt-4" />

          <div className="detail-stack">
            {[1, 2, 3].map((i) => (
              <section key={i} className="detail-block">
                <h2 className="h-6 w-32 bg-gray-700 rounded-lg animate-pulse" />
                <p className="h-4 w-full bg-gray-700 rounded-lg animate-pulse mt-3" />
                <p className="h-4 w-4/5 bg-gray-700 rounded-lg animate-pulse mt-2" />
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
