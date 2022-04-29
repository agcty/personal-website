function SiteLayout() {
  return (
    <div className="min-w-screen min-h-screen">
      <div className="layout h-full gap-4 sm:grid">
        <div className="h-32 bg-red-400" />
        <div className="col-span-12 row-span-6 h-64 bg-green-400" />
        <div className="h-32 bg-red-400" />
      </div>

      <style jsx>
        {`
          @media screen and (min-width: 80em) {
            .layout {
              grid-template-columns: 20rem repeat(12, minmax(0, 1fr)) 17.5rem;
            }
          }

          @media (min-width: 1100px) {
            .layout {
              grid-template-columns: 24rem repeat(12, minmax(0, 1fr)) 24rem;
              grid-row-gap: calc(1em + 0.5vw);
              margin: 0 auto;
            }
          }
        `}
      </style>
    </div>
  );
}

export default SiteLayout;
