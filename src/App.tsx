
import './App.css';
import AddTask from './components/AddTask';
import { useState } from 'react';

 
const App = () => {
    const [users, setUsers] = useState([{
        id: 1,
        nome: "test",
        idade: 1,
    }]);

    function onAddUser(nome: string, idade: number){
        const newUser = {
            id: users.length + 1,
            nome,
            idade,
        };

            setUsers([...users, newUser]);

        }


    return (
        <div>
            <h1>Gerenciador de Usuários</h1>
            <AddTask onAddUser={onAddUser}></AddTask>

 
        </div>
    );
}

export default App;