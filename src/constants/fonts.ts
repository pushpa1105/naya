import localFont from "next/font/local";

export const proxima = localFont({
  src: [
    {
      path: "../../public/assets/fonts/proxima-nova/light.otf",
      weight: "200",
    },
    {
      path: "../../public/assets/fonts/proxima-nova/thin.otf",
      weight: "300",
    },
    {
      path: "../../public/assets/fonts/proxima-nova/regular.otf",
      weight: "400",
    },
    {
      path: "../../public/assets/fonts/proxima-nova/semibold.otf",
      weight: "600",
    },
    {
      path: "../../public/assets/fonts/proxima-nova/bold.otf",
      weight: "700",
    },
    {
      path: "../../public/assets/fonts/proxima-nova/extrabold.otf",
      weight: "800",
    },
    {
      path: "../../public/assets/fonts/proxima-nova/black.otf",
      weight: "900",
    },
  ],
  variable: "--font-proxima",
});
