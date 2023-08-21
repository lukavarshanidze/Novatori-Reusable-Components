import styles from './ProgressBar.module.scss'

type Props = {
    percent: number;
    width: number;
    height: number;
    color: string;
}

const ProgressBar = (props: Props) => {
    
    return (
        <div style={{width: `${props.width}px`, height:`${props.height}px`, }} className={styles.container}>
            <div style={{width: `${props.percent}%`, backgroundColor: `${props.color}`, height: '100%'}}  className={styles.percent}></div>
        </div>
    )
}

export default ProgressBar