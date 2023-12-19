import Footer from "./General Component/Footer";
import Header from "./General Component/Header";
import Community from "./assets/community.png";

export default function Team() {
    return (
      <main className=" bg-[#13072E]">
        <Header />
        <section className="lg900:px-12">
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
            <div className="flex flex-col justify-center items-center rounded-3xl shadow-lg bg-[#F8F8F8] gap-10 p-10 w-[70%] mb-9">
              <h2 className=" text-xl font-medium ">Joni</h2>
              <p className="">Founder/Developer</p>
            </div>
            <div className="flex flex-col justify-center items-center rounded-3xl shadow-lg bg-[#F8F8F8] gap-10 p-10 w-[70%] mb-9">
              <h2 className=" text-xl font-medium ">Astro</h2>
              <p>Founder/Developer</p>
            </div>
            <div className="flex flex-col justify-center items-center rounded-3xl shadow-lg bg-[#F8F8F8] gap-10 p-10 w-[70%] mb-9">
              <h2 className=" text-xl font-medium ">FRANKI</h2>
              <p className="">Team Manager/Developer</p>
            </div>
            <div className="flex flex-col justify-center items-center rounded-3xl shadow-lg bg-[#F8F8F8] gap-10 p-10 w-[70%] mb-9">
              <h2 className=" text-xl font-medium ">Joseph</h2>
              <p className="">Web Developer/Developer</p>
            </div>
            <div className="flex flex-col justify-center items-center rounded-3xl shadow-lg bg-[#F8F8F8] gap-10 p-10 w-[70%] mb-9">
              <h2 className=" text-xl font-medium ">Hydra</h2>
              <p className="">Developer</p>
            </div>
          </section>
        </section>
        <Footer />
      </main>
    );
}