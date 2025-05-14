"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";
import { Button } from "@heroui/button";
import { Tabs, Tab } from "@heroui/tabs";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { Card, CardBody } from "@heroui/card";
import React from "react";
export default function Account() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selected, setSelected] = React.useState<React.Key>("login");
  return (
    <>
      <Button onPress={onOpen}>登录</Button>
      <Modal
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col w-full">
                  <Card className="max-w-full w-[340px] h-[400px]">
                    <CardBody className="overflow-hidden">
                      <Tabs
                        fullWidth
                        aria-label="Tabs form"
                        size="md"
                        onSelectionChange={setSelected}
                      >
                        <Tab key="login" title="Login">
                          <form className="flex flex-col gap-4">
                            <Input
                              isRequired
                              label="Email"
                              placeholder="Enter your email"
                              type="email"
                            />
                            <Input
                              isRequired
                              label="Password"
                              placeholder="Enter your password"
                              type="password"
                            />
                            <p className="text-center text-small">
                              Need to create an account?{" "}
                              <Link
                                size="sm"
                                onPress={() => setSelected("sign-up")}
                              >
                                Sign up
                              </Link>
                            </p>
                            <div className="flex gap-2 justify-end">
                              <Button fullWidth color="primary">
                                Login
                              </Button>
                            </div>
                          </form>
                        </Tab>
                        <Tab key="sign-up" title="Sign up">
                          <form className="flex flex-col gap-4 h-[300px]">
                            <Input
                              isRequired
                              label="Name"
                              placeholder="Enter your name"
                              type="password"
                            />
                            <Input
                              isRequired
                              label="Email"
                              placeholder="Enter your email"
                              type="email"
                            />
                            <Input
                              isRequired
                              label="Password"
                              placeholder="Enter your password"
                              type="password"
                            />
                            <p className="text-center text-small">
                              Already have an account?{" "}
                              <Link
                                size="sm"
                                onPress={() => setSelected("login")}
                              >
                                Login
                              </Link>
                            </p>
                            <div className="flex gap-2 justify-end">
                              <Button fullWidth color="primary">
                                Sign up
                              </Button>
                            </div>
                          </form>
                        </Tab>
                      </Tabs>
                    </CardBody>
                  </Card>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
