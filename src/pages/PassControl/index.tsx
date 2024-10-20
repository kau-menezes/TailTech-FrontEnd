import Header from "../../components/Header";

export default function PassControl() {

    return(
        <div className="flex flex-col-reverse">
            <Header/>
            <main className="min-h-screen md:ml-20 py-10 mb-[10vh]  md:mb-0 px-[10%] bg-lightNeutral flex flex-col gap-4">
                <div className="flex items-center gap-3">
                    <h1 className="font-semibold text-3xl text-fontColor"> Pass Control</h1>
                    <img  className="w-[40px]" src="/assets/icon/paw-title.png"></img>
                </div>
                <div className="flex justify-between bg-white rounded-md shadow-md p-2 md:hidden">
                    <select className="w-10/12 text-fontColor" name="" id="">
                        <option className="text-fontColor" value="">Bedroom 1</option>
                        <option className="text-fontColor" value="">Bedroom 2</option>
                        <option className="text-fontColor" value="">Bedroom 3</option>
                    </select>
                    <span className="bg-darkNeutral text-fontColor px-3 py-1 rounded-md">+</span>
                </div>
                <div className="hidden md:flex mjustify-between bg-white rounded-md shadow-md p-2">
                    <div className="flex items-center text-fontColor">
                        <span className="bg-darkNeutral text-fontColor px-3 py-2 rounded-md">Bedroom 1</span>
                        <span className=" text-fontColor px-3 py-2 rounded-md">Bedroom 2</span>
                        <span className=" text-fontColor px-3 py-2 rounded-md">Bedroom 3</span>
                    </div>
                    <span className="bg-darkNeutral text-fontColor px-3 py-2 rounded-md">+</span>
                </div>
                <div className="bg-white rounded-md shadow-md p-8 md:min-h-[80vh]">
                    <h2 className="font-semibold text-2xl text-fontColor">Bedroom 1</h2>
                    <div className="flex flex-col md:flex-row-reverse mt-8 gap-4">
                        <div className="flex flex-col md:w-2/3 rounded-md shadow-md p-8">
                            <p className="font-medium text-xl text-fontColor border-b-[2px] py-2">Permission time ranges ⏰</p>
                            <div className="flex flex-col gap-8 mt-8 md:flex-row">
                                <div className="md:w-1/2">
                                    <p className="text-center text-fontColor font-medium text-base">Entrance permission</p>
                                    <div className="flex flex-col gap-4 items-center">
                                        <p className="px-8 py-4 bg-white rounded-md shadow-lg text-center w-11/12" >00:00 - 23:59</p>
                                        <p className="px-8 py-4 bg-white rounded-md shadow-lg text-center w-11/12" >12:30 - 17:50</p>
                                        <p className="bg-darkNeutral text-fontColor w-11/12 rounded-md text-center px-8 py-1">+</p>

                                    </div>
                                </div>
                                <div className="md:w-1/2">
                                    <p className="text-center text-fontColor font-medium text-base">Exit permission</p>
                                    <div className="flex flex-col gap-4 items-center">
                                        <p className="px-8 py-4 bg-white rounded-md shadow-lg text-center w-11/12" >00:00 - 23:59</p>
                                        <p className="px-8 py-4 bg-white rounded-md shadow-lg text-center w-11/12" >12:30 - 17:50</p>
                                        <p className="bg-darkNeutral text-fontColor w-11/12 rounded-md text-center px-8 py-1">+</p>
                                    </div>
                                </div>
                                <div></div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-4 md:w-1/3 md:justify-start">
                            <label className="inline-flex min-w-[44px] flex-wrap items-center justify-between cursor-pointer px-8 py-6 rounded-md shadow-lg w-11/12">
                                <img  className="w-[30px]" src="/assets/icon/paw-icon.png" alt="" />
                                <div className="">
                                    <span className="font-medium text-lg text-fontColor">Amora</span>
                                    <input type="checkbox" className="sr-only peer"></input>
                                </div>
                                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-denialRed peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark peer-checked:bg-approvalGreen shadow-inner"></div>
                            </label>
                            <label className="inline-flex min-w-[44px] flex-wrap items-center justify-between cursor-pointer px-8 py-6 rounded-md shadow-lg w-11/12">
                                <img  className="w-[30px]" src="/assets/icon/paw-icon.png" alt="" />
                                <div className="">
                                    <span className="font-medium text-lg text-fontColor">Pifo</span>
                                    <input type="checkbox" className="sr-only peer"></input>
                                </div>
                                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-denialRed peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark peer-checked:bg-approvalGreen shadow-inner"></div>
                            </label>
                            <label className="inline-flex min-w-[44px] flex-wrap items-center justify-between cursor-pointer px-8 py-6 rounded-md shadow-lg w-11/12">
                                <img  className="w-[30px]" src="/assets/icon/paw-icon.png" alt="" />
                                <div className="">
                                    <span className="font-medium text-lg text-fontColor">Panguão</span>
                                    <input type="checkbox" className="sr-only peer"></input>
                                </div>
                                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-denialRed peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark peer-checked:bg-approvalGreen shadow-inner"></div>
                            </label>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}