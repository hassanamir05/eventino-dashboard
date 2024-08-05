import SettingsForm from "../Components/settingsForm";
import WelcomeMsg from "../Components/WelcomeMsg";

const Setting = () => {
    return (
        <div className="bg-backgroundColor py-10 px-5 w-full  overflow-scroll overflow-x-hidden  h-screen pb-[100px]">
            <WelcomeMsg username="Settings" message="Here's what's happening with your store today." />
            <SettingsForm />
        </div>

    );
}


export default Setting;