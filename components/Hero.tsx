// components/Hero.js
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

function Hero() {
  return (
    <div className="relative bg-gray-100 py-24 md:py-36 bg-cover bg-center" style={{ backgroundImage: 'url(  "https://lgpic.3d66.com/anliRes/anli/5d4f/7106d0247817a1fe3a0b2f3109e82850.png!zzz-list-waterfall-auto-p?k=D41D8CD98F00B204E9800998ECF8427E&v=20061283"）' }}>
      <div className="absolute inset-0 bg-black opacity-20"></div> {/* 可选的背景遮罩 */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl mx-auto">
          <div className="flex rounded-full shadow-lg overflow-hidden">
            <Input
              type="text"
              placeholder="请输入模型、设计师、关键词"
              className="w-full rounded-l-full focus-visible:ring-blue-500"
            />
            <Button className="rounded-r-full bg-green-500 hover:bg-green-600 text-white">
              搜索
            </Button>
          </div>
          {/* 可以添加一些额外的文字或者宣传语 */}
        </div>
      </div>
    </div>
  );
}

export default Hero;