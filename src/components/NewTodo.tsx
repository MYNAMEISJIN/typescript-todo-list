import React, { useRef } from "react";
import classes from "./NewTodo.module.css"


const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
    const todoTextInputRef = useRef<HTMLInputElement>(null);


    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        //const enteredText = todoTextInputRef.current?.value;
        //?표는 null 일수도 있고 string 일수도 있다는 말이고

        const enteredText = todoTextInputRef.current!.value;
        //!는 무조건 string 값이다, null 이 될수 없다는 것을 알려주는 거다.

        if (enteredText?.trim().length === 0) {
            // throw an error
            return;
        }

        props.onAddTodo(enteredText);
        console.log(enteredText)
    }



    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <label htmlFor="text">Todo text</label>

            <input type="text" id="text" ref={todoTextInputRef} />
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo;