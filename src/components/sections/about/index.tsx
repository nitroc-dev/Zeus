export default function About() {
  return (
    <section className="px-6 py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="mb-6 text-4xl font-bold text-gray-50">About</h2>
        <p className="max-w-2xl mx-auto mb-12 text-lg text-gray-300">
          I&apos;m a passionate full-stack developer who enjoys building
          real-world solutions through clean, maintainable code and creative
          thinking.
        </p>

        <div className="grid grid-cols-1 gap-8 text-left sm:grid-cols-2">
          <div className="flex items-start gap-4">
            <span className="text-3xl">🏡</span>
            <div>
              <h3 className="text-lg font-semibold text-gray-100">Location</h3>
              <p className="text-gray-400">Based in Belgium</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="text-3xl">💻</span>
            <div>
              <h3 className="text-lg font-semibold text-gray-100">
                Current Job
              </h3>
              <p className="text-gray-400">Working at Eachstapp</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="text-3xl">🌟</span>
            <div>
              <h3 className="text-lg font-semibold text-gray-100">
                What Drives Me
              </h3>
              <p className="text-gray-400">
                Thriving on challenges and crafting impactful solutions.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="text-3xl">🌱</span>
            <div>
              <h3 className="text-lg font-semibold text-gray-100">Learning</h3>
              <p className="text-gray-400">
                Always exploring new technologies to stay ahead.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
