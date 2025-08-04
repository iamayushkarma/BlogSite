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

  // Create new user account and auto-login
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      return userAccount ? this.login({ email, password }) : null;
    } catch (error) {
      if (import.meta.env.DEV)
        console.error("AuthService.createAccount:", error);
      return null;
    }
  }

  // Login user
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      if (import.meta.env.DEV) console.error("AuthService.login:", error);
      return null;
    }
  }

  // Get currently logged-in user
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      // Only show detailed error if in dev mode
      if (import.meta.env.DEV) console.warn("No user session found.");
      return null;
    }
  }

  // Logout from all sessions
  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      if (import.meta.env.DEV) console.error("AuthService.logout:", error);
    }
  }
}

const authService = new AuthService();
export default authService;
