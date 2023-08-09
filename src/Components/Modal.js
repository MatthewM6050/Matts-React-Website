import React from 'react';
import '../Styles/Modal.css';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function Modal(props) {
  return (
    <div className='mainContainer'>
        <div className='photo'>
          <img src={props.image} alt='text'/>
        </div>
        <div className='textBox'>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            <a href={props.url}>
              <OpenInNewIcon/>
            </a>
        </div>
    </div>
  )
}

export default Modal
