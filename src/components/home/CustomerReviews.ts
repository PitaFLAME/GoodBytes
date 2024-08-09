import React from 'react';
import Avatar from 'react-avatar';


export const reviews = [
    {name: "Missy", stars: 3, photo: "/assets/users/user-3.png", review: 
        "I approached GoodBytes with cautious curiosity. Customizing meals online for my FlavorForge? Intriguing, especially considering how obtuse that hunk-a-junk is. The website's interface, I must admit, is surprisingly intuitive. The variety of options? Impressive, which is saying something these days. But not everything can be perfect........ let's talk about those filaments they sell – what a letdown. The ingredients often lacked the freshness and flavor you'd expect from anywhere else. But I guess that's the price you pay for being lazy on a thursday night LOL. GoodBytes shows promise but seriously needs to up its ingredient game if it wants to impress me. It's a cool concept, but let's just say there's room for improvement."},
    {name: "Brooke", stars: 3, photo: "/assets/users/user-2.png", review: 
        "As a mom of four with a husband who’s clearly got a PhD in disappearing acts, I thought GoodBytes was my ticket to a simpler life. The idea of customizing meals and having them 3D-printed by the FlavorForge sounded like a dream—until I realized I’d accidentally signed up for a dinner roulette. Sometimes the meals come out looking like they’ve been designed by an avant-garde artist having a bad day. My kids have started calling it “Mystery Meat Mondays” because, let’s face it, who knows what we’re actually eating. The FlavorForge must think it’s auditioning for a sci-fi show, because the food often looks like it belongs on a spaceship rather than my dining table. And don’t get me started on delivery. The meals show up when they feel like it, which is great if you love improvising dinner while your kids are hanging off the ceiling like monkeys. I’ve had to pretend cereal is a gourmet meal more times than I’d like to admit. In short, if you enjoy playing food roulette and are cool with meals that might double as modern art, go ahead and give GoodBytes a try. If you prefer something a little less experimental, you might be better off sticking with takeout or ordering a pizza that doesn’t come with a side of “what on earth is this?"},
    {name: "Hunter", stars: 1, photo: "", review: 
        "Verily, I find myself most confounded by this GoodBytes website. Methought I was purchasing simple victuals, but alas, 'tis revealed one requires a contrivance known as a FlavorForge to make any sense of it. I spent a fair sum customizing these meals, only to discover I can do naught with them sans this infernal device. 'Tis like trying to play a phonograph record on a modern contraption. Such newfangled nonsense is beyond my ken. Would that they made it plainer what one was entangling oneself with. Not for this old soul, I say."},
    {name: "Ian", stars: 5, photo: "", review:
        "OMG, GoodBytes is bussin' frfr 😍 I can't believe how easy it is to get my meals and then print them with my printer thingy. The website is super intuitive ngl and the options are... alot ... 😂 no cap but I love playing around with different ingredients and seeing my creations come to life. It's like a foodie dream. It's so skibidi because I don't have to stress about meal prep ever on god. Everything's ready quick, and it tastes amazaaang. Seriously, if you haven't tried GoodBytes yet, you missing out. ⭐⭐⭐⭐⭐"},
    {name: "Alistair", stars: 5, photo: "", review: 
        "GoodBytes is really something, man. A buddy of mine told me I should check it out since my mom has this toaster thing, and it’s been amazing. Printing food from my desk is like, an art form. The options are so many, and the process is really easy to get. I love being able to create whatever I want whenever I want it."},
    //{name: "Hannah", stars: 5, photo: "", review:
    //    ""}

    ];

export const getReviews = (num: number) => {
    const uniqueIndexes = new Set<number>();

    while (uniqueIndexes.size < num) {
        const randomIndex = Math.floor(Math.random() * (reviews.length));
        uniqueIndexes.add(randomIndex);
    }

    return Array.from(uniqueIndexes);
};


export const getReview = (i: number) => {
    reviews[i].photo = fixAvatar(i);
    return reviews[i];
}

const fixAvatar = (i: number) => {
    if (reviews[i].photo === "") {
        return `https://ui-avatars.com/api/?name=${encodeURIComponent(reviews[i].name)}&size=40&rounded=true`;
    } else {
        return reviews[i].photo;
    }
};