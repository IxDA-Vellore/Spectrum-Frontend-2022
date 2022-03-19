import './ScrollDiv.css';

const ScrollDiv = ({ heading, content, source }) => {
    return (
        <div className="about-scroll">
            <div className="scroll-img">
                <img src={source} alt="" />
            </div>
            <div className="scroll-heading">
                {heading}
            </div>
            <div className="scroll-info">{content}</div>
        </div>
    );
};

export default ScrollDiv;
