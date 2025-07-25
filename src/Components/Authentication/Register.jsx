import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const {
    createUser,
    setUser2,
    profile,
    createUserWithLoginGoogle,
    createUserWithGithub,
  } = use(AuthContext);
  const navigate = useNavigate();

  const [error, serError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const passValidation = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (passValidation.test(password) === false) {
      serError(
        "password should be 1 capital letter 1 smaller letter and at least 6 character"
      );
      return;
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
     
        profile({ displayName: name, photoURL: photo,  })
          .then(() => {
            setUser2({
              ...user,
              displayName: name,
              photoURL: photo,
              email: email,
            });
            navigate(`${location.state ? location.state : "/"}`);
            Swal.fire({
              title: `${user.displayName} log in Successfully!`,
              icon: "success",
              draggable: true,
            });
          })
          .catch((error) => {
            toast.error(`${error} `);
            setUser2(user);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire({
          title: `${(errorCode, errorMessage)} log out Successfully!`,
          icon: "success",
          draggable: true,
        });
      });
  };
  const handleSigninWithGoogle = () => {
    //   register with google login
    console.log('hello')
    createUserWithLoginGoogle()
      .then((result) => {
        const user = result.user;
       console.log(result)

        setUser2(user);
        navigate(`${location.state ? location.state : "/"}`);
        Swal.fire({
          title: `${user.displayName} log in Successfully!`,
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) => {
        toast.error(`${error} `);
      });
  };

  const handleSigninWithGithub = () => {
    createUserWithGithub()
      .then((result) => {
        const user = result.user;
        setUser2(user);

        navigate(`${location.state ? location.state : "/"}`);
        Swal.fire({
          title: `${user.displayName} log in Successfully!`,
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(`${(errorCode, errorMessage)} `);
      });
  };
  return (
    <>
      <div className="bg-[url(https://static.vecteezy.com/system/resources/previews/004/713/780/non_2x/winter-season-snowscape-vector.jpg)] dark:bg-[url(https://blogger.googleusercontent.com/img/a/AVvXsEisITZddd0Ow2_appOjNACve84M3Eg5dcGrLLj2kuHvOox6592WFF6lXUF4TlzwKXKhQlCIvZNmpQPgXRXC5frmMbkOHfQZjDEmzWeKAbb5vdA_dgSi-0QoDdLE1Xop8GNaqoIyeWzmqRyJP-hCC70wVNoS6skC_ALCP6XNnS0--kER8iLtji3HFJAKqg=s16000)] bg-no-repeat bg-center bg-cover py-28">
        <div className="bg-transparent backdrop-blur-xl shadow-2xl max-w-md w-11/12 mx-auto my-12 p-8 space-y-3 rounded-xl  text-gray-800 dark:text-white">
          <h1 className="text-2xl font-bold text-center">Register</h1>
          <form onSubmit={handleRegister} className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="username" className="block text-gray-600">
                Name
              </label>
              <input
                required
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-md bg-white border-gray-300 text-gray-800 focus:border-violet-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="username" className="block text-gray-600">
                Photo URL
              </label>
              <input
                type="text"
                required
                name="photo"
                id="photo"
                placeholder="Photo URL"
                className="w-full px-4 py-3 rounded-md bg-white border-gray-300 text-gray-800 focus:border-violet-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="username" className="block text-gray-600">
                Email
              </label>
              <input
                type="email"
                required
                name="email"
                id="email"
                placeholder="rifat@gamil.com"
                className="w-full px-4 py-3 rounded-md bg-white border-gray-300 text-gray-800 focus:border-violet-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block text-gray-600">
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md border-gray-300 bg-white dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button
              type="submit"
              className="block w-full p-3 text-center rounded-sm text-gray-50 bg-blue-600"
            >
              Register
            </button>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16bg-gray-300"></div>
            <p className="px-3 text-sm text-gray-600">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          </div>
          <div className="flex justify-center space-x-4">
            <button
              onClick={handleSigninWithGoogle}
              aria-label="Log in with Google"
              className="p-3 rounded-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current cursor-pointer"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
            </button>
            <button
              onClick={handleSigninWithGithub}
              aria-label="Log in with GitHub"
              className="p-3 rounded-sm cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
              </svg>
            </button>
          </div>
          <p className="text-xs text-center sm:px-6 text-gray-600">
            Already have an account?
            <Link to="/login" className="underline dark:text-gray-800">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
