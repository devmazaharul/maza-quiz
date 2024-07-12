"use client"
import { Bricolage_Grotesque ,Chakra_Petch} from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { Usercontext } from "./contex/Contextapi";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

const inter = Bricolage_Grotesque({ subsets: ["vietnamese"],weight:['300','500'] });

export default  function RootLayout({ children }) {
  const [isDark, setisDark] = useState(true)

  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-gray-200`}>
   
        <Usercontext.Provider value={{isDark,setisDark}}>
        <Header/>
{children}

</Usercontext.Provider>

<Toaster
  position="top-center"
  reverseOrder={false}
/>
        </body>
    </html>
  );
}
