
"use client";
export default function Welcome() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center
    px-6
    bg-cover
    bg-center
    bg-no-repeat
  "
  style={{
    backgroundImage: "url('/images/couple1.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
    >

      <p className="font-body uppercase tracking-[6px] text-black text-lg">
        Wedding Invitation
      </p>

      <h1 className="font-heading text-7xl mt-8">
        Athul
      </h1>

      <div className="text-4xl my-4">❤️</div>

      <h1 className="font-heading text-7xl">
        Reshma
      </h1>

      <p className="font-body mt-10 max-w-xl text-black text-lg">
        Together with our families,
        we request the honor of your presence
        as we celebrate our wedding.
      </p>

      <button
        onClick={() => {
          document
            .getElementById("countdown")
            ?.scrollIntoView({
              behavior: "smooth",
            });
        }}
        className="mt-12 border border-black px-10 py-4 uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300"
      >
        Open Invitation
      </button>

    </section>
  );
}