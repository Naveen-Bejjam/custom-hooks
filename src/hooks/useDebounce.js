import { useEffect } from "react";

export const useDebounce = () => {

    const deBounceFunction = (fn, delay) => {
        let timer;
        return function(){
            clearTimeout(timer);
            timer = setTimeout(()=>{
                fn.call(this);
            },delay)
        }
    }
    return [
        deBounceFunction
    ]
}