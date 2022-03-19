import hridyesh from "../../Assets/hridyesh.jpg";
import instagram from "../../Assets/instagram.svg";
import linkedin from "../../Assets/linkedin.svg";
import twitter from "../../Assets/twitter.svg";

function SpeakerCard() {
  return (
    <div className="w-screen flex container flex-col md:flex-row md:justify-evenly justify-center items-center">
      <div className="w-60 h-80 md:h-96 md:w-72 max-w-md rounded overflow-hidden shadow-lg bg-[#171717] p-2 pt-8 rotate-6 mt-6">
        <div className="w-[100%] h-[100%] rounded overflow-hidden shadow-lg bg-black flex-col items-center">
          <p className="text-white font-bold font-secondary text-center m-5 -rotate-12">
            TOPIC THEY ARE SPEAKING ON
          </p>

          {/* Img section to be modified */}
          <div className="rounded-[50%] mt-10">
            <img className="bg-red-600" src={hridyesh} alt="img" />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <p className="font-bold font-primary text-3xl">XYZ PERSON</p>
        <p className="text-2xl">Sr. Product Designer</p>
        <div className="bg-gray-600 w-20">
          <p className="text-white">Logo</p>
        </div>
        <div className="flex justify-content items-center ">
          <img src={instagram} alt="img" />
          <img src={linkedin} alt="img" />
          <img src={twitter} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default SpeakerCard;
