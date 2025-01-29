import { MapPin, Github, Linkedin, Twitter, MailOpen } from "lucide-react";

export default function ContactSection() {
  return (
    <div id="contract" className="bg-neutral text-white py-10 px-6 ">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary mb-6">Contact Me</h2>
      </div>

      <div className="max-w-4xl mx-auto flex justify-center items-center gap-6">
        {/* Address */}
        <div className="flex items-center gap-3">
          <MapPin className="text-primary" size={24} />
          <div>
            <p className="text-gray-400 text-sm">My Address</p>
            <p className="text-lg font-semibold">Dhaka,Bangaldesh</p>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-8 flex  justify-center gap-6">
    

       <a
              className="btn btn-outline border text-white border-secondary"
              href="https://github.com/SI-Tanbir"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github
                className="text-gray-400 hover:text-secondary transition-colors"
                size={28}
              />
              Github
            </a>
            <a
              className="btn btn-outline text-white border border-secondary"
              href="https://www.linkedin.com/in/shafikul-islam-22a280316/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin
                className="text-gray-400 hover:text-secondary transition-colors"
                size={28}
              />
              Linkedin
            </a>
            <a
              className="btn btn-outline text-white border border-secondary flex items-center gap-2 px-4 py-2"
              href="mailto:shafiktanbir@gmail.com?subject=Hello%20Shafikul!&body=I%20would%20like%20to%20contact%20you."
            >
              <MailOpen
                className="text-gray-400 hover:text-secondary transition-colors"
                size={24}
              />
              Mail Me
            </a>


      </div>
    </div>
  );
}
