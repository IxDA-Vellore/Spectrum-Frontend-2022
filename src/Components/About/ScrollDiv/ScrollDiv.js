const ScrollDiv = ({ heading, content, source }) => {
    return (
        <div className="about-scroll bg-scroll-div w-[85%] my-8 py-8 mx-auto rounded-lg p-5">
            <div className="scroll-img">
                <img src={source} alt="" />
            </div>
            <div className="scroll-heading font-bold text-4xl mt-4">{heading}</div>
            <div className="scroll-info text-xl mt-6">{content}</div>
        </div>
    );
};

export default ScrollDiv;
