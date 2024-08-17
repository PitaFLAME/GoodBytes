export const getFavorites = async (email: string) => {
    const response = await fetch(`../../api/customer?email=${email}&type=favorites`);
    const data = await response.json();
    return data.data;
};

export const getRecents = async (email: string) => {
    const response = await fetch(`../../api/customer?email=${email}&type=recents`);
    const data = await response.json();
    return data.data;
};



const customerData = [
    { email:"pita.sherwood@protonmail.com", favorites: [1,5,6], recents: [1,4,5] }


]
