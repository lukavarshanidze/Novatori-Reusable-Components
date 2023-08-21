import { type } from "os";
import style from "./RadioButton.module.scss";
import { useState } from "react";

type Props = {
  selected?: boolean;
  name: string;
  value: string;
  className?: string;
};

export default (props: Props) => {
  const classes = [props.className];

  const [selected, setSelected] = useState(props.selected)

  return(
      <div>
          <label className={classes.join(' ')}>
              <input onClick={(e:any) => setSelected(e.target.checked)} 
              checked={selected} 
              name={props.name} type="radio" value={props.value} />
              {props.value}
          </label>
      </div>
  )
};
