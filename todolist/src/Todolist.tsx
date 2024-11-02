import React, { useState } from 'react';
import {Button} from 'react-bootstrap';

type Todo = {
    id: number;
    text: string;
    isChecked: boolean;
};

const Todolist: React.FC = () => {
    const title: string = '오늘 할 일';

    // 상태 관리
    const [todos, setTodos] = useState<Todo[]>([
        { id: 1, text: '공부하기', isChecked: false },
        { id: 2, text: '운동하기', isChecked: false },
        { id: 3, text: '책 읽기', isChecked: false }
    ]);

    const [newTodo, setNewTodo] = useState<string>('');

    // 체크박스 변경 핸들러
    const handleCheckedChange = (itemId: number) => {
        setTodos((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
            )
        );
    };

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, { id: Date.now(), text: newTodo, isChecked: false }])
            setNewTodo('')
        }
    }

    return (
        <div>
            <h1>{title}</h1>
            <div className='container'>
                <div>
                    <input type="text" 
                    placeholder='할 일 입력'
                    style={{marginRight : '10px', writingMode : 'horizontal-tb'}}
                    onChange={(e) => setNewTodo(e.target.value)}
                    />
                    <Button variant='warning' onClick={addTodo}>추가</Button>
                </div> 
                <p></p>

                <div className='board'>
                    <ul>
                        {todos.map((todo) => (
                            <li key={todo.id}>
                                <input
                                    type='checkbox'
                                    checked={todo.isChecked}
                                    onChange={() => handleCheckedChange(todo.id)}
                                />
                                <span>
                                    {todo.isChecked ? <del>{todo.text}</del> : <span>{todo.text}</span>}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Todolist;
