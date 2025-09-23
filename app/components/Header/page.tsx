import { memo } from "react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="relative w-full h-[867px] rounded-lg bg-black mb-2">
      
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-[95%] h-[77px] flex items-center justify-between rounded-lg border border-white bg-[#D7D7D775] px-6 py-2">
        
        <div>
          <p
            className="bg-[#6B2D4C] font-bold text-[36px] leading-[1] tracking-normal text-white px-3 py-1"
            style={{ fontFamily: '"Times New Roman", serif' }}
          >
            RÉYA
          </p>
        </div>

        
        <header>
          <nav className="flex items-center space-x-6 text-white font-medium">
            <Link href="/home">Home</Link>
            <Link href="/about">About us</Link>
            <Link href="/investors">Investors</Link>
            <Link href="/drivers">Drivers</Link>
            <Link href="/safety">Safety</Link>
            <Link href="/contact">Contact</Link>
            <Link
              href="/login"
              className="bg-[#6B2D4C] text-white px-4 py-2 rounded-lg"
            >
              Log In
            </Link>
          </nav>
        </header>
      </div>

     
      <div className="absolute top-40 left-16 text-left max-w-[600px]">
        <h1 className="text-5xl font-bold leading-snug text-yellow-400">
          Luxury Rides <br />
          <span className="text-pink-200">for Women, by Women.</span>
        </h1>
        <p className="mt-4 text-lg text-white">
          Safety. Elegance. Empowerment — every journey, redefined.
        </p>

       
        <div className="mt-8 flex space-x-4">
          <Link
            href="/invest"
            className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg shadow-md"
          >
            Invest in RÉYA
          </Link>
          <Link
            href="/waitlist"
            className="bg-[#6B2D4C] text-white font-semibold px-6 py-3 rounded-lg shadow-md"
          >
            Join the Waitlist
          </Link>
          <button className="border border-yellow-400 text-white px-6 py-3 rounded-lg shadow-md">
            App Coming Soon
          </button>
        </div>
      </div>

    
      <img
        src="/luxury-car.jpg"
        alt="Luxury Car"
        className="absolute right-0 bottom-0 w-[60%] h-auto object-cover rounded-lg"
      />
    </div>
  );
};

export default memo(Page);
