import React from "react";
import { Button } from "react-bootstrap";

type TodoItemProps = {
  id: number;
  text: string;
  completed: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  text,
  completed,
  onToggle,
  onDelete,
}) => {
  const handleToggle = () => {
    onToggle(id);
  };

  const handleDelete = () => {
    onDelete(id);
  };
  return (
    <li>
      <input type="checkbox" checked={completed} onChange={handleToggle} />
      <span>{text}</span>
      <Button variant="dark" onClick={handleDelete}>
        X
      </Button>
    </li>
  );
};

export default TodoItem;
