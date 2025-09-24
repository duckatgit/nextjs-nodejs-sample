import { memo } from "react";
import Image from "next/image";
import Vector from "./Vector.png";
import Vector1 from "./Vector (1).png";
import Shape from "./Shape.png";
import Vector2 from "./Vector (2).png";
import Vector3 from "./Vector (3).png";
import Group from "./Group.png";
import Music from "./music.jpg";
import Group1 from "./Group 758530855.png";
import Girl from "./girl.png"
import Sign from "./Sign.png"
import { sign } from "crypto";
const Reya = () => {
  return (
    <div className="relative w-full max-w-[1723px] mx-auto h-auto rounded-lg flex flex-col justify-center items-center px-6">
      {/* Header Section */}
      <section className="flex justify-center items-center relative">
        <Image
          src={Vector}
          alt="Vector background"
          width={400}
          height={400}
          className="w-[400px] h-auto"
        />
        <h1 className="absolute top-5 left-1/2 -translate-x-1/2 font-serif font-bold text-2xl text-[#6B2D4C]">
          Why RÉYA
        </h1>
      </section>

      {/* Intro */}
      <p className="text-center mt-6 max-w-[800px] mx-auto text-gray-600">
        At <span className="font-bold text-[#6B2D4C]">RÉYA</span>, we believe
        every woman deserves more than a ride — she deserves an experience that
        honors her dignity, her freedom, and her peace of mind. That’s why RÉYA
        was built differently from the ground up:
        <span className="italic font-semibold"> by women, for women</span>.
      </p>

      {/* Cards */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
        {/* Card 1 */}
        <div className="w-full max-w-[400px] min-h-[500px] rounded-lg bg-[radial-gradient(circle_at_center,_#FCF176,_#FDD217)] p-4 relative shadow-md">
          <div className="flex justify-between w-full mb-4">
            <Image src={Vector1} alt="car" width={73} height={86} />
            <Image src={Shape} alt="shape" width={73} height={86} />
          </div>

          <div className="p-3 rounded-lg">
            <p className="font-bold italic text-[15px] leading-[22px]">
              With <span className="text-[#2F1A23] font-bold">RÉYA</span>,
              safety isn’t an option— <br /> it’s the foundation.
            </p>
          </div>

          <div className="mt-4">
            <h2 className="text-[#2F1A23] font-bold italic text-xl">
              Safety first
            </h2>
          </div>

          <div className="w-[350px]">
            <ul className="list-disc p-3 text-[0.90rem]">
              <li>
                Every driver is part of a women-first network, carefully vetted
                and trained.
              </li>
              <li>
                Our Guardian Track ensures that only elite, certified male
                drivers (with law enforcement, military, or chauffeur
                backgrounds) are allowed as rare exceptions.
              </li>
            </ul>
          </div>

          <div className="w-[350px] flex justify-evenly">
            <Image src={Vector2} alt="logo" className="w-[40px] h-[40px]" />
            <p className="text-[#6B2D4C] font-bold italic">
              Because every woman deserves to <br />
              feel valued, dignified, and <br />
              empowered in her journey
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full max-w-[400px] min-h-[500px] rounded-lg bg-[radial-gradient(circle_at_center,_#FCF176,_#FDD217)] p-4 relative shadow-md">
          <div className="flex justify-between w-full mb-4">
            <Image src={Vector3} alt="car" className="w-[50px] h-[80px]" />
            <Image src={Shape} alt="shape" width={73} height={86} />
          </div>

          <div className="p-3 rounded-lg">
            <p className="font-bold italic text-[15px] leading-[22px]">
              With <span className="text-[#2F1A23] font-bold">RÉYA</span>,
              safety isn’t an option— <br /> it’s the foundation.
            </p>
          </div>

          <div className="mt-4">
            <h2 className="text-[#2F1A23] font-bold italic text-xl">
              Safety first
            </h2>
          </div>

          <div className="w-[350px]">
            <ul className="list-disc p-3 text-[0.90rem]">
              <li>
                Premium comfort vehicles, hand-selected for their safety and
                refinement.
              </li>
              <li>
                Attention to detail that transforms travel into an elevated
                experience.
              </li>
              <li>
                Every touchpoint — from the app to the ride itself — designed
                with the aesthetics of luxury and the simplicity of technology.
              </li>
            </ul>
          </div>

          <div className="w-[350px] flex justify-evenly">
            <Image src={Vector2} alt="logo" className="w-[40px] h-[40px]" />
            <p className="text-[#6B2D4C] font-bold italic">
              Because every woman deserves to <br />
              feel valued, dignified, and <br />
              empowered in her journey
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full max-w-[400px] min-h-[500px] rounded-lg bg-[radial-gradient(circle_at_center,_#FCF176,_#FDD217)] p-4 relative shadow-md">
          <div className="flex justify-between w-full mb-4">
            <Image src={Group} alt="car" width={73} height={86} />
            <Image src={Shape} alt="shape" width={73} height={86} />
          </div>

          <div className="p-3 rounded-lg">
            <p className="font-bold italic text-[15px] leading-[22px]">
              With <span className="text-[#2F1A23] font-bold">RÉYA</span>,
              safety isn’t an option— <br /> it’s the foundation.
            </p>
          </div>

          <div className="mt-4">
            <h2 className="text-[#2F1A23] font-bold italic text-xl">
              Safety first
            </h2>
          </div>

          <div className="w-[350px]">
            <ul className="list-disc p-3 text-[0.90rem]">
              <li>
                Opportunities for women drivers to thrive in a safe, supportive
                environment.
              </li>
              <li>
                A business model that returns dignity and earnings to women, not
                just convenience to riders.
              </li>
              <li>
                A movement where every ride contributes to a global vision: a
                world where women lead, inspire, and move freely.
              </li>
            </ul>
          </div>

          <div className="w-[350px] flex justify-evenly">
            <Image src={Vector2} alt="logo" className="w-[40px] h-[40px]" />
            <p className="text-[#6B2D4C] font-bold italic">
              Because every woman deserves to <br />
              feel valued, dignified, and <br />
              empowered in her journey
            </p>
          </div>
        </div>
      </div>

      {/* Section below cards */}
      <div className="w-[900px] mt-5 text-center italic">
        <p>
          <span className="text-[#6B2D4C] font-bold italic">RÉYA</span> is not
          just a rideshare. It’s a sanctuary on wheels — redefining safety,
          luxury, and empowerment for women everywhere
        </p>
      </div>

      {/* Music section */}
      <div className="w-[1200px] flex justify-between mt-10">
        <div className="relative">
          <Image
            src={Music}
            alt="music"
            className="relative w-[500px] h-[350px]"
          />
          <Image
            src={Group1}
            alt="overlay"
            className="absolute w-[90px] h-[70px] top-36 left-44"
          />
        </div>

        <div className="w-[600px]">
          <p className="font-bold text-2xl leading-8">
            Welcome to{" "}
            <span className="text-[#6B2D4C] font-bold italic">RÉYA</span>—
            your
            <br />
            luxury ride experience, <br />
            redefined.
          </p>

          <div className="mt-5 text-[#6D6D6D]">
            <p>
              Experience unparalleled safety and elegance with every ride. RÉYA{" "}
              <br />
              empowers you to travel in style.
            </p>
          </div>

          <div className="w-[550px] h-[89px] mt-20 flex justify-between">
            <button className="border-2  w-[350px] h-14 rounded-lg bg-[radial-gradient(circle_at_center,_#EEC02A,_#FFD241)] text-[#6B2D4C] font-bold">
              Invest in RÉYA
            </button>
            <button className=" border-2 w-[350px] h-14  rounded-lg bg-[radial-gradient(circle_at_center,_#6B2D4C,_#3C1B35)] text-[#F4ECF0] font-bold">
              Join the Waitlist
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-[1150px] m-auto mt-8 ">
        <div className="w-[800px]  flex justify-center items-center m-auto">
          <p className="font-bold text-2xl text-center">Because Yours</p>
          <section className="flex justify-center items-center relative">
            <Image
              src={Vector}
              alt="Vector background"
              width={400}
              height={400}
              className="w-[400px] h-auto"
            />
            <h1 className="absolute top-5 left-1/2 -translate-x-1/2 font-serif font-bold text-2xl text-[#6B2D4C]">
              Safety Matters.
            </h1>
          </section>
        </div>

        <p className="text-center font-bold text-[#FFCC25] mt-5">Stay on the safe side with Reye</p>

        <div className="w-[1050px]  mx-auto flex justify-evenly mt-8 bg-[#FFFFFF]">
          
          <div className="w-[400px] ml-3">
           <Image src={Girl} alt="girl" className="w-[250px]"/>
          </div>
          <div className="w-[500px] mr-5">
             <div>
               <p className="font-bold text-3xl">We want everyone to <br />
                have the same focus on  <br />
                <span className="text-[#6B2D4C]">safety.</span>
                </p>

                <p className="mt-5 italic ">
                  <span className="text-[#6B2D4C]">safety</span> isn’t a feature — it’s our foundation. Every <span className="text-[#6B2D4C]">RÉYA</span> ride <br />
                  is protected by real-time GPS tracking, trip sharing, and a <br />
                  24/7 safety team. With RÉYA,  <span className="text-[#6B2D4C]">peace</span> of mind is built in.
                </p>
             </div>
             <div className=" flex justify-between  items-center mt-1">


                    <button className=" w-[250px] h-14  rounded-lg bg-[radial-gradient(circle_at_center,_#9F6880,_#6B2D4C)] text-[#F4ECF0] font-bold">
              Learn More
            </button>

            <div>
              <Image src={Sign} alt="sign"/>
            </div>


             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Reya);
