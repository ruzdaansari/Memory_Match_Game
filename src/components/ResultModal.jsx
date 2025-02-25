import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styles from './ResultModal.module.css';


export default function ResultModal({showDialog,onClose,...props}){

    const dialogRef = useRef();
    useEffect(()=>{
        const modal = dialogRef.current
        if(showDialog){
            modal.showModal();
        }

        return ()=>modal.close()
    },[showDialog])
    return(
        createPortal(<dialog className={styles.modal} ref={dialogRef} onClose={onClose}>
            <h1>You have won the Game</h1>
            <p>to play again please close the winner popup</p>
            <p>
                <button className={`${styles.button}`} onClick={onClose}>Close</button>
            </p>
        </dialog>,document.getElementById("modal"))
        
    )
}