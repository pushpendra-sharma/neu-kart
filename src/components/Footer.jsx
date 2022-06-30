import '../styles/Footer.css';

const Footer = () => {
  return (
    <>
      <footer className='footer footer-container'>
        <div className='footer-item'>
          <div className='footer-header'>SOCIAL</div>
          <a className='footer-link' href='https://github.com/Pushpendra-Sharma'>
            GitHub
          </a>
          <a className='footer-link' href='https://twitter.com/100Pushpendra'>
            Twitter
          </a>
          <a
            className='footer-link'
            href='https://www.linkedin.com/in/ietl-pushpendra-sharma/'
          >
            Linkedin
          </a>
        </div>

        <div className='footer-item'>
          <div className='footer-header'>ABOUT</div>
          <p className='footer-desc'>Contact</p>
          <p className='footer-desc'>Other Info</p>
          <p className='footer-desc'>Copyright 2022</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
