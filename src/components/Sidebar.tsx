const tags = ['Product Design', 'Design Systems', 'UX Research', 'SaaS & AI Products', '0→1']

function Sidebar() {
  return (
    <aside id="sidebar">
      <p className="intro-copy">
        Product Designer with 2+ years of full-time experience taking
        complex AI-powered products from zero to launch. Based in
        Gandhinagar, India.
      </p>

      <div className="tag-row">
        {tags.map((tag) => (
          <span className="tag-pill" key={tag}>{tag}</span>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar
