// UserList.tsx
import React from 'react';
import './css/list.css';


interface User {
    name: string;
    age: number;
} 

interface UserListProps {
    users: User[];
    onRemove: (index: number) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onRemove }) => {
    return (
        <div>
            <h2>Lista de Usuários</h2>
            <div className='list'>
                {users.map((user, index) => (
                    <div key={index} className="card">
                        <div>
                            <h3>{user.name}</h3>
                            <p>Idade: {user.age}</p>
                        </div>

                        <button onClick={() => onRemove(index)}>Apagar</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserList;