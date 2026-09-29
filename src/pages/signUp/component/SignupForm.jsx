import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

/**
 * Right side of the signup screen: the white form card.
 *
 * Props (all optional, defaults are used when missing):
 * @param {string} [eyebrow]      small label above the title, e.g. "Create an Account"
 * @param {string} [title]        e.g. "Welcome to ByteSpace"
 * @param {{ fullName?: string, email?: string, password?: string }} [defaultValues]
 * @param {(values: {fullName: string, email: string, password: string}) => void} [onSubmit]
 * @param {string} [loginHref]
 * @param {string} [className]
 */
export default function SignupForm({
  eyebrow = "Create an Account",
  title = "Welcome to ByteSpace",
  defaultValues,
  onSubmit,
  loginHref = "/sign_In",
  className = "",
}) {
  const [values, setValues] = useState({
    fullName: defaultValues?.fullName ?? "",
    email: defaultValues?.email ?? "",
    password: defaultValues?.password ?? "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (field) => (e) =>
    setValues((v) => ({ ...v, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(values);
  };

  return (
    <div
      className={`flex w-full flex-col rounded-2xl bg-white p-5 text-neutral-900 shadow-xl sm:rounded-3xl sm:p-8 md:p-10 lg:min-h-[min(76dvh,620px)] lg:justify-between lg:p-8 xl:p-10 ${className}`}
    >
      <p className="text-xs font-medium text-[#0A3CFF] sm:text-sm">{eyebrow}</p>
      <h2 className="mt-1 max-w-sm text-2xl font-bold leading-tight tracking-tight sm:text-3xl xl:text-4xl">
        {title}
      </h2>

      <form onSubmit={handleSubmit} className="mt-5 space-y-4 sm:mt-6 sm:space-y-4 lg:mt-7">
        <Field label="Full Name" htmlFor="fullName">
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            placeholder="Jamie Davis"
            value={values.fullName}
            onChange={handleChange("fullName")}
            required
            className="w-full rounded-xl border border-neutral-200 px-4 py-2.5 text-sm outline-none placeholder:text-neutral-400 focus:border-[#0A3CFF] focus:ring-2 focus:ring-[#0A3CFF]/20 sm:text-sm"
          />
        </Field>

        <Field label="Email" htmlFor="email">
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="designer@example.com"
            value={values.email}
            onChange={handleChange("email")}
            required
            className="w-full rounded-xl border border-neutral-200 px-4 py-2.5 text-sm outline-none placeholder:text-neutral-400 focus:border-[#0A3CFF] focus:ring-2 focus:ring-[#0A3CFF]/20 sm:text-sm"
          />
        </Field>

        <Field label="Password" htmlFor="password">
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              placeholder="••••••••"
              value={values.password}
              onChange={handleChange("password")}
              required
              minLength={8}
              className="w-full rounded-xl border border-neutral-200 px-4 py-2.5 pr-11 text-sm outline-none placeholder:text-neutral-400 focus:border-[#0A3CFF] focus:ring-2 focus:ring-[#0A3CFF]/20 sm:text-sm"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-800 focus:outline-none"
            >
              {showPassword ? <FiEyeOff aria-hidden /> : <FiEye aria-hidden />}
            </button>
          </div>
        </Field>

        <div className="flex justify-end pt-2 sm:pt-3">
          <button
            type="submit"
            className="rounded-full bg-[#CCF52B] px-8 py-3 text-sm font-semibold text-neutral-900 transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A3CFF]/50 active:scale-95 sm:text-base"
          >
            Continue
          </button>
        </div>
      </form>

      <p className="mt-6 text-center text-xs text-neutral-600 sm:text-sm lg:mt-6">
        Already have an account?{" "}
        <a href={loginHref} className="font-medium text-[#0A3CFF] hover:underline">
          Login
        </a>
      </p>
    </div>
  );
}

function Field({ label, htmlFor, children }) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-medium text-neutral-700"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
