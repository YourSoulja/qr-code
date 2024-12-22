import { SCAN_DATA } from "../constants";
import {QRCodeSVG} from 'qrcode.react';

export const ScanHistory = () => {
    const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
    
    
    return (
        <div>
            <h1 style={{color: '#6a6f4c',
                    marginBottom: "20px",
                    padding: "10px",}}>
                        History Scan
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
                </p>

            ))}
        </div>
    );
};