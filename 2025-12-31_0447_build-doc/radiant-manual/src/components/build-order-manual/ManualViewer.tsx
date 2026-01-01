import Header from "./Header";
import Navigation from "./Navigation";
import Contents from "./Contents";
import Footer from "./Footer";

export default function ManualViewer() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-gray-100">
      <Header />
      <Navigation />
      <Contents />
      <Footer />
    </main>
  );
}
