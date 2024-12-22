import { Link } from "react-router";
import s from './navigation.module.css';
export const Navigation = () => {
    return(
        <nav style={{    
            fontSize: '25px',
            marginBottom: '20px',
            }}>
            <Link to="/generate" className={s.linkS}>Generator QR-code</Link>
            <Link to="/scan" className={s.linkS}>Scan QR-code</Link>
            <Link to="/generateHistory"className={s.linkS}>History generator</Link>
            <Link to="/scanHistory"className={s.linkS}>History scan</Link>
        </nav>
    );
};