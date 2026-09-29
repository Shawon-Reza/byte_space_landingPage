import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function SignupSection({
  logo,
  heading = "Sign up and come in",
  description = "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.",
  illustration = {
    // Placeholder — replace with your real composition image.
    src: "https://picsum.photos/seed/bytespace-promo/900/900",
    alt: "Preview of ByteSpace courses",
  },
  eyebrow = "Create an Account",
  formTitle = "Welcome to ByteSpace",
  defaultValues,
  onSubmit,
  loginHref = "#",
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
    <section
      className={`w-full px-4 py-8 text-white sm:px-8 sm:py-12 lg:px-16 lg:py-16 ${className}`}
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
        {/* Left: brand + copy + illustration */}
        <div className="flex flex-col">
          {logo?.src ? (
            <img src={logo.src} alt={logo.alt ?? "Logo"} className="h-8 w-auto sm:h-9" />
          ) : (
            // Placeholder mark — swap for the real logo later.
            <div
              aria-label="Logo placeholder"
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#CCF52B] text-lg font-bold text-neutral-900 sm:h-10 sm:w-10"
            >
              b
            </div>
          )}

          <h1 className="mt-6 text-2xl font-bold leading-tight tracking-tight sm:mt-8 sm:text-3xl">
            {heading}
          </h1>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/85 sm:text-base">
            {description}
          </p>

          {/* Promo illustration — a single image; swap `illustration.src` later */}
          <div className="mt-8 aspect-square w-full max-w-md overflow-hidden rounded-3xl bg-white/10 sm:mt-10">
            <img
              src={illustration.src}
              alt={illustration.alt ?? ""}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Right: signup form */}
        <div className="w-full rounded-3xl bg-white p-6 text-neutral-900 shadow-xl sm:p-8 md:p-10">
          <p className="text-xs font-medium text-[#0A3CFF] sm:text-sm">
            {eyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
            {formTitle}
          </h2>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
            <Field label="Full Name" htmlFor="fullName">
              <input
                id="fullName"
                type="text"
                autoComplete="name"
                placeholder="Jamie Davis"
                value={values.fullName}
                onChange={handleChange("fullName")}
                required
                className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm outline-none placeholder:text-neutral-400 focus:border-[#0A3CFF] focus:ring-2 focus:ring-[#0A3CFF]/20 sm:text-base"
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
                className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm outline-none placeholder:text-neutral-400 focus:border-[#0A3CFF] focus:ring-2 focus:ring-[#0A3CFF]/20 sm:text-base"
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
                  className="w-full rounded-xl border border-neutral-300 px-4 py-3 pr-11 text-sm outline-none placeholder:text-neutral-400 focus:border-[#0A3CFF] focus:ring-2 focus:ring-[#0A3CFF]/20 sm:text-base"
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

          <p className="mt-6 text-center text-sm text-neutral-600 sm:mt-8">
            Already have an account?{" "}
            <a
              href={loginHref}
              className="font-medium text-[#0A3CFF] hover:underline"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </section>
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