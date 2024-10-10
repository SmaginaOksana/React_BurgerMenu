import "./Authorization.scss";
import { useForm } from "react-hook-form";

function Authorization() {
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
    console.log(data);
    reset();
  };
  const onError = (errors, e) => console.log(errors, e);

  return (
    <div className="authContainer">
      <h2 className="title">Log in to order food</h2>
      <form onSubmit={handleSubmit(onSubmit, onError)} className="authForm">
        <input
          type="text"
          {...register("login", { required: true, minLength: 4 })}
          placeholder="Login"
        />
        {errors.login?.type === "minLength" && (
          <p>"Поле не должно быть меньше 4 символов"</p>
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

        {(errors.login || errors.password) && (
          <p>"Все поля должны быть заполнены"</p>
        )}
        <input type="submit" value="Log in" />
      </form>
    </div>
  );
}

export default Authorization;
