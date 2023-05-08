
import { aboutme } from '../../portfolio'
import './About.css'

const About = () => {
  const {photo, description } = aboutme

  return (
    <section className='section aboutme center' id='aboutme'>
        <h2 className='section__title'>About Me</h2>
      <img
      height="150px"
      alt="Avatar placeholder"
      src={photo}
      style={{ borderRadius: "50%" }}
    />
      <p className='about__desc' dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, "<br>") }}></p>
    </section>
  )
}

export default About
