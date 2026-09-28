import type { Project } from '../data/projects'

function Book({ project }: { project: Project }) {
  return (
    <div className={`book-wrap ${project.comingSoon ? 'is-closed' : ''}`}>
      <div className="book-page" />
      <div className={`book tone-${project.tone} ${project.cover ? 'has-art' : ''}`}>
        {project.cover ? (
          <img className="book-art" src={project.cover} alt={`${project.label} cover`} />
        ) : (
          <span className="book-title">{project.label}</span>
        )}
        {project.comingSoon && <span className="book-band">Coming soon</span>}
      </div>
    </div>
  )
}

export default Book
