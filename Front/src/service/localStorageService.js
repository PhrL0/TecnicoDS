import hashingUtility from "../utils/hashingUtility"

const localStorageService = {
    saveUserSession(login,password,token){
        const user = {
            "login":login,
            "password":password
        }

        localStorage.setItem(token,user)
    },
    getUserSession(token){
        return localStorage.getItem(token);
    }

}

export default localStorageService;