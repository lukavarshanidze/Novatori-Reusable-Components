import React from "react";
import styles from './../HorizontalCard/HorizontalCard.module.scss';

type Props = {
    img: string;
    label: string;
    onClick?: () => void;
 
}


export default (props: Props) => {


    return(
        <div onClick={props.onClick} className={styles.card}>
            <img src={props.img} />
            <h5>{props.label}</h5>

            <div className={styles.circle}>
                <button className={styles.square}></button>
            </div>
        </div>
    )
}