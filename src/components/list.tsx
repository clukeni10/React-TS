import { Box, Input, Button } from "@chakra-ui/react";
import { Trash2, Edit3 } from "lucide-react";
import { User } from "./types/user";

type UserListProps = {
  displayUsers: (User & { isEditing?: boolean })[];
  setDisplayUsers: React.Dispatch<React.SetStateAction<(User & { isEditing?: boolean })[]>>;
};

const UserList = ({ displayUsers, setDisplayUsers }: UserListProps) => {
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

  const handleDeleteUser = (index: number) => {
    setDisplayUsers(displayUsers.filter((_, i) => i !== index));
  };

  return (
    <Box display="flex" flexWrap="wrap" justifyContent="space-evenly">
      {displayUsers.map((user, index) => (
        <Box key={index} bg="white" w="150px" borderWidth="1px" margin="2" padding="2">
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
              <Button bg="green.600" _hover={{ bg: "green.700" }} onClick={() => handleEditUser(index)}>
                Salvar
              </Button>
            </>
          ) : (
            <>
            
              <p>Nome: {user.nome}</p>
              <p>Idade: {user.idade}</p>
              <Button color="blue.700" _hover={{ color: "blue.500" }} onClick={() => handleEditUser(index)}>
                <Edit3 />
              </Button>
              <Button color="red.700" _hover={{ color: "red.500" }} onClick={() => handleDeleteUser(index)}>
                <Trash2 />
              </Button>
            </>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default UserList;
