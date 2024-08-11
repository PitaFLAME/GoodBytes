export const foods = [
    {/* 0 */ name: "Corn Dogs", image: "corndog" },
    {/* 1 */ name: "Sandwiches", image: "sandwich" },
    {/* 2 */ name: "Acai Bowls", image: "acai" },
    {/* 3 */ name: "Tacos", image: "tacos" },
    {/* 4 */ name: "Pad Thai", image: "padthai" },
    {/* 5 */ name: "Steaks", image: "steak" },
    {/* 6 */ name: "Pastas", image: "pasta" },
    {/* 7 */ name: "Pizza", image: "pizza" },
    {/* 8 */ name: "Pies", image: "pies" },
    {/* 9 */ name: "Quinoa Bowls", image: "quinoa" },
    {/* 10 */ name: "Salads", image: "salad" },
    {/* 11 */ name: "Sushi", image: "sushi" },
    {/* 12 */ name: "Eggs" , image: "eggs" },
    {/* 13 */ name: "Cakes", image: "cake" },
    {/* 14 */ name: "Pancakes", image: "pancakes" },
    {/* 15 */ name: "Waffles", image: "waffles" },
    {/* 16 */ name: "Donuts", image: "donuts" },
    {/* 17 */ name: "Cookies", image: "cookies" },
    {/* 18 */ name: "Burgers", image: "burgers" },
    {/* 19 */ name: "Hot Dogs", image: "hotdogs" },
    {/* 20 */ name: "Fries", image: "fries" },
    {/* 21 */ name: "Onion Rings", image: "onionrings" },
    {/* 22 */ name: "Fried Chicken", image: "friedchicken" },
    {/* 23 */ name: "Fish", image: "fish" },
    {/* 24 */ name: "Nachos", image: "nachos" },
    {/* 25 */ name: "Curry", image: "curry" },
    {/* 26 */ name: "Burritos", image: "burritos" },


];


export const getFood = (num: number) => { return foods[num]; }

export const getFoods = (nums: number[]) => { return nums.map(num => foods[num]); }

export const buildImagePaths = (num: number) => {
    return (
        [
            "/assets/marketing-images/" + foods[num].image + "/" + foods[num].image + "1.png",
            "/assets/marketing-images/" + foods[num].image + "/" + foods[num].image + "2.png",
            "/assets/marketing-images/" + foods[num].image + "/" + foods[num].image + "3.png",
        ].sort(() => Math.random() - 0.5)
    )
}