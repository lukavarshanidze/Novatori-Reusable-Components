'use client'
import styles from './LeftSidebar.module.scss';
import Logo from '../utils/Icons/Logo.png'
import CloseIcon from '../utils/Icons/CloseIcon.png'
import User from '../utils/Icons/user.png'
import LangSwitcher from '../Language/LangSwitcher';
import { useTranslation } from 'react-i18next';
import MenuData from './menuData/lefSideBarMenuData';

const LeftSideBar = () => {
    const { t } = useTranslation();

    return (
    <div className={styles.container}>
        <div className={styles.sub__container}>
            <div className={styles.header}>
                <img src={Logo.src}/>
                <LangSwitcher />
                <img src={CloseIcon.src}/>
            </div>

            <div className={styles.menu}>
                <div className={styles.name}>
                    <img src={User.src}/>
                    <p>{t('data.leftSideMenu.MyMusic')}</p>
                </div>
                <p className={styles.border}></p>
                <MenuData />
            </div>  {/* end of .menu */}
        </div>
    </div>
  )
}

export default LeftSideBar