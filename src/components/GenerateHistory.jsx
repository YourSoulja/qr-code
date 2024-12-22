import { GENERATOR_DATA } from "../constants";
import {QRCodeSVG} from 'qrcode.react';

export const GenerateHistory = () => {
    const data = JSON.parse(localStorage.getItem(GENERATOR_DATA) || '[]');
    
    return (
        <div>
            <h1 style={{color: '#6a6f4c',
            marginBottom: "20px",
            padding: "10px",}}>
                History Generate
            </h1>
            {data.map((text) => (
                <p key={text} style={{color: '#6a6f4c',
                    fontSize: "20px",
                    marginBottom: "20px",
                    padding: "10px",}}>
                    {text}
                    <div>
                        <QRCodeSVG value={text} size={100} style={{ marginTop: '20px' }}/>
                    </div>
                </p>))}
    </div>
    );
};