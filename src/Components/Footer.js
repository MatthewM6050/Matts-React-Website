import React from 'react'
import '../Styles/Footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <div className='footer'>
        <div className='social'>
          <a href='https://www.linkedin.com/in/matthew-melendez-515181151/'>
            <LinkedInIcon/>
          </a>
          <a href='https://github.com/MatthewM6050'>
            <GitHubIcon/>
          </a>
        </div>
      <p> &copy; 2023 MattsWebsite</p>
    </div>
  )
}

export default Footer;
