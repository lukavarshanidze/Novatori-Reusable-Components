'use client'
import { ReactNode } from "react"
import { RecoilRoot } from "recoil"
import '../Language/i18n';


export default (props:{children: ReactNode}) => {
    return(
        <RecoilRoot>
            {props.children}
        </RecoilRoot>
    )
}