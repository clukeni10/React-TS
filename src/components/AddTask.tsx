import { useState, useEffect } from "react";
import { Box, Flex, HStack, Button } from "@chakra-ui/react";
import { CirclePlus, Save, Trash2 } from "lucide-react";
import Header from "../components/header";
import UserForm from "../components/form";
import UserList from "../components/list";
import {  addUser, getUsers, deleteUser } from "./bd";
import {User} from './types/user'

function AddUser() {
  const [users, setUsers] = useState<User[]>([{ nome: "", idade: "" }]);
  const [displayUsers, setDisplayUsers] = useState<User[]>([]);

  useEffect(() => {
    async function loadUsers() {
      const dbUsers = await getUsers();
      setDisplayUsers(dbUsers);
    }
    loadUsers();
  }, []);

  const handleAddUser = async () => {
    for (const user of users) {
      if (!user.nome || !user.idade) {
        return alert("Preencha todos os campos de nome e idade.");
      }
      await addUser(user);
    }
    const updatedUsers = await getUsers();
    setDisplayUsers(updatedUsers);
    setUsers([{ nome: "", idade: "" }]);
  };

  const handleDeleteAllUsers = async () => {
    for (const user of displayUsers) {
      if (user.id !== undefined) {
        await deleteUser(user.id);
      }
    }
    setDisplayUsers([]);
  };

  return (
    <Box>
      <Flex direction="column" align="center" justifyContent="center" h="100vh" bg="white">
        <Header />
        <UserForm users={users} setUsers={setUsers} />
        <HStack marginTop="2" gap="6">
          <Button bg="blue.600" _hover={{ bg: "blue.700" }} onClick={() => setUsers([...users, { nome: "", idade: "" }])}>
            <CirclePlus color="white" />
          </Button>
          <Button bg="blue.600" _hover={{ bg: "blue.700" }} onClick={handleAddUser}>
            <Save color="white" />
          </Button>
          <Button bg="red.600" _hover={{ bg: "red.700" }} onClick={handleDeleteAllUsers}>
            <Trash2 color="white" />
          </Button>
        </HStack>
        <UserList displayUsers={displayUsers} setDisplayUsers={setDisplayUsers} />
      </Flex>
    </Box>
  );
}

export default AddUser;