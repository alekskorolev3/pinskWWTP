import React, {useEffect, useState} from 'react'
import styles from '../../styles/OxygenConcSensors.module.css'
import {Badge, Table} from "antd";
import {useRecoilValue} from "recoil";
import {messagesAtom} from "../../state/messages";

const OxygenConcSensors = () => {

    const [initialData, setInitialData] = useState([])

    useEffect(() => {
        setInitialData(convertToTable([...messages].pop()))
    }, [])

    const messages = useRecoilValue(messagesAtom);

    const convertToTable = (data) => {
        const countBBO = 8
        const bbos = []
        for (let i = 0; i < countBBO; i++) {
            let bbo = {
                key: i + 1,
                number: i + 1,
                inputVal: 0,
                tolerance: 0,
                coefficient: 0,
                min: 0,
                max: 0
            }

            data?.[`bbo${i + 1}`]?.map(obj => {
                if (obj.name === 'oxygen') {
                    bbo.currValue = obj.value.toFixed(1)
                    bbo.enabled = (obj.is_ready | 0).toString()
                }
            })
            bbos.push(bbo)
        }

        return bbos
    }

    const defaultColumns = [
        {
            title: '№ ББО',
            dataIndex: 'number',
            key: 'number',
        },
        {
            title: 'Текущ. знач., мг/дм³',
            dataIndex: 'currValue',
            key: 'currValue',
        },
        {
            key: 'inputVal',
            title: 'Заданн. знач., мг/дм³',
            dataIndex: 'inputVal',
        },
        {
            key: 'tolerance',
            title: 'Допуст. откл.',
            dataIndex: 'tolerance',
        },
        {
            key: 'coefficient',
            title: 'Коэфф. значимости',
            dataIndex: 'coefficient',
        },
        {
            key: 'min',
            title: 'Мин. предел',
            dataIndex: 'min',
        },
        {
            key: 'max',
            title: 'Макс. предел',
            dataIndex: 'max',
        },
        {
            key: 'enabled',
            title: 'Вкл. в управл.',
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
                <h3 className={styles.title}>Датчики концентрации кислорода</h3>
                <span style={{display: "flex", alignItems: "center", gap: "5px"}}>
                    <img src="/dateIcon.svg" alt="dateIcon" style={{width: "20px"}}/>
                    <span
                        style={{fontSize: "12px"}}
                    >{!(messages.length !== 0 && [...messages].pop()?.status !== "connected") ? 'Подключение' : [...messages].pop()?.bbo1[0]?.time}</span>
                </span>
            </div>
            <Table
                style={{width: "100%"}}
                loading={!(messages.length !== 0 && [...messages].pop()?.status !== "connected")}
                size='small'
                columns={defaultColumns}
                dataSource={initialData} bordered pagination={false}/>
        </div>
    )
}

export default OxygenConcSensors
