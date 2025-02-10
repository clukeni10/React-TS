import { User } from "../types/user";
import * as UserDao from "../DAO/userDAO";

export const fetchUsers = async (): Promise<User[]> => {
  return await UserDao.getAllUsers();
};

export const addNewUser = async (user: User): Promise<void> => {
  if (!user.nome || !user.idade) {
    throw new Error("Preencha todos os campos obrigatórios.");
  }
  await UserDao.saveUser(user);
};

export const deleteUserById = async (id: number): Promise<void> => {
  await UserDao.removeUserById(id);
};

export const deleteAllUsers = async (): Promise<void> => {
  await UserDao.clearAllUsers();
};
