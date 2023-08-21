import styles from './Badge.module.scss'

type BadgeProps = {
    text?: string;
    mode: 'rounded' | 'square';
}

export default (props:BadgeProps) => {
    const badgeClasses = props.mode === 'rounded' ? `${styles.badge} ${styles.rounded}` : `${styles.badge} ${styles.square}`;

    return(
        <span className={badgeClasses}>{props.text}</span>
    )

}