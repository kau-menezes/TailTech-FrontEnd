import { useContext } from "react"
import Header from "../../components/Header"
import { UserContext } from "../../providers/UserProvider"
import ProductCard from "./components/ProductCard"

export const Home = () => {

    const { user } = useContext(UserContext)

    return (
        <div className="flex flex-col-reverse bg-lightNeutral w-full">
            <Header/>

            {
                user &&
                
                <div className="flex flex-col gap-16 w-[95%] max-w-[1000px] m-auto pt-[10vh] min-h-[100vh] md:pl-14 pb-32">
                    <h1 className="text-3xl font-semibold text-fontColor">Welcome, {user.username}!</h1>

                    <div className="bg-mainPurple relative pt-16 px-10 pb-48 rounded-lg shadow-xl">
                        <h1 className="text-5xl font-semibold text-white">Your Products</h1>
                        <img src="/assets/img/girl3.png" className="w-64 right-8 lg:w-auto lg:block absolute bottom-0 lg:right-24 z-50" />
                    </div>

                    <div className="grid grid-cols-3 gap-8">
                        <div className="col-span-3 md:col-span-1">
                            <ProductCard image="/assets/img/passcontrol.png" title="PassControl" link="/pass-control"/>
                        </div>
                        <div className="col-span-3 md:col-span-1">
                            <ProductCard image="/assets/img/smartfeeder.png" title="SmartFeeder"/>
                        </div>
                    </div>

                </div>
            }
        </div>
    )
}