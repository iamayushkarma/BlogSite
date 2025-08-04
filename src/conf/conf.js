const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteCollectionId: String(import.meta.env.VITE_APPWEITE_COLLECTION_ID),
  appwriteBucketId: String(import.meta.env.VITE_APPWEITE_BUCKET_ID),
  tineymceapikey: String(import.meta.env.VITE_TINEYMCE_API_KEY),
};
export default conf;
