import conf from "../conf/conf.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
  // Creats user post with required information
  async createPost(title, slug, content, featuredImage, status, userId) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug, // using slug insted of document ID
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.error("Service -> createPost():", error);
      throw new Error("Failed to create user post.", { cause: error });
    }
  }
  // Updates user post with required information
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug, // using slug insted of document ID
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.error("Service -> updatePost():", error);
      throw new Error("Failed to update user post.", { cause: error });
    }
  }
  // Delete user's post with required information
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug // using slug insted of document ID
      );
      return true;
    } catch (error) {
      console.error("Service -> deletePost():", error);
      throw new Error("Failed to delete user post.", { cause: error });
    }
  }
  // Gets one post using the given slug and returns its details
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug // using slug insted of document ID
      );
    } catch (error) {
      console.error("Service -> getPost():", error);
      throw new Error("Failed to get user post.", { cause: error });
    }
  }
  // Returns all posts currently marked as active
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.error("Service -> getPosts():", error);
      throw new Error("Failed to get all, user's active post.", {
        cause: error,
      });
    }
  }

  //- File upload services (can be in defferent file)
  // Uploads a file to Appwrite storage using a unique ID.
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.error("Service -> uploadFile():", error);
      throw new Error("Failed to upload file.", {
        cause: error,
      });
    }
  }
  // Deletes a file from Appwrite storage using its unique ID.
  async deleteFile(fileId) {
    try {
      return await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
    } catch (error) {
      console.error("Service -> deleteFile():", error);
      throw new Error("Failed to delete file.", {
        cause: error,
      });
    }
  }
  // Retrieves a preview for a file stored in Appwrite using its unique ID.
  getFilePreview(fileId) {
    try {
      return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
    } catch (error) {
      console.error("Service -> getFilePreview():", error);
      throw new Error("Failed to get file preview.", {
        cause: error,
      });
    }
  }
}
const service = new Service();
export default service;
