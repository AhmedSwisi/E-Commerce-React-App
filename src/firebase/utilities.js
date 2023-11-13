import { db } from "../firebase/firebase";
import { getDownloadURL, getStorage, ref} from "firebase/storage";
import {collection, getDocs} from "firebase/firestore";


const storage = getStorage();

export const getImage = async (location) =>{
    const  imageUrl = await getDownloadURL(ref(storage, location))
    return imageUrl
}  

export const getProducts = async () => {
    const querySnapshot =  await getDocs(collection(db, "products"))
    const docs = querySnapshot.docs.map((doc) => ({...doc.data(), id:doc.id}))
    return docs
}