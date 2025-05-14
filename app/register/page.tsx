import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardBody>
          <h1 className="text-2xl font-bold mb-4 text-center">注册账号</h1>

          <form className="space-y-4">
            <Input type="text" label="用户名" placeholder="请输入用户名" required />
            <Input type="email" label="邮箱" placeholder="请输入邮箱" required />
            <Input type="password" label="密码" placeholder="请输入密码" required />
            <Input type="password" label="确认密码" placeholder="请再次输入密码" required />

            <Button type="submit" className="w-full bg-primary text-white">
              注册
            </Button>
          </form>

          <p className="text-center text-sm mt-4">
            已有账号？{" "}
            <Link href="/login" className="text-primary hover:underline">
              去登录
            </Link>
          </p>
        </CardBody>
      </Card>
    </div>
  );
}
