import { getFavorites } from "@/components/data/CustomerData";
import Favorites from "@/components/dashboard/Favorites";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Recents from "@/components/dashboard/Recents";
import Suggested from "@/components/dashboard/Suggested";
import TileButton from "@/components/dashboard/TileButton";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { getSuggested } from "@/components/data/Foods";

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
                <div className="shadow-inner shadow-zinc-600 px-2 py-8 mt-8 rounded-xl bg-stone-100">
                    <Suggested suggesteds={getSuggested(12)} />
                </div>
                

            </MaxWidthWrapper>
        </div>

    );
}

export default Home