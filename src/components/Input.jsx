import { v4 as uuidv4 } from 'uuid';


function Input({setTodos,todos, input, setInput}) {
    const addTodos = (e) => {
        e.preventDefault()
        if(e.target[0].value != ''){
        setTodos(todos => [...todos,{id:uuidv4('todo'),todo:e.target[0].value,checked:false}])
        setInput('')
        }
    }
    return (
    <div className="form">
        <form onSubmit={addTodos}>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <input value='Add' type="submit"/>
        </form>
        <style jsx='true'>
            {`
            .form{
                margin: 30px 0;
            }
            input[type=text]{
                font-size: 1rem;
                margin-right:40px;
                padding: 5px 40px;

            }
            input[type=submit]{
                font-size: 1rem;
                border:none;
                background: rgb(62, 212, 212);
                padding: 5px 10px;
                color: white;
                border-radius: 3px;
                cursor: pointer;
            }
            input[type=submit]:hover,input[type=submit]:focus{
                transform: scale(1.1);
                transition: transform 200ms ease;
            }
            input[type=submit]:focus{
                outline:0;
            }
            `}
        </style>
    </div>
  )
}

export default Input