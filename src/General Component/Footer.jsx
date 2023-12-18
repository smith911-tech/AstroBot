export default function Footer() {
  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-[#13072E] to-[#402182] py-10 mt-10">
      <p className="text-center text-white text-xl">Astro Studios</p>
      <p className="text-center mt-4 text-white text-sm">
        Copyright&copy; {currentYear} By Dev Joe
      </p>
    </footer>
  );
}
