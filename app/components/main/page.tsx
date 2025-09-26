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

import Vector4 from "./Vector (4).png";

import img1 from "./img1.jpg";

import img2 from "./img2.jpg";

import img3 from "./img3.jpg";

import stars from "./Stars.png";

import Pic from './pic.jpg'

import apple from "./apple.png"

import store from "./store.png";

import android from "./android.png";

import wiki from "./wiki icon.png";

import fb from "./fb icon.png";
import insta from "./instagram icon.png"


import twitter from "./twitter.png"

import par1 from "./Fill 5.png";

import bottomimg from "./bottomimg.png";

import car from "./car.png"
const Reya = () => {
  return (
    <div className="relative w-full max-w-[1723px] mx-auto h-auto rounded-lg flex flex-col justify-center items-center px-6 bg-[#FFFBFD]">
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

        <div className="w-[1050px]  mx-auto flex justify-evenly mt-8 bg-[#FFFFFF] border-2 border-[#ffffff] rounded-lg shadow">

          <div className="w-[400px] ml-12+  relative ">
            <div className="mt-7 ml-10">

              <Image   src={Girl} alt="girl" className="w-[250px] absolute z-10 ml-6 mt-4 " />
              <Image 
              src={Vector4} 
            
              alt="back" className="w-[250px] absolute ml-7" />
            </div>
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
              <button className=" w-[230px] h-11  rounded-lg bg-[radial-gradient(circle_at_center,_#9F6880,_#6B2D4C)] text-[#F4ECF0] font-bold">
                Learn More
              </button>
              <div>
                <Image 
                src={Sign} 
              
                alt="sign" />
              </div>
            </div>
          </div>
        </div>

        {/* second last */}

        <div className="w-[900px] mx-auto ">

          <div className="w-[600px] mx-auto  flex flex-col justify-center items-center mt-8">
            <p className="font-semibold  text-3xl mt-2">Explore Our City Rides &</p>
            <section className="flex justify-center items-center relative">
              <Image
                src={Vector}
               
                alt="Vector background"
                width={400}
                height={400}
                className="w-[300px] "
              />
              <h1 className="absolute top-5 leading-[60%] font-serif font-bold text-[25px]   text-center text-[#6B2D4C]">
                light our path
              </h1>
            </section>
          </div>

          <div className="w-[600px] mx-auto  flex flex-col justify-center items-center  mt-8">
            <p className="text-center">
              From Tampa to Miami, Fort Lauderdale to Orlando, and soon Atlanta, <span className="text-[#6B2D4C] font-bold italic">RÉYA</span> <br />
              is setting a new standard in luxury mobility. Each city is a step toward our <br />
              global vision
            </p>
          </div>


          <div className="w-[800px] mx-auto  flex justify-between items-center  mt-8">
            <div className="w-[700px] mx-auto  flex justify-between gap-2 items-center  mt-2">
              <div className="w-[300px] h-[300px]  rounded-lg   relative">
                <Image 
                src={img1}
                  
                alt='img1' className="absolute h-full rounded-lg" />
                <p className="absolute mt-1 text-[#FFFFFF] font-bold ml-5">People</p>
              </div>
              <div className="w-[300px] h-[300px]  rounded-lg    relative">
                <Image 
                src={img2} 
             
                alt='img1' className="absolute h-full opacity-80 rounded-lg brightness-70" />
                <p className="absolute mt-1 text-[#FFFFFF] font-bold ml-5 ">Purpose</p>
              </div>
              <div className="w-[300px] h-[300px]  rounded-lg   relative">
                <Image 
                src={img3} 
                
                alt='img1' className="absolute h-full rounded-lg" />
                <p className="absolute mt-1 text-[#FFFFFF] font-bold ml-5">Performance</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* second last */}
      <div className="relative w-full max-w-[1723px]  mt-2 mx-auto h-auto rounded-lg flex flex-col justify-center items-center px-6">

        <div className="w-[900px] mx-auto    mt-8">

          <div>
            <p className="text-center font-bold text-3xl"> Customer<span className="text-[#6B2D4C] font-bold leading-4"> Testimonials</span></p>
          </div>
          <div className="w-[900px] mx-auto    mt-8 border-2 rounded-lg border-[#F4ECF0] shadow">
            <div className="w-[700px] mx-auto    mt-8 ">
              <div className="w-[400px] mx-auto  flex flex-col justify-center items-center gap-2">
                <div>
                  <Image
                   src={stars} 
                
                   alt="stars" className="" />
                </div>
                <div>
                  <p className="text-[#86747E] text-center font-bold">RÉYA makes me feel secure, elegant, and <br />
                    respected something no other rideshare ever has</p>
                </div>
                <div className="w-[300px] mx-auto  mt-4 flex flex-col justify-center items-center">
                  <div className="w-[50px] h-[50px] rounded-full  relative text-center overflow-hidden">
                    <Image 
                    src={Pic}
               
                    alt="" className="w-[50px] h-[50px] rounded-full absolute " />
                  </div>

                  <div className="mt-5">
                    <p className="text-center text-[#866F7C]"> <span className="text-[#6B2D4C] font-bold">Parvinder</span><br />
                      Position, Company name
                    </p>
                  </div>

                </div>
              </div>
              <div>
              </div>
            </div>


            <div className="w-[800px] mx-auto     m-12">
              <div className="w-[750px] mx-auto border-2   border-[#F4ECF0] rounded-lg mt-8 flex justify-between items-center text-center p-1 px-1.5">
                <p className="text-[#000000] font-bold">Press Logo</p>
                <p className="text-[#C2C2C2] font-bold">Press Logo</p>
                <p className="text-[#C2C2C2] font-bold">Press Logo</p>
                <p className="text-[#C2C2C2] font-bold">Press Logo</p>
              </div>
            </div>
          </div>

        </div>

      </div>


      <div className="relative w-full max-w-[1723px] mx-auto h-auto rounded-lg  border-2 px-6 
bg-gradient-to-b from-[#3C1B35] to-[#6B2D4C] mt-20"
      >
        <div>
          <div className="w-full mx-auto  flex justify-between ">
            <div className="w-[500px]  flex flex-col justify-between mt-4 p-3 ">
              <p className="text-[#FFFFFF]">RÉYA</p>
              <p className="mt-4 text-[#FFFFFF]">Subsrcibe</p>
              <p className="mt-2 text-[#FFFFFF] text-[60%]">Join our newsletter for updates on features and special offers.</p>

              <div className="mt-2">
                <form action="">
                  <input type="text" placeholder="enter your name" className="border -2 text-[#fff] rounded-lg p-2 w-[270px]" />
                  &nbsp; &nbsp;&nbsp;
                  <button className="border-2 rounded-lg text-[#fff] border-[#D4AF37] bg-gradient-to-br from-[#EEC02A] to-[#FFD241] p-2 w-[150px] font-bold">Subscribe</button>
                </form>
              </div>
              <p className="text-[#FFFFFF] mt-1 text-[60%]">By subscribing, you agree to our Privacy Policy and consent to receive updates.e</p>
            </div>
            <div className="w-[700px]  flex justify-between items-center ">
              <div className="p-2  text-[#ffffff]">
                <h1>Quick Links</h1>
                <ul className="space-y-2 text-[60%] mt-2">
                  <li>About us</li>
                  <li>Careers</li>
                  <li>Help Center</li>
                  <li>Blog Posts</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              <div className="p-2 text-[#ffffff]">
                <h1>Follow Us</h1>
                <ul className="space-y-2 text-[60%] mt-2">
                  <li>Facebook</li>
                  <li>Twitter</li>
                  <li>Instagram</li>
                  <li>Linkeding</li>
                  <li>You Tube</li>
                </ul>
              </div>
              <div className="p-2 text-[#ffffff]">
                <h1>Newsletter</h1>
                <ul className="space-y-2 text-[60%] mt-2">
                  <li>Sign Up</li>
                  <li>Latest News</li>
                  <li>User Guide</li>
                  <li>Feedback</li>
                  <li>Support</li>
                </ul>
              </div>
            </div>
            <div>
            </div>
          </div>
        </div>
        <div className=" w-[900px] mt-3 flex justify-start gap-2 p-2">
          <div className="w-[140px] ">
            <div className="w-[140px] h-[40px] border-2 border-[#F4ECF0] flex justify-evenly gap-2 items-center rounded-lg">
              <Image 
              src={apple}
             
              alt="apple" className="w-[20px] m-1" />
              <div className="flex flex-col  justify-start items-start w-[130px] text-[#ffffff]">
                <p className="m-0 leading-none text-xs">Download on the</p>
                <span className="leading-none font-semibold">App Store</span>
              </div>
            </div>
          </div>
          <div className="w-[140px] ">
            <div className="w-[140px] h-[40px] border-2  border-[#F4ECF0] flex justify-evenly gap-2 items-center rounded-lg">
              <Image 
              src={store}
              
               alt="apple" className="w-[20px] m-1" />

              <div className="flex flex-col justify-start items-start w-[130px] text-[#ffffff]">
                <p className="m-0 leading-none text-xs">GET IT ON</p>
                <span className="leading-none font-semibold">Google play</span>
              </div>
            </div>
          </div>

          <div className="w-[140px] ">
            <div className="w-[140px] h-[40px] border-2 border-[#F4ECF0] flex justify-evenly gap-2 items-center rounded-lg">
              <Image 
              src={android}
            
               alt="apple" className="w-[20px] m-1" />

              <div className="flex flex-col justify-start  items-start w-[130px] text-[#ffffff]">
                <p className="m-0 leading-none text-xs">Download for</p>
                <span className="leading-none font-semibold">Android</span>
              </div>
            </div>




          </div>
        </div>

        <hr className=" text-[#ffffff] mt-3" />
        <div className=" w-full mt-3 flex justify-between items-center">
          <div className="flex justify-between items-center space-x-3.5 font-bold text-[90%] text-[#ffffff] m-5">
            <p>© 2024 Reye. All rights reserved.</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookie Settings</p>
          </div>
          <div className="flex justify-between items-center space-x-3.5 mr-5">
            <div className="w-[40px] h-[40px] border-2 border-[#ffffff]  rounded-full bg-[#6B2D4C] shadow">
              <Image 
              src={wiki} 
            
              alt="wiki" className="w-[40px] h-[40px] rounded-full p-2" />
            </div>
            <div className="w-[40px] h-[40px] border-2 border-[#ffffff]  rounded-full bg-[#6B2D4C] shadow">
              <Image 
              src={twitter} 
          
              alt="wiki" className="w-[40px] h-[40px] rounded-full p-2" />
            </div>
            <div className="w-[40px] h-[40px] border-2 border-[#ffffff] rounded-full bg-[#6B2D4C] shadow">
              <Image 
              src={insta}
           
               alt="wiki" className="w-[40px] h-[40px] rounded-full p-2" />
            </div>
            <div className="w-[40px] h-[40px] border-2 border-[#ffffff] rounded-full bg-[#6B2D4C] shadow">
              <Image 
              src={fb}
              
               alt="wiki" className="w-[40px] h-[40px] rounded-full p-2" />
            </div>
          </div>
        </div>
<div className=" w-[full] max-w-[1723px]  flex relative">
<div>
  
  <Image 
  src={par1}
 
   alt="" className=" "/>
<Image 
src={bottomimg} 

alt="" className="absolute bottom-0 w-80 h-20"/>

</div>
<div>
  <Image
   src={par1} 
   
  alt="" className=""/>
  <Image
   src={bottomimg} 
   
   alt="" className="absolute bottom-0 w-80 h-16"/>
</div>
<div>
  <Image 
  src={par1}
  
   alt="" className=""/>
  <Image 
  src={bottomimg} 

  alt="" className="absolute bottom-0 w-80 h-16"/>
</div>
<div>
  <Image 
  src={par1}

   alt="" className=""/>
  <Image 
  src={bottomimg} 
 
  alt="" className="absolute bottom-0 w-[316px] h-20"/>
   <Image 
   src={car}
   
    alt="" className="absolute bottom-0 w-[200px] h-11 right-0"/>
</div>
</div>

      </div>
    </div>
  );
};

export default memo(Reya);
