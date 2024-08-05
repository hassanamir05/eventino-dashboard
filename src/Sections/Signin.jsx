import InputBox from "../Components/signin-form-input";
import '../App.css';

const Signin = () => {
    return (
        <div className="h-screen w-full bg-[#4CA1EB] flex justify-center items-center flex-col">
            <img src="/src/assets/eventinoLogo.png" alt="Eventino Logo" className="h-auto w-[200px] block mx-auto mt-2 mb-10" />
            <form action="#" className="bg-white w-auto min-w-[350px] max-w-[498px] py-10 rounded-[20px] px-[35px] h-[514px]">
                <h1 className="text-center font-[700] text-[25px]" style={{ fontFamily: 'Nunito' }}>Sign In</h1>
                <p className="text-[12px] text-center text-[#A6A6A6] mb-12" style={{ fontFamily: 'Poppins' }}>We’re happy to see you again. Enter your credentials to login.</p>

                <InputBox label="Email" placeholder="Enter your email" type="email" />
                <InputBox label="Password" placeholder="Enter your Password" type="password" />

                <div className="flex justify-between mt-4 text-sm">
                    <div className="ml-2 flex items-center">
                        <input id="remember-me" type="checkbox" className="custom-checkbox mr-2" />
                        <label style={{ fontFamily: 'Inter' }} className="font-[400] hover:cursor-pointer" htmlFor="remember-me">Remember me.</label>
                    </div>
                    <a href="#" className="underline font-[500]">Forgot Password?</a>
                </div>
                <button className="mt-7 w-[424px] block mx-auto min-w-[350px]"
                    style={{ fontFamily: 'Poppins', backgroundColor: '#4CA1EB', color: 'white', height: '50px', borderRadius: '8px', fontWeight: '500' }}
                >
                    Sign In
                </button>
            </form>
        </div>
    );
}

export default Signin;
