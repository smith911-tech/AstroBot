import Header from "./General Component/Header";
import { FaDiscord } from "react-icons/fa";
import { BiSolidCustomize } from "react-icons/bi";
import { GiLaptop } from "react-icons/gi";
import { FaBug } from "react-icons/fa";
import Footer from "./General Component/Footer";

export default function Home() {
  return (
    <main className=" bg-[#13072E] font-Poppins">
      <Header />
      <section className="lg900:px-12">
        <section className=" mt-10 mx-4 bg-gradient-to-b from-[#13072E] to-[#402182] pt-10 pb-2  rounded-xl px-4 flex flex-col lg900:flex-row lg900:justify-between lg900:gap-10">
          <div>
            <p className=" bg-[#B3AAFF] px-2 py-1 rounded-xl inline-block text-sm">
              #AstroStudios
            </p>
            <h2 className=" mt-4 text-white font-semibold text-2xl">
              Astro Bots for your <br />
              Discord Channel
            </h2>
            <p className=" text-sm text-white font-medium my-6">
              Astro Bot is a Discord bot developed by 'Astro Studios.' The Astro
              Bot will help you take care of your Discord server. With so many
              features, Astro Bot is one of the best bots available right now.
              Astro Host is a hosting service that comes from Astro Studios.
              Astro Hosts your Discord bots for affordable prices. In the
              future, Astro Host will also host your Minecraft server. More
              features are coming soon!
            </p>
            <a
              href="https://discord.gg/astrostudios"
              className=" my-4 px-5 py-2 bg-white font-medium rounded-xl hover:bg-[#dcbfe4] duration-500"
            >
              <button>Join Discord</button>
            </a>
          </div>
          <img
            src="https://app.svgator.com/assets/svgator.webapp/log-in-girl.svg"
            alt="image animation"
            className=" h-96 w-full"
          />
        </section>
        <section className=" mt-20 px-4 pb-2 ">
          <h2 className=" text-center text-white font-semibold text-2xl mt-20 pb-3 sm768:text-3xl">
            What We Do ?
          </h2>
          <p className=" text-center text-base text-white font-medium">
            Astro Studios basically develops for other people. We own 2 Discord
            Bots but our founder Astro owns 3 Verified Discord Bots like:
            ImageSearch, TimeStamp Maker, Emoji Uploader. We also develop
            websites and web application
          </p>
          <p className=" text-center text-white font-semibold text-2xl mt-32 pb-3 sm768:text-3xl">
            Any questions/issues?
          </p>
          <p className=" text-center text-base text-white font-medium">
            If you have any questions left, feel free to ask us on our Discord
            Server. Simply open a Ticket and our Support will answer as soon as
            Possible.
          </p>
          <div className="flex justify-center mt-4 gap-10">
            <a
              href="https://discord.gg/astrostudios"
              className=" bg-white px-3 py-1 rounded-md  hover:bg-[#dcbfe4] duration-500"
            >
              <button>Discord</button>
            </a>
            <a
              href="https://status.astro-studios.xyz/status/studios"
              className="bg-white px-3 py-1 rounded-md  hover:bg-[#dcbfe4] duration-500"
            >
              <button>Status P</button>
            </a>
          </div>
          <h2 className=" text-white font-medium mt-20">
            Discord bot development
          </h2>
          <hr />
          <div className=" flex flex-wrap mt-10 gap-[5%] justify-center">
            <div className=" w-[45%] flex flex-col items-center border-[#5566B8] border rounded-xl py-10 mb-4 bg-gradient-to-b from-[#13072E] to-[#402182]">
              <FaDiscord className=" text-5xl bg-white rounded-3xl p-2 mb-2" />
              <p className="text-white text-lg font-medium">DISCORD BOTS</p>
            </div>
            <div className=" w-[45%] flex flex-col items-center border-[#5566B8] border rounded-xl py-10 mb-4 bg-gradient-to-r from-[#13072E] to-[#402182]">
              <BiSolidCustomize className=" text-5xl bg-white rounded-3xl p-2 mb-2" />
              <p className="text-white text-lg font-medium">CUSTOM</p>
            </div>
            <div className=" w-[45%] flex flex-col items-center border-[#5566B8] border rounded-xl py-10 mb-4 bg-gradient-to-t from-[#13072E] to-[#402182]">
              <GiLaptop className=" text-5xl bg-white rounded-3xl p-2 mb-2" />
              <p className="text-white text-lg font-medium">DEVELOPMENT</p>
            </div>
            <div className=" w-[45%] flex flex-col items-center border-[#5566B8] border rounded-xl py-10 mb-4 bg-gradient-to-l from-[#13072E] to-[#402182]">
              <FaBug className=" text-5xl bg-white rounded-3xl p-2 mb-2" />
              <p className="text-white text-lg font-medium">TESTING</p>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
}
