import React from "react";
import styles from "./Header.module.css";
// import '../../App.css';
import { useState } from "react";

function Header() {
    // Toggle menu -------->


    const[Toggle, showMenu] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <a href="#" className={styles.nav_logo}>
          Basit
        </a>

        <div className={`${styles.nav_menu} ${Toggle ? styles.show_menu : ""}`}>




          <ul className={`${styles.nav_list} grid`}>
            <li className={styles.nav_item}> 

            <a href="#" className={`${styles.nav_link} ${styles.active_link}`} >
                    
                    <i className= {`uil uil-estate ${styles.nav_icon}`}></i>
                    Home
                </a>

            </li>
            <li className={styles.nav_item}> 

                <a href="#" className={styles.nav_link}>
                    
                    <i className= {`uil uil-user ${styles.nav_icon}`}></i>
                    About
                </a>

            </li>
            <li className={styles.nav_item}> 

                <a href="#" className={styles.nav_link}>
                    
                    <i className= {`uil uil-file-alt ${styles.nav_icon}`}></i>
                    Skills
                </a>

            </li>
            <li className={styles.nav_item}> 

                <a href="#" className={styles.nav_link}>
                    
                    <i className= {`uil uil-briefcase-alt ${styles.nav_icon}`}></i>
                    Services

                </a>

            </li>
            <li className={styles.nav_item}> 

                <a href="#" className={styles.nav_link} >
                    
                    <i className= {`uil uil-scenery ${styles.nav_icon}`}></i>
                    Portfolio
                </a>

            </li>
            <li className={styles.nav_item}> 

                <a href="#" className={styles.nav_link}>
                    <i className= {`uil uil-message ${styles.nav_icon}`}></i>
                    Contact
                </a>

            </li>
          </ul>

          
          <i className= {`uil uil-times ${styles.nav_close}`}
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className={styles.nav_toggle} onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
