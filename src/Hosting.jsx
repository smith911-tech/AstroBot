import Footer from "./General Component/Footer";
import Header from "./General Component/Header";
import server from "./assets/server.gif";

export default function Hosting() {
  return (
    <main className=" bg-[#13072E] font-Poppins pb-10">
      <Header />
      <section className="lg900:px-12 changePageanimation  ">
        <section className=" mt-10 mx-4 bg-gradient-to-r from-[#13072E] to-[#402182] pt-5 pb-2  rounded-xl px-4 ">
          <h1 className="text-3xl font-bold mb-8 text-center text text-white">
            Hosting Tiers
          </h1>
          <p className=" text-white  font-medium text-sm ">
            Click the buttons below to explore the statistics and features of
            each hosting tier. Our hosting services are designed to cater to a
            diverse range of needs, ensuring that every tier comes with reliable
            support. After selecting your desired tier and clicking the
            Statistics/Buy button, you will be securely redirected to our
            Discord server, where you can find detailed information about the
            payment methods we support.
          </p>
          <div className="flex flex-col lg900:flex-row lg900:justify-between lg900:gap-4">
            <div className=" mt-4">
              <p className="text-white font-normal text-sm ">
                <strong>Why Discord?</strong> We've chosen Discord as our
                platform for transactions and inquiries to prioritize your
                security. Discord provides a secure environment for payment
                discussions and allows us to maintain a direct line of
                communication with our clients. Rest assured that your
                transactions and personal information are handled with the
                utmost care.
              </p>
            </div>
            <div className=" mt-4">
              <p className="text-white font-normal text-sm ">
                <strong>Payment Methods</strong> In our Discord server, you'll
                find a comprehensive list of supported payment methods. Whether
                you prefer credit cards, digital wallets, or other options, we
                strive to offer a variety of choices to accommodate your
                preferences. Our commitment to transparency means that you can
                review and choose the payment method that best suits your needs.
              </p>
            </div>
          </div>
        </section>

        <section className=" mt-10 px-4 pb-3 ">
          <h2 className="text-2xl font-bold mb-4 text-center text text-white">
            Get Started
          </h2>
          <h4 className="text-1xl font-bold mb-4 text-center text text-white">
            When buying a hosting tier, your Discord bot will get a place on our status page
          </h4>
          <p className="mb-8 text-sm text-white font-medium text-center">
            Explore the hosting tiers, review the statistics, and make a
            confident choice for your hosting needs. Click the buttons below to
            embark on a seamless journey toward reliable hosting services with
            dedicated support. If you have any questions or concerns, our
            Discord server is just a click away, ready to assist you in making
            the right decision for your online endeavors.
          </p>
          <div>
            <section className="flex flex-col gap-10 sm768:flex-row  sm768:justify-center">
              <div className=" sm768:w-[40%]">
                <p className=" text-2xl text-white font-semibold">
                  TIER 1 - 1.19$
                </p>
                <p className=" text-sm text-white font-medium">
                  Tier 1 hosting is a favorable choice when it comes to Discord
                  bot hosting, especially for developers with smaller bots.
                </p>
                <a href="https://discord.gg/astrostudios">
                  <button className=" mt-5 px-5 bg-white py-1 rounded-xl font-semibold shadow-lg hover:bg-slate-500">
                    Statistics
                  </button>
                </a>
              </div>
              <div className=" sm768:w-[40%]">
                <p className=" text-2xl text-white font-semibold">
                  TIER 2 - 2.50$
                </p>
                <p className=" text-sm text-white font-medium">
                  The Tier 2 hosting plan emerges as an ideal choice for Discord
                  bot hosting, particularly for medium-sized bots.
                </p>
                <a href="https://discord.gg/astrostudios">
                  <button className=" mt-5 px-5 bg-white py-1 rounded-xl font-semibold shadow-lg hover:bg-slate-500">
                    Statistics
                  </button>
                </a>
              </div>
            </section>
            <section className="flex flex-col gap-10 mt-11  sm768:flex-row sm768:justify-center">
              <div className=" sm768:w-[40%]">
                <p className=" text-2xl text-white font-semibold">
                  TIER 3 - 5.00$
                </p>
                <p className=" text-sm text-white font-medium">
                  The Tier 3 hosting plan proves to be an excellent choice for
                  Discord bot hosting, particularly suitable for large bots.
                </p>
                <a href="https://discord.gg/astrostudios">
                  <button className=" mt-5 px-5 bg-white py-1 rounded-xl font-semibold shadow-lg hover:bg-slate-500">
                    Statistics
                  </button>
                </a>
              </div>
              <div className=" sm768:w-[40%]">
                <p className=" text-2xl text-white font-semibold">
                  CUSTOM TIER
                </p>
                <p className=" text-sm text-white font-medium">
                  You can request custom tiers from us. This hosting will then
                  be perfectly adapted to your wishes.
                </p>
                <a href="https://discord.gg/astrostudios">
                  <button className=" mt-5 px-5 bg-white py-1 rounded-xl font-semibold shadow-lg hover:bg-slate-500">
                    Statistics
                  </button>
                </a>
              </div>
            </section>
            <div>
              <div className="flex justify-center mt-16">
                <a href="https://discord.gg/astrostudios">
                  <button className=" mt-5 px-7 py-1 rounded-xl font-semibold shadow-lg border-[2px] border-white text-white hover:text-black hover:bg-white">
                    Buy Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
}
