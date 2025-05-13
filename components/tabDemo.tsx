import { Tabs, Tab } from "@heroui/tabs";
import { Card, CardBody } from "@heroui/card";
import ModelCard from "@/components/ModelCard";
const categories = [
  { label: "为您推荐", value: "recommended" },
  { label: "内部框架", value: "residential" },
  { label: "衣柜", value: "commercial" },
  { label: "鞋柜", value: "cultural-medical" },
  { label: "抽屉", value: "entertainment" },
  { label: "橱柜", value: "dining" },
  { label: "床头柜", value: "hotels" },
  { label: "洗衣机柜", value: "public" },
  { label: "浴室柜", value: "soft-decoration" },
];
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
];
export default function TabDemo() {
  return (
    <div className="flex w-full flex-col sticky top-[120px] justify-center items-center">
      <Tabs aria-label="分类选项">
        {categories.map((category) => (
          <Tab key={category.value} title={category.label}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-24">
              {models.map((model) => (
                <ModelCard key={model.id} model={model} />
              ))}

              {models.map((model) => (
                <ModelCard key={model.id} model={model} />
              ))}
              {models.map((model) => (
                <ModelCard key={model.id} model={model} />
              ))}
              {models.map((model) => (
                <ModelCard key={model.id} model={model} />
              ))}
              {models.map((model) => (
                <ModelCard key={model.id} model={model} />
              ))}
              {models.map((model) => (
                <ModelCard key={model.id} model={model} />
              ))}
              {models.map((model) => (
                <ModelCard key={model.id} model={model} />
              ))}
              {models.map((model) => (
                <ModelCard key={model.id} model={model} />
              ))}
              {models.map((model) => (
                <ModelCard key={model.id} model={model} />
              ))}
              {models.map((model) => (
                <ModelCard key={model.id} model={model} />
              ))}
              {models.map((model) => (
                <ModelCard key={model.id} model={model} />
              ))}
              {models.map((model) => (
                <ModelCard key={model.id} model={model} />
              ))}
              {models.map((model) => (
                <ModelCard key={model.id} model={model} />
              ))}
              {models.map((model) => (
                <ModelCard key={model.id} model={model} />
              ))}
              {models.map((model) => (
                <ModelCard key={model.id} model={model} />
              ))}
              {models.map((model) => (
                <ModelCard key={model.id} model={model} />
              ))}
            </div>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
