import { db } from "../firebase/firebase";
import { getDownloadURL, getStorage, ref} from "firebase/storage";
import {collection, getDocs, query, where} from "firebase/firestore";


const storage = getStorage();

export const getImage = async (location) =>{
    const  imageUrl = await getDownloadURL(ref(storage, location))
    return imageUrl
}  

export const getProducts = async (categoryFilter, priceRangeFilter) => {
    console.log(categoryFilter, "CF from getProducts")
    console.log(priceRangeFilter, "PR from getProducts")
    const q = query(collection(db,"products"), where("category", "==", categoryFilter.currentCategory),
    where("price", ">=", priceRangeFilter.priceRangeFilter[0]),
    where("price", "<=", priceRangeFilter.priceRangeFilter[1])
    )
    const querySnapshot =  await getDocs(q)
    const docs = querySnapshot.docs.map((doc) => ({...doc.data(), id:doc.id}))
    return docs
}

