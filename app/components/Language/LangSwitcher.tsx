'use client'
import styles from './LangSwitcher.module.scss';
import { useEffect, useState } from 'react';
import eng from '../LeftSideBar/images/english.png';
import geo from '../LeftSideBar/images/georgian.png';
import { useTranslation } from 'react-i18next';

const LangSwitcher = () => {
  const [language, setLanguage] = useState('EN');
  const { i18n } = useTranslation();


  useEffect(() => {
    if(language === 'EN') i18n.changeLanguage(language.toLowerCase());
    else if(language === "GE") i18n.changeLanguage(language.toLowerCase())
  }, [language])


  return (
    <div className={styles.language}>
        {language === 'EN' ? <img src={eng.src}/> : <img src={geo.src}/>}
        <select onChange={(e) => setLanguage(e.target.value)}>
            <option>EN</option>
            <option>GE</option>
        </select>
    </div>
  )
}

export default LangSwitcher