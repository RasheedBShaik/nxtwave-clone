import Link from 'next/link';

const Offer = () => {
  return (
    <div className="w-full bg-[#183B56] text-white">
        <div className="flex w-full max-w-7xl items-center mx-auto min-h-16 h-auto justify-between px-4 gap-4">
          {/* Left Fireworks */}
          <div className="hidden sm:block h-16 shrink-0">
            <img
              src="/header/fireworks.png"
              alt="fireworks"
              className="w-full h-full object-cover hidden md:block"
            />
          </div>

          {/* Center Message */}
          <div className="flex items-center justify-center gap-2 text-center flex-1">
            <div className="flex flex-col py-4 lg:py-0 lg:flex-row items-center gap-3">
              <p className="text-sm md:text-base font-medium text-[#d9f99d]">
                🎉 NxtWave Intensive Offline Center is starting in Hyderabad
              </p>

              <Link
                href="#"
                className="group flex items-center gap-1 text-white transition-colors"
              >
                <span>Check It Out</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Fireworks */}
          <div className="hidden sm:block h-16 shrink-0">
            <img
              src="/header/fireworks.png"
              alt="fireworks"
              className="w-full h-full object-cover hidden md:block"
            />
          </div>
        </div>
      </div>
  )
}

export default Offer
