import './Task-Details.css';

import Button from '../Button';
import { Link, useParams } from 'react-router-dom';

const TaskDetails = () => {
    const params = useParams();

    return (
        <>
            <div className="back-button-container">
                <Link to={-1}><Button>Voltar</Button></Link>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, a voluptatibus sapiente blanditiis consequatur voluptas quam incidunt! Eos ipsum reiciendis mollitia, distinctio nihil earum pariatur blanditiis incidunt vero non iusto?
                </p>
            </div>
        </>
    );
}

export default TaskDetails;