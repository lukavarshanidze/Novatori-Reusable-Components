import HomeComponent from '../../utils/Icons/HomeSVG'
import MusicSVG from '../../utils/Icons/MusicSVG'
import RadioSVG from '../../utils/Icons/RadioSVG'
import DownloadSVG from '../../utils/Icons/DownloadSVG'
import SettingsSVG from '../../utils/Icons/SettingsSVG'
import HelpSVG from '../../utils/Icons/HelpSVG'
import styles from './leftSideMenu.module.scss'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'





const MenuData = () => {
    const [clicked, setClicked] = useState(0);
    const { t } = useTranslation();


    const leftMenuArray = [
        {
            id: 0,
            logo:  <HomeComponent/>,
            name: t('data.leftSideMenu.Home'),
        },
        {
            id: 1,
            logo: <MusicSVG />,
             name: t('data.leftSideMenu.MyMusic')
        },
        {
            id: 2,
            logo: <RadioSVG />,
            name: t('data.leftSideMenu.Radio')
        },
        {
            id: 3,
            logo: <DownloadSVG />,
            name: t('data.leftSideMenu.Download')
        },
        {
            id: 4,
            logo: <SettingsSVG />,
            name: t('data.leftSideMenu.Settings')
        },
        {
            id: 5,
            logo: <HelpSVG />,
             name: t('data.leftSideMenu.Help')
        },
    ]

  return (
    <div className={styles.menu__logos}>
        {leftMenuArray.map((each) => (
            <div onClick={() => setClicked(each.id)} className={clicked === each.id ? styles.clicked : styles.menu__items} key={each.id}>
                {each.logo}
                <p>{each.name}</p>
            </div>
        )
        )}
    </div>
  )
}

export default MenuData
