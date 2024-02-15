import React, {useEffect, useState} from "react"

import styles from '../styles/Modules.module.css'
import {Button, ConfigProvider, Form, InputNumber, message} from "antd";
import {useLabDataActions} from "../actions/lab.actions";
import {API} from "../helpers/const";
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
        await labDataActions.postLabData({...tableValues, datetime: ''})
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

    useEffect(() => {
        labDataActions.getAllParams()
            .then((data) => {
                setTableValues(prev => (data.data))
            })
            .catch(() => errorGet())
    }, []);

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
                                    <th colSpan={9}>Пинск ОС – Лабораторные данные</th>
                                </tr>
                                <tr>
                                    <th>Параметр</th>
                                    <th>ББО 1</th>
                                    <th>ББО 2</th>
                                    <th>ББО 3</th>
                                    <th>ББО 4</th>
                                    <th>ББО 5</th>
                                    <th>ББО 6</th>
                                    <th>ББО 7</th>
                                    <th>ББО 8</th>
                                </tr>
                                <tr>
                                    <td>Доза ила по массе в аэротенке, г/дм³</td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo1.doseFromWeight}
                                            variant='borderless' min={0} max={200}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo1: {
                                                    ...prev.bbo1,
                                                    doseFromWeight: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues?.bbo2?.doseFromWeight}
                                            variant='borderless' min={0} max={200}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo2: {
                                                    ...prev.bbo2,
                                                    doseFromWeight: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues?.bbo3?.doseFromWeight}
                                            variant='borderless' min={0} max={200}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo3: {
                                                    ...prev.bbo3,
                                                    doseFromWeight: e
                                                }
                                            }))}
                                        />
                                    </td>

                                    <td>
                                        <InputNumber
                                            value={tableValues?.bbo4?.doseFromWeight}
                                            variant='borderless' min={0} max={200}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo4: {
                                                    ...prev.bbo4,
                                                    doseFromWeight: e
                                                }
                                            }))}
                                        />
                                    </td>

                                    <td>
                                        <InputNumber
                                            value={tableValues?.bbo5?.doseFromWeight}
                                            variant='borderless' min={0} max={200}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo5: {
                                                    ...prev.bbo5,
                                                    doseFromWeight: e
                                                }
                                            }))}
                                        />
                                    </td>

                                    <td>
                                        <InputNumber
                                            value={tableValues?.bbo6?.doseFromWeight}
                                            variant='borderless' min={0} max={200}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo6: {
                                                    ...prev.bbo6,
                                                    doseFromWeight: e
                                                }
                                            }))}
                                        />
                                    </td>

                                    <td>
                                        <InputNumber
                                            value={tableValues?.bbo7?.doseFromWeight}
                                            variant='borderless' min={0} max={200}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo7: {
                                                    ...prev.bbo7,
                                                    doseFromWeight: e
                                                }
                                            }))}
                                        />
                                    </td>

                                    <td>
                                        <InputNumber
                                            value={tableValues?.bbo8?.doseFromWeight}
                                            variant='borderless' min={0} max={200}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo8: {
                                                    ...prev.bbo8,
                                                    doseFromWeight: e
                                                }
                                            }))}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Доза ила по объему, см³/дм³</td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo1.doseFromVolume}
                                            variant='borderless' min={0} max={200}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo1: {
                                                    ...prev.bbo1,
                                                    doseFromVolume: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo2.doseFromVolume}
                                            variant='borderless' min={0} max={200}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo2: {
                                                    ...prev.bbo2,
                                                    doseFromVolume: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo3.doseFromVolume}
                                            variant='borderless' min={0} max={200}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo3: {
                                                    ...prev.bbo3,
                                                    doseFromVolume: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo4.doseFromVolume}
                                            variant='borderless' min={0} max={200}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo4: {
                                                    ...prev.bbo4,
                                                    doseFromVolume: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo5.doseFromVolume}
                                            variant='borderless' min={0} max={200}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo5: {
                                                    ...prev.bbo5,
                                                    doseFromVolume: e
                                                }
                                            }))}
                                        />
                                    </td>
                                
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo6.doseFromVolume}
                                            variant='borderless' min={0} max={200}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo6: {
                                                    ...prev.bbo6,
                                                    doseFromVolume: e
                                                }
                                            }))}
                                        />
                                    </td>
                                
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo7.doseFromVolume}
                                            variant='borderless' min={0} max={200}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo7: {
                                                    ...prev.bbo7,
                                                    doseFromVolume: e
                                                }
                                            }))}
                                        />
                                    </td>
                                
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo8.doseFromVolume}
                                            variant='borderless' min={0} max={200}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo8: {
                                                    ...prev.bbo8,
                                                    doseFromVolume: e
                                                }
                                            }))}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Зольность ила, %</td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo1.ashPercent}
                                            variant='borderless' min={0} max={100}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo1: {
                                                    ...prev.bbo1,
                                                    ashPercent: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo2.ashPercent}
                                            variant='borderless' min={0} max={100}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo2: {
                                                    ...prev.bbo2,
                                                    ashPercent: e
                                                }
                                            }))}
                                        />
                                    </td>
                                
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo3.ashPercent}
                                            variant='borderless' min={0} max={100}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo3: {
                                                    ...prev.bbo3,
                                                    ashPercent: e
                                                }
                                            }))}
                                        />
                                    </td>
                                
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo4.ashPercent}
                                            variant='borderless' min={0} max={100}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo4: {
                                                    ...prev.bbo4,
                                                    ashPercent: e
                                                }
                                            }))}
                                        />
                                    </td>
                                
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo5.ashPercent}
                                            variant='borderless' min={0} max={100}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo5: {
                                                    ...prev.bbo5,
                                                    ashPercent: e
                                                }
                                            }))}
                                        />
                                    </td>
                                
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo6.ashPercent}
                                            variant='borderless' min={0} max={100}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo6: {
                                                    ...prev.bbo6,
                                                    ashPercent: e
                                                }
                                            }))}
                                        />
                                    </td>
                                
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo7.ashPercent}
                                            variant='borderless' min={0} max={100}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo7: {
                                                    ...prev.bbo7,
                                                    ashPercent: e
                                                }
                                            }))}
                                        />
                                    </td>
                                
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo8.ashPercent}
                                            variant='borderless' min={0} max={100}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo8: {
                                                    ...prev.bbo8,
                                                    ashPercent: e
                                                }
                                            }))}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Содержание взвешенных веществ в исходной воде, мг/дм³</td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo1.suspendSubstSourceWater}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo1: {
                                                    ...prev.bbo1,
                                                    suspendSubstSourceWater: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo2.suspendSubstSourceWater}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo2: {
                                                    ...prev.bbo2,
                                                    suspendSubstSourceWater: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo3.suspendSubstSourceWater}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo3: {
                                                    ...prev.bbo3,
                                                    suspendSubstSourceWater: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo4.suspendSubstSourceWater}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo4: {
                                                    ...prev.bbo4,
                                                    suspendSubstSourceWater: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo5.suspendSubstSourceWater}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo5: {
                                                    ...prev.bbo5,
                                                    suspendSubstSourceWater: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo6.suspendSubstSourceWater}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo6: {
                                                    ...prev.bbo6,
                                                    suspendSubstSourceWater: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo7.suspendSubstSourceWater}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo7: {
                                                    ...prev.bbo7,
                                                    suspendSubstSourceWater: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo8.suspendSubstSourceWater}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo8: {
                                                    ...prev.bbo8,
                                                    suspendSubstSourceWater: e
                                                }
                                            }))}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Содержание взвешенных веществ после первичных отстойников, мг/дм³</td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo1.suspendSubstAfterSettling}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo1: {
                                                    ...prev.bbo1,
                                                    suspendSubstAfterSettling: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo2.suspendSubstAfterSettling}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo2: {
                                                    ...prev.bbo2,
                                                    suspendSubstAfterSettling: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo3.suspendSubstAfterSettling}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo3: {
                                                    ...prev.bbo3,
                                                    suspendSubstAfterSettling: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo4.suspendSubstAfterSettling}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo4: {
                                                    ...prev.bbo4,
                                                    suspendSubstAfterSettling: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo5.suspendSubstAfterSettling}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo5: {
                                                    ...prev.bbo5,
                                                    suspendSubstAfterSettling: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo6.suspendSubstAfterSettling}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo6: {
                                                    ...prev.bbo6,
                                                    suspendSubstAfterSettling: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo7.suspendSubstAfterSettling}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo7: {
                                                    ...prev.bbo7,
                                                    suspendSubstAfterSettling: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo8.suspendSubstAfterSettling}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo8: {
                                                    ...prev.bbo8,
                                                    suspendSubstAfterSettling: e
                                                }
                                            }))}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Содержание взвешенных веществ в очищенной воде, мг/дм³</td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo1.suspendSubstInPurified}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo1: {
                                                    ...prev.bbo1,
                                                    suspendSubstInPurified: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo2.suspendSubstInPurified}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo2: {
                                                    ...prev.bbo2,
                                                    suspendSubstInPurified: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo3.suspendSubstInPurified}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo3: {
                                                    ...prev.bbo3,
                                                    suspendSubstInPurified: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo4.suspendSubstInPurified}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo4: {
                                                    ...prev.bbo4,
                                                    suspendSubstInPurified: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo5.suspendSubstInPurified}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo5: {
                                                    ...prev.bbo5,
                                                    suspendSubstInPurified: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo6.suspendSubstInPurified}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo6: {
                                                    ...prev.bbo6,
                                                    suspendSubstInPurified: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo7.suspendSubstInPurified}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo7: {
                                                    ...prev.bbo7,
                                                    suspendSubstInPurified: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo8.suspendSubstInPurified}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo8: {
                                                    ...prev.bbo8,
                                                    suspendSubstInPurified: e
                                                }
                                            }))}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Концентрация избыточного активного ила, г/дм³</td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo1.concentrationExcessActive}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo1: {
                                                    ...prev.bbo1,
                                                    concentrationExcessActive: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo2.concentrationExcessActive}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo2: {
                                                    ...prev.bbo2,
                                                    concentrationExcessActive: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo3.concentrationExcessActive}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo3: {
                                                    ...prev.bbo3,
                                                    concentrationExcessActive: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo4.concentrationExcessActive}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo4: {
                                                    ...prev.bbo4,
                                                    concentrationExcessActive: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo5.concentrationExcessActive}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo5: {
                                                    ...prev.bbo5,
                                                    concentrationExcessActive: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo6.concentrationExcessActive}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo6: {
                                                    ...prev.bbo6,
                                                    concentrationExcessActive: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo7.concentrationExcessActive}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo7: {
                                                    ...prev.bbo7,
                                                    concentrationExcessActive: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo8.concentrationExcessActive}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo8: {
                                                    ...prev.bbo8,
                                                    concentrationExcessActive: e
                                                }
                                            }))}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Химическое потребление кислорода на входе Аэротенка - ХПК, мг/дм³</td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo1.xpkInputAero}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo1: {
                                                    ...prev.bbo1,
                                                    xpkInputAero: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo2.xpkInputAero}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo2: {
                                                    ...prev.bbo2,
                                                    xpkInputAero: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo3.xpkInputAero}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo3: {
                                                    ...prev.bbo3,
                                                    xpkInputAero: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo4.xpkInputAero}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo4: {
                                                    ...prev.bbo4,
                                                    xpkInputAero: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo5.xpkInputAero}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo5: {
                                                    ...prev.bbo5,
                                                    xpkInputAero: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo6.xpkInputAero}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo6: {
                                                    ...prev.bbo6,
                                                    xpkInputAero: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo7.xpkInputAero}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo7: {
                                                    ...prev.bbo7,
                                                    xpkInputAero: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo8.xpkInputAero}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo8: {
                                                    ...prev.bbo8,
                                                    xpkInputAero: e
                                                }
                                            }))}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Биохимическое потребление кислорода (5сут) на входе ОС, мг/дм³</td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo1.bpkInputOS}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo1: {
                                                    ...prev.bbo1,
                                                    bpkInputOS: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo2.bpkInputOS}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo2: {
                                                    ...prev.bbo2,
                                                    bpkInputOS: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo3.bpkInputOS}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo3: {
                                                    ...prev.bbo3,
                                                    bpkInputOS: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo4.bpkInputOS}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo4: {
                                                    ...prev.bbo4,
                                                    bpkInputOS: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo5.bpkInputOS}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo5: {
                                                    ...prev.bbo5,
                                                    bpkInputOS: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo6.bpkInputOS}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo6: {
                                                    ...prev.bbo6,
                                                    bpkInputOS: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo7.bpkInputOS}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo7: {
                                                    ...prev.bbo7,
                                                    bpkInputOS: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo8.bpkInputOS}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo8: {
                                                    ...prev.bbo8,
                                                    bpkInputOS: e
                                                }
                                            }))}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Биохимическое потребление кислорода (5сут) на входе Биоблока, мг/дм³</td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo1.bpkInputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo1: {
                                                    ...prev.bbo1,
                                                    bpkInputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo2.bpkInputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo2: {
                                                    ...prev.bbo2,
                                                    bpkInputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo3.bpkInputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo3: {
                                                    ...prev.bbo3,
                                                    bpkInputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo4.bpkInputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo4: {
                                                    ...prev.bbo4,
                                                    bpkInputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo5.bpkInputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo5: {
                                                    ...prev.bbo5,
                                                    bpkInputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo6.bpkInputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo6: {
                                                    ...prev.bbo6,
                                                    bpkInputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo7.bpkInputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo7: {
                                                    ...prev.bbo7,
                                                    bpkInputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo8.bpkInputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo8: {
                                                    ...prev.bbo8,
                                                    bpkInputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Биохимическое потребление кислорода (5 сут) на выходе Биоблока, мг/дм³</td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo1.bpkOutputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo1: {
                                                    ...prev.bbo1,
                                                    bpkOutputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo2.bpkOutputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo2: {
                                                    ...prev.bbo2,
                                                    bpkOutputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo3.bpkOutputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo3: {
                                                    ...prev.bbo3,
                                                    bpkOutputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo4.bpkOutputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo4: {
                                                    ...prev.bbo4,
                                                    bpkOutputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo5.bpkOutputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo5: {
                                                    ...prev.bbo5,
                                                    bpkOutputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo6.bpkOutputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo6: {
                                                    ...prev.bbo6,
                                                    bpkOutputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo7.bpkOutputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo7: {
                                                    ...prev.bbo7,
                                                    bpkOutputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo8.bpkOutputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo8: {
                                                    ...prev.bbo8,
                                                    bpkOutputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Азот аммонийный на входе Биоблока, мг/дм³</td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo1.nitrogenAmmoniumInputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo1: {
                                                    ...prev.bbo1,
                                                    nitrogenAmmoniumInputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo2.nitrogenAmmoniumInputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo2: {
                                                    ...prev.bbo2,
                                                    nitrogenAmmoniumInputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo3.nitrogenAmmoniumInputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo3: {
                                                    ...prev.bbo3,
                                                    nitrogenAmmoniumInputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo4.nitrogenAmmoniumInputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo4: {
                                                    ...prev.bbo4,
                                                    nitrogenAmmoniumInputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo5.nitrogenAmmoniumInputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo5: {
                                                    ...prev.bbo5,
                                                    nitrogenAmmoniumInputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo6.nitrogenAmmoniumInputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo6: {
                                                    ...prev.bbo6,
                                                    nitrogenAmmoniumInputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo7.nitrogenAmmoniumInputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo7: {
                                                    ...prev.bbo7,
                                                    nitrogenAmmoniumInputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo8.nitrogenAmmoniumInputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo8: {
                                                    ...prev.bbo8,
                                                    nitrogenAmmoniumInputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Азот аммонийный на выходе Биоблока, мг/дм³</td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo1.nitrogenAmmoniumOutputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo1: {
                                                    ...prev.bbo1,
                                                    nitrogenAmmoniumOutputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo2.nitrogenAmmoniumOutputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo2: {
                                                    ...prev.bbo2,
                                                    nitrogenAmmoniumOutputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo3.nitrogenAmmoniumOutputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo3: {
                                                    ...prev.bbo3,
                                                    nitrogenAmmoniumOutputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo4.nitrogenAmmoniumOutputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo4: {
                                                    ...prev.bbo4,
                                                    nitrogenAmmoniumOutputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo5.nitrogenAmmoniumOutputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo5: {
                                                    ...prev.bbo5,
                                                    nitrogenAmmoniumOutputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo6.nitrogenAmmoniumOutputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo6: {
                                                    ...prev.bbo6,
                                                    nitrogenAmmoniumOutputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo7.nitrogenAmmoniumOutputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo7: {
                                                    ...prev.bbo7,
                                                    nitrogenAmmoniumOutputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo8.nitrogenAmmoniumOutputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo8: {
                                                    ...prev.bbo8,
                                                    nitrogenAmmoniumOutputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Азот нитритов на входе Биоблока, мг/дм³</td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo1.nitrogenNitriteInputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo1: {
                                                    ...prev.bbo1,
                                                    nitrogenNitriteInputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo2.nitrogenNitriteInputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo2: {
                                                    ...prev.bbo2,
                                                    nitrogenNitriteInputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo3.nitrogenNitriteInputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo3: {
                                                    ...prev.bbo3,
                                                    nitrogenNitriteInputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo4.nitrogenNitriteInputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo4: {
                                                    ...prev.bbo4,
                                                    nitrogenNitriteInputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo5.nitrogenNitriteInputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo5: {
                                                    ...prev.bbo5,
                                                    nitrogenNitriteInputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo6.nitrogenNitriteInputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo6: {
                                                    ...prev.bbo6,
                                                    nitrogenNitriteInputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo7.nitrogenNitriteInputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo7: {
                                                    ...prev.bbo7,
                                                    nitrogenNitriteInputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo8.nitrogenNitriteInputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo8: {
                                                    ...prev.bbo8,
                                                    nitrogenNitriteInputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Азот нитритов на выходе Биоблока, мг/дм³</td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo1.nitrogenNitriteOutputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo1: {
                                                    ...prev.bbo1,
                                                    nitrogenNitriteOutputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo2.nitrogenNitriteOutputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo2: {
                                                    ...prev.bbo2,
                                                    nitrogenNitriteOutputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo3.nitrogenNitriteOutputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo3: {
                                                    ...prev.bbo3,
                                                    nitrogenNitriteOutputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo4.nitrogenNitriteOutputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo4: {
                                                    ...prev.bbo4,
                                                    nitrogenNitriteOutputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo5.nitrogenNitriteOutputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo5: {
                                                    ...prev.bbo5,
                                                    nitrogenNitriteOutputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo6.nitrogenNitriteOutputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo6: {
                                                    ...prev.bbo6,
                                                    nitrogenNitriteOutputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo7.nitrogenNitriteOutputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo7: {
                                                    ...prev.bbo7,
                                                    nitrogenNitriteOutputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo8.nitrogenNitriteOutputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo8: {
                                                    ...prev.bbo8,
                                                    nitrogenNitriteOutputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Азот нитратов на входе Биоблока, мг/дм³</td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo1.nitrogenNitrateInputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo1: {
                                                    ...prev.bbo1,
                                                    nitrogenNitrateInputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo2.nitrogenNitrateInputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo2: {
                                                    ...prev.bbo2,
                                                    nitrogenNitrateInputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo3.nitrogenNitrateInputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo3: {
                                                    ...prev.bbo3,
                                                    nitrogenNitrateInputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo4.nitrogenNitrateInputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo4: {
                                                    ...prev.bbo4,
                                                    nitrogenNitrateInputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo5.nitrogenNitrateInputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo5: {
                                                    ...prev.bbo5,
                                                    nitrogenNitrateInputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo6.nitrogenNitrateInputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo6: {
                                                    ...prev.bbo6,
                                                    nitrogenNitrateInputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo7.nitrogenNitrateInputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo7: {
                                                    ...prev.bbo7,
                                                    nitrogenNitrateInputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo8.nitrogenNitrateInputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo8: {
                                                    ...prev.bbo8,
                                                    nitrogenNitrateInputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Азот нитратов на выходе Биоблока, мг/дм³</td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo1.nitrogenNitrateOutputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo1: {
                                                    ...prev.bbo1,
                                                    nitrogenNitrateOutputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo2.nitrogenNitrateOutputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo2: {
                                                    ...prev.bbo2,
                                                    nitrogenNitrateOutputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo3.nitrogenNitrateOutputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo3: {
                                                    ...prev.bbo3,
                                                    nitrogenNitrateOutputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo4.nitrogenNitrateOutputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo4: {
                                                    ...prev.bbo4,
                                                    nitrogenNitrateOutputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo5.nitrogenNitrateOutputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo5: {
                                                    ...prev.bbo5,
                                                    nitrogenNitrateOutputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo6.nitrogenNitrateOutputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo6: {
                                                    ...prev.bbo6,
                                                    nitrogenNitrateOutputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo7.nitrogenNitrateOutputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo7: {
                                                    ...prev.bbo7,
                                                    nitrogenNitrateOutputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo8.nitrogenNitrateOutputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo8: {
                                                    ...prev.bbo8,
                                                    nitrogenNitrateOutputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Общий азот на участок БО, мг/дм³</td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo1.totalNitrogenInputBO}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo1: {
                                                    ...prev.bbo1,
                                                    totalNitrogenInputBO: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo2.totalNitrogenInputBO}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo2: {
                                                    ...prev.bbo2,
                                                    totalNitrogenInputBO: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo3.totalNitrogenInputBO}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo3: {
                                                    ...prev.bbo3,
                                                    totalNitrogenInputBO: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo4.totalNitrogenInputBO}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo4: {
                                                    ...prev.bbo4,
                                                    totalNitrogenInputBO: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo5.totalNitrogenInputBO}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo5: {
                                                    ...prev.bbo5,
                                                    totalNitrogenInputBO: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo6.totalNitrogenInputBO}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo6: {
                                                    ...prev.bbo6,
                                                    totalNitrogenInputBO: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo7.totalNitrogenInputBO}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo7: {
                                                    ...prev.bbo7,
                                                    totalNitrogenInputBO: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo8.totalNitrogenInputBO}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo8: {
                                                    ...prev.bbo8,
                                                    totalNitrogenInputBO: e
                                                }
                                            }))}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Органический азот на выходе Биоблока, мг/дм³</td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo1.organicNitrogenOutputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo1: {
                                                    ...prev.bbo1,
                                                    organicNitrogenOutputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo2.organicNitrogenOutputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo2: {
                                                    ...prev.bbo2,
                                                    organicNitrogenOutputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo3.organicNitrogenOutputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo3: {
                                                    ...prev.bbo3,
                                                    organicNitrogenOutputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo4.organicNitrogenOutputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo4: {
                                                    ...prev.bbo4,
                                                    organicNitrogenOutputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo5.organicNitrogenOutputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo5: {
                                                    ...prev.bbo5,
                                                    organicNitrogenOutputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo6.organicNitrogenOutputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo6: {
                                                    ...prev.bbo6,
                                                    organicNitrogenOutputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo7.organicNitrogenOutputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo7: {
                                                    ...prev.bbo7,
                                                    organicNitrogenOutputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo8.organicNitrogenOutputBbo}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo8: {
                                                    ...prev.bbo8,
                                                    organicNitrogenOutputBbo: e
                                                }
                                            }))}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Общий фосфор после первичных отстойников, мг/дм³</td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo1.totalPhosphorusOutput}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo1: {
                                                    ...prev.bbo1,
                                                    totalPhosphorusOutput: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo2.totalPhosphorusOutput}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo2: {
                                                    ...prev.bbo2,
                                                    totalPhosphorusOutput: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo3.totalPhosphorusOutput}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo3: {
                                                    ...prev.bbo3,
                                                    totalPhosphorusOutput: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo4.totalPhosphorusOutput}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo4: {
                                                    ...prev.bbo4,
                                                    totalPhosphorusOutput: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo5.totalPhosphorusOutput}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo5: {
                                                    ...prev.bbo5,
                                                    totalPhosphorusOutput: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo6.totalPhosphorusOutput}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo6: {
                                                    ...prev.bbo6,
                                                    totalPhosphorusOutput: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo7.totalPhosphorusOutput}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo7: {
                                                    ...prev.bbo7,
                                                    totalPhosphorusOutput: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo8.totalPhosphorusOutput}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo8: {
                                                    ...prev.bbo8,
                                                    totalPhosphorusOutput: e
                                                }
                                            }))}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Общий фосфор на выходе участка БО, мг/дм³</td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo1.totalPhosphorusOutputBO}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo1: {
                                                    ...prev.bbo1,
                                                    totalPhosphorusOutputBO: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo2.totalPhosphorusOutputBO}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo2: {
                                                    ...prev.bbo2,
                                                    totalPhosphorusOutputBO: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo3.totalPhosphorusOutputBO}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo3: {
                                                    ...prev.bbo3,
                                                    totalPhosphorusOutputBO: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo4.totalPhosphorusOutputBO}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo4: {
                                                    ...prev.bbo4,
                                                    totalPhosphorusOutputBO: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo5.totalPhosphorusOutputBO}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo5: {
                                                    ...prev.bbo5,
                                                    totalPhosphorusOutputBO: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo6.totalPhosphorusOutputBO}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo6: {
                                                    ...prev.bbo6,
                                                    totalPhosphorusOutputBO: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo7.totalPhosphorusOutputBO}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo7: {
                                                    ...prev.bbo7,
                                                    totalPhosphorusOutputBO: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo8.totalPhosphorusOutputBO}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo8: {
                                                    ...prev.bbo8,
                                                    totalPhosphorusOutputBO: e
                                                }
                                            }))}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>рН иловой смеси в Биоблоке</td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo1.phSludge}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo1: {
                                                    ...prev.bbo1,
                                                    phSludge: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo2.phSludge}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo2: {
                                                    ...prev.bbo2,
                                                    phSludge: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo3.phSludge}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo3: {
                                                    ...prev.bbo3,
                                                    phSludge: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo4.phSludge}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo4: {
                                                    ...prev.bbo4,
                                                    phSludge: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo5.phSludge}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo5: {
                                                    ...prev.bbo5,
                                                    phSludge: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo6.phSludge}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo6: {
                                                    ...prev.bbo6,
                                                    phSludge: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo7.phSludge}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo7: {
                                                    ...prev.bbo7,
                                                    phSludge: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo8.phSludge}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo8: {
                                                    ...prev.bbo8,
                                                    phSludge: e
                                                }
                                            }))}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Температура иловой смеси в Биоблоке , °С</td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo1.sludgeTemperature}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo1: {
                                                    ...prev.bbo1,
                                                    sludgeTemperature: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo2.sludgeTemperature}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo2: {
                                                    ...prev.bbo2,
                                                    sludgeTemperature: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo3.sludgeTemperature}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo3: {
                                                    ...prev.bbo3,
                                                    sludgeTemperature: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo4.sludgeTemperature}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo4: {
                                                    ...prev.bbo4,
                                                    sludgeTemperature: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo5.sludgeTemperature}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo5: {
                                                    ...prev.bbo5,
                                                    sludgeTemperature: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo6.sludgeTemperature}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo6: {
                                                    ...prev.bbo6,
                                                    sludgeTemperature: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo7.sludgeTemperature}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo7: {
                                                    ...prev.bbo7,
                                                    sludgeTemperature: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo8.sludgeTemperature}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo8: {
                                                    ...prev.bbo8,
                                                    sludgeTemperature: e
                                                }
                                            }))}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Кислородный режим в зоне нитрификации Биоблока, мг/дм³</td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo1.oxygenModeNitrificationZone}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo1: {
                                                    ...prev.bbo1,
                                                    oxygenModeNitrificationZone: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo2.oxygenModeNitrificationZone}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo2: {
                                                    ...prev.bbo2,
                                                    oxygenModeNitrificationZone: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo3.oxygenModeNitrificationZone}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo3: {
                                                    ...prev.bbo3,
                                                    oxygenModeNitrificationZone: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo4.oxygenModeNitrificationZone}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo4: {
                                                    ...prev.bbo4,
                                                    oxygenModeNitrificationZone: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo5.oxygenModeNitrificationZone}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo5: {
                                                    ...prev.bbo5,
                                                    oxygenModeNitrificationZone: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo6.oxygenModeNitrificationZone}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo6: {
                                                    ...prev.bbo6,
                                                    oxygenModeNitrificationZone: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo7.oxygenModeNitrificationZone}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo7: {
                                                    ...prev.bbo7,
                                                    oxygenModeNitrificationZone: e
                                                }
                                            }))}
                                        />
                                    </td>
                                    <td>
                                        <InputNumber
                                            value={tableValues.bbo8.oxygenModeNitrificationZone}
                                            variant='borderless' min={0} max={1000}
                                            onChange={(e) => setTableValues(prev => ({
                                                ...prev,
                                                bbo8: {
                                                    ...prev.bbo8,
                                                    oxygenModeNitrificationZone: e
                                                }
                                            }))}
                                        />
                                    </td>
                                </tr>
                            </table>
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
