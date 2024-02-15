import React, {useEffect, useState} from "react"

import styles from '../styles/Modules.module.css'
import {Button, ConfigProvider, DatePicker, Form, InputNumber, message, Modal} from "antd";
import {useLabDataActions} from "../actions/lab.actions";
import {API} from "../helpers/const";
import locale from 'antd/es/date-picker/locale/ru_RU';
import 'dayjs/locale/ru';
import dayjs from "dayjs";

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
            ashPercent: 0,
            suspendSubstSourceWater: 0,
            suspendSubstAfterSettling: 0,
            suspendSubstInPurified: 0,
            concentrationExcessActive: 0,
            xpkInputAero: 0,
            bpkInputOS: 0,
            bpkInputBbo: 0,
            bpkOutputBbo: 0,
            nitrogenAmmoniumInputBbo: 0,
            nitrogenAmmoniumOutputBbo: 0,
            nitrogenNitriteInputBbo: 0,
            nitrogenNitriteOutputBbo: 0,
            nitrogenNitrateInputBbo: 0,
            nitrogenNitrateOutputBbo: 0,
            totalNitrogenInputBO: 0,
            organicNitrogenOutputBbo: 0,
            totalPhosphorusOutput: 0,
            totalPhosphorusOutputBO: 0,
            phSludge: 0,
            sludgeTemperature: 0,
            oxygenModeNitrificationZone: 0
        },
        bbo2: {
            doseFromWeight: 0,
            doseFromVolume: 0,
            ashPercent: 0,
            suspendSubstSourceWater: 0,
            suspendSubstAfterSettling: 0,
            suspendSubstInPurified: 0,
            concentrationExcessActive: 0,
            xpkInputAero: 0,
            bpkInputOS: 0,
            bpkInputBbo: 0,
            bpkOutputBbo: 0,
            nitrogenAmmoniumInputBbo: 0,
            nitrogenAmmoniumOutputBbo: 0,
            nitrogenNitriteInputBbo: 0,
            nitrogenNitriteOutputBbo: 0,
            nitrogenNitrateInputBbo: 0,
            nitrogenNitrateOutputBbo: 0,
            totalNitrogenInputBO: 0,
            organicNitrogenOutputBbo: 0,
            totalPhosphorusOutput: 0,
            totalPhosphorusOutputBO: 0,
            phSludge: 0,
            sludgeTemperature: 0,
            oxygenModeNitrificationZone: 0
        },
        bbo3: {
            doseFromWeight: 0,
            doseFromVolume: 0,
            ashPercent: 0,
            suspendSubstSourceWater: 0,
            suspendSubstAfterSettling: 0,
            suspendSubstInPurified: 0,
            concentrationExcessActive: 0,
            xpkInputAero: 0,
            bpkInputOS: 0,
            bpkInputBbo: 0,
            bpkOutputBbo: 0,
            nitrogenAmmoniumInputBbo: 0,
            nitrogenAmmoniumOutputBbo: 0,
            nitrogenNitriteInputBbo: 0,
            nitrogenNitriteOutputBbo: 0,
            nitrogenNitrateInputBbo: 0,
            nitrogenNitrateOutputBbo: 0,
            totalNitrogenInputBO: 0,
            organicNitrogenOutputBbo: 0,
            totalPhosphorusOutput: 0,
            totalPhosphorusOutputBO: 0,
            phSludge: 0,
            sludgeTemperature: 0,
            oxygenModeNitrificationZone: 0
        },
        bbo4: {
            doseFromWeight: 0,
            doseFromVolume: 0,
            ashPercent: 0,
            suspendSubstSourceWater: 0,
            suspendSubstAfterSettling: 0,
            suspendSubstInPurified: 0,
            concentrationExcessActive: 0,
            xpkInputAero: 0,
            bpkInputOS: 0,
            bpkInputBbo: 0,
            bpkOutputBbo: 0,
            nitrogenAmmoniumInputBbo: 0,
            nitrogenAmmoniumOutputBbo: 0,
            nitrogenNitriteInputBbo: 0,
            nitrogenNitriteOutputBbo: 0,
            nitrogenNitrateInputBbo: 0,
            nitrogenNitrateOutputBbo: 0,
            totalNitrogenInputBO: 0,
            organicNitrogenOutputBbo: 0,
            totalPhosphorusOutput: 0,
            totalPhosphorusOutputBO: 0,
            phSludge: 0,
            sludgeTemperature: 0,
            oxygenModeNitrificationZone: 0
        },
        bbo5: {
            doseFromWeight: 0,
            doseFromVolume: 0,
            ashPercent: 0,
            suspendSubstSourceWater: 0,
            suspendSubstAfterSettling: 0,
            suspendSubstInPurified: 0,
            concentrationExcessActive: 0,
            xpkInputAero: 0,
            bpkInputOS: 0,
            bpkInputBbo: 0,
            bpkOutputBbo: 0,
            nitrogenAmmoniumInputBbo: 0,
            nitrogenAmmoniumOutputBbo: 0,
            nitrogenNitriteInputBbo: 0,
            nitrogenNitriteOutputBbo: 0,
            nitrogenNitrateInputBbo: 0,
            nitrogenNitrateOutputBbo: 0,
            totalNitrogenInputBO: 0,
            organicNitrogenOutputBbo: 0,
            totalPhosphorusOutput: 0,
            totalPhosphorusOutputBO: 0,
            phSludge: 0,
            sludgeTemperature: 0,
            oxygenModeNitrificationZone: 0
        },
        bbo6: {
            doseFromWeight: 0,
            doseFromVolume: 0,
            ashPercent: 0,
            suspendSubstSourceWater: 0,
            suspendSubstAfterSettling: 0,
            suspendSubstInPurified: 0,
            concentrationExcessActive: 0,
            xpkInputAero: 0,
            bpkInputOS: 0,
            bpkInputBbo: 0,
            bpkOutputBbo: 0,
            nitrogenAmmoniumInputBbo: 0,
            nitrogenAmmoniumOutputBbo: 0,
            nitrogenNitriteInputBbo: 0,
            nitrogenNitriteOutputBbo: 0,
            nitrogenNitrateInputBbo: 0,
            nitrogenNitrateOutputBbo: 0,
            totalNitrogenInputBO: 0,
            organicNitrogenOutputBbo: 0,
            totalPhosphorusOutput: 0,
            totalPhosphorusOutputBO: 0,
            phSludge: 0,
            sludgeTemperature: 0,
            oxygenModeNitrificationZone: 0
        },
        bbo7: {
            doseFromWeight: 0,
            doseFromVolume: 0,
            ashPercent: 0,
            suspendSubstSourceWater: 0,
            suspendSubstAfterSettling: 0,
            suspendSubstInPurified: 0,
            concentrationExcessActive: 0,
            xpkInputAero: 0,
            bpkInputOS: 0,
            bpkInputBbo: 0,
            bpkOutputBbo: 0,
            nitrogenAmmoniumInputBbo: 0,
            nitrogenAmmoniumOutputBbo: 0,
            nitrogenNitriteInputBbo: 0,
            nitrogenNitriteOutputBbo: 0,
            nitrogenNitrateInputBbo: 0,
            nitrogenNitrateOutputBbo: 0,
            totalNitrogenInputBO: 0,
            organicNitrogenOutputBbo: 0,
            totalPhosphorusOutput: 0,
            totalPhosphorusOutputBO: 0,
            phSludge: 0,
            sludgeTemperature: 0,
            oxygenModeNitrificationZone: 0
        },
        bbo8: {
            doseFromWeight: 0,
            doseFromVolume: 0,
            ashPercent: 0,
            suspendSubstSourceWater: 0,
            suspendSubstAfterSettling: 0,
            suspendSubstInPurified: 0,
            concentrationExcessActive: 0,
            xpkInputAero: 0,
            bpkInputOS: 0,
            bpkInputBbo: 0,
            bpkOutputBbo: 0,
            nitrogenAmmoniumInputBbo: 0,
            nitrogenAmmoniumOutputBbo: 0,
            nitrogenNitriteInputBbo: 0,
            nitrogenNitriteOutputBbo: 0,
            nitrogenNitrateInputBbo: 0,
            nitrogenNitrateOutputBbo: 0,
            totalNitrogenInputBO: 0,
            organicNitrogenOutputBbo: 0,
            totalPhosphorusOutput: 0,
            totalPhosphorusOutputBO: 0,
            phSludge: 0,
            sludgeTemperature: 0,
            oxygenModeNitrificationZone: 0
        }
    })
    const [datetime, setDatetime] = useState(null)
    const [prevDatetime, setPrevDatetime] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false);

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



    const bbosName = ['ББО 1', 'ББО 2', 'ББО 3', 'ББО 4' , 'ББО 5', 'ББО 6' ,'ББО 7', 'ББО 8', 'Усредненное']
    const paramsName = [
        {key: 'doseFromWeight',  name : 'Доза ила по массе в аэротенке, г/дм³'},
        {key: 'doseFromVolume',  name : 'Доза ила по объему, см³/дм³'},
        {key: 'ashPercent',  name : 'Зольность ила, %'},
        {key: 'suspendSubstSourceWater',  name : 'Содержание взвешенных веществ в исходной воде, мг/дм³'},
        {key: 'suspendSubstAfterSettling',  name : 'Содержание взвешенных веществ после первичных отстойников, мг/дм³'},
        {key: 'suspendSubstInPurified',  name : 'Содержание взвешенных веществ в очищенной воде, мг/дм³'},
        {key: 'concentrationExcessActive',  name : 'Концентрация избыточного активного ила, г/дм³'},
        {key: 'xpkInputAero',  name : 'Химическое потребление кислорода на входе Аэротенка - ХПК, мг/дм³'},
        {key: 'bpkInputOS',  name : 'Биохимическое потребление кислорода (5сут) на входе ОС, мг/дм³'},
        {key: 'bpkInputBbo',  name : 'Биохимическое потребление кислорода (5сут) на входе Биоблока, мг/дм³'},
        {key: 'bpkOutputBbo',  name : 'Биохимическое потребление кислорода (5 сут) на выходе Биоблока, мг/дм³'},
        {key: 'nitrogenAmmoniumInputBbo',  name : 'Азот аммонийный на входе Биоблока, мг/дм³'},
        {key: 'nitrogenAmmoniumOutputBbo',  name : 'Азот аммонийный на выходе Биоблока, мг/дм³'},
        {key: 'nitrogenNitriteInputBbo',  name : 'Азот нитритов на входе Биоблока, мг/дм³'},
        {key: 'nitrogenNitriteOutputBbo',  name : 'Азот нитритов на выходе Биоблока, мг/дм³'},
        {key: 'nitrogenNitrateInputBbo',  name : 'Азот нитратов на входе Биоблока, мг/дм³'},
        {key: 'nitrogenNitrateOutputBbo',  name : 'Азот нитратов на выходе Биоблока, мг/дм³'},
        {key: 'totalNitrogenInputBO',  name : 'Общий азот на участок БО, мг/дм³'},
        {key: 'organicNitrogenOutputBbo',  name : 'Органический азот на выходе Биоблока, мг/дм³'},
        {key: 'totalPhosphorusOutput',  name : 'Общий фосфор после первичных отстойников, мг/дм³'},
        {key: 'totalPhosphorusOutputBO',  name : 'Общий фосфор на выходе участка БО, мг/дм³'},
        {key: 'phSludge',  name : 'рН иловой смеси в Биоблоке'},
        {key: 'sludgeTemperature',  name : 'Температура иловой смеси в Биоблоке , °С'},
        {key: 'oxygenModeNitrificationZone',  name : 'Кислородный режим в зоне нитрификации Биоблока, мг/дм³'}
    ]

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
                                            {
                                                if (bboID < 8) {
                                                    return (
                                                        <td key={bboID}>
                                                            <InputNumber
                                                                value={tableValues[`bbo${bboID + 1}`][param.key]}
                                                                variant='borderless' min={0} max={1000}
                                                                onChange={(e) => setTableValues(prev => ({
                                                                    ...prev,
                                                                    [`bbo${bboID + 1}`]: {
                                                                        ...prev[`bbo${bboID + 1}`],
                                                                        [param.key]: e
                                                                    }
                                                                }))}
                                                            />
                                                        </td>
                                                    )
                                                }
                                                else return (
                                                    <td>
                                                        -
                                                    </td>
                                                )
                                            }
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
                                Отправить
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
