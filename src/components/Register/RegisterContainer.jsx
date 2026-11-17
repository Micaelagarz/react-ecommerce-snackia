import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import RegisterForm from "./RegisterForm";

const RegisterContainer = () => {
  const navigate = useNavigate();
  const [firebaseError, setFirebaseError] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleRegister = async (data) => {
    setFirebaseError(null);
    const auth = getAuth();

    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      navigate("/");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        const wantsToLogIn = window.confirm(
          "This email address is already registered. Would you like to try logging in?",
        );
        if (wantsToLogIn) {
          navigate("/login");
        } else {
          navigate("/");
        }
      } else {
        setFirebaseError(
          "An error occurred while registering the user. Please check the information and try again.",
        );
        console.error("Registration error:", error.message);
      }
    }
  };

  return (
    <RegisterForm
      register={register}
      handleSubmit={handleSubmit(handleRegister)}
      errors={errors}
      watch={watch}
      firebaseError={firebaseError}
    />
  );
};

export default RegisterContainer;
