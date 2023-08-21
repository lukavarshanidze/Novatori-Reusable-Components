import { type } from "os";
import styles from "./PlaylistCard.module.scss";

type playlistCardProps = {
  playlistCover: string;
  name: string;
  artistName: string;
  songDuration: string;
  onClick: () => void;
};

export default (props: playlistCardProps) => {
  return (
    <div className={styles.PlaylistCard} onClick={props.onClick}>
      <div className={styles.flexItem}>
        <img className={styles.Url} src={props.playlistCover} alt="Cover" />
        <div className={styles.paragraphWrapper}>
          <p className={styles.name}>{props.name}</p>
          <p className={styles.quantity}>{props.artistName}</p>
        </div>
      </div>
      <span className={styles.songDuration}>{props.songDuration}</span>
    </div>
  );
};
