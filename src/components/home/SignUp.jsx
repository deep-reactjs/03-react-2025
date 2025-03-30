import React from "react";
import { useForm } from "react-hook-form";
import Input from "../common/Input";
import Button from "../common/Button";
const SignUp = () => {
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              type="text"
              label="Name"
              name="name"
              id="sign-up-name"
              register={register}
              registerOptions={{ required: true }}
              error={errors?.name && "Name is required"}
            />
            <Input
              type="email"
              label="Email"
              name="email"
              id="sign-up-email"
              register={register}
              registerOptions={{ required: true }}
              error={errors?.email && "Email is required"}
            />
          </div>
          <Input
            type="password"
            label="Password"
            name="password"
            id="sign-up-password"
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

export default SignUp;
