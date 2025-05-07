import setupAxiosConfig from "../config/axiosConfig"
import hashingUtility from "../utils/hashingUtility";
import localStorageService from "./localStorageService";
const loginService = {
    async checkUserAuth(login,password){
        try{
            const instance = setupAxiosConfig.axiosInit();

            const token = hashingUtility.generateSecureHash(login,password);
            const response = await instance.post('/login',{
                "login":login,
                "password":password
            });

            if(response.status === 200){
                localStorageService.saveUserSession(login,password,token);
            }
        } catch(err){
            console.error('Error:',err);
        }
    }
}