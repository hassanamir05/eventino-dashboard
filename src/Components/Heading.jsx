const Heading = (props) => {
    return <h1 style={{ fontFamily: 'Inter, sans-serif' }}
        className="flex text-2xl text-black mb-3">{props.title}</h1>
}

export default Heading;