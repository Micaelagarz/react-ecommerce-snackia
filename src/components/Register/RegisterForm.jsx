import { Link } from "react-router-dom";
import styles from "./RegisterForm.module.css";

const RegisterForm = ({
  register,
  handleSubmit,
  errors,
  watch,
  firebaseError,
}) => {
  return (
    <div className={`${styles.registerContainer} container`}>
      <h2>Create a new account</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.groupForm}>
          <label>Enter your email address</label>
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

          <label>Create a password</label>
          <input
            type="password"
            placeholder="********"
            {...register("password", {
              required: {
                value: true,
                message: "The password is required.",
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#_-])[A-Za-z\d@$!%*?&.#_-]{8,}$/,
                message:
                  "The password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a symbol.",
              },
            })}
          />
          {errors.password && <span>{errors.password.message}</span>}

          <label>Confirm password</label>
          <input
            type="password"
            placeholder="********"
            {...register("confirmPassword", {
              required: {
                value: true,
                message: "Please confirm your password.",
              },
              validate: (value) =>
                value === watch("password") || "The passwords do not match.",
            })}
          />
          {errors.confirmPassword && (
            <span>{errors.confirmPassword.message}</span>
          )}

          {firebaseError && (
            <span className={styles.firebaseError}>{firebaseError}</span>
          )}

          <button type="submit">Sign up</button>
          <p>
            Do you already have an account? <Link to="/login">Log in here</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
