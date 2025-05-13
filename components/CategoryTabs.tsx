// components/CategoryTabs.tsx
"use client";
import { Tabs, TabsList, TabsTrigger} from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const categories = [
  { label: '为您推荐', value: 'recommended' },
  { label: '内部框架', value: 'residential' },
  { label: '衣柜', value: 'commercial' },
  { label: '鞋柜', value: 'cultural-medical' },
  { label: '抽屉', value: 'entertainment' },
  { label: '橱柜', value: 'dining' },
  { label: '床头柜', value: 'hotels' },
  { label: '洗衣机柜', value: 'public' },
  { label: '浴室柜', value: 'soft-decoration' },
  // 可以根据实际情况添加更多分类
];

function CategoryTabs({ onCategoryChange }: { onCategoryChange: (value: string) => void }) {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0].value);

  const handleTabChange = (value: string) => {
    setActiveCategory(value);
    onCategoryChange(value); // 将选中的分类传递给父组件
  };

  return (
    <div className="py-4 bg-gray-50 sticky top-0 z-20 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <Tabs value={activeCategory} onValueChange={handleTabChange} className="w-full overflow-auto scroll-smooth">
          <TabsList className="flex space-x-4">
            {categories.map((category) => (
              <TabsTrigger
                key={category.value}
                value={category.value}
                className={cn(
                  'whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                  'data-[state=active]:bg-blue-500 data-[state=active]:text-white',
                  'hover:bg-gray-200'
                )}
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {/* 我们不再在这里直接渲染内容 */}
        </Tabs>
      </div>
    </div>
  );
}

export default CategoryTabs;