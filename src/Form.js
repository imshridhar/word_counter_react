import { useState } from "react";
function Form (){
    const  [text,setText] =useState('Enter any Text');
    var handleOnChange=(event)=>{
        setText(event.target.value);

    }
    let uppercase=()=>{
        setText(text.toUpperCase());
    }

    return (
        <>
        <h1>Enter Text to Analyse</h1>
        <div className="form-floating container my-3">
            <textarea  placeholder="Leave a comment here" id="floatingTextarea2" rows="15" cols='130' value={text} onChange={handleOnChange}></textarea> <br/>

            <button type="button" className="btn btn-primary mx-3 my-3" onClick={uppercase}>UpperCase Text</button>
            <button type="button" className="btn btn-secondary mx-3 my-3">{text.trim().split(' ').length} Words and {text.length} Characters</button>
            <button type="button" className="btn btn-success mx-3 my-3">LowerCase</button>
            
        </div>
        <p>{text}</p>
        </>
    )
}

export default Form;