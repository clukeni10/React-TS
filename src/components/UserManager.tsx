import { useState, useEffect } from "react";
import { Box, Flex, HStack, Button } from "@chakra-ui/react";
import { CirclePlus, Save, Trash2 } from "lucide-react";
import UserForm from "./form";
import UserList from "./list";
import * as UserRepository from "./Repository/userRepository";
import { User } from "./types/user";

function AddUser() {
  const [users, setUsers] = useState<User[]>([{ nome: "", idade: "" }]);
  const [displayUsers, setDisplayUsers] = useState<User[]>([]);

  useEffect(() => {
    async function loadUsers() {
      const dbUsers = await UserRepository.fetchUsers();
      setDisplayUsers(dbUsers);
    }
    loadUsers();
  }, []);

  const handleAddUser = async () => {
    try {
      for (const user of users) {
        await UserRepository.addNewUser(user);
      }
      const updatedUsers = await UserRepository.fetchUsers();
      setDisplayUsers(updatedUsers);
      setUsers([{ nome: "", idade: "" }]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      alert(error.message);
    }
  };

  const handleDeleteAllUsers = async () => {
    await UserRepository.deleteAllUsers();
    setDisplayUsers([]);
  };

  return (
    <Box>
      <Flex direction="column" align="center" justifyContent="center" h="100vh" bg="white">
        <UserForm users={users} setUsers={setUsers} />
        <HStack marginTop="2" gap="6">
          <Button
            bg="blue.600"
            _hover={{ bg: "blue.700" }}
            onClick={() => setUsers([...users, { nome: "", idade: "" }])}
          >
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
