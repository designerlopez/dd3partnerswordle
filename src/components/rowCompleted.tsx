import Box from "./box"
import { StatusBox } from "./types";
import styles from "./row.module.scss";

interface RowCompletedProps{
    word: string;
    solution: string;
}

export default function RowCompleted({word, solution }:RowCompletedProps){
    const arr = Array.from(Array(5));

    function checkLetter(letter: string, pos:number):StatusBox{
        if(solution.includes(letter)){
            if(solution[pos]===letter){
           
                return "correctLetter"
            }else{
             
                return "presentLetter"
            }
        }else{
            return "notPresentLetter"
        }
    }



    return <div className={styles.row}>
        {arr.map((_,i)=>(
            <Box
            key={i}
            value={word[i]}
            status={checkLetter(word[i], i)}
          
            pos={i}
          />

        ))
           
        }
    </div>

}