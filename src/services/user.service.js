import rootInstance from "./utilsService/rootInstance";

const getPublicContent = () => {
  return rootInstance.get("/all");
};

const getUserById =  async (id) => {
  return await rootInstance.get("user/" + id);
}

const getUserBoard = () => {
  return rootInstance.get("/user");
};

const getModeratorBoard = () => {
  return rootInstance.get("/mod");
};

const getAdminBoard = () => {
  return rootInstance.get("/admin");
};

const readUserProfile = (user) => {
  return rootInstance.post("/user/get-by-user", user);
};

const joinGroup = (groupId, userId) => {
  return rootInstance.post("/user/join-group", {groupId: groupId, userId: userId});
}

const UserService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
  readUserProfile,  
  joinGroup,
  getUserById
};

export default UserService;
