import {StatusBox } from "./types"
import styles from './box.module.scss'
import classNames from "classnames/bind";



interface BoxProps{
    value: string;
    status:StatusBox;
    animate?: boolean;
  pos?: number;
}

const classes = classNames.bind(styles)

export default function Box({
    value = "",
    status,
    animate = false,
    pos,
  }: BoxProps){

    const statusBox= classes({
        notPresentLetter: status==="notPresentLetter",
        presentLetter:status==="presentLetter",
        correctLetter: status==="correctLetter",
        empty: status==="empty",
        edit:status==="edit",
    }) 

    return <div className={statusBox}>{value}</div>
}
