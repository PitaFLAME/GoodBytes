import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import TileButton from "@/components/TileButton";

export default function Home() {
    return (
        <div>
            <MaxWidthWrapper>
                
                <h1>Dashboard</h1>

                <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 md:gap-2 sm:gap-4 xs:gap-4">

                    <TileButton title="Sandwiches" image="../../../public/assets/dishes/cheeseburger.png" />
                    <TileButton title="Sandwiches" image="../../../public/assets/dishes/cheeseburger.png" />
                    <TileButton title="Sandwiches" image="../../../public/assets/dishes/cheeseburger.png" />
                    <TileButton title="Sandwiches" image="../../../public/assets/dishes/cheeseburger.png" />
                    <TileButton title="Sandwiches" image="../../../public/assets/dishes/cheeseburger.png" />
                    <TileButton title="Sandwiches" image="../../../public/assets/dishes/cheeseburger.png" />
                    <TileButton title="Sandwiches" image="../../../public/assets/dishes/cheeseburger.png" />
                </div>

                <img src="../../../public/assets/dishes/cheeseburger.png" />

            </MaxWidthWrapper>
        </div>

    );
}