import "firebase/compat/firestore";
import {firestoreDatabase} from "./firestore";

const COLLECTION_PRODUCTS = "products";

export async function getProductsFromDb() {
    if (!firestoreDatabase) return [];

    //const result = await firestoreDatabase.collection(COLLECTION_PRODUCTS).get();
    const result = await firestoreDatabase.collection(COLLECTION_PRODUCTS)
        .orderBy("category", "asc")
        .orderBy("sequence", "asc")
        .get();
    if (result.empty) return [];

    const data = result.docs.map(doc => ({...doc.data(), id: doc.id}));
    return [...new Set(data.map(p => p.category))].map(c => ({ name: c, products: data.filter(p => p.category===c) }));
}