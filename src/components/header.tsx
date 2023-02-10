import styles from "./header.module.scss";
import { InfoModal } from "../components/infomodal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


export default function Header() {
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  return (
    <>
      
    <div className="text-black dark:text-white bg-white dark:bg-gray-900 transition-all">
      <div className="py-8 max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="flex w-80 mx-auto items-center mb-8">
          <div className={styles.header}>
            <h1 className={styles.header}>Wordle Edgar</h1>
            <button className={styles.header}
            onClick={() => setIsInfoModalOpen(true)}>info</button> 
            
            
          </div>
          
        </div>
        
       
        
      </div>
    </div>
  
    </>
  );
}
