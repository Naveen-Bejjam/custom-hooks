import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce.js";

const Search = () => {
    const [ inputText, setInputText] = useState('');
    const [ deBounceFunction ] = useDebounce();
    const handleInputClick = () => {
        console.log("Naveen")
    }
    const betterFunction = deBounceFunction(handleInputClick, 300)
    return (
        <div>
            <input onChange={()=>betterFunction()}></input>
        </div>
    )
}
export default Search;