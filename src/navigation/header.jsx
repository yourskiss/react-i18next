
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import './header.css';
import { useTranslation } from 'react-i18next';
 

export default function Header() {
  const [pos, setPos] = useState(false);
  const [ls, setLS] = useState('');
  const { t, i18n } = useTranslation();
 
  var getLS = localStorage.getItem('i18nextLng');
  useEffect(() => {
    setLS(getLS);
  }, [getLS]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const showHideHandler = (val) => {
    if(val === 'open')
    {
      setPos(true)
    }
    else
    {
      setPos(false);
    }
  }


  return (<>
    <header className='header'>
       <img src="../../vite.svg" alt="abc" /> 


      <aside onClick={()=>showHideHandler('open')}>
        <span></span>
        <span></span>
        <span></span>
      </aside>

   
      <dl>
        <dd></dd>
        <dt className={ls === 'en' || ls === 'en-US' ? 'active' : ''}  onClick={() => changeLanguage('en')}>{ t("partmanu.english") }</dt>
        <dt className={ls === 'hi' ? 'active' : ''} onClick={() => changeLanguage('hi')}>{ t("partmanu.hindi") }</dt>
      </dl>

    </header>

    {
        !pos ? '' : <section className="headerMenu">
        <aside onClick={()=>showHideHandler('close')}>
          <span></span>
          <span></span>
        </aside>
        <ul>
          <li><NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')} onClick={()=>showHideHandler('close')}>{ t("partheader.home") }</NavLink></li>
          <li><NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : '')} onClick={()=>showHideHandler('close')}>{ t("partheader.about") }</NavLink></li>
          <li><NavLink to='/service' className={({ isActive }) => (isActive ? 'active' : '')} onClick={()=>showHideHandler('close')}>{ t("partheader.services") }</NavLink></li>
          <li><NavLink to='/contact' className={({ isActive }) => (isActive ? 'active' : '')} onClick={()=>showHideHandler('close')}>{ t("partheader.contact") }</NavLink></li>
        </ul>
      </section> 
    }
  </>
    
  )
}
