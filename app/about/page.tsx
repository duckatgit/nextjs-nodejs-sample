import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
const about = () => {
  return (
    <div className='w-full h-auto  rounded-lg '>
      <div className="w-full  h-[600px] bg-[url('/images/city.jpg')] bg-cover  bg-center border-2  ">
        <div className='w-[1100px] mx-auto border-2  border-[#FFFFFF]  bg-[#D7D7D775]   rounded-lg flex justify-between items-center  mt-4 p-2'>
          <div>
            <p className='text-[#6B2D4C] font-bold text-3xl'>RÉYA</p>
          </div>
          <div className='flex mr-8'>
            <ul className='space-x-5 font-bold text-[#ffff] '>
              <Link href="/home">Home</Link>
              <Link href="/about">About us</Link>
              <Link href="/investors">Investors</Link>
              <Link href="/drivers">Drivers</Link>
              <Link href="/safety">Safety</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/login">
                <button className='w-[100px] h-[40px] bg-[linear-gradient(to_bottom,#9F6880,#6B2D4C)] rounded-lg'>Login</button>
              </Link>
            </ul>
          </div>
        </div>

        <div className='w-[1100px] mx-auto mt-24  flex flex-col '>

          <div>
            <p className="bg-gradient-to-r from-[#D4AF37] to-[#FFC8D9] bg-clip-text text-transparent text-2xl font-bold">
              Experience the future of <br />
              luxury rideshare with RÉYA.
            </p>
          </div>
          <div className='mt-10'>
            <p className='text-[#fff] font-bold '>Discover how RÉYA is transforming transportation for women. Our commitment to safety and <br />
              luxury redefines rideshare.</p>
          </div>
          <div className='flex justify-between items-center w-[600px] mt-10 gap-5'>
            <button className='w-[250px] border-2 rounded-lg text-center bg-gradient-to-r from-[#EEC02A] to-[#FFD241] border-[#D4AF37] text-[#6B2D4C] font-bold text-[90%] p-2'>Invest in RÉYA</button>
            <button className='w-[280px] border-2 rounded-lg text-center bg-gradient-to-r from-[#6B2D4C] to-[#3C1B35] border-[#D4AF37] text-[#F4ECF0] font-bold text-[90%] p-2'>Join the Waitlist</button>
            <button className='w-[250px] border-2 rounded-lg text-center  border-[#D4AF37] text-[#F4ECF0] font-bold text-[90%]  p-2'>App Coming Soon</button>


          </div>
        </div>
      </div>

      {/* second phase */}

      <div className='w-full    mt-8 '>
        <section className="flex justify-center items-center relative">
          <Image
            src="/images/Vector.png"
            alt="Vector background"
            width={400}
            height={400}
            className="w-[400px] h-auto"
          />

          <h1 className="absolute top-5 left-1/2 -translate-x-1/2 font-serif font-bold text-2xl text-[#6B2D4C]">
            A Word from
          </h1>
        </section>

        <div className='w-[1100px] mx-auto   '>


          <div className="w-[1050px] h-[600px] mx-auto flex justify-evenly gap-12 mt-14 bg-[#FFFFFF] border-2 border-[#ffffff] rounded-lg shadow">

            <div className="w-[400px] ml-12  relative ">
              <div className="mt-7 ml-10">
                <Image
                  src="/images/man.png"
                  alt="Vector background"
                  width={400}
                  height={200}
                  className="w-[400px] h-auto  absolute z-50 top-1"
                />
                <Image
                  src="/images/Vector (4).png"

                  alt="back" width={600}
                  height={400} className="w-[380px] absolute  mt-24" />
              </div>
            </div>
            <div className="w-[500px] mr-5  mt-28">
              <div>
                <p className="font-bold text-3xl">A Word from  &nbsp; 
                 
                  <span className="text-[#6B2D4C]">Our Founder.</span>
                </p>

                <p className="mt-5 italic ">
                  <span className="text-[#6B2D4C]">RÉYA</span> was born from a vision: to create the safest, most <br />
                   luxurious, and most dignified rideshare experience for women. <br />
                   As a founder, a leader, and a believer in empowerment, I built <br />
                   RÉYA not just as a service, but as a movement. Every
ride is a statement of freedom, trust, and community. <br /> With <span className="text-[#6B2D4C]">RÉYA</span>, luxury is no longer a privilege — it is the standard women deserve.” — <span className="text-[#6B2D4C]">Aman Cirius</span>, Founder & CEO
                </p>
              </div>
              <div className=" flex justify-between  items-center mt-16">
                <button className=" w-[230px] h-11  rounded-lg bg-[radial-gradient(circle_at_center,_#9F6880,_#6B2D4C)] text-[#F4ECF0] font-bold">
                  Learn More
                </button>
                {/* <div>
                  <Image
                    src="/images/Sign.png"
                    width={400}
                    height={400}
                    alt="sign" />
                </div> */}
              </div>
            </div>
          </div>



        </div>
      </div>


      {/* third phase */}
      <div className='w-full  '>
         <div className='w-[1100px] mx-auto  mt-10'>
            
              <section className="flex justify-center items-center relative">
          <Image
            src="/images/Vector.png"
            alt="Vector background"
            width={400}
            height={400}
            className="w-[400px] h-auto"
          />

          <h1 className="absolute top-5 left-1/2 -translate-x-1/2 font-serif font-bold text-2xl text-[#6B2D4C]">
            A Word from
          </h1>
        </section>

<div className='mt-10'>
    
   <p className='text-center font-bold text-3xl'>Discover the <span className="text-[#6B2D4C]">RÉYA</span> Experience: Where Safety <br />
   Meets Luxury and Empowerment.</p>


<p className='text-center font-bold text-[75%] mt-8'>At RÉYA, we prioritize your safety without compromising on luxury. Our rides are designed to empower <br /> women, providing a dignified experience that fosters trust and community. Join us in redefining what <br />transportation means for women everywhere.</p>


</div>


<div className='mt-9  flex justify-between gap-4'>
     <div className='w-[300px] border-2  border-[#FFE180] bg-[#FFF9E4] flex flex-col justify-evenly items-center p-6 gap-3.5'>
      <div>
        <Image
            src="/images/THREE.png"
            alt="Vector background"
            width={400}
            height={400}
            className="w-[100px] h-auto"
          />
      </div>
<div className='text-center '>
  <h1 className='font-bold'>Safety First</h1>
  <p className='text-[70%] mt-4'>Every driver is verified, trained,<br />
  and women-first.</p>
</div>
     </div>
     
      <div className='w-[300px] border-2  border-[#FFE180] bg-[#FFF9E4] flex flex-col justify-evenly items-center p-6 gap-3.5'>
      <div>
        <Image
            src="/images/carstar.png"
            alt="Vector background"
            width={400}
            height={400}
            className="w-[100px] h-auto"
          />
      </div>
<div className='text-center '>
  <h1 className='font-bold'>Safety First</h1>
  <p className='text-[70%] mt-4'>Every driver is verified, trained,<br />
  and women-first.</p>
</div>
     </div>
      <div className='w-[300px] border-2  border-[#FFE180] bg-[#FFF9E4] flex flex-col justify-evenly items-center p-6 gap-3.5'>
      <div>
        <Image
            src="/images/thumb.png"
            alt="Vector background"
            width={400}
            height={400}
            className="w-[100px] h-auto"
          />
      </div>
<div className='text-center '>
  <h1 className='font-bold'>Safety First</h1>
  <p className='text-[70%] mt-4'>Every driver is verified, trained,<br />
  and women-first.</p>
</div>
     </div>
</div>


         </div>

        
      </div>



      {/* fourth phase */}

      <div className='w-full '>
        <div className='w-full  mx-auto  mt-8 '>
                <section className="flex justify-center items-center relative">
          <Image
            src="/images/Vector.png"
            alt="Vector background"
            width={400}
            height={400}
            className="w-[400px] h-auto"
          />

          <h1 className="absolute top-5 left-1/2 -translate-x-1/2 font-serif font-bold text-2xl text-[#6B2D4C]">
         Mission & Vision
          </h1>
        </section>

       <div className='w-full '>

        <div className="w-[1050px]  mx-auto  mt-14 bg-[#FFFFFF] border-2 border-[#ffffff] rounded-lg shadow">
  <div className='mt-8 flex flex-col justify-between gap-5'>
<div className='flex justify-evenly gap-3 mt-5'>

<div>
  <h1 className='text-2xl font-bold'>Our <span className="text-[#6B2D4C]">Mission</span></h1>
  <p className='mt-7 text-[80%] text-[#6D6D6D] font-bold'>To empower women with safe,  luxurious, and <br />dignified transportation,  redefining mobility  <br />as a space of trust and empowerment</p>
  <button className=" w-[230px] h-11 mt-12 rounded-lg bg-[radial-gradient(circle_at_center,_#9F6880,_#6B2D4C)] text-[#F4ECF0] font-bold">
                  Learn More
                </button>
</div>

<div className='w-[400px]  rounded-lg '>
   <Image
            src="/images/girlcar.jpg"
            alt="Vector background"
            width={400}
            height={400}
            className="w-[400px] h-auto rounded-lg"
          />
</div>
</div>


<div className='flex justify-evenly gap-3 mt-5'>

<div className='w-[400px]  rounded-lg '>
   <Image
            src="/images/fourthCar.jpg"
            alt="Vector background"
            width={400}
            height={400}
            className="w-[400px] h-auto rounded-lg"
          />
</div>
<div>
  <h1 className='text-2xl font-bold'>Our <span className="text-[#6B2D4C]">Vision</span></h1>
  <p className='mt-7 text-[80%] text-[#6D6D6D] font-bold'>To be the most trusted women-first luxury <br /> rideshare in the world, transforming  every <br />ride into a symbol of confidence and <br />freedom</p>
  <button className=" w-[230px] h-11 mt-12 rounded-lg bg-[radial-gradient(circle_at_center,_#9F6880,_#6B2D4C)] text-[#F4ECF0] font-bold">
                  Learn More
                </button>
</div>

</div>
<div>

</div>
  </div>



        </div>


       </div>
        </div>
      </div>

      {/* fifth phase */}

      <div className="relative w-full max-w-[1723px]  mt-2 mx-auto  rounded-lg flex flex-col justify-center items-center px-6">

        <div className="w-[900px] mx-auto    mt-8">

          <div>
            <p className="text-center font-bold text-3xl"> Customer<span className="text-[#6B2D4C] font-bold leading-4"> Testimonials</span></p>
          </div>
          <div className="w-[900px] mx-auto    mt-8 border-2 rounded-lg border-[#F4ECF0] shadow">
            <div className="w-[700px] mx-auto    mt-8 ">
              <div className="w-[400px] mx-auto  flex flex-col justify-center items-center gap-2">
                <div>
                 
                    <Image
                    src="/images/Stars.png"
                    width={400}
                    height={400}
                    alt="sign"  className='w-[300px]'/>
                </div>
                <div>
                  <p className="text-[#86747E] text-center font-bold mt-4">RÉYA makes me feel secure, elegant, and <br />
                    respected something no other rideshare ever has</p>
                </div>
                <div className="w-[300px] mx-auto  mt-4 flex flex-col justify-center items-center">
                  <div className="w-[50px] h-[50px] rounded-full  relative text-center overflow-hidden">
                    
                      <Image
                    src="/images/pic.jpg"
                    width={400}
                    height={400}
                    alt="sign" />
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

      {/* sixth phase */}
      <div className="relative w-full max-w-[1723px] mx-auto h-auto rounded-lg  border-2 px-6 
bg-gradient-to-b from-[#3C1B35] to-[#6B2D4C] mt-60"
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
                    src="/images/apple.png"
                    width={30}
                    height={400}
                    alt="sign"  className=''/>
              <div className="flex flex-col  justify-start items-start w-[130px] text-[#ffffff]">
                <p className="m-0 leading-none text-xs">Download on the</p>
                <span className="leading-none font-semibold">App Store</span>
              </div>
            </div>
          </div>
          <div className="w-[140px] ">
            <div className="w-[140px] h-[40px] border-2  border-[#F4ECF0] flex justify-evenly gap-2 items-center rounded-lg">
              
               
<Image
                    src="/images/store.png"
                    width={30}
                    height={400}
                    alt="sign"  className='ml-3'/>

              <div className="flex flex-col justify-start items-start w-[130px] text-[#ffffff]">
                <p className="m-0 leading-none text-xs">GET IT ON</p>
                <span className="leading-none font-semibold">Google play</span>
              </div>
            </div>
          </div>

          <div className="w-[140px] ">
            <div className="w-[140px] h-[40px] border-2 border-[#F4ECF0] flex justify-evenly gap-2 items-center rounded-lg">
              
                <Image
                    src="/images/android.png"
                    width={30}
                    height={400}
                    alt="sign"  className='ml-3'/>

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
            <div className="w-[40px] h-[40px]  border-[#ffffff]  rounded-full bg-[#6B2D4C] shadow bg-cover ">
            
                                <Image
                    src="/images/wiki icon.png"
                    width={30}
                    height={30}
                    alt="sign"  className='mt-2 ml-1.5'/>
            </div>
            <div className="w-[40px] h-[40px]  border-[#ffffff]  rounded-full bg-[#6B2D4C] shadow">
             
                                <Image
                    src="/images/twitter.png"
                    width={25}
                    height={25}
                    alt="sign"  className='mt-2 ml-1.5'/>
            </div>
            <div className="w-[40px] h-[40px]  border-[#ffffff] rounded-full bg-[#6B2D4C] shadow">
                 <Image
                    src="/images/instagram icon.png"
                    width={25}
                    height={25}
                    alt="sign"  className='mt-2 ml-2'/>
            </div>
            <div className="w-[40px] h-[40px]  border-[#ffffff] rounded-full bg-[#6B2D4C] shadow">
              <Image
                    src="/images/fb icon.png"
             width={15}
                    height={15}
                    alt="sign"  className='mt-2 ml-3'/>
            </div>
          </div>
        </div>
<div className=" w-[full] max-w-[1723px]  flex relative mt-28  ">
<div>
  
   <Image
                    src="/images/Fill 5.png"
                    width={400}
                    height={400}
                    alt="sign"  className='w-[500px]'/>
   <Image
                    src="/images/bottomimg.png"
                    width={400}
                    height={400}
                    alt="sign"  className='w-[500px]'/>

</div>
<div>
   <Image
                    src="/images/Fill 5.png"
                    width={400}
                    height={400}
                    alt="sign"  className='w-[500px]'/>
    <Image
                    src="/images/bottomimg.png"
                    width={400}
                    height={400}
                    alt="sign"  className='w-[500px]'/>
</div>
<div>
     <Image
                    src="/images/Fill 5.png"
                    width={400}
                    height={400}
                    alt="sign"  className='w-[500px]'/>
    <Image
                    src="/images/bottomimg.png"
                    width={400}
                    height={400}
                    alt="sign"  className='w-[500px]'/>
</div>
<div className='relative'>
  <div>

     <Image
                    src="/images/Fill 5.png"
                    width={400}
                    height={400}
                    alt="sign"  className='w-[500px]'/>
   <Image
                    src="/images/bottomimg.png"
                    width={400}
                    height={400}
                    alt="sign"  className='w-[500px]'/>
     {/* <Image
                    src="/images/car.png"
                    width={400}
                    height={400}
                    alt="sign"  className='w-[500px] absolute  '/> */}
  </div>
{/* <div>
  <Image
                    src="/images/car.png"
                    width={400}
                    height={400}
                    alt="sign"  className='w-[500px]   '/>
</div> */}
</div>

</div>

      </div>
    </div>
  );
};

export default memo(about);