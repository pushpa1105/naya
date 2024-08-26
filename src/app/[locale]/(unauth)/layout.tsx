import Footer from "@/components/layouts/footer";
import Navbar from "@/components/layouts/navbar";

export default function UnauthorizedLayout(props: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Navbar />
      <>{props.children}</>
      <Footer />
    </main>
  );
}
