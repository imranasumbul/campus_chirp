
import Header from "@/components/header/Header";

import "@radix-ui/themes/styles.css";
//import { getServerSession } from "next-auth";
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));



export default async function Home() {

  await delay(8000); // 3-second delay
  return (
    <>
    
            
      <Header/>
            
              
    </>
  )
}