import logo from "/assets/main-logo.svg"

import girl from "/assets/img/girl.svg"
import { SubmitHandler, useForm } from "react-hook-form"
import { useContext } from "react"
import { UserContext } from "../../providers/UserProvider"
import Input from "../../components/Input"
import Button from "../../components/Button"
import { Link } from "react-router-dom"

interface ILogin {
    email:string; 
    password:string;
}

export const Login = () => {
    
    const { register, handleSubmit } = useForm<ILogin>()
    const { handleLogin } = useContext(UserContext)

    const submit:SubmitHandler<ILogin> = async ({ email, password }) => {
        await handleLogin(email, password);
    }

    return (
        <>
            <main className="w-[95%] max-w-[950px] m-auto flex flex-col justify-between h-[100vh] overflow-x-hidden overflow-y-hidden">
                <div className="w-full ml-4 my-4">
                    <img src={logo} alt="main logo" />
                </div>
                <div className="flex flex-col  lg:flex-row">
                    <form onSubmit={handleSubmit(submit)} className="w-full flex flex-col items-center lg:w-fit lg:min-w-[475px] lg:max-w-1/2">
                        <div className="w-full flex flex-col justify-center items-center my-16">
                            <div className="w-full flex justify-center">
                                <h1 className="font-bold text-5xl text-fontColor">Tail</h1>
                                <h1 className="font-bold text-5xl text-mainPurple">Tech</h1>
                            </div>
                            <h2 className="font-semibold text-3xl text-trueNeutral">Tech that cares</h2>
                        </div>
                        <div className="flex flex-col items-center gap-8 w-[80%]">
                            <Input {...register("email")} label="E-mail address" type="text" placeholder="Type here..." id="email-input"/>
                            <Input {...register("password")} label="Password" type="password" placeholder="Type here..." id="ps-input"/>
                        </div>
                        <div className="w-full flex items-center justify-center my-16">
                            <Button textColor="text-white" bgColor="bg-mainPurple" type="submit" >Login</Button>
                        </div>
                    </form>
                    <div className="w-full hidden lg:flex lg:items-center lg:w-2/3">
                        <img src={girl} alt="" />
                    </div>
                </div>
                <div className="mb-16">
                    <p className="text-2xl text-trueNeutral font-semibold">New around here?</p>
                    <div className="flex gap-1">
                        <Link to="/register" className="font-semibold text-mainPurple">Register</Link>
                        <span className="font-medium text-trueNeutral">with us and claim our products.</span>
                    </div>
                </div>
            </main>
        </>
    )
}