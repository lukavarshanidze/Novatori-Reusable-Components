import React from "react";
import styles from './Banner.module.scss';
import Banner1Button from '../utils/Icons/Banner1.svg';
import Banner2Button from '../utils/Icons/Banner2.svg';

type Props = {
    coverImg: any; 
    title: string;
    artistName: string;
    viewNumber: string;
}
export default (props: Props) => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.bannerImage}>
                <img src={props.coverImg.src} alt='Background Picture'/>
                <div className={styles.titles}>
                    <h2>Trending New Hits</h2>
                    <h1>{props.title}</h1>
                    <div className={styles.additionalTitles}>
                        <p>{props.artistName}</p>
                        <p>{props.viewNumber}</p>
                    </div>
                    <div className={styles.buttons}>
                        <button className={styles.banner1Button} >
                             <img src={Banner1Button.src} alt='Audio Button'/>
                        </button>

                        <button className={styles.banner2Button} >
                            <img src={Banner2Button.src} alt='Heart Buttton'/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}