import { getFavorites } from "@/components/data/CustomerData";
import Favorites from "@/components/Favorites";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
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

                <div className="
                    shadow-inner shadow-zinc-600 px-2 py-8 rounded-xl bg-stone-100
                    ">
                    { userEmail? <Favorites email={userEmail} /> : <></>
                    }
                    {/*<TileButton id={0} animDelay={100} />
                    <TileButton id={1} animDelay={300} />
                    <TileButton id={2} animDelay={500} />
                    <TileButton id={3} animDelay={700} />
                    <TileButton id={4} animDelay={900} />
                    <TileButton id={5} animDelay={1100} />
                    <TileButton id={6} animDelay={1300} /> */}

                    
                </div>

            </MaxWidthWrapper>
        </div>

    );
}

export default Home