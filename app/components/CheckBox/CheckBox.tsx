import { useState } from "react";
import styles from "./CheckBox.module.scss"
import Icon from "../Icon/Icon";
import classNames from "classnames";

type CheckBoxProps = {
    label?: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    validationState?: "success" | "error" | null;
    disabled?:boolean;
  };

export default (props:CheckBoxProps) => {

    const[isChecked, setIsChecked] = useState(props.checked)
    
    const onChange = (e:any) => {
        setIsChecked(e.target.checked)
        props.onChange && props.onChange(e.target.checked);

    }

return(
        <div>
           <label style={{color: props.disabled && isChecked ? "#1C1D21" : "#1C1D2119"}}>
            {props.label} 
            <input disabled ={props.disabled} className={styles.customCheckbox} type="checkbox" onChange={onChange} checked={isChecked}/>
            </label>
        </div>
    )

    
}
