export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <section className="header">
        Welcome to our page Training components
      </section>
      <main>
        {children}
      </main>
    </div>
  )
}