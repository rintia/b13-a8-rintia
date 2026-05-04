import "animate.css"

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50 text-center mt-20">

      <h2 className="text-3xl font-bold mb-12 animate__animated animate__fadeIn">
        How Borrowing Works
      </h2>

      <div className="grid md:grid-cols-3 gap-8 px-6">

        <div className="p-6 bg-white shadow rounded animate__animated animate__fadeInUp animate__delay-2s">
          <h3 className="text-xl font-bold mb-2">1. Find a Book</h3>
          <p>Search or browse from thousands of available books.</p>
        </div>

        <div className="p-6 bg-white shadow rounded animate__animated animate__fadeInUp animate__delay-3s">
          <h3 className="text-xl font-bold mb-2">2. Borrow Instantly</h3>
          <p>Click borrow and get access in seconds.</p>
        </div>

        <div className="p-6 bg-white shadow rounded animate__animated animate__fadeInUp animate__delay-4s">
          <h3 className="text-xl font-bold mb-2">3. Enjoy Reading</h3>
          <p>Read anytime, anywhere at your convenience.</p>
        </div>

      </div>

    </section>
  );
}