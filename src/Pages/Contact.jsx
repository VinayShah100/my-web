import React, { useState } from "react";
import { Send, Phone, MapPin, Mail } from "lucide-react";
import { TypeAnimation } from 'react-type-animation';
export default function Contact({ mode }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus("Please fill in all required fields correctly.");
      return;
    }

    // Create a new FormData object to send to Web3Forms API
    const form = new FormData();
    form.append("access_key", "6b599ad0-e34f-4931-97e3-7ca942cb8186"); // Replace with your Web3Forms access key
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("subject", formData.subject || "New Contact Form Submission");
    form.append("message", formData.message);

    try {
      // Send form data to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setErrors({});
      } else {
        setStatus(result.message || "There was an error sending your message.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <>

    <div className={`flex items-center justify-center h-80 mt-30 text-center px-4 ${mode === 'light' ? 'bg-gradient-to-br from-gray-100 via-white to-gray-200 text-black' : 'bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white'}`}>
                <div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Contact Us for Queries and report issues.
  
                    </h1>

                    {/* <TypeAnimation
                        sequence={[
                            'Engineering Study Notes 📘',
                            2000,
                            'Simplifying Pune University Syllabus 🎯',
                            2000,
                            'Built by Engineers, for Engineers ⚙️',
                            2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        className="text-xl md:text-3xl text-cyan-400 font-semibold"
                        repeat={Infinity}
                    /> */}

                    <p className={`mt-6 max-w-xl mx-auto ${mode === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                        Pls feel free to reach out to us for any queries, suggestions, or issues you may have. We are here to help you with your engineering study notes and any other concerns related to the Pune University syllabus.
                    </p>
                </div>
            </div>
    <main
    
      className={`pt-20  h-80  lg:pt-[0rem] bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90
 text-white min-h-screen ${mode === 'light' ? 'bg-gradient-to-br from-gray-100 via-white to-gray-200 text-black' : 'bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white'} `}
    >
      <section className="hero min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Get in Touch
                </h2>
                <p className={`text-gray-300 text-lg ${mode === 'light' ? 'bg-gradient-to-br from-gray-100 via-white to-gray-200 text-black' : 'bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white'}`}>
                  Have a question or want to work together? Drop us a message!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-500/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-400">engineersidiot@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-pink-500/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-400"> India </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${mode === 'light' ? 'bg-gradient-to-br from-gray-100 via-white to-gray-200 text-black' : 'bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white'} ${errors.name ? "border-red-500" : "border-gray-700"
                        } focus:border-blue-500 focus:outline-none transition-colors`}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${mode === 'light' ? 'bg-gradient-to-br from-gray-100 via-white to-gray-200 text-black' : 'bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white'} ${errors.email ? "border-red-500" : "border-gray-700"
                        } focus:border-blue-500 focus:outline-none transition-colors`}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${mode === 'light' ? 'bg-gradient-to-br from-gray-100 via-white to-gray-200 text-black' : 'bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white'} ${errors.subject ? "border-red-500" : "border-gray-700"
                        } focus:border-blue-500 focus:outline-none transition-colors`}
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows="4"
                      className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${mode === 'light' ? 'bg-gradient-to-br from-gray-100 via-white to-gray-200 text-black' : 'bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white'} ${errors.message ? "border-red-500" : "border-gray-700"
                        } focus:border-blue-500 focus:outline-none transition-colors resize-none`}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>

              {/* Status Message */}
              {status && (
                <div
                  className={`mt-4 text-center ${status.includes("success")
                      ? "text-green-400"
                      : "text-red-400"
                    }`}
                >
                  <p>{status}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
