# Blog Site

This is a simple blog site built as a practice project to learn **React** and **Appwrite**. It allows users to register, log in, create, update, and delete blog posts, as well as upload and preview images.

---

## 🚀 Features

- 🔐 User authentication (signup & login)
- 📝 Create and update blog posts
- 🗑️ Delete blog posts
- 📤 Upload and preview images using Appwrite Storage
- 🔍 Get individual post details
- 📃 List all active posts

---

## 🛠 Tech Stack

- ⚛️ React.js
- 💨 Tailwind CSS
- ☁️ Appwrite (Auth, Database, Storage)
- ⚡ Vite (for fast development)

---

## 📦 Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/blog-site.git
   cd blog-site
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```

---

## 🧰 Appwrite Setup (Required)

To run this project, you'll need to set up your own Appwrite backend:

- 🆓 **Create a free Appwrite account** at [https://appwrite.io](https://appwrite.io) and start a new project.
- ⚙️ **Enable the required APIs**:
  - 🔐 Auth
  - 🗄️ Database
  - ☁️ Storage
- 🗃️ **Create a Database** and note its `Database ID`.
- 📁 **Create a Collection** inside the database (e.g., `"Posts"`) with necessary attributes like `title`, `content`, etc., and note the `Collection ID`.
- 🖼️ **Create a Storage Bucket** for image uploads and note its `Bucket ID`.
- 🆔 **Get your Project ID** and **API Endpoint** from your Appwrite project settings.
- 📝 **Update your `.env` file** in the root of your project with these values:

---

## ⚙️ Environment Configuration

1. Create a `.env file` in the `root directory` and add the following:

```env
VITE_APPWRITE_URL="https://YOUR_APPWRITE_ENDPOINT/v1"
VITE_APPWRITE_PROJECT_ID="YOUR_PROJECT_ID"
VITE_APPWEITE_DATABASE_ID="YOUR_DATABASE_ID"
VITE_APPWEITE_COLLECTION_ID="YOUR_COLLECTION_ID"
VITE_APPWEITE_BUCKET_ID="YOUR_BUCKET_ID"
VITE_TINEYMCE_API_KEY="YOUR_TINEYMCE_API_KEY"

```

2. Create a `conf.js` file inside the `src/conf/` directory with the following structure:

```js
const conf = {
  appwriteUrl: "https://cloud.appwrite.io/v1",
  appwriteProjectId: "your_project_id",
  appwriteDatabaseId: "your_database_id",
  appwriteCollectionId: "your_collection_id",
  appwriteBucketId: "your_bucket_id",
  tineymceapikey: "your_tineymce_api_key",
};
export default conf;
```

---

## 🎯 Learning Objectives

- 🔗 How to connect React with Appwrite
- 🛠️ Performing CRUD operations using Appwrite Database
- 🔐 Handling authentication and sessions
- 📁 Uploading and managing files
- 🎨 Building UI with Tailwind CSS
- 🧩 Managing component and service structure in a real project

---

## 🚧 Future Improvements

- 💬 Add a comment section to blog posts
- ✍️ Integrate a rich text editor (like TipTap or Quill)
- 📑 Pagination for blog listing
- 🚀 Deploy the project to Netlify or Vercel

---
