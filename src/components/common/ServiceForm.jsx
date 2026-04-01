"use client";
import Link from "next/link";
import styles from "../services/Services.module.scss";
import { useForm } from "react-hook-form";

const ServiceForm = () => {
  const { register } = useForm();

  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-8 shadow-[0_0_40px_rgba(168,85,247,0.08)] backdrop-blur-xl">
      <h3 className="mb-3 text-3xl font-semibold text-white">Say, Hello !</h3>

      <p className="mb-6 text-sm text-gray-400">
        Tell us a bit about yourself, then schedule time with one of our experts
        who will show you exactly how you can power up your results.
        <br />
        <span className="mt-4 block text-gray-500">
          <Link
            href="#"
            className="text-white transition duration-200 hover:underline"
          >
            Click here to see if you're a good fit.
          </Link>
        </span>
      </p>

      <form className="space-y-6 rounded-2xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl">
        <div>
          <label className="text-xs text-gray-400">First Name*</label>
          <input
            type="text"
            placeholder="John Appleseed"
            {...register("name", {
              required: "Name is required",
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: "Name can only contain letters",
              },
            })}
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, "");
            }}
            className="mt-2 w-full border-b border-white/20 bg-transparent py-2 text-sm text-white placeholder-gray-500 transition focus:border-purple-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="text-xs text-gray-400">Email ID*</label>
          <input
            type="email"
            placeholder="John Appleseed@gmail.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Enter valid email",
              },
            })}
            className="mt-2 w-full border-b border-white/20 bg-transparent py-2 text-sm text-white placeholder-gray-500 transition focus:border-purple-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-2 block text-xs text-gray-300">
            Choose Types of Services
          </label>

          <div className={styles.selectWrapper}>
            <select className={styles.select} defaultValue="">
              <option value="" disabled hidden>
                Type of service
              </option>

              <option value="Global Recruitment">Global Recruitment</option>
              <option value="RPO Solutions">RPO Solutions</option>
              <option value="Employer Branding">Employer Branding</option>
              <option value="HR Consulting">HR Consulting</option>
              <option value="Onboarding Support">Onboarding Support</option>
            </select>

            <span className={styles.arrow}></span>
          </div>
        </div>
        <div className="flex items-center">
          <input
            id="link-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 border border-default-medium rounded-xs focus:ring-2 focus:ring-brand-soft accent-[#f6339a] bg-transparent cursor-pointer"
          />
          <label
            htmlFor="link-checkbox"
            className="select-none ms-2 text-sm font-medium text-heading text-gray-500"
          >
            I agree to Fundamento using my contact information for marketing
            purposes.
          </label>
        </div>

        <button
          type="submit"
          className="mt-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 text-sm font-medium text-white transition hover:opacity-90 cursor-pointer"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ServiceForm;
