import styles from '../../styles/Home.module.css'
import {useInput} from "../../hooks/useinput";
import signupHandler from "../api/signup";

export default function SignUp ()  {
    const nickname = useInput('', validator);
    const password = useInput('', validator);
    const name = useInput('', validator);
    const phoneNum = useInput('', validator);
    const permission = useInput('', validator);


    const onSubmit = () => {
        fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nickname: nickname.value,
                password: password.value,
                name: name.value,
                phone_num: phoneNum.value,
                permission: permission.value
            })
        })
    }

    return (
        <div className={styles.main}>
            <input placeholder='nickname' {...nickname}/>
            <input placeholder='password'{...password}/>
            <input placeholder='name' {...name}/>
            <input placeholder='phone' {...phoneNum}/>
            <input placeholder='permission' {...permission}/>
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
