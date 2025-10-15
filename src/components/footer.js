function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">GoEdu</h2>
          <p className="text-sm text-gray-400">
            Platform belajar online untuk meningkatkan keterampilan Anda di mana
            saja dan kapan saja.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Navigasi</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="/courses" className="hover:text-blue-400">
                Courses
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-400">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Hubungi Kami
          </h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Email: support@goedu.com</li>
            <li>Phone: +62 812-3456-7890</li>
            <li>Alamat: Jakarta, Indonesia</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} GoEdu. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
