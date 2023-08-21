import React from "react";
import styles from './verticalCard.module.scss';
import plusIcon from '../utils/Icons/PlusIcon.svg';
import playerIcon from '../utils/Icons/PlayerIcon.svg';
import rightArrowIcon from '../utils/Icons/RightArrowIcon.svg';


type Props = {
    coverImg: any; 
    label: string; 
    subLabel: string; 
    onClick?: () => void; 
}

export default (props: Props) => {
    return(
        <div className={styles.wrapper}>
            
            <div className={styles.frame}>
                <div className={styles.image1}>
                        <img src={props.coverImg.src} alt="Background Picture" />
                            <div className={styles.hoverImages}>
                                <img src={plusIcon.src} alt="Hover Picture"/>
                                <img src={playerIcon.src} alt="Hover Picture"/>
                                <img src={rightArrowIcon.src} alt="Hover Picture"/>
                            </div>
                    </div>
                <div className={styles.labels}>
                    <h5>{props.label}</h5>
                    <p>{props.subLabel}</p>
                </div>
            </div>

            
        </div>
    )
}