"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function RSVP() {
  const [attendance, setAttendance] = useState<"yes" | "no">("yes");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState(2);
  const [blessings, setBlessings] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async () => {
  if (!name || !phone) {
    alert("Please fill in your Name and Mobile Number.");
    return;
  }

  try {
    setLoading(true);

    await fetch(
      "https://script.google.com/macros/s/AKfycbyzQHCALXpYhRwBvxlPnehyBLtv0fygkWAxYYzfOADSTeR-ZP-c7fOsn7ZprUe41CZt/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          attendance,
          guests: attendance === "yes" ? guests : 0,
          blessings,
        }),
      }
    );

    setShowSuccess(true);

    // Clear form
    setName("");
    setPhone("");
    setGuests(2);
    setBlessings("");
    setAttendance("yes");
  } catch (error) {
    alert("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};

  return (
    <section className="relative min-h-[100svh] overflow-hidden">

      {/* Background */}

      <Image
        src="/images/backgroundnew.png"
        fill
        alt="Wedding Background"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-white/5" />

      {/* Content */}

      <div className="relative z-10 mx-auto w-full max-w-md px-8 pt-56 pb-24">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-center text-[19px] leading-9 text-[#6B503B]">
            We'd love to celebrate with you.
            <br />
            Kindly let us know if you'll be joining us.
          </p>

          <div className="mx-auto mt-8 h-px w-24 bg-[#C7A46B]" />
        </motion.div>

        {/* Name */}

        <div className="relative mt-12">

          <input
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder=" "
            className="peer w-full rounded-2xl border border-[#D8BC92] bg-white/45 backdrop-blur-lg px-5 pt-7 pb-3 outline-none transition focus:border-[#B58A56] focus:ring-2 focus:ring-[#E9D6B7]"
          />

          <label
            className="absolute left-5 top-2 bg-transparent px-1 text-xs text-[#9B7A54] transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#B58A56]"
          >
            Full Name
          </label>

        </div>

        {/* Phone */}

        <div className="relative mt-8">

          <input
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            placeholder=" "
            className="peer w-full rounded-2xl border border-[#D8BC92] bg-white/45 backdrop-blur-lg px-5 pt-7 pb-3 outline-none transition focus:border-[#B58A56] focus:ring-2 focus:ring-[#E9D6B7]"
          />

          <label
            className="absolute left-5 top-2 px-1 text-xs text-[#9B7A54] transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#B58A56]"
          >
            Mobile Number
          </label>

        </div>

        <h3 className="mt-12 text-center text-[#5B4030] font-medium">
          Will you be joining us?
        </h3>

        <div className="mt-8 grid gap-5">
                  {/* Accept Invitation */}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={() => setAttendance("yes")}
            className={`rounded-3xl border px-6 py-5 transition-all duration-300 ${attendance === "yes"
                ? "border-[#B58A56] bg-[#FFF8EF]/80 shadow-xl"
                : "border-[#D8BC92] bg-white/45 backdrop-blur-lg"
              }`}
          >
            <div className="flex items-center justify-center gap-4">

              <span className="text-3xl">💛</span>

              <span className="text-lg font-semibold text-[#5B4030]">
                Joyfully Accept
              </span>

            </div>
          </motion.button>

        {/* Decline */}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={() => setAttendance("no")}
            className={`rounded-3xl border px-6 py-5 transition-all duration-300 ${attendance === "no"
                ? "border-[#B58A56] bg-[#FFF8EF]/80 shadow-xl"
                : "border-[#D8BC92] bg-white/45 backdrop-blur-lg"
              }`}
          >
            <div className="flex items-center justify-center gap-4">

              <span className="text-3xl">🤍</span>

              <span className="text-lg font-semibold text-[#5B4030]">
                Regretfully Decline
              </span>

            </div>
          </motion.button>

        </div>

        {/* Guest Selector */}

        {attendance === "yes" && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-14"
          >

            <h3 className="text-center text-[#5B4030] font-medium mb-7">
              Number of Guests
            </h3>

            <div className="flex justify-center gap-4">

              {[1,2,3,4,5].map((number) => (

                <motion.button
                  key={number}
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ y: -2 }}
                  type="button"
                  onClick={() => setGuests(number)}
                  className={`h-14 w-14 rounded-full border text-lg font-semibold transition-all duration-300 ${
                    guests === number
                      ? "border-[#B58A56] bg-[#FFF8EF] text-[#5B4030] shadow-lg"
                      : "border-[#D8BC92] bg-white/50 text-[#8B6A46]"
                  }`}
                >
                  {number}
                </motion.button>

              ))}

            </div>

          </motion.div>

        )}
                {/* Blessings */}

        <div className="relative mt-14">

          <textarea
            value={blessings}
            onChange={(e) => setBlessings(e.target.value)}
            rows={5}
            placeholder=" "
            className="peer w-full resize-none rounded-3xl border border-[#D8BC92] bg-white/45 backdrop-blur-lg px-5 pt-8 pb-4 outline-none transition focus:border-[#B58A56] focus:ring-2 focus:ring-[#E9D6B7]"
          />

          <label className="absolute left-5 top-3 text-xs text-[#9B7A54] transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:top-3 peer-focus:text-xs peer-focus:text-[#B58A56]">
            Your Blessings (Optional)
          </label>

        </div>

        {/* Submit Button */}

        <motion.button
          whileHover={{
            scale: 1.03,
            boxShadow: "0 10px 30px rgba(181,138,86,.25)",
          }}
          whileTap={{ scale: 0.98 }}
          disabled={loading}
          onClick={handleSubmit}
          className="mt-14 w-full rounded-full border border-[#C7A46B] bg-white/65 backdrop-blur-md py-4 text-sm uppercase tracking-[4px] text-[#6F5136] shadow-[0_8px_20px_rgba(181,138,86,0.18)] transition-all duration-300 hover:bg-white/80 disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Confirm Attendance"}
        </motion.button>

      </div>

      {/* Success Popup */}
      {showSuccess && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-6"
  >
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="w-full max-w-sm rounded-3xl bg-[#FFF9F1] p-8 text-center shadow-2xl"
    >
      <div className="text-6xl mb-5">
        💛
      </div>

      <h3 className="font-heading text-4xl text-[#5B4030]">
        Thank You!
      </h3>

      <p className="mt-5 leading-8 text-[#7E6548]">
        Your RSVP has been received successfully.
        <br />
        We look forward to celebrating our special day with you.
      </p>

      <button
        onClick={() => setShowSuccess(false)}
        className="mt-8 rounded-full border border-[#C7A46B] px-8 py-3 text-sm uppercase tracking-[3px] text-[#6F5136] transition hover:bg-[#F5E7D2]"
      >
        Close
      </button>
    </motion.div>
  </motion.div>
)}
    </section>
  );
}