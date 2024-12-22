import {QRCodeSVG} from 'qrcode.react';
import { useState } from 'react';
import s from './qrCodeGenerator.module.css';
import { GENERATOR_DATA } from '../../constants.js';

export const QrCodeGenerator = () => {
    const [value, setValue] = useState();    
    const [result, setResult] = useState('');    
    


    const onClickHandler = () => {
        const prevData = JSON.parse(localStorage.getItem(GENERATOR_DATA) || "[]");

        localStorage.setItem(
            GENERATOR_DATA, 
            JSON.stringify([...prevData, value])
        );

        setResult(value);
        setValue('');
    };

    
    const onChangeHandler = (event) => {
        setValue(event.target.value);
        setResult('');
    };
    

    return (
        <>
        <div className={s.inTextNameDiv}>
            <div className={s.inputDiv}>
                <input type="text"
                value={value} 
                placeholder='input text'
                onChange={onChangeHandler} 
                className={s.result}/>
            </div>

            <div className={s.buttonDiv}>
                <button type={s.button}
                onClick={onClickHandler}>     
                    Generate Qr
                </button>
            </div>

            <div className={s.qrCodeDiv}>
                {result !== '' && (
                    <QRCodeSVG value={result} />
                )}
            </div>
            
        </div>
        </>
    );
}