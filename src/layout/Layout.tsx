import React, { useState } from 'react';
import { FaPlay, FaDownload, FaUpload } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showToast, setShowToast] = useState(true);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-blue-500 fixed top-0 left-0 w-full p-4 text-black flex items-center justify-between">
        <div className="flex items-center">
          <FaPlay className="mr-2" /> {/* Ikon play */}
          <h1 className="text-xl font-bold">DOODSTREAM INDO</h1> {/* Ukuran teks diperkecil dari text-2xl ke text-xl */}
        </div>
        <a
          href="https://videhost.my.id"
          className="bg-black text-white px-3 py-1 rounded flex items-center space-x-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaUpload /> {/* Ikon upload */}
          <span>Upload</span>
        </a>
      </header>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-black p-3 rounded-lg shadow-lg flex items-center justify-between space-x-4 w-[90%] max-w-3xl">
          <div className="flex items-center space-x-3">
            <FaDownload size={24} className="text-black" /> {/* Ikon APK */}
            <span className="font-semibold">Install DoobStream Apk</span>
          </div>
          <Link
            to="https://github.com/AgungDevlop/Viral/raw/refs/heads/main/DoobStream.apk"
            className="bg-black text-white px-3 py-1 rounded font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            Install
          </Link>
          <button onClick={() => setShowToast(false)} className="text-black ml-2 text-xl font-bold">
            ×
          </button>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 bg-gray-900 text-white pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-blue-500 p-4 text-black text-center">
        <p>© 2024 DoobStream. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
