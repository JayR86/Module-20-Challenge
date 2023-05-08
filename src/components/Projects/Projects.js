import uniqid from 'uniqid'
import { portfolio} from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => {
  if (!portfolio.length) return null

  return (
    <section id='portfolio' className='section portfolio'>
      <h2 className='section__title'>Portfolio</h2>

      <div className='projects__grid'>
        {portfolio.map((portfolio) => (
          <ProjectContainer key={uniqid()} project={portfolio} />
        ))}
      </div>
    </section>
  )
}

export default Projects
