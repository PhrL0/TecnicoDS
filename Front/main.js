import loginService from "./src/service/loginService.js";
import localStorageService from "./src/service/localStorageService.js";

    const token = loginService.getTokenFromURL();

    if (!loginService.isValidSession(token)) {
      window.location.href = "login.html";
    } else {
      const session = localStorageService.getUserSession(token);
      document.getElementById("userInfo").innerText = `Logado como: ${session.login}`;
    }

    document.getElementById("logoutBtn").addEventListener("click", logout);