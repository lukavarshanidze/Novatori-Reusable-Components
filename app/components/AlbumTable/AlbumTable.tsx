import { useState } from 'react'
import styles from './AlbumTable.module.scss'

import { activeState } from '@/app/states'
import { useRecoilState } from 'recoil'
import { dataTypes } from '../utils/DataTypes'
import { useTranslation } from 'react-i18next'



type Props = {
    data: dataTypes,
    active?: number,
    onClick?: (id: number) => void,
}

export default (props: Props) => {
    const [active, setActive] = useRecoilState(activeState)
    const { t } = useTranslation();

    const onClickHandler = (id:any) => {
            setActive(id)
    }

    return(
    <div className={styles.container}>
        <div className={styles.insideContainer}>

            <div className={`${styles.songHeader__container}`}>
                <div className={styles.artist}>
                    {}
                </div>                    
                <div className={styles.grow}>
                    <div>{t('data.artist.title')}</div>
                    <div>Release Date</div>
                    <div>Duration</div>
                </div>                    
            </div>
        {
            props.data.map(each => {
                return( <div onClick={() => onClickHandler(each.id)} key={each.id}  className={styles.songAlbum__container}>
                    <div className={styles.artist}>
                        <div className={styles.box}>
                            <img src={each.coverImg}/>
                            {active === each.id && <div className={styles.insideBox}>
                                <div className={styles.insideBox_active}></div>
                            </div>}
                            
                        </div>    
                        <div className={styles.artistName_container}>
                            <p>{each.firstName }{ each.lastName}</p>
                            <p className={styles.album}>{each.albumName}</p>
                        </div>
                    </div>                    
                    <div className={styles.grow}>
                        <div>{each.genre}</div>
                       
                        <div>{each.duration}</div>
                    </div>                    
                </div>)
            })
        }
            
        </div>

    </div>
    )
}