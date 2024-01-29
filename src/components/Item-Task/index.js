import React from 'react';
import "./Item-Task.css";
import { TbTrashXFilled } from "react-icons/tb";
import { IoInformationCircleOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const ItemTask = ({ task, ativarTarefa, handleTaskDelete }) => {
    const history = useNavigate();

    const handleTaskDetailsClick = () => {
        history(`/${task.title}`);
    }

    return (
        <div
            className="item-container"
            style={task.completed ? {borderLeft: '6px solid chartreuse'} : {}}
        >
            <div className='titulo' onClick={() => ativarTarefa(task.id)}>{task.title}</div>
            <div className="buttons-container">
                <IoInformationCircleOutline
                    size={26}
                    onClick={handleTaskDetailsClick}
                />
                <TbTrashXFilled
                    size={25}
                    onClick={() => handleTaskDelete(task.id)}
                />
            </div>
        </div>
    );
}

export default ItemTask;