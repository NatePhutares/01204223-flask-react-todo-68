import { useState } from 'react'
import './App.css'

function TodoItem({todo, toggleDone, deleteTodo, addNewComment}) {
    const [newComment, setNewComment] = useState("");      // เพิ่ม state newComment
    
    return (
    <li key={todo.id}>
        <span className={todo.done ? "done" : ""}>{todo.title}</span>
        <button onClick={() => {toggleDone(todo.id)}}>Toggle</button>
        <button onClick={() => {deleteTodo(todo.id)}}>❌</button>

        {(todo.comments) && (
            <>
            <b>Comments:</b>
            <br/>
            <b>comment_count: {todo.comments.length}</b>
            {todo.comments.length > 0 ? (
                <ul>
                    {todo.comments.map(comment => (
                    <li key={comment.id}>{comment.message}</li>
                    ))}
                </ul>
            ) : (
                <p>No comments</p>
            )}
            </>
        )}

        <div className="new-comment-forms">
            <input
            type="text"
            value={newComment}
            onChange={(e) => {
                const value = e.target.value;
                setNewComment(value);
            }}
            />
            <button onClick={() => {addNewComment(todo.id, newComment);
                                    setNewComment("");
                                    }}>Add Comment</button>
        </div>
    </li>
  )
}

export default TodoItem