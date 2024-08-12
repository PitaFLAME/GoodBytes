



const customerData = [
    { email:"pita.sherwood@protonmail.com", favorites: [1,5,6], recents: [1,4,5] }


]


export const getFavorites = (email: string) => { 
    const favs = customerData.find(cust => cust.email === email)?.favorites;
    return favs ? favs : [];
}

export const getRecents = (email: string) => { 
    const recents = customerData.find(cust => cust.email === email)?.recents;
    return recents ? recents : [];
}