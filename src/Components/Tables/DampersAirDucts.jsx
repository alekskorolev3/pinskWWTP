import React, {useEffect, useState} from 'react'
import styles from '../../styles/OxygenConcSensors.module.css'
import {Badge, Table} from "antd";
import {useRecoilValue} from "recoil";
import {messagesAtom} from "../../state/messages";

const DampersAirDucts = () => {

    const [initialData, setInitialData] = useState([])

    useEffect(() => {
        setInitialData(convertToTable([...messages].pop()))
    }, [])

    const messages = useRecoilValue(messagesAtom);

    const convertToTable = (data) => {
        const countBBO = 8
        const result = []
        for (let i = 0; i < countBBO; i++) {
            result.push({
                key: i + 1,
                number: i + 1,
                currPos: '45',
                regFreq: '5.0',
                shutPitch: '5.0',
                minOpen: '20',
                maxOpen: '90',
                enabled: '1'
            })
        }
        
        return result
    }

    const defaultColumns = [
        {
            title: '№ ББО',
            dataIndex: 'number',
            key: 'number',
        },
        {
            title: 'Текущ. положение, %',
            dataIndex: 'currPos',
            key: 'currPos',
        },
        {
            key: 'regFreq',
            title: 'Частота регулирования, мин',
            dataIndex: 'regFreq',
        },
        {
            key: 'shutPitch',
            title: 'Шаг затвора, %',
            dataIndex: 'shutPitch',
        },
        {
            key: 'minOpen',
            title: 'Мин. открытие, %',
            dataIndex: 'minOpen',
        },
        {
            key: 'maxOpen',
            title: 'Макс. открытие, %',
            dataIndex: 'maxOpen',
        },
        {
            key: 'enabled',
            title: 'Вкл. в упр.',
            dataIndex: 'enabled',
            render: (value) => {
                if (value === '1') return <Badge status="success" text="Вкл" />
                else return <Badge status="error" text="Выкл" />
            }
        }
    ]

    return (
        <div className={styles.oxygenConcSensorsContainer}>
            <div style={{display: "flex", width: "100%", justifyContent: "space-between"}}>
                <h3 className={styles.title}>Затворы на воздуховодах</h3>
                <span style={{display: "flex", alignItems: "center", gap: "5px"}}>
                    <img src="/dateIcon.svg" alt="dateIcon" style={{width: "20px"}}/>
                    <span
                        style={{fontSize: "12px"}}
                    >{!(messages.length !== 0 && [...messages].pop()?.status !== "connected") ? 'Подключение' : [...messages].pop()?.bbo1[0]?.time}</span>
                </span>
            </div>

            <Table
                style={{width: "100%"}}
                size='small'
                loading={!(messages.length !== 0 && [...messages].pop()?.status !== "connected")}
                columns={defaultColumns}
                dataSource={initialData} bordered pagination={false}/>
        </div>
    )
}

export default DampersAirDucts
