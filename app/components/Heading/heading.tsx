import styles from './Heading.module.scss'

type Props = {
    type: "h1" | "h2" | "h3" | "h4" | "h5"; 
    title: string;
}


export default ({ type, title }:Props) => {
  switch (type) {
    case "h1":
      return <h1 className={styles.myHeading}>{title}</h1>;
    case "h2":
      return <h2 className={styles.myHeading}>{title}</h2>;
    case "h3":
      return <h3 className={styles.myHeading}>{title}</h3>;
    case "h4":
      return <h4 className={styles.myHeading}>{title}</h4>;
    case "h5":
      return <h5 className={styles.myHeading}>{title}</h5>;
  }
}