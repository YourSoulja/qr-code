import { Scanner } from "@yudiel/react-qr-scanner";
import s from './qrCodeScanner.module.css';
import { useState } from 'react';
import { SCAN_DATA } from '../../constants.js';


export const QrCodeScanner = () => {
    const scanHandler = (result) => {
        setScanned(result[0].rawValue);

        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]");

        localStorage.setItem(
            SCAN_DATA, 
            JSON.stringify([...prevData, result[0].rawValue])
        );
    };

    const [scanned, setScanned]= useState(null);


    return (
        <div className={s.container}>
            <Scanner  className={s.qrCodeDiv}
                onScan={scanHandler}
                components={{
                    auido: false,
                    finder: false,
                }} 
                styles={{
                    container: {width: 200}
                }}
            />
            <p className={s.button}>{scanned}</p>
        </div>
    );
};