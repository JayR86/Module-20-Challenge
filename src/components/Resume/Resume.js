import uniqid from 'uniqid'
import {  resumepicture,resume } from '../../portfolio'
import './Resume.css'

const Resume = () => {
  
  const {photo,resumepdf} = resumepicture
  return (
    <section className='section resume' id='resume'>
      
      <h2 className='section__title'>Resume</h2>
      <a className='resume_link'
  href={resumepdf}
  download="Jairo_Osorio_Ramirez_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer">
  Download Resume
</a>
      <img
          alt="Resume"
          src={photo}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
   

      <h3 className='section__title'>Proficiencies</h3>
      <ul className='proficiencies-list'>
        {resume.map((skill) => (
          <li key={uniqid()} className='proficiencies-list-item btn btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
    </section>
    /*<section className='section resume' id='resume'>
     <h2>Resume</h2>
      
      <div className="resume-download">
        <a href="/your-resume-file.pdf" download="Your_Name_Resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
      </div>
      
      <h3>Proficiencies</h3>
      <ul className="proficiencies-list">
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        {//Add more proficiencies as needed 
        }
      </ul>
    </section>*/
  )
}

export default Resume;



