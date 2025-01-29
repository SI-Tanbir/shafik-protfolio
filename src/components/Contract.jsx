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
            <p className="text-lg font-semibold">Liza Street, New York</p>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-8 flex justify-center gap-6">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <Github className="text-gray-400 hover:text-primary transition-colors" size={28} />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <Linkedin className="text-gray-400 hover:text-primary transition-colors" size={28} />
        </a>
        <a href="mailto:your-email@example.com">
          <MailOpen className="text-gray-400 hover:text-primary transition-colors" size={28} />
        </a>
      </div>
    </div>
  );
}
