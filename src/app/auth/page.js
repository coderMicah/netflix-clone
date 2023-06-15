"use client";
import Input from "@/components/Input";
import { useCallback, useState } from "react";

function page(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState();
  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant == "login" ? "register" : "login"
    );
  }, []);
  return (
    <div className='relative h-full w-full bg-[url("/images/hero.jpg")] bg-no-repeat bg-center bg-fixed bg-cover'>
      <div className="bg-black h-full w-full bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="logo" className="h-12" />
          <div className="flex justify-center">
            <div className="bg-black bg-poacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md lg:rounded-md">
              <h2 className="text-white text-4xl mb-8 font-semibold ">
                {variant === "login" ? "Sign In" : "Register"}
              </h2>
              <div className="flex flex-col gap-4">
                {variant === "register" && (
                  <Input
                    label="Username"
                    onchange={(e) => {
                      setName(e.target.value);
                    }}
                    id="username"
                    type="text"
                    value=""
                  />
                )}
                <Input
                  label="Email"
                  onchange={(e) => {
                    setEmail(e.target.value);
                  }}
                  id="email"
                  type="email"
                  value=""
                />
                <Input
                  label="Password"
                  onchange={(e) => {
                    setPassword(e.target.value);
                  }}
                  id="password"
                  type="password"
                  value=""
                />
              </div>

              <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition ">
                {variant === "login" ? "Log In" : "Sign Up"}
              </button>
              <p className="text-neutral-500 text-center text-sm mt-12">
                {variant === "login"
                  ? "First time using Netflix?"
                  : "Already had an account?"}

                <span
                  onClick={toggleVariant}
                  className="text-white ml-1 hover:underline cursor-pointer"
                >
                  {variant === "login" ? "Create an Account" : "Login"}
                </span>
              </p>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default page;
