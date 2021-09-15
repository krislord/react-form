import httpRequest from "./httpRequest";

export function getUsers(url) {
  return httpRequest.get(url);
}

export function createUser(body) {
  return httpRequest.post(process.env.URL, body);
}

const userService = {
  getUsers,
  createUser,
};

export default userService;
