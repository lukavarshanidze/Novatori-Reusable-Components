import { type } from "os";
import styles from "./Player.module.scss";
import artist from "../../../public/paolo.jpg";

type Player = {
  coverImg: string;
  albumName: string;
  firstName: string;
  lastName: string;
};
export default (prop: Player) => {
  return (
    <div className={styles.table}>
      <div className={styles.left_side}>
        <img
          className={styles.artistImg}
          src={prop.coverImg}
          alt="dj artist"
        />
        <div className={styles.name}>
          <h4>{prop.firstName}  {prop.lastName}</h4>
          <span>{prop.albumName}</span>
        </div>
        <img
          className={styles.icon1}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Np-h15rrcpGbeNTS8-yE0ON_2R5Uumw81Q&usqp=CAU"
          alt="#"
        />
      </div>

      <div className={styles.mid_side}>
        <div className={styles.icons}>
          <img
            className={styles.icon1}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Np-h15rrcpGbeNTS8-yE0ON_2R5Uumw81Q&usqp=CAU"
            alt="#"
          />
          <img
            className={styles.icon1}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Np-h15rrcpGbeNTS8-yE0ON_2R5Uumw81Q&usqp=CAU"
            alt="#"
          />
          <img
            className={styles.icon1}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Np-h15rrcpGbeNTS8-yE0ON_2R5Uumw81Q&usqp=CAU"
            alt="#"
          />
          <img
            className={styles.icon1}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Np-h15rrcpGbeNTS8-yE0ON_2R5Uumw81Q&usqp=CAU"
            alt="#"
          />
          <img
            className={styles.icon1}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Np-h15rrcpGbeNTS8-yE0ON_2R5Uumw81Q&usqp=CAU"
            alt="#"
          />
        </div>
        <div className={styles.song}>
          <span>4:00</span>
          <div className={styles.line}></div>
          <span>5.20</span>
        </div>
      </div>
      <div className={styles.right_side}>
      <img
            className={styles.icon1}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Np-h15rrcpGbeNTS8-yE0ON_2R5Uumw81Q&usqp=CAU"
            alt="#"
          />
          <img
            className={styles.icon1}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Np-h15rrcpGbeNTS8-yE0ON_2R5Uumw81Q&usqp=CAU"
            alt="#"
          />
          <img
            className={styles.icon1}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Np-h15rrcpGbeNTS8-yE0ON_2R5Uumw81Q&usqp=CAU"
            alt="#"
          />
          <div className={styles.shorLine}></div>
      </div>
      
    </div>
  );
};
