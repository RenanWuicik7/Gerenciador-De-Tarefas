import ItemTask from "../Item-Task";

const Tasks = ({ tasks, ativarTarefa, handleTaskDelete }) => {
    return (
        <>
            {tasks.map(
                task => <ItemTask
                    ativarTarefa={ativarTarefa}
                    handleTaskDelete={handleTaskDelete}
                    task={task}
                    key={task.id}
                />
            )}
        </>
    );
};

export default Tasks;