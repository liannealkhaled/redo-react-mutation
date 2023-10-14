import instance from ".";

const GetAllPets = async () => {
  const res = await instance.get(`/pet`);
};
