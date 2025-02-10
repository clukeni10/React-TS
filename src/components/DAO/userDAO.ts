import { User } from "../types/user";

const users: User[] = [];

export const getAllUsers = async (): Promise<User[]> => {
  return [...users];
};

export const saveUser = async (user: User): Promise<void> => {
  users.push({ ...user, id: users.length + 1 });
};

export const removeUserById = async (id: number): Promise<void> => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    users.splice(index, 1);
  }
};

export const clearAllUsers = async (): Promise<void> => {
  users.length = 0;
};
