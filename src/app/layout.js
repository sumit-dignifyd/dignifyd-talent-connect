import Footer from "@/components/common/Footer";
import "../styles/globals.css";
import Navbar from "@/components/common/Navbar";
import SmoothFollower from "@/components/common/cursors/SmoothFollower";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        <SmoothFollower />
        <main className="px-6 md:px-10 lg:px-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
