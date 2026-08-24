import type { Project } from '../data/projects'

function Book({ project }: { project: Project }) {
  return (
    <div className="book-wrap">
      <div className="book-page" />
      <div className={`book tone-${project.tone} ${project.cover ? 'has-art' : ''}`}>
        <span className="book-badge">{project.metric}</span>
        {project.cover ? (
          <img className="book-art" src={project.cover} alt={`${project.label} cover`} />
        ) : (
          <span className="book-title">{project.label}</span>
        )}
      </div>
    </div>
  )
}

export default Book
