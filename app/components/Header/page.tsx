import { memo } from 'react';
import Link from "next/link"

const Page = () => {
  return (
    <div>
      
        <header className="p-4 bg-gray-200">
      <nav>
        <Link href="/" className="mr-4">Home</Link>
        <Link href="/about" className="mr-4">About</Link>
        <Link href="/contact" className="mr-4">Contact</Link>
        <Link href="/driver" className="mr-4">Drivers</Link>
        <Link href="/investors" className="mr-4">Investor</Link>
        <Link href="/login" className="mr-4">Login</Link>
          <Link href="/signup" className="mr-4">Signup</Link>
            <Link href="/safety" className="mr-4">Safety</Link>
      </nav>
    </header>
 
    </div>
  );
};

export default Page;