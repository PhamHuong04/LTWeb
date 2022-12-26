import API from "../config/axios";
import { IPet } from "../lib/interface";
export const getPetList = async (): Promise<IPet[]> => {
  const res = await API.get("");
  return res.data;
};

export const getPet = async (id: number): Promise<IPet> => {
  const res = await API.get(`/${id}`);
  return res.data;
};

export const addPet = async (
  data: IPet
): Promise<IPet> => {
  try {
    const res = await API.post("", data);
    return res.data;
  } catch (err) {
    throw new Error("Add new Pet failed");
  }
};

export const editPet = async (id: any, pet: IPet) => {
  try {
    const res = await API.patch(`/${id}`, {
      name: pet.name,
      species: pet.species,
      age: pet.age,
      neutered: pet.neutered,
    });
    return res.data;
  } catch (err) {
    throw new Error("Edit Staff failed");
  }
};

export const deletePet = async (id: number) => {
  try {
    const res = await API.delete(`/${id}`);
    return res.data;
  } catch (err) {
    throw new Error("Delete Pet failed");
  }
};

