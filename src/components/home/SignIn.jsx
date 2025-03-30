import React from "react";
import { useForm } from "react-hook-form";
import Input from "../common/Input";
import Button from "../common/Button";
const SignIn = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="mt-2">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-2">
          <Input
            type="email"
            label="Email"
            name="email"
            id="sign-in-email"
            register={register}
            registerOptions={{ required: true }}
            error={errors?.email && "Email is required"}
          />
          <Input
            type="password"
            label="Password"
            name="password"
            id="sign-in-password"
            register={register}
            registerOptions={{ required: true, minLength: 6, maxLength: 16 }}
            error={errors?.password && "Password is required"}
          />
        </div>
        <Button
          size="large"
          type="fill"
          className="mt-6 w-full justify-center"
          variant="primary"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default SignIn;
