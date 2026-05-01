"use client";

import { useRouter } from "next/navigation";

const FeedBackForm = () => {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = e.target.message.value;
    // console.log(messageData);
    try {
      const res = await fetch("http://localhost:3000/api/feedback/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      // console.log(data);
      if (data.insertedId) {
        alert("Success");
        router.push("/feedback")
      }
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="p-8 space-y-6">
        <div className="space-y-2">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-zinc-300"
          >
            Your Message
          </label>

          <textarea
            id="message"
            name="message"
            placeholder="Write your feedback here..."
            rows={8}
            className="w-full resize-y min-h-45 bg-zinc-950 border border-zinc-700 
                         rounded-2xl px-5 py-4 text-white placeholder-zinc-500 
                         focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500
                         transition-all duration-200"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-white hover:bg-gray-100 active:bg-gray-200 cursor-pointer 
                       disabled:bg-zinc-700 disabled:text-zinc-400
                       text-black font-semibold py-4 px-6 rounded-2xl
                       transition-all duration-200 flex items-center justify-center gap-2
                       text-lg shadow-lg shadow-white/10"
        >
          {" "}
          Submit
        </button>
      </form>
    </div>
  );
};

export default FeedBackForm;
