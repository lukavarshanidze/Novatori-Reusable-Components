import styles from './colorButton.module.scss'

type Props = {
    variant?: 'fill' | 'outline';
    disabled?: boolean;
    title: string;
    color: 'success' | 'warning' | 'error' | 'info';
    className?: string;
}

export default (prop: Props) => {
    const { variant, disabled, title, color, className } = prop;
    const classes = [styles.container, className]

    if(variant == 'outline') classes.push(styles.outline)
    else classes.push(styles.fill)
    
    if(color == 'success') classes.push(styles.success)
    else if (color == 'warning') classes.push(styles.warning)
    else if(color == 'error') classes.push(styles.error)
    else classes.push(styles.info)

   
    return(
        <button className={classes.join(' ').trim()} disabled={disabled}>
            {title}
        </button>
    )
}