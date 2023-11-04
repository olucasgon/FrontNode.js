import './style.css';
import React from 'react';

export default function Footer(){
    return(
        <div className='footer'>
           <button className='button'><a href="https://www.instagram.com/olucasgon/"><img src="https://img.icons8.com/ios-filled/50/instagram-new--v1.png" alt="logo instagram" /></a></button>
           <button className='button'><a href="https://www.linkedin.com/in/olucasgon/"><img src="https://img.icons8.com/ios-filled/50/linkedin.png" alt="logo linkedin" /></a></button>
           <button className='button'><a href="https://github.com/olucasgon"><img src="https://img.icons8.com/ios-filled/50/github.png" alt="logo git" /></a></button>
        
        </div>
    );
}