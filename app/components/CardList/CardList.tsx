import React from "react";
import styles from './CardList.module.scss';
import VerticalCard from "../verticalCard/verticalCard";

type Props = {
    title: string;
    cardType: 'round' | 'vertical';
    onShowAll: () => {};
    //list: VerticalCardProps & RoundCardProps[]
}

export default (props: Props) => {
 
}