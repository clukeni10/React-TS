import { useState } from "react";
import './style.css';
import { CirclePlus, Save, Trash2, Edit3 } from "lucide-react";
import { Flex, Heading, Input, Button, HStack, Box } from "@chakra-ui/react";

type User = {
    nome: string;
    idade: string;
};

function AddUser() {
    const [users, setUsers] = useState<User[]>([{ nome: "", idade: "" }]);
    const [displayUsers, setDisplayUsers] = useState<(User & { isEditing?: boolean })[]>([]);

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

        const newDisplayUsers = [...displayUsers, ...users.map(user => ({ ...user, isEditing: false }))];
        setDisplayUsers(newDisplayUsers);
        setUsers([{ nome: "", idade: "" }]);
    };

    const handleAddInput = () => {
        setUsers([...users, { nome: "", idade: "" }]);
    };

    const handleDeleteInput = (index: number) => {
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

    const handleDeleteAllUsers = () => {
        setDisplayUsers([]);
    };

    const handleEditUser = (index: number) => {
        const newDisplayUsers = [...displayUsers];
        newDisplayUsers[index].isEditing = !newDisplayUsers[index].isEditing;
        setDisplayUsers(newDisplayUsers);
    };

    const handleSaveEdit = (index: number, field: keyof User, value: string) => {
        const newDisplayUsers = [...displayUsers];
        newDisplayUsers[index][field] = value;
        setDisplayUsers(newDisplayUsers);
    };

    return (
        <Box>
            <Flex direction="column" align="center" justifyContent="center" h="100vh" bg="white">
                <Heading size="4xl" fontWeight="bold" textAlign="center" marginBottom="2" color="black">
                    <h1 className='title'>Gerenciador de Usuários</h1>
                </Heading>

                <Heading size="2xl" fontWeight="semi-bold" textAlign="center" marginBottom="2" color="black">
                    <h2>Adicionar Usuários</h2>
                </Heading>

                <form onSubmit={(e) => e.preventDefault()}>
                    {users.map((user, index) => (
                        <Flex key={index} flexDirection="row" align="center" justifyContent="flex-start" gap="2" marginBottom="4">
                            <Input
                                variant="outline"
                                w="200px"
                                size="sm"
                                margin="2"
                                color="black"
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
                                color="black"
                                type="number"
                                placeholder="Digite a sua idade"
                                value={user.idade}
                                onChange={(event) => handleInputChange(index, "idade", event.target.value)}
                            />
                            {index > 0 && (
                                <Button
                                    marginRight="2"
                                    color="red.700"
                                    bg="white"
                                    _hover={{ color: "red.500" }}
                                    onClick={() => handleDeleteInput(index)}
                                >
                                    <Trash2 />
                                </Button>
                            )}
                        </Flex>
                    ))}
                </form>

                <HStack display="flex" marginTop="2" marginBlock="2" gap="6">
                    <Button bg="blue.600" _hover={{ bg: "blue.700" }} onClick={handleAddInput}>
                        <CirclePlus color="white" />
                    </Button>
                    <Button bg="blue.600" _hover={{ bg: "blue.700" }} onClick={handleAddUser}>
                        <Save color="white" />
                    </Button>
                    <Button bg="red.600" _hover={{ bg: "red.700" }} onClick={handleDeleteAllUsers}>
                        <Trash2 color="white" />
                    </Button>
                </HStack>

                <Box display="flex" width="350px" flexDirection="row" flexWrap="wrap" justifyContent="space-evenly">
                    {displayUsers.map((user, index) => (
                        <Box
                            key={index}
                            bg="white"
                            color="black"
                            borderRadius="md"
                            w="150px"
                            display="flex"
                            flexDirection="column"
                            justifyContent="space-evenly"
                            borderColor="blue.500"
                            borderWidth="1px"
                            margin="2"
                            padding="2"
                        >
                            {user.isEditing ? (
                                <>
                                    <Input
                                        size="sm"
                                        marginBottom="2"
                                        value={user.nome}
                                        onChange={(e) => handleSaveEdit(index, "nome", e.target.value)}
                                    />
                                    <Input
                                        size="sm"
                                        marginBottom="2"
                                        value={user.idade}
                                        onChange={(e) => handleSaveEdit(index, "idade", e.target.value)}
                                    />
                                    <Button
                                        bg="green.600"
                                        _hover={{ bg: "green.700" }}
                                        onClick={() => handleEditUser(index)}
                                    >
                                        Salvar
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <div>
                                        <p>Nome: {user.nome}</p>
                                        <p>Idade: {user.idade}</p>
                                    </div>
                                    <Button
                                        color="blue.700"
                                        _hover={{ color: "blue.500" }}
                                        onClick={() => handleEditUser(index)}
                                    >
                                        <Edit3 />
                                    </Button>
                                    <Button
                                        color="red.700"
                                        _hover={{ color: "red.500" }}
                                        onClick={() => handleDeleteUser(index)}
                                    >
                                        <Trash2 />
                                    </Button>
                                </>
                            )}
                        </Box>
                    ))}
                </Box>
            </Flex>
        </Box>
    );
}

export default AddUser;
