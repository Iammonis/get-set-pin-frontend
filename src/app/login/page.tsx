"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React from "react";
import { useForm } from "react-hook-form";

interface LoginProps {
  email: string;
  password: string;
}

const Login = () => {
  const { handleSubmit, register } = useForm<LoginProps>();
  
  const onSubmit = (data: LoginProps) => {
    console.log(data);
  };

  return (
    <main className="w-full h-full flex justify-center items-center">
      <div>
        <Card className="md:w-[350px]">
          <CardHeader>
            <CardTitle>Sign in to your account</CardTitle>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <Input
                {...register("email")}
                type="email"
                placeholder="Enter your Email"
              />
              <Input
                {...register("password")}
                type="password"
                placeholder="Enter your Password"
              />
              <Button type="submit">Login</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Login;
