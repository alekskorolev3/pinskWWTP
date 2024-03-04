import React, {useEffect, useState} from "react"

import styles from '../styles/Modules.module.css'
import {Button, ConfigProvider, DatePicker, Form, InputNumber, message, Modal, Select} from "antd";
import {useLabDataActions} from "../actions/lab.actions";
import {API} from "../helpers/const";
import locale from 'antd/es/date-picker/locale/ru_RU';
import 'dayjs/locale/ru';
import dayjs from "dayjs";
import useEventListener from "@use-it/event-listener";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { authAtom } from "../state/auth";

const LabData = () => {

    const labDataActions = useLabDataActions()

    const [messageApi, contextHolder] = message.useMessage();
    const successPost = () => {
        messageApi.open({
            type: 'success',
            content: `Данные успешно сохранены`,
        });
    };

    const errorGet = () => {
        messageApi.open({
            type: 'error',
            content: `Ошибка подключения к серверу ${API}/get_all_lab_value`,
        });
    };

    const errorPost = () => {
        messageApi.open({
            type: 'error',
            content: `Ошибка подключения к серверу ${API}/post_lab_value`,
        });
    };

    const handleForm = async () => {
        await labDataActions.postLabData({...tableValues, datetime: datetime})
            .then((data) => {
                if (data) {
                    setTableValues(prev => (data.data))
                    successPost()
                }
                else errorPost()
            })
            .catch(() => errorPost())
    }


    const [tableValues, setTableValues] = useState({
        bbo1: {
            doseFromWeight: 0,
            doseFromVolume: 0,
            oxygenModeNitrificationZone: 0,
            suspendSubstSourceWater: 0,
            suspendSubstAfterSettling: 0,
            suspendSubstInPurified: 0,
            xpkInputAero: 0,
            bpkInputOS: 0,
            bpkInputBbo: 0,
            bpkOutputBbo: 0,
            nitrogenAmmoniumInputBbo: 0,
            nitrogenAmmoniumOutputBbo: 0,
            nitrogenNitriteInputBbo: 0,
            nitrogenNitrateOutputBbo: 0,
            totalPhosphorusOutput: 0,
            organicNitrogenOutputBbo: 0,
            phSludge: 0,
            sludgeTemperature: 0,
        },
        bbo2: {
            doseFromWeight: 0,
            doseFromVolume: 0,
            oxygenModeNitrificationZone: 0,
            suspendSubstSourceWater: 0,
            suspendSubstAfterSettling: 0,
            suspendSubstInPurified: 0,
            xpkInputAero: 0,
            bpkInputOS: 0,
            bpkInputBbo: 0,
            bpkOutputBbo: 0,
            nitrogenAmmoniumInputBbo: 0,
            nitrogenAmmoniumOutputBbo: 0,
            nitrogenNitriteInputBbo: 0,
            nitrogenNitrateOutputBbo: 0,
            totalPhosphorusOutput: 0,
            organicNitrogenOutputBbo: 0,
            phSludge: 0,
            sludgeTemperature: 0,
        },
        bbo3: {
            doseFromWeight: 0,
            doseFromVolume: 0,
            oxygenModeNitrificationZone: 0,
            suspendSubstSourceWater: 0,
            suspendSubstAfterSettling: 0,
            suspendSubstInPurified: 0,
            xpkInputAero: 0,
            bpkInputOS: 0,
            bpkInputBbo: 0,
            bpkOutputBbo: 0,
            nitrogenAmmoniumInputBbo: 0,
            nitrogenAmmoniumOutputBbo: 0,
            nitrogenNitriteInputBbo: 0,
            nitrogenNitrateOutputBbo: 0,
            totalPhosphorusOutput: 0,
            organicNitrogenOutputBbo: 0,
            phSludge: 0,
            sludgeTemperature: 0,
        },
        bbo4: {
            doseFromWeight: 0,
            doseFromVolume: 0,
            oxygenModeNitrificationZone: 0,
            suspendSubstSourceWater: 0,
            suspendSubstAfterSettling: 0,
            suspendSubstInPurified: 0,
            xpkInputAero: 0,
            bpkInputOS: 0,
            bpkInputBbo: 0,
            bpkOutputBbo: 0,
            nitrogenAmmoniumInputBbo: 0,
            nitrogenAmmoniumOutputBbo: 0,
            nitrogenNitriteInputBbo: 0,
            nitrogenNitrateOutputBbo: 0,
            totalPhosphorusOutput: 0,
            organicNitrogenOutputBbo: 0,
            phSludge: 0,
            sludgeTemperature: 0,
        },
        bbo5: {
            doseFromWeight: 0,
            doseFromVolume: 0,
            oxygenModeNitrificationZone: 0,
            suspendSubstSourceWater: 0,
            suspendSubstAfterSettling: 0,
            suspendSubstInPurified: 0,
            xpkInputAero: 0,
            bpkInputOS: 0,
            bpkInputBbo: 0,
            bpkOutputBbo: 0,
            nitrogenAmmoniumInputBbo: 0,
            nitrogenAmmoniumOutputBbo: 0,
            nitrogenNitriteInputBbo: 0,
            nitrogenNitrateOutputBbo: 0,
            totalPhosphorusOutput: 0,
            organicNitrogenOutputBbo: 0,
            phSludge: 0,
            sludgeTemperature: 0,
        },
        bbo6: {
            doseFromWeight: 0,
            doseFromVolume: 0,
            oxygenModeNitrificationZone: 0,
            suspendSubstSourceWater: 0,
            suspendSubstAfterSettling: 0,
            suspendSubstInPurified: 0,
            xpkInputAero: 0,
            bpkInputOS: 0,
            bpkInputBbo: 0,
            bpkOutputBbo: 0,
            nitrogenAmmoniumInputBbo: 0,
            nitrogenAmmoniumOutputBbo: 0,
            nitrogenNitriteInputBbo: 0,
            nitrogenNitrateOutputBbo: 0,
            totalPhosphorusOutput: 0,
            organicNitrogenOutputBbo: 0,
            phSludge: 0,
            sludgeTemperature: 0,
        },
        bbo7: {
            doseFromWeight: 0,
            doseFromVolume: 0,
            oxygenModeNitrificationZone: 0,
            suspendSubstSourceWater: 0,
            suspendSubstAfterSettling: 0,
            suspendSubstInPurified: 0,
            xpkInputAero: 0,
            bpkInputOS: 0,
            bpkInputBbo: 0,
            bpkOutputBbo: 0,
            nitrogenAmmoniumInputBbo: 0,
            nitrogenAmmoniumOutputBbo: 0,
            nitrogenNitriteInputBbo: 0,
            nitrogenNitrateOutputBbo: 0,
            totalPhosphorusOutput: 0,
            organicNitrogenOutputBbo: 0,
            phSludge: 0,
            sludgeTemperature: 0,
        },
        bbo8: {
            doseFromWeight: 0,
            doseFromVolume: 0,
            oxygenModeNitrificationZone: 0,
            suspendSubstSourceWater: 0,
            suspendSubstAfterSettling: 0,
            suspendSubstInPurified: 0,
            xpkInputAero: 0,
            bpkInputOS: 0,
            bpkInputBbo: 0,
            bpkOutputBbo: 0,
            nitrogenAmmoniumInputBbo: 0,
            nitrogenAmmoniumOutputBbo: 0,
            nitrogenNitriteInputBbo: 0,
            nitrogenNitrateOutputBbo: 0,
            totalPhosphorusOutput: 0,
            organicNitrogenOutputBbo: 0,
            phSludge: 0,
            sludgeTemperature: 0,
        }
    })
    const [datetime, setDatetime] = useState(null)
    const [prevDatetime, setPrevDatetime] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [currentFocus, setCurrentFocus] = useState(0)

    useEffect(() => {
        labDataActions.getAllParams()
            .then((data) => {
                if (data) {
                    setTableValues(prev => (data.data))
                    setPrevDatetime(data.datetime)
                }
                else errorGet()
            })
            .catch(() => errorGet())
    }, []);

    const onChange = (_, dateStr) => {
        setDatetime(dateStr)
    };


    const ESCAPE_KEYS = ['13', 'Enter'];

    function handler({ key }) {
        if (ESCAPE_KEYS.includes(String(key))) {
            if (currentFocus === 191) {
                const element = document.getElementById(0);
                element.focus()
                element.select()
                setCurrentFocus(0)
                return
            }
            else if (currentFocus + 8 > 191){
                const element = document.getElementById(`${(currentFocus + 8) % 191}`);
                element.focus()
                element.select()
                setCurrentFocus(prev => (prev + 8) % 191)
            }
            else {
                const element = document.getElementById(`${currentFocus + 8}`);
                element.focus()
                element.select()
                setCurrentFocus(prev => prev + 8)
            }

        }
    }

    useEventListener('keydown', handler);

    const bbosName = ['ББО 1', 'ББО 2', 'ББО 3', 'ББО 4' , 'ББО 5', 'ББО 6' ,'ББО 7', 'ББО 8']
    const paramsName = [
        {key: 'doseFromWeight',  name : 'Доза ила по массе в аэротенке, г/л'},
        {key: 'doseFromVolume',  name : 'Доза ила по объему, см³/л'},
        {key: 'oxygenModeNitrificationZone',  name : 'Кислородный режим в зоне нитрификации Биоблока О, мг/л'},
        {key: 'suspendSubstSourceWater',  name : 'Содержание взвешенных веществ в исходной воде, мг/л'},
        {key: 'suspendSubstAfterSettling',  name : 'Содержание взвешенных веществ после первичных отстойников, мг/л'},
        {key: 'suspendSubstInPurified',  name : 'Содержание взвешенных веществ в очищенной воде, мг/л'},
        {key: 'xpkInputAero',  name : 'Химическое потребление кислорода на в/о - ХПК, мг/л'},
        {key: 'bpkInputOS',  name : 'Биохимическое потребление кислорода (5сут) на входе ОС, мг/л'},
        {key: 'bpkInputBbo',  name : 'Биохимическое потребление кислорода (5сут) после п/о, мг/л'},
        {key: 'bpkOutputBbo',  name : 'Биохимическое потребление кислорода (5 сут) после в/о, мг/л'},
        {key: 'nitrogenAmmoniumInputBbo',  name : 'Азот аммонийный после п/о, мг/л'},
        {key: 'nitrogenAmmoniumOutputBbo',  name : 'Азот аммонийный после в/о, мг/л'},
        {key: 'nitrogenNitriteInputBbo',  name : 'Азот нитритов после п/о, мг/л'},
        {key: 'nitrogenNitrateOutputBbo',  name : 'Азот нитратов после в/о, мг/л'},
        {key: 'totalPhosphorusOutput',  name : 'Общий фосфор после первичных отстойников, мг/л'},
        {key: 'organicNitrogenOutputBbo',  name : 'Органический азот после в/о, мг/л'},
        {key: 'phSludge',  name : 'рН иловой смеси в Биоблоке'},
        {key: 'sludgeTemperature',  name : 'Температура иловой смеси в Биоблоке , °С'},
    ]

    const auth = useRecoilValue(authAtom)

    useEffect(() => {
        console.log(auth)
    }, [])

    const [dateTableSave, setDateTableSave] = useState([
        {id:1, value: '04.03.2024', label: '04.03.2024'}
    ])


    return (
        <>
            {contextHolder}
            <ConfigProvider theme={{
                token: {
                    fontFamily: "Euclid Circular A",
                }
            }}>
                <Form className={styles.form}>
                    <div className={styles.container}>
                        <Select defaultValue={dateTableSave[0]?.value} options={dateTableSave}/>
                        <div className={styles.tableContainer}>
                            <table className={styles.table} style={{borderBottom: '0'}}>
                                <tr>
                                    <th colSpan={10}>Пинск ОС – Лабораторные данные. Данные от {prevDatetime}</th>
                                </tr>
                                <tr>
                                    <th>Параметр</th>
                                    {bbosName.map((bboName, bboID) => 
                                        <th key={bboID}>{bboName}</th>
                                    )}
                                </tr>
                                {paramsName.map((param, paramID) => 
                                    <tr key={paramID}>
                                        <td>{param.name}</td>
                                        {bbosName.map((bboName, bboID) =>
                                             <td key={bboID}>
                                                <InputNumber
                                                    disabled={(param.key === 'bpkInputOS' || param.key === 'suspendSubstSourceWater') && bboID > 0 ? true: false}
                                                    autoFocus={paramID * 8 + bboID === 0}
                                                    id={`${paramID * 8 + bboID}`}
                                                    value={(param.key === 'bpkInputOS' || param.key === 'suspendSubstSourceWater') ? tableValues.bbo1[param.key] : tableValues[`bbo${bboID + 1}`][param.key]}
                                                    variant={paramID * 8 + bboID === currentFocus ? '' : 'borderless'} min={0}
                                                    onChange={(e) => setTableValues(prev => ({
                                                        ...prev,
                                                        [`bbo${bboID + 1}`]: {
                                                            ...prev[`bbo${bboID + 1}`],
                                                            [param.key]: e
                                                        }
                                                    }))}
                                                    onClick={() => setCurrentFocus(paramID * 8 + bboID)}
                                                />
                                            </td>
                                        )}
                                    </tr>
                                )}
                            </table>

                            <div style={{display: "flex", flexDirection: "row", gap: "8px", alignItems: "center", marginTop: "12px"}}>
                                <span>Время отбора проб: </span>
                                <DatePicker
                                    defaultValue={dayjs()}
                                    format='DD.MM.YYYY HH:mm:ss'
                                    showTime
                                    locale={locale}
                                    onChange={onChange}
                                    style={{maxWidth: '200px'}}
                                />
                            </div>

                            <Button type="primary" onClick={() => setIsModalOpen(true)} style={{backgroundColor: "#00A3E7", fontWeight: 500, maxWidth: "fit-content", marginTop: "12px"}}>
                                Сохранить
                            </Button>
                        </div>
                    </div>
                </Form>
            </ConfigProvider>
            <Modal title="Подтверждение операции"
                   open={isModalOpen}
                   onOk={() => {
                       setIsModalOpen(false)
                       handleForm()
                   }}
                   onCancel={() => setIsModalOpen(false)}
                   cancelText="Отмена"
                   okText="Подтвердить"
            >
                <p>Вы уверены в добавлении лабораторных данных?</p>
            </Modal>
        </>
    )
}

export default LabData
