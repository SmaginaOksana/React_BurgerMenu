import * as React from "react";
import "./Registration.scss";
import { useForm } from "react-hook-form";

export default function Registration() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "usermail@gmail.com",
    },
  });

  const onSubmit = (data, e) => {
    if (data.password !== data.confirmPassword) {
      reset({
        password: "",
        confirmPassword: "",
      });
      return;
    } else {
      console.log(data);
      reset();
    }
  };
  const onError = (errors, e) => console.log(errors, e);

  return (
    <div className="registrContainer">
      <h2 className="title">Sign up to order food</h2>
      <form onSubmit={handleSubmit(onSubmit, onError)} className="registrForm">
        <input
          type="text"
          {...register("login", { required: true, minLength: 4 })}
          placeholder="Login"
        />
        {errors.login?.type === "minLength" && (
          <p>"Поле не должно быть меньше 4 символов"</p>
        )}
        <input
          {...register("email", {
            required: true,
            minLength: 10,
          })}
          placeholder="Email"
        />
        {errors.email?.type === "minLength" && (
          <p>"Поле не должно быть меньше 10 символов"</p>
        )}
        <input
          type="text"
          {...register("password", {
            required: true,
            pattern: /^[A-Za-z]+$/,
            minLength: 8,
          })}
          placeholder="Password"
        />
        {errors.password?.type === "minLength" && (
          <p>"Поле не должно быть меньше 8 символов"</p>
        )}
        {errors.password?.type === "pattern" && (
          <p>"Пароль должен состоять из латинских букв и не содержать $"</p>
        )}

        <input
          type="text"
          {...register("confirmPassword", {
            required: true,
            minLength: 8,
          })}
          placeholder="Confirm password"
        />
        {errors.confirmPassword?.type === "minLength" && (
          <p>"Поле не должно быть меньше 8 символов"</p>
        )}

        {(errors.login ||
          errors.email ||
          errors.password ||
          errors.confirmPassword) && <p>"Все поля должны быть заполнены"</p>}

        <input type="submit" value="Sign up" />
      </form>
    </div>
  );
}
