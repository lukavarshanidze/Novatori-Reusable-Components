import { useState } from 'react';
import styles from './Pagination.module.scss';
//import Icon from '../Icon';

//

type Props = {
    currentPage?: number;
    total: number;
    onChange?: (page : number) => void
    variant?: "Basic" | "Mini" | "Full";
}


export default (props: Props) => {

    const per_page = 10;
    const total_pages: number = props.total / 10;

    const [selectedPage , setSelectedPage ] = useState(props.currentPage)

    const handlePages = ()  => {
        const array: any[] = [];
    

    for(let i : number = 0; i < total_pages; i++){
        array.push(i + 1);
    }

    return array;
};

    return (

        <div className={styles.wrapper}>

            <div onClick={() => {
                const p = selectedPage === 1 ? selectedPage : setSelectedPage - 1
                setSelectedPage(selectedPage === 1 ? selectedPage : setSelectedPage - 1);
                setSelectedPage(p);
                typeof props.onChange !== 'undefined' && props.onChange(p)
            }}>
                <Icon icon='smile_Icon' size='500' color='primaryColor'/>
            </div>


        {
            handlePages().map((element: number, idx : number) => {
                return <div 
                key = {idx}               
                className={selectedPage === element ? styles.active : ''}
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
            
            <div onClick={() => {
                const p = selectedPage === total_pages ? total_pages : selectedPage + 1
                setSelectedPage(p);
                typeof props.onChange !== 'undefined' && props.onChange(p)
            }}>
                <Icon icon='smile_Icon' size='500' color='primaryColor'/>
            </div>


        </div>
    );
};

