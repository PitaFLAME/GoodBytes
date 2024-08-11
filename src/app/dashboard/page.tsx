import { getFavorites } from "@/components/data/CustomerData";
import Favorites from "@/components/Favorites";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Recents from "@/components/Recents";
import TileButton from "@/components/TileButton";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Home = async () => {
    
    const { getUser } = getKindeServerSession()
    const user = await getUser()
    const userEmail = user? user.email : null


    return (
        <div>
            <MaxWidthWrapper>
                <div className="flex w-full h-12 my-4">
                    <h1 className="">
                        Dashboard
                    </h1>
                </div>

                <div className="shadow-inner shadow-zinc-600 px-2 py-8 rounded-xl bg-stone-100">
                    { userEmail? <Favorites email={userEmail} /> : <></> }
                </div>
                <div className="shadow-inner shadow-zinc-600 px-2 py-8 mt-8 rounded-xl bg-stone-100">
                    { userEmail? <Recents email={userEmail} /> : <></> }
                </div>
                

            </MaxWidthWrapper>
        </div>

    );
}

export default Home