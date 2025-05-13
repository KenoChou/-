import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Input } from "@heroui/input";
import { Link } from "@heroui/link";

export default function DetailPage() {
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      {/* 详情头部 */}
      <header className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">产品名称</h1>
        <p className="text-lg text-gray-600 mt-2">一段简短的描述，概述产品特点。</p>
      </header>

      {/* 图文展示部分 */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          {/* 产品图片 */}
          <img
            src=" https://lgpic.3d66.com/anliRes/anli/5d4f/7106d0247817a1fe3a0b2f3109e82850.png!zzz-list-waterfall-auto-p?k=D41D8CD98F00B204E9800998ECF8427E&v=20061283" // 这里放产品图片的 URL
            alt="产品图"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div>
          {/* 产品描述 */}
          <Card className="shadow-lg">
            <CardBody>
              <h2 className="text-xl font-semibold text-gray-800">产品详情</h2>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id mi in ante cursus
                pretium. Suspendisse potenti. Mauris volutpat, tortor eget posuere luctus, neque velit
                consequat orci, eget facilisis mi orci et sapien. Ut ullamcorper ante nec augue condimentum
                tempor.
              </p>
              <p className="text-gray-600 mt-4">
                Integer malesuada magna et velit iaculis, nec volutpat elit feugiat. Aliquam auctor felis
                nec risus tincidunt, at fermentum velit fermentum. Nulla facilisi. Integer tristique magna
                sit amet turpis cursus, ut pharetra velit luctus.
              </p>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* 下载按钮 */}
      <div className="flex justify-center">
        <Button
          as={Link}
          href="#"
          className="bg-primary-600 text-white flex items-center justify-center px-6 py-3 rounded-lg shadow-lg"
        >
           下载产品
        </Button>
      </div>
    </div>
  );
}
