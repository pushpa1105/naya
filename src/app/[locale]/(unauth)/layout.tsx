import Footer from "@/components/layouts/footer";
import Navbar from "@/components/layouts/nav";

export default function UnauthorizedLayout(props: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="h-[calc(100vh-75px)] p-6 pt-16 md:p-12 md:pt-24">
        {props.children}
      </main>
      <Footer />
    </>
  );
}
