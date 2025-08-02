import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaGithub,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-8xl mx-auto px-6 py-16 sm:py-24 lg:px-8">
        <div className=" grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Logo and About */}
          <div className="md:col-span-1 space-y-6">
            <div>
              <svg
                width="35px"
                height="35px"
                viewBox="0 -3.5 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none">
                  <g transform="translate(-800.000000, -463.000000)">
                    <g transform="translate(800.000000, 463.000000)">
                      <path
                        fill="#00FC87"
                        d="M33.1861132,0.487444444 C32.4643019,0.124366667 31.8738113,0.491544444 31.8738113,1.30334444 L31.8738113,33.5972222 L45.0461887,40.2232778 C46.4956981,40.9521667 47.6707925,40.4419444 47.6707925,39.0834778 L47.6707925,7.98543333 C47.6707925,7.8556 47.597434,7.73624444 47.4819623,7.67793333 L33.1861132,0.487444444"
                      />
                      <path
                        fill="#00E468"
                        d="M16.077283,25.6514222 L31.1049057,1.08422222 C31.5278491,0.392688889 32.4643019,0.124366667 33.1861132,0.487444444 L47.4982642,7.68613333 C47.5910943,7.73305556 47.6241509,7.84967778 47.5698113,7.93851111 L31.8738113,33.5972222 L16.077283,25.6514222"
                      />
                      <path
                        fill="#00C860"
                        d="M2.4674717,0.927511111 C1.26430189,0.322077778 0.856754717,0.769888889 1.56181132,1.92244444 L16.077283,25.6514222 L31.8738113,33.5972222 L16.1112453,7.82872222 C16.0890566,7.79227778 16.0569057,7.76312222 16.0188679,7.74398889 L2.4674717,0.927511111"
                      />
                      <path
                        fill="#00AC68"
                        d="M16.077283,39.0834778 C16.077283,40.4364778 15.0928302,41.0482889 13.8901132,40.4433111 L1.59260377,34.2573222 C0.870792453,33.8942444 0.280301887,32.9330222 0.280301887,32.1212222 L0.280301887,1.79534444 C0.280301887,0.712944444 1.06777358,0.223222222 2.03003774,0.707477778 L15.9921509,7.73032222 C16.0442264,7.75674444 16.077283,7.81004444 16.077283,7.86835556 L16.077283,39.0834778"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <p className="text-sm leading-6">
              Inspiration through stories, ideas, and knowledge sharing.
            </p>
            <div className="flex gap-5 text-xl text-white">
              <FaFacebookF className="cursor-pointer hover:text-blue-400" />
              <FaInstagram className="cursor-pointer hover:text-blue-400" />
              <FaXTwitter className="cursor-pointer hover:text-blue-400" />
              <FaGithub className="cursor-pointer hover:text-blue-400" />
              <FaYoutube className="cursor-pointer hover:text-blue-400" />
            </div>
          </div>

          {/* Footer Sections without JS */}
          <div className="pl-10 justify-end grid grid-cols-2 md:grid-cols-4 gap-10 md:col-span-4">
            <div className="flex flex-col">
              <h3 className="text-white font-semibold text-sm mb-4">Explore</h3>
              <ul className="space-y-2 text-sm">
                <li className="cursor-pointer text-white hover:text-blue-400">
                  Home
                </li>
                <li className="cursor-pointer text-white hover:text-blue-400">
                  Categories
                </li>
                <li className="cursor-pointer text-white hover:text-blue-400">
                  Latest Posts
                </li>
                <li className="cursor-pointer text-white hover:text-blue-400">
                  Archives
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm mb-4">
                Community
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="cursor-pointer text-white hover:text-blue-400">
                  About the Author
                </li>
                <li className="cursor-pointer text-white hover:text-blue-400">
                  Contribute a Post
                </li>
                <li className="cursor-pointer text-white hover:text-blue-400">
                  Guest Guidelines
                </li>
                <li className="cursor-pointer text-white hover:text-blue-400">
                  Contact
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm mb-4">
                Resources
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="cursor-pointer text-white hover:text-blue-400">
                  Newsletter
                </li>
                <li className="cursor-pointer text-white hover:text-blue-400">
                  Writing Tips
                </li>
                <li className="cursor-pointer text-white hover:text-blue-400">
                  SEO for Bloggers
                </li>
                <li className="cursor-pointer text-white hover:text-blue-400">
                  Blogging Tools
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li className="cursor-pointer text-white hover:text-blue-400">
                  Terms of Use
                </li>
                <li className="cursor-pointer text-white hover:text-blue-400">
                  Privacy Policy
                </li>
                <li className="cursor-pointer text-white hover:text-blue-400">
                  Disclaimer
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-800 mt-14 pt-8 text-sm text-gray-500">
          <p>
            © 2024 BlogSite, Inc. All rights reserved. Sharing stories, one post
            at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}
