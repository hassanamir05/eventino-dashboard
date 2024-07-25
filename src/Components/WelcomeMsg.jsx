const WelcomeMsg = (props) => {
    return <div className="w-full mb-10 ">
        <h1 style={{ fontFamily: 'Inter, sans-serif' }}
            className="flex text-2xl text-black"
        >
            Welcome back, {props.username} <img src="/src/assets/emoji.png" alt="hi emoji" className="h-6 px-2" />
        </h1>
        <p style={{ fontFamily: 'Inter, sans-serif' }} className="text-base text-customGray">{props.message}</p>
    </div>
}
export default WelcomeMsg;