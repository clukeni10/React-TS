import { useState } from "react";
import './style.css'
import { CirclePlus, Save, Trash2} from "lucide-react";
import { Flex, Heading, Input, Button, HStack, Box  } from "@chakra-ui/react"


type User = {
    nome: string;
    idade: string;
};

function AddUser() {
    const [users, setUsers] = useState<User[]>([{ nome: "", idade: "" }]);
    const [displayUsers, setDisplayUsers] = useState<User[]>([]);

    const handleInputChange = (index: number, field: keyof User, value: string) => {
        const newUsers = [...users];
        newUsers[index][field] = value;
        setUsers(newUsers);
    };

    const handleAddUser = () => {
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

    const handleDeleteUser = (index: number) => {
        const newDisplayUsers = displayUsers.filter((_, i) => i !== index);
        setDisplayUsers(newDisplayUsers);
    };

    return (
        <div>
             <Flex 
             direction="column" 
             align="center"
             justifyContent="center"
             h="100vh" 
             >


             
                <Heading 
                size="4xl"
                fontWeight="bold"
                textAlign="center"
                marginBottom="2"
                > 
                <h1 className='title'>Gerenciador de Usuários</h1>
                </Heading>
        

                <Heading 
                size="2xl"
                fontWeight="semi-bold"
                textAlign="center"
                marginBottom="2"
                >
                <h2>Adicionar Usuários</h2>
                </Heading>
           
            <form onSubmit={(e) => e.preventDefault()}>
                {users.map((user, index) => (
                    <Flex 
                        flexDirection="row"
                        justifyContent="space-evenly"
                        
                    >
                    <div key={index} >
                        <Input 
                        variant="outline"   
                        w="200px"
                        size="sm"
                        margin="2"
                            type="text"
                            placeholder="Digite o seu nome"
                            value={user.nome}
                            onChange={(event) => handleInputChange(index, "nome", event.target.value)}
                        />
                        <Input 
                        variant="outline"   
                        w="200px"
                        size="sm"
                        margin="2"
                            type="number"
                            placeholder="Digite a sua idade"
                            value={user.idade}
                            onChange={(event) => handleInputChange(index, "idade", event.target.value)}
                        />
                        {/* Exibe o botão "Apagar" apenas se o índice for maior que 0 */}
                        {index > 0 && (
                            <Button 
                            marginRight="2"
                            color="red.700"
                            bg="black"
                            _hover={{color: "red.500"}}
                            onClick={() => handleDeleteInput(index)}><Trash2 /></Button>
                        )}
                    </div>
                    </Flex>
                ))}
            </form>
                
               <HStack  
               display="flex"
               justifyContent="center"
               marginTop="2"
               marginBlock="2"
               gap="6" >
                <Button 
                bg="blue.600"
                _hover={{bg: "blue.700"}}
                 onClick={handleAddInput}><CirclePlus></CirclePlus></Button>
                <Button 
                bg="blue.600"
                _hover={{bg: "blue.700"}}
                onClick={handleAddUser}><Save></Save></Button>
               </HStack>
                
                
                    
                

                <div
               
                >
                {displayUsers.map((user, index) => (
                    <Box
                    bg="white"
                    color="black"
                    borderRadius="10px"
                    w="150px"
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-evenly"
                    >
                <div key={index} className="user-card">
                    <div>
                    <p>Nome: {user.nome}</p>
                    <p>Idade: {user.idade}</p>
                    </div>
                        
                        <Button
                         color="red.700"
                         _hover={{color: "red.500"}}
                        onClick={() => handleDeleteUser(index)}><Trash2 />
                        </Button>
                        
                        
                    </div>
                    </Box>
                    
                ))}
                </div>
            
            </Flex> 
        </div>
        
            ) 
};

export default AddUser;