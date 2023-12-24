import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

type AddTodoFormProps = {
    onAddTodo: (text: string) => void;
};

const AddTodoForm: React.FC<AddTodoFormProps> = ({ onAddTodo }) => {
    const [todoText, setTodoText] = useState<string>('');
    const handleAddTodo = (e: React.FormEvent) => {
        e.preventDefault();

        if (todoText.trim() !== '') {
            onAddTodo(todoText);
            setTodoText('');
        }
    };

    const handleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodoText(e.target.value);
    };

    return (
        <form id="todoForm" onSubmit={handleAddTodo}>
            <label htmlFor="todoApp">Dodaj zadanie</label>

            <input
                id="todoApp"
                name="todoApp"
                type="text"
                placeholder="Dodaj nowe zadanie"
                value={todoText}
                onChange={handleChangeHandler}
            />

            <Button type="submit" variant="dark">
                Dodaj
            </Button>
        </form>
    );
};

export default AddTodoForm;
