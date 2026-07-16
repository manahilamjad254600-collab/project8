export default function Home() {
  const dishes = [
    {
      name: "Grilled Steak",
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?w=800",
      price: "$25",
    },
    {
      name: "Italian Pizza",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",
      price: "$18",
    },
    {
      name: "Classic Burger",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
      price: "$15",
    },
  ];

  return (
    <main className="bg-black text-white">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-orange-500">
            RoyalTaste
          </h1>

          <div className="hidden md:flex gap-8">
            <a href="#home" className="hover:text-orange-500 transition">
              Home
            </a>
            <a href="#menu" className="hover:text-orange-500 transition">
              Menu
            </a>
            <a href="#about" className="hover:text-orange-500 transition">
              About
            </a>
            <a href="#contact" className="hover:text-orange-500 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-8xl font-extrabold">
            Welcome to
            <span className="text-orange-500"> RoyalTaste</span>
          </h1>

          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Experience world-class dining with premium ingredients,
            unforgettable flavors, and exceptional hospitality.
          </p>

          <div className="mt-10 flex justify-center gap-5">
            <button className="bg-orange-500 px-8 py-4 rounded-full hover:bg-orange-600 transition font-semibold">
              Book Table
            </button>

            <button className="border border-orange-500 px-8 py-4 rounded-full hover:bg-orange-500 transition font-semibold">
              View Menu
            </button>
          </div>
        </div>
      </section>

      {/* Featured Menu */}
      <section id="menu" className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-14">
          Featured Dishes
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {dishes.map((dish) => (
            <div
              key={dish.name}
              className="bg-zinc-900 rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-300 shadow-lg"
            >
              <img
                src={dish.image}
                alt={dish.name}
                className="h-72 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-3xl font-bold">{dish.name}</h3>

                <p className="text-gray-400 mt-4">
                  Prepared by our experienced chefs using the freshest
                  ingredients.
                </p>

                <div className="mt-6 flex justify-between items-center">
                  <span className="text-2xl text-orange-500 font-bold">
                    {dish.price}
                  </span>

                  <button className="bg-orange-500 px-5 py-2 rounded-full hover:bg-orange-600 transition">
                    Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-zinc-950 py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <img
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1000"
            alt="Chef"
            className="rounded-3xl shadow-xl"
          />

          <div>
            <h2 className="text-5xl font-bold mb-8">
              Our Story
            </h2>

            <p className="text-gray-400 leading-8 text-lg">
              RoyalTaste has been serving exceptional cuisine for years.
              We combine traditional recipes with modern culinary
              techniques to create unforgettable dining experiences.
              Every meal is prepared with passion, precision, and premium
              ingredients.
            </p>

            <button className="mt-8 bg-orange-500 px-8 py-4 rounded-full hover:bg-orange-600 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12">
          Reserve Your Table
        </h2>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-zinc-900 p-4 rounded-xl outline-none focus:ring-2 focus:ring-orange-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-zinc-900 p-4 rounded-xl outline-none focus:ring-2 focus:ring-orange-500"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full bg-zinc-900 p-4 rounded-xl outline-none focus:ring-2 focus:ring-orange-500"
          />

          <textarea
            rows={5}
            placeholder="Message"
            className="w-full bg-zinc-900 p-4 rounded-xl outline-none focus:ring-2 focus:ring-orange-500"
          ></textarea>

          <button className="w-full bg-orange-500 py-4 rounded-xl text-lg font-bold hover:bg-orange-600 transition">
            Reserve Now
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 text-center text-gray-500">
        © 2026 RoyalTaste Restaurant. All Rights Reserved.
      </footer>
    </main>
  );
}