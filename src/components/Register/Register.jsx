import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import auth from "../../Firebase/firebase.config";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log(name, email, password, accepted);

    //reset error
    setRegisterError("");
    // reset success
    setSuccess("");

    if (password.length < 6) {
      setRegisterError("Password Should be at least 6 Character");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "password should have at least one upper case Character"
      );
      return;
    } else if (!accepted) {
      setRegisterError("Please Mark Terms and Condition");
      return;
    }

    //create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("user created Successfully");

        //update profile
        updateProfile(result.user, {
          displayName: name, 
          photoURL: "https://example.com/jane-q-user/profile.jpg"
      })
      .then( () => console.log('profile updated'))
          .catch()
        

        // send verification email:
        sendEmailVerification(result.user)
          .then(() => {
            alert('Please check your email and verify your account')
            
          })
      })
      .catch((error) => {
        console.log(error.message);
        setRegisterError(error.message);
      });
  }

  return (
    <div className="max-w-7xl text-center mx-auto">
      <div className="md:w-1/2">
        <h2 className="text-2xl font-semibold mb-4">Please Register</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            className="p-2 w-1/2 rounded-lg"
            type="text"
            name="name"
            placeholder="Enter Your Name"
            id=""
            required
          />
          <br />
          <input
            className="p-2 w-1/2 rounded-lg"
            type="email"
            name="email"
            placeholder="Enter Email"
            id=""
            required
          />
          <br />
          <div className="relative">
            <input
              className="p-2 w-1/2 rounded-lg"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter Password"
              id=""
              required
            />
            <span
              className="absolute top-3"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <br />
          <div className="mb-2">
            <input type="checkbox" name="terms" id="terms" />
            <label className="ml-2" htmlFor="terms">
              Accept <a href="#">Terms and Conditions</a>{" "}
            </label>
          </div>
          <input
            className=" btn btn-primary w-1/2"
            type="submit"
            value="Register"
          />
        </form>
        {registerError && (
          <p className="text-red-500 font-semibold">{registerError}</p>
        )}
        {success && <p className="text-green-500">{success}</p>}
        <p>
          Already have an account?  Please
          <Link className="text-violet-400 text-lg ml-2" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
