import React from "react";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-r from-orange-900 via-amber-900 to-gray-900 animate-gradient-x py-12
    sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 font[Poppins] relative overflow-hidden"
    >
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{ duration: 4000 }}
      />
      {/* additional decorative element */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-orange-500/20 rounded-full animate-float" />
      <div className="absolute bottom-40 right-20 w-16 h-16 bg-green-500/20 rounded-full animate-float-delayed" />
    </div>
  );
};

export default Contact;
