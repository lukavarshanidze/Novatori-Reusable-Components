import styles from './Button.module.scss'


type Props = {
    title: string;
    className?: string;
    disabled?: boolean;
    variant?: "fill" | "outline";
}

export default (props: Props) => {

    const classes = [styles.container, props.className];
    if(props.variant == 'outline') classes.push(styles.outline);
    else classes.push(styles.fill);


    return(
        <button disabled={props.disabled}
        className={classes.join(' ').trim()}
        >
            {props.title}
        </button>
    )
}









