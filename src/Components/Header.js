import React from 'react'
import styles from "../styles/Header.module.css"


const Header = () => {

    return (
        <>
            <header className={styles.header}>

                <img src="/menu-open.svg" alt="menu-open" className={styles.menuIcon}/>

                <span className={styles.title}>Помощник оператора AMIS-WWTP</span>

                <div className={styles.logoWrapper}>
                    <img src="/amisit_logo.svg" alt="logo1"/>
                </div>
            </header>
        </>
    )

}

export default Header;
