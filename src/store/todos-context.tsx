import React,{useState} from "react";
import Todo from "../models/todo";


type TodosContextObj ={
    items: Todo[],
    addTodo: (text: string) => void,
    removeTodo: (id: string) => void,//타입 설정
}


export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () => { },
    removeTodo: (id: string) => { } // 내용 설정.
});

const TodosContextProvider: React.FC<{children: React.ReactNode}> = (props) => {
    const [todos, setTodos] = useState<Todo[]>([])

    const addTodoHandler = (todoText: string) => {

        const newTodo = new Todo(todoText);
        setTodos((prevTodos) => {
            return prevTodos.concat(newTodo)
        })
    }

    const removeTodoHandler = (todoId: string) => {
        console.log(todoId)

        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.id !== todoId)
        })
    }

    const contextValue:TodosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler,

    }

    return (
        <TodosContext.Provider
        value={contextValue}
        >
            {props.children}
        </TodosContext.Provider>
    )
}