import { useState } from "react";

function AddUser ({ onAddUser }) {
     const [users, setUsers] = useState([{ nome: "", idade: "" }]);
      const [displayUsers, setDisplayUsers] = useState([]);




      const handleInputChange = (index, field, value) => {
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
    
    const handleDeleteUser  = (index) => {
        const newDisplayUsers = displayUsers.filter((_, i) => i !== index);
        setDisplayUsers(newDisplayUsers);
    };
    
    return (
        <div className="AddTasks">
            <h1>Adicionar Usuários</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                {users.map((user, index) => (
                    <div key={index}>
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
                    </div>
                ))}
                <br />
                <button type="button" onClick={handleAddInput}>Adicionar</button>
                <button type="button" onClick={handleAddUser }>Gravar</button>
            </form>
    
            <div className="user-cards">
                {displayUsers.map((user, index) => (
                    <div key={index} className="user-card">
                        <p>Nome: {user.nome}</p>
                        <p>Idade: {user.idade}</p>
                        <button className="bg-red-200" onClick={() => handleDeleteUser (index)}>Deletar</button>
                    </div>
                ))}
            </div>
        </div>
    );

}
export default AddUser ;