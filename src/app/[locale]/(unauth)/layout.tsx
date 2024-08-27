import Footer from "@/components/layouts/footer";
import Navbar from "@/components/layouts/navbar";

export default function UnauthorizedLayout(props: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="h-screen p-12 pt-24">{props.children}</main>
      <Footer />
    </>
  );
}
