# 📝 Blog Site

This is a simple blog site built as a practice project to learn React and Appwrite. It allows users to register, log in, create, update, and delete blog posts, as well as upload and preview images.

## 🚀 Features

- User authentication (signup & login)
- Create and update blog posts
- Delete posts
- Upload and preview images using Appwrite Storage
- Get individual post details
- List all active posts

## 🛠 Tech Stack

- ⚛️ React.js
- 💨 Tailwind CSS
- ☁️ Appwrite (Auth, Database, Storage)
- ⚡ Vite (for fast development)

## ⚙️ Environment Configuration

Create a `conf.js` file inside the `src/conf/` directory with the following structure:

```js
const conf = {
  appwriteUrl: "https://cloud.appwrite.io/v1",
  appwriteProjectId: "your_project_id",
  appwriteDatabaseId: "your_database_id",
  appwriteCollectionId: "your_collection_id",
  appwriteBucketId: "your_bucket_id",
};

export default conf;
```
