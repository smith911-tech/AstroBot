export default function Footer() {
  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#13072E] py-10">
      <p className="text-center text-white text-xl">Astro Studios</p>
      <p className="text-center mt-4 text-white ">Copyright&copy; {currentYear} By Dev Joe</p>
    </footer>
  );
}
