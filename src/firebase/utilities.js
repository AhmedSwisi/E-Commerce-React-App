import { db } from "../firebase/firebase";
import { getDownloadURL, getStorage, ref} from "firebase/storage";
import {collection, getDocs, getDoc, query, where, doc, limit} from "firebase/firestore";


const storage = getStorage();

export const getImage = async (location) =>{
    const  imageUrl = await getDownloadURL(ref(storage, location))
    return imageUrl
}  

export const getProducts = async (categoryFilter, priceRangeFilter) => {
    const q = query(collection(db,"products"), where("category", "==", categoryFilter.currentCategory),
    where("price", ">=", priceRangeFilter.priceRangeFilter[0]),
    where("price", "<=", priceRangeFilter.priceRangeFilter[1])
    )
    const querySnapshot =  await getDocs(q)
    const docs = querySnapshot.docs.map((doc) => ({...doc.data(), id:doc.id}))
    return docs
}

export const getProduct = async (productID) => {
    const docRef = doc(db, "products", productID)
    const docSnap = await getDoc(docRef)
    const docData = docSnap.data()
    return docData
}

export const getDiscountInfo = async (discountCode) => {
    const q = query(collection(db, "discounts"), where("code","==", discountCode),limit(1))
    const querySnapshot = await getDocs(q)
    const docs = querySnapshot.docs.map((doc) => ({...doc.data(),id:doc.id }))
    const doc = docs[0]
    return doc
}

export const getCart = async (userID) => {
    const q = query(collection(db, "carts"), where("userID","==", userID),limit(1))
    const querySnapshot = await getDocs(q)
    const docs = querySnapshot.docs.map((doc) => ({...doc.data(),id:doc.id }))
    const doc = docs[0]
    return doc
}

export const getProductReviews = async (productID) => {
    const q = query(collection(db, "reviews"), where("productID", "==",productID ))
    const querySnapshot = await getDocs(q)
    const docs = querySnapshot.docs.map((doc) => ({...doc.data(),id:doc.id }))
    return docs
}

export const getUser = async (userID) => {
    
}

