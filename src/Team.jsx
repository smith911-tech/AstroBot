import Footer from "./General Component/Footer";
import Header from "./General Component/Header";
import Community from "./assets/community.png";
import Joni from "./assets/Staffs/Joni.png";
import Astro from "./assets/Staffs/Astro.png";
import Franki from "./assets/Staffs/Franki.png";
import DevJoe from "./assets/Staffs/DevJoe.png";
import {
  FaPaypal,
  FaTiktok,
  FaDiscord,
  FaSpotify,
  FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Snowfall from "react-snowfall";

export default function Team() {
  const Staffs = [
    {
      id: 1,
      name: "Joni",
      img: Joni,
      role: "Founder/Developer",
      socials: {
        disord: "https://discordapp.com/users/1175544976600465558",
        paypal: "https://paypal.me/Jvmall",
        tiktok: "https://www.tiktok.com/@holyjxni",
      },
    },
    {
      id: 2,
      name: "Astro",
      img: Astro,
      role: "Founder/Developer",
      socials: {
        disord: "https://discordapp.com/users/1046442637336510524",
        Github: "https://github.com/theguyastro",
        spotify: "https://open.spotify.com/user/31jljbuc735ejbb5fzmoflh7odsy",
      },
    },
    {
      id: 3,
      name: "FRANKI",
      img: Franki,      
      role: "Team Manager/Developer",
      socials: {
        disord: "https://discordapp.com/users/833752068300210236",
        Github: "https://github.com/FranKi1902",
        tiktok: "https://www.tiktok.com/@._i.love.pizza",
      },
    },
    {
      id: 4,
      name: "Dev Joe",
      img: DevJoe,
      role: "Web Developer/Developer",
      socials: {
        disord: "https://discordapp.com/users/1085824947357757450",
        Github: "https://github.com/smith911-tech",
        X: "https://x.com/TheRealJoseph01?t=xvCShcTn_YzlhG4IPbkBAA&s=09",
      },
    },
  ];

  return (
    <main className=" bg-[#13072E]">
      <Snowfall
        color="white"
        snowflakeCount={200}
      />
      <Header />
      <section className="lg900:px-12 min-h-[80svh]">
        <section className=" mt-10 mx-4 bg-gradient-to-b from-[#13072E] to-[#402182] pt-10 pb-2  rounded-xl px-4 flex flex-col lg900:flex-row lg900:justify-between lg900:gap-10">
          <div>
            <p className=" bg-[#B3AAFF] px-2 py-1 rounded-xl inline-block text-sm">
              #Team-Members
            </p>
            <h2 className=" mt-4 text-white font-semibold text-2xl">
              Our Team
            </h2>
            <p className=" text-sm text-white font-medium my-6">
              Welcome to our Team Members page! Here, meet the exceptional
              individuals who form the core of Astro Studios. Our diverse team
              brings a wealth of experience and fresh perspectives, creating a
              dynamic work environment. From seasoned professionals to rising
              talents, each member plays a crucial role in our success.
            </p>
            <a
              href="https://discord.gg/astrostudios"
              className=" my-4 px-5 py-2 bg-white font-medium rounded-xl hover:bg-[#dcbfe4] duration-500"
            >
              <button>Join Discord</button>
            </a>
          </div>
          <div className=" w-full overflow-hidden">
            <img
              src={Community}
              alt="image animation"
              className=" h-96 w-full animate-spin-slow object-contain "
            />
          </div>
        </section>
      </section>
      <section className=" bg-white mt-14 py-20 lg900:px-12 px-4">
        <h2 className=" text-center text-4xl font-light font-sans">
          Meet the <span className=" font-semibold">team.</span>
        </h2>
        <p className=" text-center font-Poppins font-light">
          Team Members connected with their Social Media Profiles.
        </p>
        <section className=" mt-10 pb-4 flex justify-center gap-[5%] flex-wrap">
          {Staffs.map((data) => (
            <div
              key={data.id}
              className="flex flex-col justify-center items-center rounded-3xl shadow-lg bg-[#F8F8F8] gap-5 p-5 w-[85%] mb-9 sm630:w-[40%] "
            >
              <img
                src={data.img}
                alt=""
                className=" w-28
                 h-28 rounded-full"
              />
              <h2 className=" text-xl font-medium  ">{data.name}</h2>
              <p className="font-medium text-[#00000088]">{data.role}</p>
              <div className="flex gap-2">
                {data.socials.disord && (
                  <a
                    href={data.socials.disord}
                    className=" text-2xl text-[#7289DA]"
                  >
                    <FaDiscord />
                  </a>
                )}
                {data.socials.Github && (
                  <a
                    href={data.socials.Github}
                    className=" text-2xl text-[#000000]"
                  >
                    <FaGithub />
                  </a>
                )}
                {data.socials.paypal && (
                  <a
                    href={data.socials.paypal}
                    className=" text-2xl text-[#003087]"
                  >
                    <FaPaypal />
                  </a>
                )}
                {data.socials.X && (
                  <a href={data.socials.X} className=" text-2xl text-[#000000]">
                    <FaXTwitter />
                  </a>
                )}
                {data.socials.tiktok && (
                  <a
                    href={data.socials.tiktok}
                    className=" text-2xl text-[#000000]"
                  >
                    <FaTiktok />
                  </a>
                )}
                {data.socials.spotify && (
                  <a
                    href={data.socials.spotify}
                    className=" text-2xl text-[#1DB954]"
                  >
                    <FaSpotify />
                  </a>
                )}
              </div>
            </div>
          ))}
        </section>
      </section>
      <Footer />
    </main>
  );
}
