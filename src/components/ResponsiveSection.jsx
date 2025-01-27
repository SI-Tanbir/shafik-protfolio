import { Laptop, Monitor, Tablet, Smartphone } from "lucide-react";

export default function ResponsiveSection() {
  return (
    <div className="h-[400px] flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-3xl font-bold mb-8">Full Responsive Design</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Full Screen Layout */}
        <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg">
          <Monitor className="h-16 w-16 text-blue-600 mb-4" />
          <p className="text-lg font-medium">1920 x 1080px</p>
          <p className="text-gray-500">Full Screen Layout</p>
        </div>

        {/* Laptop Screen Layout */}
        <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg">
          <Laptop className="h-16 w-16 text-blue-600 mb-4" />
          <p className="text-lg font-medium">1364 x 768px</p>
          <p className="text-gray-500">Laptop Screen Layout</p>
        </div>

        {/* Tablet Screen Layout */}
        <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg">
          <Tablet className="h-16 w-16 text-blue-600 mb-4" />
          <p className="text-lg font-medium">1024 x 768px</p>
          <p className="text-gray-500">Tablet Screen Layout</p>
        </div>

        {/* Mobile Screen Layout */}
        <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg">
          <Smartphone className="h-16 w-16 text-blue-600 mb-4" />
          <p className="text-lg font-medium">767 x 365px</p>
          <p className="text-gray-500">Mobile Screen Layout</p>
        </div>
      </div>
    </div>
  );
}
