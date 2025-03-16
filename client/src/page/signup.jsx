import React, { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Create user in Firebase
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const idToken = await userCredential.user.getIdToken(); // Get Firebase ID token

      // Send token to backend for user registration
      const response = await fetch("https://dtuhack.onrender.com/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, idToken }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Signup successful:", data);
      } else {
        setError(data.error || "Signup failed.");
      }
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  };

  return (
    <div className="bg-gradient-to-br h-[100vh] from-neutral-800 to-neutral-900">
      <div className="signup-container">
        <div className="m-auto pt-40 w-[50%] text-center">
          <div className="border border-neutral-700 bg-neutral-800 shadow-xl rounded-md">
            <h2 className="font-mono pt-5 text-white underline underline-offset-6 decoration-amber-600 text-2xl">
              Sign<span className="text-amber-600">Up</span>
            </h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSignup} className="flex flex-col items-center">
              <div className="pt-10 pb-3">
                <div className="text-amber-600 pb-1 font-mono text-start">Email :</div>
                <input
                  type="email"
                  placeholder="Enter Here"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border border-black pr-10 pl-1 font-sans rounded-md bg-gray-200"
                />
              </div>
              <div className="pb-10">
                <div className="text-amber-600 font-mono text-start pb-1">Password :</div>
                <input
                  type="password"
                  placeholder="Enter Here"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="border border-black pr-10 pl-1 font-sans rounded-md bg-gray-200"
                />
              </div>
              <div className="pb-5">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-amber-600 p-2 text-center font-mono font-xl border rounded-md border-amber-600"
                >
                  {loading ? "Signing up..." : "Sign Up"}
                </button>
              </div>
              <div className="pb-10 text-sm text-white font-sans font-light">
                <p>
                  Already have an account?{" "}
                  <a href="./login" className="text-amber-600 underline underline-amber-600">
                    Login
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;