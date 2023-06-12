import React from 'react'
import Classes from '../Home/home.module.css';
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <>
   <div className={Classes.box}>
        <div className={Classes.border}>
          <p className={Classes.tittle}>The new era<br/>of storytelling.</p>
          <p className={Classes.smtit}>Tome is the Al-powered format for your work & ideas.</p>
        </div>
       
   </div>
   <div className={Classes.end}>
     <button>进入</button>
   </div>
   </>
  )
}
