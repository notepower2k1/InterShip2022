import rootInstance from "./utilsService/rootInstance";
import TokenService from "./token.service";

const register = async (username, email, password) => {
	return await rootInstance.post("/auth/signup", {
		username,
		email,
		password,
	});
};

const confirm = async (token) => {
	return await rootInstance.post("/auth/confirm-account/" + token);
};

const login = async (username, password) => {
	return await rootInstance.post("/auth/signin", {
			username,
			password,
		})
		.then((response) => {
			if (response.data.accessToken) {
				TokenService.setUser(response.data);
			}
			return response.data;
		});
};

const logout = () => {
  	TokenService.removeUser();
};

const getCurrentUser = () => {
  	return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
	register,
	confirm,
	login,
	logout,
	getCurrentUser,
};

export default AuthService;

