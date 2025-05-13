"use client"; 

import CategoryTabs from "@/components/CategoryTabs";
import Hero from "@/components/Hero";
import ModelCard from "@/components/ModelCard";
const models = [
  {
    id: "1",
    imageUrl:
      "https://lgpic.3d66.com/anliRes/anli/5d4f/7106d0247817a1fe3a0b2f3109e82850.png!zzz-list-waterfall-auto-p?k=D41D8CD98F00B204E9800998ECF8427E&v=20061283",
    title: "现代简约沙发",
    author: "设计师 A",
    views: 1200,
  },
  {
    id: "2",
    imageUrl:
      "https://lgpic.3d66.com/anliRes/anli/5d4f/7106d0247817a1fe3a0b2f3109e82850.png!zzz-list-waterfall-auto-p?k=D41D8CD98F00B204E9800998ECF8427E&v=20061283",
    title: "北欧风格餐桌椅",
    author: "设计师 B",
    views: 850,
  },
  {
    id: "3",
    imageUrl:
      "https://lgpic.3d66.com/anliRes/anli/5d4f/7106d0247817a1fe3a0b2f3109e82850.png!zzz-list-waterfall-auto-p?k=D41D8CD98F00B204E9800998ECF8427E&v=20061283",
    title: "工业风 Loft 公寓",
    author: "设计师 C",
    views: 1500,
  },
  {
    id: "4",
    imageUrl:
      "https://lgpic.3d66.com/anliRes/anli/5d4f/7106d0247817a1fe3a0b2f3109e82850.png!zzz-list-waterfall-auto-p?k=D41D8CD98F00B204E9800998ECF8427E&v=20061283",
    title: "新中式茶室",
    author: "设计师 D",
    views: 920,
  },
  {
    id: "5",
    imageUrl:
      "https://lgpic.3d66.com/anliRes/anli/5d4f/7106d0247817a1fe3a0b2f3109e82850.png!zzz-list-waterfall-auto-p?k=D41D8CD98F00B204E9800998ECF8427E&v=20061283",
    title: "美式复古书房",
    author: "设计师 E",
    views: 1100,
  },
  {
    id: "6",
    imageUrl:
      "https://lgpic.3d66.com/anliRes/anli/5d4f/7106d0247817a1fe3a0b2f3109e82850.png!zzz-list-waterfall-auto-p?k=D41D8CD98F00B204E9800998ECF8427E&v=20061283",
    title: "日式榻榻米卧室",
    author: "设计师 F",
    views: 780,
  },
  // ... 更多模型数据
];
export default function Home() {
  return (
    <div>
      <div className="container mx-auto py-8 px-4">
        <Hero/>
            <CategoryTabs onCategoryChange={(value) => {
  console.log("分类切换到：", value);
}} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {models.map((model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </div>
      </div>
    </div>
  );
}
