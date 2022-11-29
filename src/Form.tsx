import { useForm } from "react-hook-form";

interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  password1: string;
  extraError?: string;
}

function Form() {
  const { register, handleSubmit } = useForm<IForm>({
    defaultValues: { email: "@naver.com" },
  });
  const onValid = (data: IForm) => {};
  return (
    <form
      style={{ display: "flex", flexDirection: "column", width: 300 }}
      onSubmit={handleSubmit(onValid)}
    >
      <input
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[A-Za-z0-9._%+-]+@naver.com$/,
            message: "Only naver.com emails allowed",
          },
        })}
        placeholder="Email"
      />
      <input
        {...register("firstName", {
          required: "write here",
          validate: {
            noNico: (value) =>
              value.includes("nico") ? "no nicos allowed" : true,
            noNick: (value) =>
              value.includes("nick") ? "no nick allowed" : true,
          },
        })}
        placeholder="First Name"
      />
      <input
        {...register("lastName", { required: "write here" })}
        placeholder="Last Name"
      />
      <input
        {...register("username", { required: "write here", minLength: 10 })}
        placeholder="Username"
      />
      <input
        {...register("password", { required: "write here", minLength: 5 })}
        placeholder="Password"
      />
      <input
        {...register("password1", {
          required: "Password is required",
          minLength: { value: 5, message: "Your password is too short." },
        })}
        placeholder="Password1"
      />
      <button>Add</button>
    </form>
  );
}
export default Form;
