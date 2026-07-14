export default function Home() {
  const services = [
    {
      title: "Hair Cutting",
      description:
        "Professional haircuts customized to match your personality and style.",
    },
    {
      title: "Hair Coloring",
      description:
        "Premium coloring services using high-quality products and techniques.",
    },
    {
      title: "Hair Spa",
      description:
        "Relaxing hair spa treatments for healthier, shinier, and stronger hair.",
    },
    {
      title: "Keratin Treatment",
      description:
        "Smooth, silky, and frizz-free hair with our professional keratin service.",
    },
    {
      title: "Bridal Styling",
      description:
        "Elegant bridal hairstyles and complete beauty preparation.",
    },
    {
      title: "Beard Styling",
      description:
        "Modern beard shaping and grooming for a clean, stylish appearance.",
    },
  ];

  const testimonials = [
    {
      name: "Sophia",
      review:
        "Amazing service! The staff was friendly and my hairstyle turned out perfect.",
    },
    {
      name: "Emma",
      review:
        "The best salon experience I've ever had. Highly recommended!",
    },
    {
      name: "Olivia",
      review:
        "Professional stylists and a relaxing atmosphere. Loved every minute.",
    },
  ];

  return (
    <main className="bg-black text-white">

      {/* Navbar */}

      <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-lg border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">
          <h1 className="text-2xl font-bold text-yellow-400">
            Luxe Salon
          </h1>

          <div className="hidden md:flex gap-8 text-gray-300">
            <a href="#about" className="hover:text-yellow-400">About</a>
            <a href="#services" className="hover:text-yellow-400">Services</a>
            <a href="#pricing" className="hover:text-yellow-400">Pricing</a>
            <a href="#reviews" className="hover:text-yellow-400">Reviews</a>
            <a href="#contact" className="hover:text-yellow-400">Contact</a>
          </div>

          <button className="bg-yellow-500 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-400">
            Book Now
          </button>
        </div>
      </nav>

      {/* Hero */}

      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black px-8">

        <div className="text-center max-w-4xl">

          <h1 className="text-6xl md:text-8xl font-extrabold leading-tight">
            Luxury
            <span className="text-yellow-400"> Hair </span>
            Salon
          </h1>

          <p className="text-gray-400 mt-8 text-xl leading-8">
            Experience elegance, creativity, and premium hair care.
            Our expert stylists are dedicated to helping you look
            and feel your absolute best.
          </p>

          <div className="mt-10 flex flex-col md:flex-row justify-center gap-5">

            <button className="bg-yellow-500 px-8 py-4 rounded-full text-black font-bold hover:bg-yellow-400 transition">
              Book Appointment
            </button>

            <button className="border border-yellow-400 px-8 py-4 rounded-full hover:bg-yellow-400 hover:text-black transition">
              Explore Services
            </button>

          </div>

        </div>

      </section>

      {/* About */}

      <section
        id="about"
        className="py-24 bg-zinc-950"
      >
        <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-5xl font-bold text-yellow-400 mb-8">
              About Us
            </h2>

            <p className="text-gray-400 leading-8">
              At Luxe Salon, we combine creativity, luxury, and
              professionalism to deliver exceptional beauty services.
              Whether you're looking for a fresh haircut, vibrant
              hair color, or complete makeover, our experienced team
              ensures every visit is unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">

            <div className="bg-zinc-900 rounded-2xl p-8 text-center">
              <h3 className="text-4xl text-yellow-400 font-bold">10+</h3>
              <p className="mt-2 text-gray-400">Years Experience</p>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-8 text-center">
              <h3 className="text-4xl text-yellow-400 font-bold">5000+</h3>
              <p className="mt-2 text-gray-400">Happy Clients</p>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-8 text-center">
              <h3 className="text-4xl text-yellow-400 font-bold">15</h3>
              <p className="mt-2 text-gray-400">Expert Stylists</p>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-8 text-center">
              <h3 className="text-4xl text-yellow-400 font-bold">4.9★</h3>
              <p className="mt-2 text-gray-400">Customer Rating</p>
            </div>

          </div>

        </div>
      </section>

      {/* Services */}

      <section
        id="services"
        className="py-24"
      >
        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-5xl font-bold text-center text-yellow-400 mb-16">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {services.map((service) => (

              <div
                key={service.title}
                className="bg-zinc-900 rounded-3xl p-8 hover:-translate-y-2 transition duration-300 border border-zinc-800"
              >

                <div className="w-16 h-16 rounded-full bg-yellow-500 text-black flex items-center justify-center text-3xl font-bold mb-6">
                  ✂
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400">
                  {service.description}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* Pricing */}

      <section
        id="pricing"
        className="py-24 bg-zinc-950"
      >

        <div className="max-w-6xl mx-auto px-8">

          <h2 className="text-5xl font-bold text-center text-yellow-400 mb-16">
            Pricing
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              ["Hair Cut", "$25"],
              ["Hair Coloring", "$80"],
              ["Hair Spa", "$40"],
              ["Keratin", "$120"],
              ["Bridal Styling", "$200"],
              ["Beard Styling", "$20"],
            ].map(([service, price]) => (

              <div
                key={service}
                className="bg-black border border-zinc-800 rounded-2xl p-8 flex justify-between"
              >
                <span>{service}</span>
                <span className="text-yellow-400 font-bold">{price}</span>
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Testimonials */}

      <section
        id="reviews"
        className="py-24"
      >

        <div className="max-w-6xl mx-auto px-8">

          <h2 className="text-center text-5xl text-yellow-400 font-bold mb-16">
            Client Reviews
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {testimonials.map((item) => (

              <div
                key={item.name}
                className="bg-zinc-900 rounded-3xl p-8"
              >

                <h3 className="text-xl font-bold mb-3">
                  {item.name}
                </h3>

                <p className="text-yellow-400 mb-4">
                  ★★★★★
                </p>

                <p className="text-gray-400">
                  {item.review}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Contact */}

      <section
        id="contact"
        className="py-24 bg-zinc-950"
      >

        <div className="max-w-3xl mx-auto px-8">

          <h2 className="text-5xl text-center font-bold text-yellow-400 mb-10">
            Book Appointment
          </h2>

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-black border border-zinc-700 rounded-xl p-4 outline-none focus:border-yellow-400"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full bg-black border border-zinc-700 rounded-xl p-4 outline-none focus:border-yellow-400"
            />

            <input
              type="date"
              className="w-full bg-black border border-zinc-700 rounded-xl p-4 outline-none focus:border-yellow-400"
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full bg-black border border-zinc-700 rounded-xl p-4 outline-none focus:border-yellow-400"
            />

            <button
              className="w-full bg-yellow-500 text-black font-bold py-4 rounded-xl hover:bg-yellow-400 transition"
            >
              Submit
            </button>

          </form>

        </div>

      </section>

      {/* Footer */}

      <footer className="bg-black border-t border-zinc-800 py-8 text-center text-gray-500">
        © 2026 Luxe Salon • Designed with Next.js + Tailwind CSS
      </footer>

    </main>
  );
}