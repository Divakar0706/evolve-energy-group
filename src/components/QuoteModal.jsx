"use client";

import { useState } from "react";

export default function QuoteModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    country: "+91",
    email: "",
    city: "",
    pin: "",
    bill: "",
    remark: "",
    projectType: "",
  });

  const [fileName, setFileName] = useState("No file chosen");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  // Handle input
  const handleChange = (e) => {
    const { name, value } = e.target;

    if ((name === "mobile" || name === "pin") && !/^\d*$/.test(value)) return;

    setForm({ ...form, [name]: value });
  };

  // File upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLoading(true);

      setTimeout(() => {
        setFileName(file.name);
        setLoading(false);
      }, 1200);
    }
  };

  // Email validation
  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Submit
  const handleSubmit = () => {
    if (!form.name || !form.mobile || !form.email || !form.city || !form.pin) {
      setError("Please fill all required fields");
      return;
    }

    if (!validateEmail(form.email)) {
      setError("Enter valid email");
      return;
    }

    if (!form.projectType) {
      setError("Select project type");
      return;
    }

    setError("");
    setSuccess(true);
  };

  return (
    <>
      {/* BACKDROP */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">

        {/* MODAL */}
        <div
          className="relative w-[95%] md:w-[750px] max-h-[90vh] overflow-y-auto rounded-xl bg-white p-6 shadow-2xl"
          style={{ opacity: 1 }} // 🔥 FORCE VISIBILITY
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute right-4 top-3 text-xl text-black"
          >
            ✖
          </button>

          <h2 className="mb-6 text-2xl font-bold text-black">
            Get a Quote
          </h2>

          {/* FORM */}
          <div className="grid gap-4 md:grid-cols-2 text-black">

            <input
              name="name"
              placeholder="Name *"
              value={form.name}
              onChange={handleChange}
              className="p-3 border border-gray-400 rounded-lg bg-white text-black placeholder-gray-500"
            />

            {/* PHONE */}
            <div className="flex gap-2">
              <select
                name="country"
                value={form.country}
                onChange={handleChange}
                className="w-24 p-3 border border-gray-400 rounded-lg bg-white text-black"
              >
                <option value="+91">IN +91</option>
                <option value="+1">US +1</option>
                <option value="+44">UK +44</option>
              </select>

              <input
                name="mobile"
                placeholder="Mobile *"
                value={form.mobile}
                onChange={handleChange}
                className="flex-1 p-3 border border-gray-400 rounded-lg bg-white text-black"
              />
            </div>

            <input
              name="email"
              placeholder="Email *"
              value={form.email}
              onChange={handleChange}
              className="p-3 border border-gray-400 rounded-lg bg-white text-black md:col-span-2"
            />

            <input
              name="city"
              placeholder="City *"
              value={form.city}
              onChange={handleChange}
              className="p-3 border border-gray-400 rounded-lg bg-white text-black"
            />

            <input
              name="pin"
              placeholder="PIN Code *"
              value={form.pin}
              onChange={handleChange}
              className="p-3 border border-gray-400 rounded-lg bg-white text-black"
            />

          </div>

          {/* PROJECT TYPE */}
          <div className="mt-6 text-black">
            <p className="font-semibold">Project Type *</p>

            <div className="flex gap-6 mt-2">
              {["Residential", "Commercial", "Others"].map((type) => (
                <label key={type} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="projectType"
                    value={type}
                    checked={form.projectType === type}
                    onChange={handleChange}
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

          {/* FILE */}
          <div className="grid md:grid-cols-2 gap-4 mt-6 text-black">

            <input
              name="bill"
              placeholder="Monthly EB Bill (INR)"
              value={form.bill}
              onChange={handleChange}
              className="p-3 border border-gray-400 rounded-lg bg-white text-black"
            />

            <label className="p-3 border border-gray-400 rounded-lg bg-gray-200 cursor-pointer text-center font-medium">
              {loading ? "Uploading..." : "Upload EB Bill"}
              <input type="file" className="hidden" onChange={handleFileChange} />
            </label>

          </div>

          {/* FILE NAME */}
          <p className="text-sm mt-2 text-gray-700">
            {loading ? "Uploading file..." : fileName}
          </p>

          {/* REMARK */}
          <textarea
            name="remark"
            placeholder="Remark"
            value={form.remark}
            onChange={handleChange}
            className="w-full mt-4 p-3 border border-gray-400 rounded-lg bg-white text-black"
          />

          {/* ERROR */}
          {error && (
            <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
          )}

          {/* SUBMIT */}
          <div className="flex justify-center">
            <button
              onClick={handleSubmit}
              className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
            >
              Submit
            </button>
          </div>

        </div>
      </div>

      {/* SUCCESS POPUP */}
      {success && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white p-6 rounded-xl text-center shadow-xl">
            <h3 className="text-xl font-bold text-green-600">
              ✅ Submitted Successfully!
            </h3>
            <p className="mt-2">We will contact you soon.</p>

            <button
              onClick={() => {
                setSuccess(false);
                onClose();
              }}
              className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}