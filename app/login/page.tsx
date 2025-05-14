import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardBody>
          <h1 className="text-2xl font-bold mb-4 text-center">登录账号</h1>

          <form className="space-y-4">
            <Input type="email" label="邮箱" placeholder="请输入邮箱" required />
            <Input type="password" label="密码" placeholder="请输入密码" required />

            <Button type="submit" className="w-full bg-primary text-white">
              登录
            </Button>
          </form>

          <p className="text-center text-sm mt-4">
            还没有账号？{" "}
            <Link href="/register" className="text-primary hover:underline">
              去注册
            </Link>
          </p>
        </CardBody>
      </Card>
    </div>
  );
}
