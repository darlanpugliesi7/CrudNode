import React from "react";
import { Link } from "react-router-dom";
import '../CSS/Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item">
                    <Link to='/'>Gerenciador de Tarefas</Link>
                </li>

                <li className="nav-item">
                    <Link to='completedtasks'>Tarefas Concluídas</Link>
                </li>

                <li className="nav-item">
                    <Link to='tasks'>Tarefas</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;