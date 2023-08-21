import style from "./Icon.module.scss";
import "line-awesome/dist/line-awesome/css/line-awesome.min.css";
import colors from "../../styles/colors.module.scss";
import {colorEnum} from "../../styles/colors/colors";

export enum iconEnum {
  smile_Icon = "las la-smile",
  gem_Icon = "las la-gem",
  Check_Icon ="las la-check"
  user_Icon="las la-user-plus",
  circle_Icon ="las la-plus-circle",
  angle_left = "las la-angle-left",
  angle_right = "las la-angle-right",
  close_tag = "las la-times",
  user_Icon="las la-user-plus",
  circle_Icon ="las la-plus-circle"
  
}

type iconStructure = {
  icon: keyof typeof iconEnum;
  size: string | number;
  color?: keyof typeof colorEnum;
};

export default (props: iconStructure) => {

  return (
    <i
      className={iconEnum[props.icon]}
      style={{
        fontSize: `${props.size}px `,
        color: props.color && colorEnum[props.color],
      }}
    ></i>
  );
};
