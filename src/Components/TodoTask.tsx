import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export interface ITask {
  taskName: string;
  deadline: number;
}

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span>{task.deadline}</span>
      </div>
      <button
        onClick={() => {
          completeTask(task.taskName);
        }}
      >
        <FontAwesomeIcon className="close-icon" icon={faTimes} />
      </button>
    </div>
  );
};

export default TodoTask;
