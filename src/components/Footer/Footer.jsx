import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaGithub,
  FaYoutube,
} from "react-icons/fa6";
import Logo from "../index.js";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-8xl mx-auto px-6 py-16 sm:py-24 lg:px-8">
        <div className=" grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Logo and About */}
          <div className="md:col-span-1 space-y-6">
            <div>
              <Logo />
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
