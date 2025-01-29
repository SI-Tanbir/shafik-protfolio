import { Github, Linkedin } from "lucide-react";
import img from "../../public/img/1.png"
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Profile Section */}
          <div className="flex items-center space-x-4">
            <Image
              src={img} // Replace with your image path
              alt="Shafikul Islam"
              className="w-14 h-14 shadow-2xl shadow-slate-950 rounded-full"
            />
            <span className="text-2xl font-semibold">Shafikul Islam</span>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6 md:mt-0 text-center md:text-left">
            {/* Product Links */}
            <div>
              <h3 className="text-black font-extrabold font-medium">PRODUCT</h3>
              <ul className="mt-2 space-y-2 text-sm text-gray-600">
                <li>Features</li>
                <li>Integrations</li>
                <li>Pricing</li>
                <li>FAQ</li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className=" text-black font-extrabold ">COMPANY</h3>
              <ul className="mt-2 space-y-2 text-sm text-gray-600">
                <li>Privacy</li>
                <li>Terms of Service</li>
              </ul>
            </div>

            {/* Developer Links */}
            <div>
              <h3 className="text-black font-extrabold">DEVELOPERS</h3>
              <ul className="mt-2 space-y-2 text-sm text-gray-600">
                <li>Public API</li>
                <li>Documentation</li>
                <li>Guides</li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div>
              <h3 className="text-black font-extrabold">SOCIAL MEDIA</h3>
              <div className="flex space-x-4 mt-2">
                <Github className="h-5 w-5 text-gray-800" />
                <Linkedin className="h-5 w-5 text-blue-800" />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-sm text-gray-500">
          © 1968 Company Co. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
