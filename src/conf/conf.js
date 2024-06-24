// ye hmlog isiye kr rhe h kyuki hr jgh jake ye bolna import.meta.env.VITE.. ye ho skta h kbhi lbhi env varible load hi na ho 
// to yha pe application crash ho jta h kyuki value hmesa string m hona chahiye
// to isiliye usko resolve krne k lie hmlog yha pe key value pair bnyge jisme hmlog ensure krege ki value string hi ho
const conf = {
    appwriteURL: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),



    
}

export default conf