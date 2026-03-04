'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* CONTACT */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-2">
              Projection House LLC<br />
              P.O Box: 114270, Al Sharafi-1 Building,<br />
              Mezzanine Floor, Al Karama, Dubai, UAE
            </p>
            <p className="text-gray-400 mb-2">
              <strong>Call:</strong> +971 4 370 8901
            </p>
            <p className="text-gray-400 mb-2">
              <strong>Email:</strong> info@projectionhouse.ae
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.facebook.com/projectionhouseav/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.99H7.898v-2.888h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.888h-2.33v6.99C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/company/projection-house"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C3.34 3.5 2 4.84 2 6.48s1.34 2.98 2.98 2.98S7.96 8.12 7.96 6.48 6.62 3.5 4.98 3.5zM2.4 21.5h5.16V9.98H2.4V21.5zM9.78 21.5h5.16v-6.36c0-1.52.27-3.02 2.18-3.02 1.89 0 1.92 1.83 1.92 2.94v6.44h5.16v-6.93c0-3.71-1.97-5.43-4.6-5.43-2.09 0-3.03 1.16-3.55 1.97h.05V9.98H9.78c.06 1.12 0 11.52 0 11.52z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/projectionhouse/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.055 1.97.24 2.427.403a4.92 4.92 0 0 1 1.784 1.155 4.92 4.92 0 0 1 1.155 1.785c.163.457.347 1.258.403 2.428.058 1.267.07 1.647.07 4.851s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.403 2.427a4.92 4.92 0 0 1-1.155 1.784 4.92 4.92 0 0 1-1.784 1.155c-.457.163-1.257.347-2.428.403-1.267.058-1.647.07-4.851.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.427-.403a4.92 4.92 0 0 1-1.785-1.155 4.92 4.92 0 0 1-1.155-1.784c-.163-.457-.347-1.258-.403-2.428-.058-1.267-.07-1.647-.07-4.851s.012-3.584.07-4.85c.056-1.17.24-1.97.403-2.427a4.92 4.92 0 0 1 1.155-1.785 4.92 4.92 0 0 1 1.785-1.155c.457-.163 1.258-.347 2.428-.403 1.267-.058 1.647-.07 4.851-.07zm0 2.163c-3.17 0-3.543.012-4.79.069-1.02.047-1.57.216-1.937.36a3.002 3.002 0 0 0-1.092.707 3.002 3.002 0 0 0-.707 1.092c-.144.368-.313.918-.36 1.937-.057 1.247-.069 1.62-.069 4.79s.012 3.543.069 4.79c.047 1.02.216 1.57.36 1.937.168.438.407.835.707 1.092.258.24.594.453 1.092.707.368.144.918.313 1.937.36 1.247.057 1.62.069 4.79.069s3.543-.012 4.79-.069c1.02-.047 1.57-.216 1.937-.36a3.002 3.002 0 0 0 1.092-.707 3.002 3.002 0 0 0 .707-1.092c.144-.368.313-.918.36-1.937.057-1.247.069-1.62.069-4.79s-.012-3.543-.069-4.79c-.047-1.02-.216-1.57-.36-1.937a3.002 3.002 0 0 0-.707-1.092 3.002 3.002 0 0 0-1.092-.707c-.368-.144-.918-.313-1.937-.36-1.247-.057-1.62-.069-4.79-.069zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.879 1.44 1.44 0 0 0 0-2.879z" />
                </svg>
              </a>
            </div>
          </div>

          {/* USEFUL LINKS */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
              <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* SOLUTIONS LINKS */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Solutions</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/solutions/audio-systems" className="hover:text-white">Audio Systems</a></li>
              <li><a href="/solutions/av-over-ip" className="hover:text-white">AV Over IP</a></li>
              <li><a href="/solutions/commercial-display" className="hover:text-white">Commercial Display</a></li>
              <li><a href="/solutions/interactive-display" className="hover:text-white">Interactive Display</a></li>
              <li><a href="/solutions/projection" className="hover:text-white">Projection</a></li>
            </ul>
          </div>

          {/* CONTACT + HOURS */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Visit Us</h3>
            <p className="text-gray-400 mb-1">Al Sharafi-1 Building, Mezzanine Floor,</p>
            <p className="text-gray-400 mb-4">Al Karama, Dubai, UAE</p>
            <p className="text-gray-400">Mon – Fri: 08:00 – 17:00</p>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="mt-12 text-center border-t border-gray-700 pt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Projection House, all rights reserved.
        </div>
      </div>
    </footer>
  );
}
