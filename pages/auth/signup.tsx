import styles from '../../styles/Home.module.css'
import {useInput} from "../../hooks/useinput";
import signupHandler from "../api/signup";

export default function SignUp ()  {
    const id = useInput('', validator);
    const pw = useInput('', validator);
    const name = useInput('', validator);
    const phoneNum = useInput('', validator);
    const authLevel = useInput('', validator);


    const onSubmit = () => {
        fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id.value,
                pw: pw.value, 
                name: name.value,
                phoneNum: phoneNum.value,
                authLevel: authLevel.value
            })
        })
    }

    return (
        <div className={styles.main}>
            <input placeholder='id' {...id}/>
            <input placeholder='pw'{...pw}/>
            <input placeholder='name' {...name}/>
            <input placeholder='phone' {...phoneNum}/>
            <input placeholder='authLevel' {...authLevel}/>
            <button onClick={onSubmit}>Submit</button>
        </div>
    );
}


const validator = (value: any) => {
    /*  검증 로직 추가 필요    */
    if (value === false) {
        return false
    }

    return true;
}
