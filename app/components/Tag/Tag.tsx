import { colorEnum } from "./../../styles/colors/colors.enum";
import React from "react";
import Icon from "../Icon/Icon";
import styles from "./../Tag/Tag.module.scss";
import { iconEnum } from "../Icon/Icon";

type Props = {
    className?: string;
    color?: keyof typeof colorEnum;
    title: string;
    onClose?: () => void;

}

export default (props: Props) => {

    const classes = [styles.container, props.className]
    if(props.color == 'SUCCESS_COLOR') classes.push(styles.success)
    else if(props.color == 'WARNING_COLOR') classes.push(styles.warning)
    else if(props.color == 'ERROR_COLOR')classes.push(styles.error)
    else if(props.color == 'SECONDARY_SUCCESS_COLOR') classes.push(styles.secondarySuccess)
    else if(props.color == 'SECONDARY_TEXT_COLOR') classes.push(styles.secondaryText)
    else classes.push(styles.defColor)

    return (
         <div className = {classes.join(' ').trim()}>
             {props.title}

             {props.onClose && <Icon icon="close_tag" size={18} color="secondaryTextColor"/>}
         </div> 
    )
}
