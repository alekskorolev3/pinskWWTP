import React, {useEffect, useState} from "react"

import styles from '../styles/Modules.module.css'
import {Button, ConfigProvider, DatePicker, Form, InputNumber, message} from "antd";
import {useLabDataActions} from "../actions/lab.actions";
import {API} from "../helpers/const";
import locale from 'antd/es/date-picker/locale/ru_RU';
import 'dayjs/locale/ru';

const LabData = () => {

    const labDataActions = useLabDataActions()

    const [messageApi, contextHolder] = message.useMessage();
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
                console.log(data)
                setTableValues(prev => (data.data))
            })
            .catch(() => errorPost())
    }

    const [tableValues, setTableValues] = useState({
        bbo1: {
            doseFromWeight: 57.5,
            doseFromVolume: 10,
            ashPercent: 10,
            suspendSubstSourceWater: 10,
            suspendSubstAfterSettling: 10,
            suspendSubstInPurified: 10,
            concentrationExcessActive: 10,
            xpkInputAero: 10,
            bpkInputOS: 10,
            bpkInputBbo: 10,
            bpkOutputBbo: 10,
            nitrogenAmmoniumInputBbo: 10,
            nitrogenAmmoniumOutputBbo: 10,
            nitrogenNitriteInputBbo: 10,
            nitrogenNitriteOutputBbo: 10,
            nitrogenNitrateInputBbo: 10,
            nitrogenNitrateOutputBbo: 10,
            totalNitrogenInputBO: 10,
            organicNitrogenOutputBbo: 10,
            totalPhosphorusOutput: 10,
            totalPhosphorusOutputBO: 10,
            phSludge: 5,
            sludgeTemperature: 15,
            oxygenModeNitrificationZone: 10
        },
        bbo2: {
            doseFromWeight: 57.5,
            doseFromVolume: 10,
            ashPercent: 10,
            suspendSubstSourceWater: 10,
            suspendSubstAfterSettling: 10,
            suspendSubstInPurified: 10,
            concentrationExcessActive: 10,
            xpkInputAero: 10,
            bpkInputOS: 10,
            bpkInputBbo: 10,
            bpkOutputBbo: 10,
            nitrogenAmmoniumInputBbo: 10,
            nitrogenAmmoniumOutputBbo: 10,
            nitrogenNitriteInputBbo: 10,
            nitrogenNitriteOutputBbo: 10,
            nitrogenNitrateInputBbo: 10,
            nitrogenNitrateOutputBbo: 10,
            totalNitrogenInputBO: 10,
            organicNitrogenOutputBbo: 10,
            totalPhosphorusOutput: 10,
            totalPhosphorusOutputBO: 10,
            phSludge: 5,
            sludgeTemperature: 15,
            oxygenModeNitrificationZone: 10
        },
        bbo3: {
            doseFromWeight: 57.5,
            doseFromVolume: 10,
            ashPercent: 10,
            suspendSubstSourceWater: 10,
            suspendSubstAfterSettling: 10,
            suspendSubstInPurified: 10,
            concentrationExcessActive: 10,
            xpkInputAero: 10,
            bpkInputOS: 10,
            bpkInputBbo: 10,
            bpkOutputBbo: 10,
            nitrogenAmmoniumInputBbo: 10,
            nitrogenAmmoniumOutputBbo: 10,
            nitrogenNitriteInputBbo: 10,
            nitrogenNitriteOutputBbo: 10,
            nitrogenNitrateInputBbo: 10,
            nitrogenNitrateOutputBbo: 10,
            totalNitrogenInputBO: 10,
            organicNitrogenOutputBbo: 10,
            totalPhosphorusOutput: 10,
            totalPhosphorusOutputBO: 10,
            phSludge: 5,
            sludgeTemperature: 15,
            oxygenModeNitrificationZone: 10
        },
        bbo4: {
            doseFromWeight: 57.5,
            doseFromVolume: 10,
            ashPercent: 10,
            suspendSubstSourceWater: 10,
            suspendSubstAfterSettling: 10,
            suspendSubstInPurified: 10,
            concentrationExcessActive: 10,
            xpkInputAero: 10,
            bpkInputOS: 10,
            bpkInputBbo: 10,
            bpkOutputBbo: 10,
            nitrogenAmmoniumInputBbo: 10,
            nitrogenAmmoniumOutputBbo: 10,
            nitrogenNitriteInputBbo: 10,
            nitrogenNitriteOutputBbo: 10,
            nitrogenNitrateInputBbo: 10,
            nitrogenNitrateOutputBbo: 10,
            totalNitrogenInputBO: 10,
            organicNitrogenOutputBbo: 10,
            totalPhosphorusOutput: 10,
            totalPhosphorusOutputBO: 10,
            phSludge: 5,
            sludgeTemperature: 15,
            oxygenModeNitrificationZone: 10
        },
        bbo5: {
            doseFromWeight: 57.5,
            doseFromVolume: 10,
            ashPercent: 10,
            suspendSubstSourceWater: 10,
            suspendSubstAfterSettling: 10,
            suspendSubstInPurified: 10,
            concentrationExcessActive: 10,
            xpkInputAero: 10,
            bpkInputOS: 10,
            bpkInputBbo: 10,
            bpkOutputBbo: 10,
            nitrogenAmmoniumInputBbo: 10,
            nitrogenAmmoniumOutputBbo: 10,
            nitrogenNitriteInputBbo: 10,
            nitrogenNitriteOutputBbo: 10,
            nitrogenNitrateInputBbo: 10,
            nitrogenNitrateOutputBbo: 10,
            totalNitrogenInputBO: 10,
            organicNitrogenOutputBbo: 10,
            totalPhosphorusOutput: 10,
            totalPhosphorusOutputBO: 10,
            phSludge: 5,
            sludgeTemperature: 15,
            oxygenModeNitrificationZone: 10
        },
        bbo6: {
            doseFromWeight: 57.5,
            doseFromVolume: 10,
            ashPercent: 10,
            suspendSubstSourceWater: 10,
            suspendSubstAfterSettling: 10,
            suspendSubstInPurified: 10,
            concentrationExcessActive: 10,
            xpkInputAero: 10,
            bpkInputOS: 10,
            bpkInputBbo: 10,
            bpkOutputBbo: 10,
            nitrogenAmmoniumInputBbo: 10,
            nitrogenAmmoniumOutputBbo: 10,
            nitrogenNitriteInputBbo: 10,
            nitrogenNitriteOutputBbo: 10,
            nitrogenNitrateInputBbo: 10,
            nitrogenNitrateOutputBbo: 10,
            totalNitrogenInputBO: 10,
            organicNitrogenOutputBbo: 10,
            totalPhosphorusOutput: 10,
            totalPhosphorusOutputBO: 10,
            phSludge: 5,
            sludgeTemperature: 15,
            oxygenModeNitrificationZone: 10
        },
        bbo7: {
            doseFromWeight: 57.5,
            doseFromVolume: 10,
            ashPercent: 10,
            suspendSubstSourceWater: 10,
            suspendSubstAfterSettling: 10,
            suspendSubstInPurified: 10,
            concentrationExcessActive: 10,
            xpkInputAero: 10,
            bpkInputOS: 10,
            bpkInputBbo: 10,
            bpkOutputBbo: 10,
            nitrogenAmmoniumInputBbo: 10,
            nitrogenAmmoniumOutputBbo: 10,
            nitrogenNitriteInputBbo: 10,
            nitrogenNitriteOutputBbo: 10,
            nitrogenNitrateInputBbo: 10,
            nitrogenNitrateOutputBbo: 10,
            totalNitrogenInputBO: 10,
            organicNitrogenOutputBbo: 10,
            totalPhosphorusOutput: 10,
            totalPhosphorusOutputBO: 10,
            phSludge: 5,
            sludgeTemperature: 15,
            oxygenModeNitrificationZone: 10
        },
        bbo8: {
            doseFromWeight: 57.5,
            doseFromVolume: 10,
            ashPercent: 10,
            suspendSubstSourceWater: 10,
            suspendSubstAfterSettling: 10,
            suspendSubstInPurified: 10,
            concentrationExcessActive: 10,
            xpkInputAero: 10,
            bpkInputOS: 10,
            bpkInputBbo: 10,
            bpkOutputBbo: 10,
            nitrogenAmmoniumInputBbo: 10,
            nitrogenAmmoniumOutputBbo: 10,
            nitrogenNitriteInputBbo: 10,
            nitrogenNitriteOutputBbo: 10,
            nitrogenNitrateInputBbo: 10,
            nitrogenNitrateOutputBbo: 10,
            totalNitrogenInputBO: 10,
            organicNitrogenOutputBbo: 10,
            totalPhosphorusOutput: 10,
            totalPhosphorusOutputBO: 10,
            phSludge: 5,
            sludgeTemperature: 15,
            oxygenModeNitrificationZone: 10
        }
    })
    const [datetime, setDatetime] = useState(null)

    useEffect(() => {
        labDataActions.getAllParams()
            .then((data) => {
                setTableValues(prev => (data.data))
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
                                    <th colSpan={10}>Пинск ОС – Лабораторные данные</th>
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
                                                                variant='borderless' min={0} max={200}
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

                            <DatePicker
                                format='DD.MM.YYYY hh:mm:ss'
                                showTime
                                locale={locale}
                                onChange={onChange}
                                style={{maxWidth: '200px', marginTop: "12px"}}
                            />

                            <Button type="primary" onClick={() => handleForm()} style={{backgroundColor: "#00A3E7", fontWeight: 500, maxWidth: "fit-content", marginTop: "12px"}}>
                                Отправить
                            </Button>
                        </div>
                    </div>
                </Form>
            </ConfigProvider>
        </>
    )
}

export default LabData
