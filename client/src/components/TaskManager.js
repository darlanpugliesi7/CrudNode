import React, {useState} from "react";
import '../CSS/TaskManager.css';

function TaskManager() {
    return (
        <div className="TaskManager">
            <div className="register-container">
                <h1>Criar Tarefa</h1>
                <form action="/submit" method="POST">
                    <label htmlFor="titulo">Título da tarefa:</label>
                    <input type="text" id="titulo" name="titulo" required />

                    <label htmlFor="descricao">Descrição da tarefa:</label>
                    <input type="text" id="descricao" name="descricao" required />

                    <label htmlFor="status">Status da tarefa:</label>
                    <select id="status" name="status" required>
                        <option value="concluida">Concluída</option>
                        <option value="pendente">Pendente</option>
                    </select>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default TaskManager;