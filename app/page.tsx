"use client";

import CategoryTabs from "@/components/CategoryTabs";
import Hero from "@/components/Hero";

import TabDemo from "@/components/tabDemo";

export default function Home() {
  return (
    <div>
      <div className="container mx-auto py-8 px-4 top-[85px] ">
  
        <Hero/>

      <TabDemo/>
       
      </div>
    </div>
  );
}
