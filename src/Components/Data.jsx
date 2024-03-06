import styles from "../styles/Data.module.css"
import {useRecoilValue, useSetRecoilState} from "recoil";
import {messagesAtom} from "../state/messages";
import React, {useEffect, useState} from "react";
import {ConfigProvider, Form, InputNumber, message} from "antd";
import {wsAPI} from "../helpers/const";
import OxygenConcSensors from "./Tables/OxygenConcSensors";
import DampersAirDucts from "./Tables/DampersAirDucts";

import {w3cwebsocket as W3CWebSocket} from "websocket";


function Data() {

    // const W3CWebSocket = require('websocket').w3cwebsocket;

    // const [ws, setWs] = useState(null)

    // let timeout = 200

    // useEffect(() => {
    //     if (!ws) {
    //         connect();
    //     }
    // }, [])


    // const connect = () => {
    //     let ws = new W3CWebSocket(`${wsAPI}/socket-server/`);
    //     let connectInterval;

    //     ws.onopen = () => {
    //         console.log("connected websocket main component");
    //         setWs(ws)
    //         timeout = 250;
    //         clearTimeout(connectInterval);
    //     };

    //     ws.onmessage = (event) => {
    //         if ('bbo1' in JSON.parse(event.data)) {
    //             setMessages((messages) => [messages[messages.length - 2], messages[messages.length - 1], JSON.parse(event.data)]);
    //         }

    //     };
    //     ws.onerror = (err) => {
    //         console.error(
    //             "Socket encountered error: ",
    //             err.message,
    //             "Closing socket"
    //         );

    //         ws.close();
    //         error()
    //         setMessages([])
    //     };

    //     ws.onclose = e => {
    //         console.log(
    //             `Socket is closed. Reconnect will be attempted in ${Math.min(
    //                 10000 / 1000,
    //                 (timeout + timeout) / 1000
    //             )} second.`,
    //             e.reason
    //         );

    //         timeout = timeout + timeout; //increment retry interval
    //         connectInterval = setTimeout(check, Math.min(10000, timeout)); //call check function after timeout
    //     };
    // };

    // const check = () => {
    //     if (!ws || ws.readyState === WebSocket.CLOSED) {
    //         connect()
    //     }
    // };

    const messages = useRecoilValue(messagesAtom);
    const setMessages = useSetRecoilState(messagesAtom);

    const [messageApi, contextHolder] = message.useMessage();
    const error = () => {
        messageApi.open({
            type: 'error',
            content: `Ошибка подключения к серверу ${wsAPI}/socket-server/`,
        });
    };

    return (
        <>
            {/*{contextHolder}*/}
            <div className={styles.container}>
                <h3 className={styles.title}>Главный экран</h3>

                
                <div className={styles.paramsContainer} style={{marginTop: 30}}>
                    <ConfigProvider theme={{
                        token: {
                            fontFamily: "Euclid Circular A",
                        }
                    }}>
                        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "45px"}}>
                            <DampersAirDucts/>
                            <OxygenConcSensors/>
                        </div>
                    </ConfigProvider>
                </div>
            </div>
        </>
    )
}

export default Data;
