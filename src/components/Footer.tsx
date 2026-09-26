const EMAIL = 'vasavakhanjna22@gmail.com'

const links = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/khanjnavasava' },
  { label: 'Behance', href: 'https://behance.net/vasavakhanjna' },
  { label: 'Résumé', href: '/resume.pdf' },
]

/* A scalloped sign-off: an invitation on the left, how to reach me and where I
   am on the right, then the copyright and the elsewhere links along the bottom. */
function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-top">
        <div className="footer-pitch">
          <h2>
            Let&rsquo;s <em>connect.</em>
          </h2>
          <p>
            Whether you have a product to shape, a role to fill, or just want to
            talk design over a cup of chai, I&rsquo;d love to hear from you.
          </p>
        </div>

        <dl className="footer-facts">
          <div>
            <dt>Direct inquiry</dt>
            <dd>
              <a className="footer-cta" href={`mailto:${EMAIL}?subject=Let%27s%20connect`}>
                Let&rsquo;s connect
              </a>
              <a className="footer-mail" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </dd>
          </div>
          <div>
            <dt>Location</dt>
            <dd>
              <span className="footer-place">India</span>
              <span className="footer-note">Available for remote work globally</span>
            </dd>
          </div>
        </dl>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Khanjna Vasava.</p>
        <ul className="footer-links">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
