import { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

export default function SignInForm({
  eyebrow = "Sign In",
  title = "Welcome Back",
  defaultValues,
  onSubmit,
  signupHref = "/signUp",
  className = "",
}) {
  const [values, setValues] = useState({
    email: defaultValues?.email ?? "",
    password: defaultValues?.password ?? "",
  });

  const handleChange = (field) => (event) =>
    setValues((current) => ({ ...current, [field]: event.target.value }));

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit?.(values);
  };

  return (
    <section
      className={`w-full rounded-2xl border border-[#0A3CFF]/40 bg-white px-6 py-8 text-neutral-900 shadow-xl sm:rounded-3xl sm:px-8 sm:py-10 lg:min-h-[530px] lg:px-10 lg:py-10 ${className}`}
    >
      <p className="text-xs font-medium text-[#0A3CFF] sm:text-sm">{eyebrow}</p>
      <h1 className="mt-1 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
        {title}
      </h1>

      <form onSubmit={handleSubmit} className="mt-7 space-y-4 sm:mt-8 sm:space-y-5">
        <Field label="Email" htmlFor="signin-email">
          <input
            id="signin-email"
            type="email"
            autoComplete="email"
            placeholder="designer@example.com"
            value={values.email}
            onChange={handleChange("email")}
            required
            className={inputClassName}
          />
        </Field>

        <Field label="Password" htmlFor="signin-password">
          <input
            id="signin-password"
            type="password"
            autoComplete="current-password"
            placeholder="••••••••"
            value={values.password}
            onChange={handleChange("password")}
            required
            className={inputClassName}
          />
        </Field>

        <div className="flex justify-end pt-1">
          <button
            type="submit"
            className="rounded-full bg-[#CCF52B] px-6 py-2 text-sm font-medium text-neutral-900 transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A3CFF]/50 active:scale-95 sm:px-7 sm:py-2.5 cursor-pointer hover:scale-105 transition-all transform duration-700 ease-in-out"
          >
            Sign In
          </button>
        </div>
      </form>

      <div className="mt-10 flex items-center gap-2 text-xs text-neutral-500 sm:mt-12">
        <span className="h-px flex-1 bg-neutral-200" />
        <span>or</span>
        <span className="h-px flex-1 bg-neutral-200" />
      </div>

      <div className="mt-6 flex justify-center gap-3">
        <button
          type="button"
          aria-label="Continue with Facebook"
          className="flex cursor-pointer h-12 w-12 items-center justify-center rounded-2xl border border-neutral-300 text-2xl text-black transition hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A3CFF]/50 hover:scale-105 transition-all transform duration-700 ease-in-out"
        >
          <FaFacebook aria-hidden />
        </button>
        <button
          type="button"
          aria-label="Continue with Google"
          className="flex cursor-pointer h-12 w-12 items-center justify-center rounded-2xl border border-neutral-300 text-2xl text-black hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A3CFF]/50
          hover:scale-105 transition-all transform duration-700 ease-in-out
          "
        >
          <FaGoogle aria-hidden />
        </button>
      </div>

      <p className="mt-10 text-center text-xs text-neutral-400 sm:mt-12 sm:text-sm">
        New user?{" "}
        <a href={signupHref} className="font-medium text-[#0A3CFF] hover:underline hover:scale-105 transition-all transform duration-700 ease-in-out">
          Create an account
        </a>
      </p>
    </section>
  );
}

const inputClassName =
  "w-full rounded-xl border border-neutral-200 px-4 py-2.5 text-sm outline-none placeholder:text-neutral-400 focus:border-[#0A3CFF] focus:ring-2 focus:ring-[#0A3CFF]/20 sm:py-3";

function Field({ label, htmlFor, children }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-medium text-neutral-800">
        {label}
      </label>
      {children}
    </div>
  );
}
