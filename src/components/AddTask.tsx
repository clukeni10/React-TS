import { useState } from "react";
import './css/index.css';

type User = {
    nome: string;
    idade: string; 
};

function AddUser () {
    const [users, setUsers] = useState<User[]>([{ nome: "", idade: "" }]);
    const [displayUsers, setDisplayUsers] = useState<User[]>([]);

    const handleInputChange = (index: number, field: keyof User, value: string) => {
        const newUsers = [...users];
        newUsers[index][field] = value;
        setUsers(newUsers);
    };
    
    const handleAddUser  = () => {
        for (const user of users) {
            if (!user.nome || !user.idade) {
                return alert("Preencha todos os campos de nome e idade.");
            }
        }
    
        const newDisplayUsers = [...displayUsers, ...users];
        setDisplayUsers(newDisplayUsers);
        setUsers([{ nome: "", idade: "" }]);
    };
    
    const handleAddInput = () => {
        setUsers([...users, { nome: "", idade: "" }]);
    };

    const handleDeleteInput = (index: number) => {
        // Não permite a exclusão do input base (índice 0)
        if (index === 0) {
            alert("O input base não pode ser apagado.");
            return;
        }
        const newUsers = users.filter((_, i) => i !== index);
        setUsers(newUsers);
    };
    
    const handleDeleteUser  = (index: number) => {
        const newDisplayUsers = displayUsers.filter((_, i) => i !== index);
        setDisplayUsers(newDisplayUsers);
    };
    
    return (
        <div className="AddTasks">
            <h1>Adicionar Usuários</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                {users.map((user, index) => (
                    <div key={index} className="input-group">
                        <input
                            type="text"
                            placeholder="Digite o seu nome"
                            value={user.nome}
                            onChange={(event) => handleInputChange(index, "nome", event.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="Digite a sua idade"
                            value={user.idade}
                            onChange={(event) => handleInputChange(index, "idade", event.target.value)}
                        />
                        {/* Exibe o botão "Apagar" apenas se o índice for maior que 0 */}
                        {index > 0 && (
                            <button type="button" onClick={() => handleDeleteInput(index)}>Apagar</button>
                        )}
                    </div>
                ))}
                <br />
                <div className="buttons">
                    <button type="button" onClick={handleAddInput}>Adicionar</button>
                    <button type="button" onClick={handleAddUser }>Gravar</button>
                </div>
            </form>
    
            <div className="user-cards">
                {displayUsers.map((user, index) => (
                    <div key={index} className="user-card">
                        <p>Nome: {user.nome}</p>
                        <p>Idade: {user.idade}</p>
                        <button onClick={() => handleDeleteUser (index)}>Deletar</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AddUser ;