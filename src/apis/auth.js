import axios from "axios";

function join(user) {
  return axios.post("/member/join2", {
    // user = {id:xxx, name:xx, password:xxx, role:xx, email:xx@xx}
    mid: user.id,
    mname: user.name,
    mpassword: user.password,
    mrole: user.role,
    memail: user.email,
  });
}

function login(user) {
    // user = {id:xxx, password:xxx}
    return axios.post("/member/login1", `mid=${user.id}&mpassword=${user.password}`)
}

export default {
  join,
  login,
};
