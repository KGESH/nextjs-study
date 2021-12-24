import styles from '../../styles/Home.module.css'

export default function SignIn ()  {
    return (
        <div className={styles.main}>
            <input className="id_input"/>
            <input className="pw_input"
                type="password"/>
            <button>Login</button>
        </div>
    );
}
