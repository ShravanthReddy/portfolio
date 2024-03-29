import { useNavigate } from 'react-router-dom';
import './ContactScreen.css'

function ContactScreen() {
    const navigate = useNavigate();
    function onClickHandle(id) {
        if (id === 1) {
            navigate("/")
        } else if (id === 2) {
            navigate("/projects")
        } else if (id === 3) {
            navigate("/about")
        }
    }

  return (
    <div className='about-main-container'>
        <nav className='about-nav-bar'>
            <div className='nav-bar-div'>
                <span onClick={() => onClickHandle(2)} className='text-focus-in-about'>projects</span>
            </div>
            <div>
                <span className='main-nav contact-nav animate-about-nav'>Contact</span>
            </div>
            <div className='nav-bar-div'>
                <span onClick={() => onClickHandle(3)} className='text-focus-in-about'>about</span>
            </div>
        </nav>
        <main className='about-secondary-container contact-screen-container animate-in-up'>
            <header className='header-about'>
                <div>
                    <span onClick={() => onClickHandle(1)} className='programming-syntax hover-properties'>function about()<br/>&nbsp;&nbsp;&nbsp;return Home(</span>
                </div>
            </header>
            <div>
                <div>
                    <span className='animate-hello-contact'>Hello.</span>
                </div>
                <div>
                    <p className='animate-p-contact'>
                        Thanks for coming here. If you want to hire me for a job or interested in knowing more about me, you can contact me using the below ways.
                        <br></br>
                        <br></br>
                        Email: <a href="mailto:shravanthreddy24@gmail.com">shravanthreddy24@gmail.com </a>
                        <br></br>
                        Social: <a href="https://www.linkedin.com/in/shravanth-reddy-reddy/" target="_blank" rel="noreferrer">Linkedin </a>
                        /
                                <a href='https://github.com/ShravanthReddy' target="_blank" rel="noreferrer"> Github </a>
                        /
                                <a href='https://twitter.com/shrvnth_rdy' target="_blank" rel="noreferrer"> Twitter </a>
                    </p>
                </div>               
            </div>

        </main>
    </div>
  )
}

export default ContactScreen