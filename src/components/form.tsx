import { Flex, Input, Button } from "@chakra-ui/react";
import { Trash2 } from "lucide-react";
import { User } from "./types/user";

type UserFormProps = {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
};

const UserForm = ({ users, setUsers }: UserFormProps) => {
  const handleInputChange = (index: number, field: keyof User, value: string) => {
    const newUsers = [...users];
    newUsers[index][field] = value;
    setUsers(newUsers);
  };

  const handleDeleteInput = (index: number) => {
    if (index === 0) {
      alert("O input base não pode ser apagado.");
      return;
    }
    setUsers(users.filter((_, i) => i !== index));
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      {users.map((user, index) => (
        <Flex key={index} align="center" gap="2" marginBottom="4">
          <Input
            variant="outline"
            w="200px"
            size="sm"
            placeholder="Digite o seu nome"
            value={user.nome}
            color= "black"
            onChange={(e) => handleInputChange(index, "nome", e.target.value)}
          />
          <Input
            variant="outline"
            w="200px"
            size="sm"
            placeholder="Digite a sua idade"
            value={user.idade}
            color= "black"
            onChange={(e) => handleInputChange(index, "idade", e.target.value)}
          />
          {index > 0 && (
            <Button color="red.700" bg="white" _hover={{ color: "red.500" }} onClick={() => handleDeleteInput(index)}>
              <Trash2 />
            </Button>
          )}
        </Flex>
      ))}
    </form>
  );
};

export default UserForm;
