import { Link } from "react-router-dom";

const LoginForm = ({ register, handleSubmit, errors }) => {
  return (
    <div>
      <h2> Login </h2>
      <form onSubmit={handleSubmit}>
        <label>Enter your email</label>
        <input
          type="email"
          placeholder="e.g. name@example.com"
          {...register("email", {
            required: {
              value: true,
              message: "You must enter an email address",
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Please, enter a valid email format.",
            },
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}

        <label>Enter your password</label>
        <input
          type="password"
          placeholder="********"
          {...register("password", {
            required: {
              value: true,
              message: "The password is required.",
            },
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}

        <button type="submit">Log in</button>

        <p>
          Don't you have an account? <Link to="/register">Register here</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
