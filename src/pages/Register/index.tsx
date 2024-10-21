import Button from "../../components/Button";
import Input from "../../components/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { IUserCreation } from "../../types/user.types";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { api } from "../../service/api";

export default function Register() {

    const { register, handleSubmit } = useForm<IUserCreation>()
    const navigate = useNavigate()

    const submit:SubmitHandler<IUserCreation> = async (data) => {
        try {
            await api.post("/users", data)
            toast.success("User created! Login to view your profile!")
            navigate("/")
        } catch (e) {
            if(e instanceof AxiosError)
                toast.error(e.response?.data.message)
        }
    }

    return(
        <>
            <div className="w-full mb-16">
                <img src="/assets/main-logo.png" alt="main logo" />
            </div>
            <div className="w-[95%] max-w-[1100px] flex justify-between min-h-[80vh] mx-auto mt-10vh">
                <img
                    className="hidden md:w-[500px] md:block h-max" 
                    src="/assets/img/girl2.png"
                    alt="Girl with pet"
                />
                <form
                    onSubmit={handleSubmit(submit)}
                    className="w-[95%] max-w-[500px] flex flex-col gap-8 items-end mx-auto"
                >
                    <h2 className="text-4xl text-bold text-fontColor text-right">Register yourself.</h2>

                    <Input {...register("username")} id="username" label="Username"/>
                    <Input {...register("email")} id="email" label="E-mail address"/>
                    <Input {...register("password")} id="password" label="Password" type="password"/>
                    <Input {...register("birthdate")} id="birthdate" label="Birthdate"/>

                    <Button bgColor="bg-mainPurple" textColor="text-white" type="submit">Create Account</Button>
                </form>
            </div>
        </>
    )
}