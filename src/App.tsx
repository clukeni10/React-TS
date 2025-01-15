// App.tsx
import React, { useState } from 'react';
import UserForm from './components/form';
import UserList from './components/list';
import './App.css';
import Buttons from './components/buttons';

const App: React.FC = () => {
    const [users, setUsers] = useState<{ name: string; age: number }[]>([]);

    const handleAddUser = (name: string, age: number) => {
        setUsers([...users, { name, age }]);
    };

    const handleRemoveUser = (index: number) => {
        setUsers(users.filter((_, i) => i !== index)); 
    };

    return (
        <div>
          
            <h1>Gerenciador de Usuários</h1>
            <Buttons></Buttons>
            <UserForm onAdd={handleAddUser} />
            <UserList users={users} onRemove={handleRemoveUser} />
        </div>
    );
};

export default App;