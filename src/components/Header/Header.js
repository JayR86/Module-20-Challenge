import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'
const Header = () => {
  const {title } = header

  return (
    <header className='header center'>
      <h2>
        {title}
      </h2>
      <Navbar />
    </header>
  )
}
export default Header
