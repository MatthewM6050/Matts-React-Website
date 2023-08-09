import React from 'react';
import '../Styles/About.css';

function About() {

  /**
   * Allows the user to download my resume.
   */
  const onButtonClick = () => {
    fetch('Matthew_Melendez.pdf').then( response => {
      response.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob);

        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Matthew_Melendez.pdf';
        alink.click();
      })
    })
  }

  return (
    <div className='about'>
      <div className='aboutImage'>
      </div>
      <div className='aboutText'>
        <h1>About Me</h1>
        <p> My name is Matthew Melendez and I grew up in East Harlem, New York. I'm an aspiring Software Developer that has been coding since High School, where I was introduced to OOP. Recently, I have graduated from SUNY at Albany with a Bachelors of Science in CS and minor in Informatics. 
          From handling front-end development with WISE Cities to handling back-end development in academic projects, I believe that I have the skills, knowledge, and capacity to work on bigger projects. One of my favourite projects that I have worked on 
          is my Multithreading project that was coded in C and ran on the LinuxOS, which can be seen in the Projects page. 
        </p>
        
        <p>Besides programming, I have a heavy interest in football. My favourite football team has been Arsenal since middle school. COYG! I also participate in a Sunday league at Asphalt Green where we play 7v7s and have 
          reached as far as the semi-finals. Another one of my interest are computer builds. I have built my friends multiple budget desktops. Videos like LinusTechTips and GamersNexus keep me up to date with all the latest 
          hardware. 
        </p>
        <br/>
        <h3>Download my Resume</h3>
        <button onClick={onButtonClick}>
          Download Resume PDF
        </button>
      </div>
      
    </div>
  )
}

export default About
