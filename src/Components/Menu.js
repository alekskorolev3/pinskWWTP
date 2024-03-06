import React, {useEffect, useState} from 'react'
import styles from "../styles/Menu.module.css"
import {NavLink} from "react-router-dom";

const Menu = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        let timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }

    });

    return (
        <section className={styles.menu}>
            <div className={styles.menuContainer}>
                <div className={styles.menuItem + " " + styles.nohover} style={{height: "60px"}}>
                    <span className={styles.menuText}>{date.toLocaleDateString()}</span>
                    <span className={styles.menuText}>{date.toLocaleTimeString()}</span>
                </div>

                <ul className={styles.menuWrapper}>
                    <NavLink to="/data" className={({isActive}) =>
                        isActive ? styles.active : ""
                    }>
                        <li className={styles.menuItem}>
                            <img src="/setting-4.svg" alt="setting"/>
                            <span className={styles.menuText}>Главная</span>
                        </li>
                    </NavLink>
                    <NavLink to="/labData" className={({isActive}) =>
                        isActive ? styles.active : ""
                    }>
                        <li className={styles.menuItem}>
                            <img src="/setting-4.svg" alt="setting"/>
                            <span className={styles.menuText}>Лабораторные данные</span>
                        </li>
                    </NavLink>
                    <NavLink to="/labDataOC" className={({isActive}) =>
                        isActive ? styles.active : ""
                    }>
                        <li className={styles.menuItem}>
                            <img src="/setting-4.svg" alt="setting"/>
                            <span className={styles.menuText}>Лабораторные данные OC</span>
                        </li>
                    </NavLink>
                </ul>
            </div>
        </section>
    )
}

export default Menu
