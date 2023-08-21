import { text } from "stream/consumers";
import styles from "./TextLable.module.scss";

type Props = {
  styleVariant:
     "style1"
    | "style2"
    | "style3"
    | "style4"
    | "style5"
    | "style6"
    | "style7"
    | "style8";
  text: string;
};
export default (Props: Props) => {
  const { styleVariant, text } = Props;

  const classes = []

  if (styleVariant === "style1") {
classes.push(styles.style1)
  } else if (styleVariant === "style2") {
    classes.push(styles.style2)
  } else if (styleVariant === "style3") {
    classes.push(styles.style3)
  } else if (styleVariant === "style4") {
    classes.push(styles.style4)
  } else if (styleVariant === "style5") {
    classes.push(styles.style5)
  } else if (styleVariant === "style6") {
    classes.push(styles.style6)
  } else if (styleVariant === "style7") {
    classes.push(styles.style7)
  } else if (styleVariant === "style8") {
    classes.push(styles.style8)
  }

return  <p className={classes.join(' ').trim()}>{text}</p>
};
