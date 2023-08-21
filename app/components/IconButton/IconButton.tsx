import styles from './IconButton.module.scss'
import { ReactNode } from 'react';
import Icon from '../Icon/Icon';

type Props = {
    title?: string;
    className?: string;
    variant?: "fill" | "outline";
    disabled?: boolean;
    icon: ReactNode;  
}

export default (props:Props) => {
    const buttoncClasses =[styles.container, props.className];
    if(props.variant == 'outline') buttoncClasses.push(styles.outline)
    else buttoncClasses.push(styles.fill)
    return(
        <button disabled = {props.disabled} className={buttoncClasses.join(' ').trim()}>
          {props.icon} {props.title}
        </button>

    )
}

