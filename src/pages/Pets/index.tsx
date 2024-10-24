import { useContext } from "react";
import Header from "../../components/Header";
import { UserContext } from "../../providers/UserProvider";

export default function Pets() {

    const { user } = useContext(UserContext)

    return(
        <div className="flex flex-col-reverse bg-lightNeutral w-full">
            <Header/>

            {
                user &&
                
                <div className="flex flex-col gap-16 w-[95%] max-w-[1000px] m-auto pt-[10vh] min-h-[100vh] md:pl-14 pb-32">
                        
                </div>
            }
        </div>
    )
}