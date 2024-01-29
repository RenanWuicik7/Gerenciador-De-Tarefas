import { useState } from "react";
import Button from "../Button";
import "./AddTask.css";

const AddTask = ({ adicionarNova }) => {
    const [inputData, setInputData] = useState("");

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    };

    const handleAddTaskClick = () => {
        if (inputData === "") {
            alert("Escreva algo antes de enviar!");
        } else {
            adicionarNova(inputData);
            setInputData("");
        }
    };

    return (
        <div className="add-task-container">
            <input
                onChange={handleInputChange}
                value={inputData}
                className="add-task-input"
                type="text"
            />
            <div className="add-task-button-container">
                <Button clique={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>
    );
};

export default AddTask;