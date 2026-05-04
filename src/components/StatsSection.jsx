import "animate.css"

export default function StatsSection() {
  return (
    <section className="py-20 bg-white text-center mt-20">

      <h2 className="text-3xl font-bold mb-10 animate__animated animate__fadeIn">
        Join Thousands of Readers 📚
      </h2>

      <div className="grid md:grid-cols-3 gap-10 px-6">

        <div className="animate__animated animate__zoomIn">
          <h3 className="text-4xl font-bold text-blue-600">10K+</h3>
          <p>Books Available</p>
        </div>

        <div className="animate__animated animate__zoomIn animate__delay-2s">
          <h3 className="text-4xl font-bold text-green-600">5K+</h3>
          <p>Active Readers</p>
        </div>

        <div className="animate__animated animate__zoomIn animate__delay-3s">
          <h3 className="text-4xl font-bold text-purple-600">24/7</h3>
          <p>Access Anytime</p>
        </div>

      </div>

    </section>
  );
}