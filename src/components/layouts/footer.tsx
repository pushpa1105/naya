"use client";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex w-full flex-row justify-center p-6">
      <p>&copy; {currentYear} Naya. All rights reserved.</p>
    </div>
  );
};

export default Footer;
