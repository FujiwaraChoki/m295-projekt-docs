import { useState } from 'react';
import styles from './PasswordChecker.module.css';

const PasswordChecker = ({ lang }) => {
    const [password, setPassword] = useState('');
    const [response, setResponse] = useState({});

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const checkPassword = () => {
        if (password === 'correctP@ss123!') {
            setResponse({
                message: lang === 'en' ? 'Login was successful.' : 'Anmeldung war erfolgreich.',
                color: 'green'
            });
        } else {
            setResponse({
                message: lang === 'en' ? 'Incorrect Password.' : 'Falsches Passwort.',
                color: 'red'
            });
        }
    }

    const title = lang === 'en' ? 'Password Checker' : 'Passwort Prüfer';
    const buttonText = lang === 'en' ? 'Check' : 'Prüfen';

    return (
        <div className={styles.container} style={{
            backgroundColor: response.color,
        }}>
            <h1 className={styles.appTitle}>{title}</h1>
            <input type="password" className={styles.passwordInput} onChange={handleChange} />
            <button onClick={checkPassword} className={styles.checkPasswordButton}>{buttonText}</button>
            {
                response.message && response.color && (
                    <p className={styles.response}>{response.message} {
                        response.color === 'green' ? '🎉' : '😢'
                    }</p>
                )
            }
        </div>
    );
}

export default PasswordChecker;
