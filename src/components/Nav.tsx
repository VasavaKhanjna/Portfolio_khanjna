import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav id="topnav">
      <div className="brand">
        <span className="avatar" aria-hidden="true">KV</span>
        <span className="wordmark">Khanjna Vasava</span>
      </div>

      <ul className="top-nav-links">
        <li><Link to="/work">Work</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><a href="/experience#skills">Skills</a></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <div className="topnav-actions">
        <a className="icon-link" href="https://linkedin.com/in/khanjnavasava" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
        <a className="icon-link" href="https://behance.net/vasavakhanjna" target="_blank" rel="noreferrer" aria-label="Behance">Be</a>
        <a className="cta-outline" href="mailto:vasavakhanjna22@gmail.com">Contact me</a>
      </div>
    </nav>
  )
}

export default Nav
