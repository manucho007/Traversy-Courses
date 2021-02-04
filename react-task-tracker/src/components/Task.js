import { FaTimes } from 'react-icons/fa';
import React from 'react';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => {
        onToggle(task.id);
      }}>
      <h3>
        {task.text}{' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(task.id)}
          // onClick={onDelete}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
