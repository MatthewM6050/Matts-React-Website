import React from 'react';
import Modal from '../Components/Modal.js';
import yourImage from '../Assets/C_Programming_Language.png';
import "../Styles/Projects.css"

function Projects() {
  return (
    <div className='main'>
        <div className='header'> 
            <h1>My Projects</h1>
        </div>
        <div className='modalsContainer'>
            <Modal url="https://github.com/MatthewM6050/C-Multithreading" image={yourImage} title="C-Multithreading" text="Wrote code in C that read text.txt, replaced specified characters within the buffer of the text file, uppercased the text file, and wrote the modified text file using multithreading."/>
            <Modal url="https://github.com/MatthewM6050/C-Multithread-Arrays" image={yourImage} title="C-Multithread-Arrays" text="Printed contents of 2 arrays sequentially using multithreading techniques."/>
            <Modal url="https://github.com/MatthewM6050/C-Server" image={yourImage} title="C-Server" text="Created a client and server in C, where the client sends a file and what function to be performed on the file to the server."/>
            <Modal url="https://github.com/MatthewM6050/myShell/tree/main" image={yourImage} title="myShell" text="Created my own Shell in C using pipes."/>
        </div>
    </div>
  )
}

export default Projects
