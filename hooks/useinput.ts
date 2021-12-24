import {useState} from "react";

export const useInput = (initValue: any, validator: any) => {
    const [value, setValue] = useState(initValue);
    const onChange = (e: any)  => {
        const {
            target: { value }
        } = e;
        console.log(value)
        let willUpdate = true;
        if (typeof validator === 'function') {
            willUpdate = validator(value);
        }
        if (willUpdate) {
            setValue(value);
        }
    }
    return { value, onChange }
}
