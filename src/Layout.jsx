import { QrCodeGenerator } from './components/Generator/QrCodeGenerator';
import { QrCodeScanner } from './components/Scan/QrCodeScanner';
import { GenerateHistory } from './components/GenerateHistory';
import { ScanHistory } from './components/ScanHistory/ScanHistory';
import { Navigation } from './components/Navigation/Navigation';
import { Routes, Route, } from 'react-router-dom';


const Layout = () => {
    return (
        <>
            <Navigation />

            

            <Routes>
                <Route path="/generate" element={<QrCodeGenerator />} />
                <Route path="/scan" element={<QrCodeScanner />} />
                <Route path="/scanHistory" element={<ScanHistory />} />
                <Route path="/generateHistory" element={<GenerateHistory />} />
            </Routes>

        </>
    );
};

export {Layout};