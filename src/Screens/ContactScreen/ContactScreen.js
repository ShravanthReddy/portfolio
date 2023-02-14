import { useNavigate } from 'react-router-dom';

function ContactScreen() {
    const navigate = useNavigate();
    function onClickHandle(id) {
        if (id === 1) {
            navigate("/")
        }
    }

  return (
    <div className='about-main-container'>
        <nav className='about-nav-bar'>
            <div className='nav-bar-div'>
                <span className='text-focus-in-about'>projects</span>
            </div>
            <div>
                <span className='main-nav animate-about-nav'>contact</span>
            </div>
            <div className='nav-bar-div'>
                <span className='text-focus-in-about'>about</span>
            </div>
        </nav>
        <main className='about-secondary-container animate-in-up'>
            <header className='header-about'>
                <div>
                    <span onClick={() => onClickHandle(1)} className='programming-syntax hover-properties'>function about()<br/>&nbsp;&nbsp;&nbsp;return (</span>
                </div>
            </header>

        </main>
    </div>
  )
}

export default ContactScreen