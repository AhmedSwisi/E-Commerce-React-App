import { db } from "../firebase/firebase";
import { getDownloadURL, getStorage, ref} from "firebase/storage";
import {collection, getDocs, getDoc, query, where, doc, limit, serverTimestamp, addDoc, setDoc, updateDoc, documentId, deleteField} from "firebase/firestore";


const storage = getStorage();

export const getImage = async (location) =>{
    const  imageUrl = await getDownloadURL(ref(storage, location))
    return imageUrl
}  

export const getUser = async (userID) => {
    const q = query(collection(db, "users"), where("uid", "==", userID), limit(1))
    const querySnapshot = await getDocs(q)
    const docs = querySnapshot.docs.map((doc) => ({...doc.data(),id:doc.id }))
    const doc = docs[0]
    return doc
}

export const getProducts = async (categoryFilter, priceRangeFilter) => {
    if (categoryFilter.currentCategory === 'default'){
        const q = query(collection(db,"products"), 
        where("price", ">=", priceRangeFilter.priceRangeFilter[0]),
        where("price", "<=", priceRangeFilter.priceRangeFilter[1]))
        const querySnapshot =  await getDocs(q)
        const docs = querySnapshot.docs.map((doc) => ({...doc.data(), id:doc.id}))
        return docs
    } else{
        const q = query(collection(db,"products"), where("category", "==", categoryFilter.currentCategory),
        where("price", ">=", priceRangeFilter.priceRangeFilter[0]),
        where("price", "<=", priceRangeFilter.priceRangeFilter[1])
        )
        const querySnapshot =  await getDocs(q)
        const docs = querySnapshot.docs.map((doc) => ({...doc.data(), id:doc.id}))
        return docs
    }
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
    const q = query(collection(db, "carts"), where(documentId(),"==", userID),limit(1))
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

export const getCartProduct = async (productID) => {
    const q = query(collection(db, "products"), where("productID", "==", productID))
    const querySnapshot = await getDocs(q)
    const docs = querySnapshot.docs.map((doc) => ({...doc.data(),id:doc.id }))
    const doc = docs[0]
    return doc
}

export const addReview = async (rating, review, userID, productID) => {
    parseInt(rating)
    await addDoc(collection(db,"reviews"),{
        addedAt: serverTimestamp(),
        productID,
        rating,
        review,
        userID
    })
}

export const setProductQuantity = async (userID, productID, quantity) => {
    const cartRef = doc(db, "carts",userID)
    const obj = {[productID]: quantity}
    await updateDoc(cartRef, obj)
}

export const deleteProductFromCart = async (userID, productID) => {
    const cartRef = doc(db, "carts",userID)
    await updateDoc(cartRef, {
        [productID]:deleteField()
    })
}

export const setProductAverageRating = async (productID, reviews, currentRating) => {
    
    const average = reviews.reduce(function (acc, obj) { return acc + parseInt(obj.rating); }, currentRating) / reviews.length 
    parseInt(average)
    updateDoc(doc(db, "products", productID), {
        rating: average
    })
}

