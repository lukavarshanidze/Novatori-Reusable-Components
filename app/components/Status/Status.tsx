import styles from './Status.module.scss';
import { iconEnum } from '../Icon/Icon';


type Props = {
    icon?: keyof typeof iconEnum;
    text: string;
    backgroundColor?: string;
    iconColor?: string;
    textColor?: string;
}

export default (props: Props) => {
    const { text, icon, backgroundColor, iconColor, textColor } = props;


    return(
        <div style={{color: textColor, backgroundColor}}> 
            {text} 
            { icon && 
                <i style={{color: iconColor}} className={iconEnum[icon]}/>
            }
        </div>
    )
}