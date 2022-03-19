// Components import
import ScrollDiv from './ScrollDiv/ScrollDiv';
// Assets import
import magicWand from '../../Assets/magic-wand.svg';
import bullseye from '../../Assets/bullseye.svg';
import framedPicture from '../../Assets/framed-picture.svg';
import trophy from '../../Assets/trophy.svg';

const About = () => {
    return (
        <div className="container flex justify-between h-[45vh] my-12">
            <div className="about-content w-[65%] flex-col items-center justify-between">
                <div className="about-heading">
                    <p className="font-bold text-lg">😄 LET’S BEGIN!</p>
                    <h1 className="text-6xl mt-3">ABOUT THE EVENT</h1>
                </div>
                <div className="about-info text-lg mt-6">
                    Spectrum is 72 hour long, virtual designathon for designers
                    from all over the globe. It's a perfect blend of Ideating,
                    Problem Solving and Designing industry level problem
                    statements.
                </div>
            </div>
            <div className="about-scroll__container flex-col justify-center items-center overflow-scroll overflow-x-hidden">
                <ScrollDiv
                    heading="COMPETE AND COLLABORATE"
                    content="Compete in teams of up to 2-3 people to create unique
                        and innovative designs!"
                    source={magicWand}
                />
                <ScrollDiv
                    heading="Build meaningful connections"
                    content="Learn from industry leaders and get feedback on your projects while networking with fellow designers"
                    source={framedPicture}
                />
                <ScrollDiv
                    heading="COMPETE AND COLLABORATE"
                    content="Propose your solutions, get insightful feedback and learn from industry leaders"
                    source={bullseye}
                />
                <ScrollDiv
                    heading="WIN"
                    content="Stand a chance to win exciting prizes from a prize pool of almost $500! You also stand a chance to get internship opportunites."
                    source={trophy}
                />
            </div>
        </div>
    );
};

export default About;
