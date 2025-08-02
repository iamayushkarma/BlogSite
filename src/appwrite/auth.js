import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }
  // Creates a new user account using email, password, and name
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      // If account creation is successful, proceed with auto-login
      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.error("AuthService -> createAccount():", error);
      throw new Error("Account creation failed.", { cause: error });
    }
  }
  // Creating user login method
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.error("AuthService -> login():", error);
      throw new Error("User login failed.", { cause: error });
    }
  }
  // Verifying user login status to conditionally render UI
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.error("AuthService -> getCurrentUser():", error);
      throw new Error("Failed to fetch current user.", { cause: error });
    }
  }
  // Performs user logout by deleting all active sessions
  async logout() {
    try {
      await this.account.deleteSession();
    } catch (error) {
      console.error("AuthService -> logout():", error);
      throw new Error("Failed to logout current user.", { cause: error });
    }
  }
}
const authService = new AuthService();
export default authService;
