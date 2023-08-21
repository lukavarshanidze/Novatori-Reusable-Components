import React from 'react';
import styles from './Pagination.module.scss';
import Icon from '../Icon/Icon';
import { useState } from 'react';
import { SERVER_PROPS_ID } from 'next/dist/shared/lib/constants';



type Props = {
    className?: string;
    currentPage: number;
    total: number;
    onChange?: (page : number) => void;
    variant?: "Basic" | "Mini" | "Full";
}


export default (props: Props) => {

    const classes = [styles.wrapper, props.className]
    if(props.variant == 'Basic') classes.push(styles.Basic)
    else if(props.variant == 'Mini') classes.push(styles.Mini)
    else classes.push(styles.Full)

    const per_page = 10;
    const total_pages: number = props.total / per_page;

    const [ selectedPage , setSelectedPage ] = useState(props.currentPage)

    const handlePages = ()  => {
        const array: any[] = [];
    

    for(let i : number = 0; i < total_pages; i++){
        array.push(i + 1);
    }

    return array;
    
};
 
    return (
        <div className={classes.join(' ').trim()}>
            <div className={styles.Basicwrapper}>
                <div className = {styles.icon1 } onClick={() => {
                    const p: number = selectedPage === 1 ? selectedPage : selectedPage - 1;
                    setSelectedPage(p);
                    typeof props.onChange !== 'undefined' && props.onChange(p)
                }}>
                    <Icon icon='angle_left' size='20' color='secondaryTextColor'/>
                    {props.variant == "Full" && <span><b>PREV</b></span> }
                </div>    
                {props.variant == "Basic" && <span>Prev</span>}
            </div>


        {
            handlePages().map((element: number, idx : number) => {
                return <div 
                key = {idx}               
                className={`${styles.active} ${props.variant === 'Full' ? styles.customFull : ''} 
                ${props.variant == 'Full' && element == selectedPage ? styles.fullActive : ''} 
                ${props.variant == 'Mini' && element == selectedPage ? styles.miniActive : ''}
                ${props.variant == 'Basic' && element == selectedPage ? styles.basicActive : ''}`}
                onClick={() => {
                    setSelectedPage(element);
                    typeof props.onChange !== 'undefined' && props.onChange(element)
                }}
                > 
                    {element} 
                </div>;
            }
            )
        }

            <div className={styles.wrapper}>
                {props.variant == "Basic" && <span>Next</span>}
                <div className = {styles.icon2} onClick={() => {
                    const p : number = selectedPage === total_pages ? total_pages : selectedPage + 1;
                    setSelectedPage(p);
                    typeof props.onChange !== 'undefined' && props.onChange(p)
                }}>
                    {props.variant == "Full" && <span><b>NEXT</b></span>}
                    <Icon icon='angle_right' size='20' color='secondaryTextColor'/>
                </div>

            </div>
        </div>
    );
};