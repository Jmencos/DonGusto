import React from "react";
import Link from "next/link";
import style from "./navbar.module.css"


  export default function Navbar() {
   return (
     <>
     <h1 className={style.test}> testing border for h1</h1>
       <div className="w-full h-20 bg-emerald-800 sticky top-0">
         <div className="container mx-auto px-4 h-full">
           <div className="flex justify-between items-center h-full">
             {/* <Logo /> */}
             <ul className="hidden md:flex gap-x-6 text-white">
               <li>
                 <Link href="/about">
                   <p>About Us</p>
                 </Link>
               </li>
               <li>
                 <Link href="/products">
                   <p>Products</p>
                 </Link>
               </li>
               <li>
                 <Link href="/contacts">
                   <p>Contacts</p>
                 </Link>
               </li>
             </ul>
             {/* <Button /> */}
           </div>
         </div>
       </div>
     </>
   );
 };

