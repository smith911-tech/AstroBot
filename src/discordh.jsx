import React from 'react';
import Header from "./General Component/Header";
import Footer from "./General Component/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip, faMemory, faHdd, faWifi, faGlobeEurope, faUserSecret, faCloud, faDatabase, faCloudArrowUp} from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faNodeJs, faPython } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <main className="bg-[#13072E] font-Poppins">
      <Header />
      {/* headline */}
      <div style={{ 
          position: 'relative', 
          overflow: 'hidden', 
          height: '300px' 
      }}>
        <h3 style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)',
          color: 'white',
          padding: '10px',
          fontWeight: 'bold',
          textAlign: 'center',
          fontSize: '4rem'
        }}>
          Discord Bot Hosting
        </h3>
      </div>
      <section className="lg900:px-12 changePageanimation">
        <section className="flex flex-row justify-around items-center my-10">
          {/* Beginning of the Card 1 */}
        <div>
          {/* Card style setting for the top side */}
        <div 
          className="text-white p-6 shadow-lg m-4"
          style={{ 
            backgroundColor: '#1f1f1f', 
            paddingTop: '40px', 
            paddingRight: '60px', 
            paddingBottom: '40px', 
            paddingLeft: '60px',
            marginBottom: '0',
            borderTopLeftRadius: '0.5rem',
            borderTopRightRadius: '0.5rem',
            borderBottomLeftRadius: '0',
            borderBottomRightRadius: '0'
          }}
        >
          <h3 className="text-xl font-bold mb-2" style={{ color: '#B25AFE' }}>Tier 1 - 1.19$</h3>
          <p style={{ color: '#808080' }}>
          Opting for the Tier 1 hosting tier is a favorable choice, <br></br> for developers with private bots.
          </p>
        {/* Button on the Card */}
          <button 
          className="mt-4 bg-green-600 text-white rounded-full hover:bg-gray-500 hover:translate-y-[-4px] transition"
          style={{ 
            paddingTop: '17px', 
            paddingBottom: '17px', 
            paddingLeft: '26px', 
            paddingRight: '26px',
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 600,
            transition: 'background-color 0.3s, transform 0.3s'
          }}
        >
          Buy now!
        </button>
        </div>
        {/* Style Settings for the underside */}
        <div 
          className="text-white p-6 shadow-lg m-4"
          style={{ 
            backgroundColor: '#292929', 
            paddingTop: '40px', 
            paddingRight: '60px', 
            paddingBottom: '40px', 
            paddingLeft: '60px',
            marginTop: '0',
            minHeight: '530px',
            borderTopLeftRadius: '0',
            borderTopRightRadius: '0',
            borderBottomLeftRadius: '0.5rem',
            borderBottomRightRadius: '0.5rem'
          }}
        >
          {/* Specs for the Card */}
          <ul style={{ listStyleType: 'none' }}>
            {/* CPU Specs */}
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '11px' }}>
              <FontAwesomeIcon icon={faMicrochip} style={{ width: '25px', height: '30px', paddingRight: '20px' }} />
              <span style={{ fontSize: 'larger', lineHeight: '30px' }}>50% CPU usage</span>
            </li>
            {/* Memory Specs */}
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '11px' }}>
              <FontAwesomeIcon icon={faMemory} style={{ width: '25px', height: '30px', paddingRight: '20px' }} />
              <span style={{ fontSize: 'larger', lineHeight: '30px' }}>1GB Memory</span>
            </li>
            {/* SSD Specs */}
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '11px' }}>
              <FontAwesomeIcon icon={faHdd} style={{ width: '25px', height: '30px', paddingRight: '20px' }} />
              <span style={{ fontSize: 'larger', lineHeight: '30px' }}>15GB SSD</span>
            </li>
            {/* Ping Specs */}
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '11px' }}>
              <FontAwesomeIcon icon={faWifi} style={{ width: '25px', height: '30px', paddingRight: '20px' }} />
              <span style={{ fontSize: 'larger', lineHeight: '30px' }}>Up to 10ms</span>
            </li>
            {/* Location Specs */}
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '11px' }}>
              <FontAwesomeIcon icon={faGlobeEurope} style={{ width: '25px', height: '30px', paddingRight: '20px' }} />
              <span style={{ fontSize: 'larger', lineHeight: '30px' }}>Europe Location</span>
            </li>
            {/* DDOS Specs */}
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '11px' }}>
              <FontAwesomeIcon icon={faUserSecret} style={{ width: '25px', height: '30px', paddingRight: '20px' }} />
              <span style={{ fontSize: 'larger', lineHeight: '30px' }}>Anti DDOS</span>
            </li>
            {/* Bandwith Specs */}
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '11px' }}>
              <FontAwesomeIcon icon={faCloud} style={{ width: '25px', height: '30px', paddingRight: '20px' }} />
              <span style={{ fontSize: 'larger', lineHeight: '30px' }}>Unlimited Bandwith</span>
            </li>
            {/* Language Specs */}
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '11px' }}>
              <FontAwesomeIcon icon={faNodeJs} style={{ width: '25px', height: '30px', paddingRight: '20px' }} />
              <span style={{ fontSize: 'larger', lineHeight: '30px' }}>Node.js Discord Bot</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '11px' }}>
              <FontAwesomeIcon icon={faPython} style={{ width: '25px', height: '30px', paddingRight: '20px' }} />
              <span style={{ fontSize: 'larger', lineHeight: '30px' }}>Python Discord bot</span>
            </li>
          </ul>
        </div>
      </div>
      {/* End of the Card 1 */}

          {/* Beginning of Card 2 */}
          <div>
          {/* Card style setting for the top side */}
        <div 
          className="text-white p-6 shadow-lg m-4"
          style={{ 
            backgroundColor: '#1f1f1f', 
            paddingTop: '40px', 
            paddingRight: '60px', 
            paddingBottom: '40px', 
            paddingLeft: '60px',
            marginBottom: '0',
            borderTopLeftRadius: '0.5rem',
            borderTopRightRadius: '0.5rem',
            borderBottomLeftRadius: '0',
            borderBottomRightRadius: '0'
          }}
        >
          <h3 className="text-xl font-bold mb-2" style={{ color: '#B25AFE' }}>Tier 2 - 2.50$</h3>
          <p style={{ color: '#808080' }}>
          Opting for the Tier 2 hosting tier is a favorable choice, <br></br> for developers with medium sized bots.
          </p>
        {/* Button on the Card */}
          <button 
          className="mt-4 bg-green-600 text-white rounded-full hover:bg-gray-500 hover:translate-y-[-4px] transition"
          style={{ 
            paddingTop: '17px', 
            paddingBottom: '17px', 
            paddingLeft: '26px', 
            paddingRight: '26px',
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 600,
            transition: 'background-color 0.3s, transform 0.3s'
          }}
        >
          Buy now!
        </button>
        </div>
        {/* Style Settings for the underside */}
        <div 
          className="text-white p-6 shadow-lg m-4"
          style={{ 
            backgroundColor: '#292929', 
            paddingTop: '40px', 
            paddingRight: '60px', 
            paddingBottom: '40px', 
            paddingLeft: '60px',
            marginTop: '0',
            borderTopLeftRadius: '0',
            borderTopRightRadius: '0',
            borderBottomLeftRadius: '0.5rem',
            borderBottomRightRadius: '0.5rem'
          }}
        >
          {/* Specs for the Card */}
          <ul style={{ listStyleType: 'none' }}>
            {/* CPU Specs */}
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '11px' }}>
              <FontAwesomeIcon icon={faMicrochip} style={{ width: '25px', height: '30px', paddingRight: '20px' }} />
              <span style={{ fontSize: 'larger', lineHeight: '30px' }}>100% CPU usage</span>
            </li>
            {/* Memory Specs */}
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '11px' }}>
              <FontAwesomeIcon icon={faMemory} style={{ width: '25px', height: '30px', paddingRight: '20px' }} />
              <span style={{ fontSize: 'larger', lineHeight: '30px' }}>2GB Memory</span>
            </li>
            {/* SSD Specs */}
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '11px' }}>
              <FontAwesomeIcon icon={faHdd} style={{ width: '25px', height: '30px', paddingRight: '20px' }} />
              <span style={{ fontSize: 'larger', lineHeight: '30px' }}>25GB SSD</span>
            </li>
            {/* Ping Specs */}
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '11px' }}>
              <FontAwesomeIcon icon={faWifi} style={{ width: '25px', height: '30px', paddingRight: '20px' }} />
              <span style={{ fontSize: 'larger', lineHeight: '30px' }}>Up to 10ms</span>
            </li>
            {/* Location Specs */}
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '11px' }}>
              <FontAwesomeIcon icon={faGlobeEurope} style={{ width: '25px', height: '30px', paddingRight: '20px' }} />
              <span style={{ fontSize: 'larger', lineHeight: '30px' }}>Europe Location</span>
            </li>
            {/* DDOS Specs */}
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '11px' }}>
              <FontAwesomeIcon icon={faUserSecret} style={{ width: '25px', height: '30px', paddingRight: '20px' }} />
              <span style={{ fontSize: 'larger', lineHeight: '30px' }}>Anti DDOS</span>
            </li>
            {/* Bandwith Specs */}
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '11px' }}>
              <FontAwesomeIcon icon={faCloud} style={{ width: '25px', height: '30px', paddingRight: '20px' }} />
              <span style={{ fontSize: 'larger', lineHeight: '30px' }}>Unlimited Bandwith</span>
            </li>
            {/* Database Specs */}
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '11px' }}>
              <FontAwesomeIcon icon={faDatabase} style={{ width: '25px', height: '30px', paddingRight: '20px' }} />
              <span style={{ fontSize: 'larger', lineHeight: '30px' }}>1 Database</span>
            </li>
            {/* Backup Specs */}
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '11px' }}>
              <FontAwesomeIcon icon={faCloudArrowUp} style={{ width: '25px', height: '30px', paddingRight: '20px' }} />
              <span style={{ fontSize: 'larger', lineHeight: '30px' }}>1 Backup</span>
            </li>
            {/* Language Specs */}
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '11px' }}>
              <FontAwesomeIcon icon={faNodeJs} style={{ width: '25px', height: '30px', paddingRight: '20px' }} />
              <span style={{ fontSize: 'larger', lineHeight: '30px' }}>Node.js Discord Bot</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '11px' }}>
              <FontAwesomeIcon icon={faPython} style={{ width: '25px', height: '30px', paddingRight: '20px' }} />
              <span style={{ fontSize: 'larger', lineHeight: '30px' }}>Python Discord bot</span>
            </li>
          </ul>
        </div>
      </div>
      {/* End of the Card 2 */}

      {/* Beginning of Card 3 */}
      <div>
          {/* Card style setting for the top side */}
        <div 
          className="text-white p-6 shadow-lg m-4"
          style={{ 
            backgroundColor: '#1f1f1f', 
            paddingTop: '40px', 
            paddingRight: '60px', 
            paddingBottom: '40px', 
            paddingLeft: '60px',
            marginBottom: '0',
            borderTopLeftRadius: '0.5rem',
            borderTopRightRadius: '0.5rem',
            borderBottomLeftRadius: '0',
            borderBottomRightRadius: '0'
          }}
        >
          <h3 className="text-xl font-bold mb-2" style={{ color: '#B25AFE' }}>Tier 3 - 5.00$</h3>
          <p style={{ color: '#808080' }}>
          Opting for the Tier 2 hosting tier is a favorable choice, <br></br> for developers with larger bots.
          </p>
        {/* Button on the Card */}
          <button 
          className="mt-4 bg-green-600 text-white rounded-full hover:bg-gray-500 hover:translate-y-[-4px] transition"
          style={{ 
            paddingTop: '17px', 
            paddingBottom: '17px', 
            paddingLeft: '26px', 
            paddingRight: '26px',
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 600,
            transition: 'background-color 0.3s, transform 0.3s'
          }}
        >
          Buy now!
        </button>
        </div>
        {/* Style Settings for the underside */}
        <div 
          className="text-white p-6 shadow-lg m-4"
          style={{ 
            backgroundColor: '#292929', 
            paddingTop: '40px', 
            paddingRight: '60px', 
            paddingBottom: '40px', 
            paddingLeft: '60px',
            marginTop: '0',
            borderTopLeftRadius: '0',
            borderTopRightRadius: '0',
            borderBottomLeftRadius: '0.5rem',
            borderBottomRightRadius: '0.5rem'
          }}
        >
          {/* Specs for the Card */}
          <ul style={{ listStyleType: 'none' }}>
            {/* CPU Specs */}
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '11px' }}>
              <FontAwesomeIcon icon={faMicrochip} style={{ width: '25px', height: '30px', paddingRight: '20px' }} />
              <span style={{ fontSize: 'larger', lineHeight: '30px' }}>200% CPU usage</span>
            </li>
            {/* Memory Specs */}
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '11px' }}>
              <FontAwesomeIcon icon={faMemory} style={{ width: '25px', height: '30px', paddingRight: '20px' }} />
              <span style={{ fontSize: 'larger', lineHeight: '30px' }}>4GB Memory</span>
            </li>
            {/* SSD Specs */}
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '11px' }}>
              <FontAwesomeIcon icon={faHdd} style={{ width: '25px', height: '30px', paddingRight: '20px' }} />
              <span style={{ fontSize: 'larger', lineHeight: '30px' }}>50GB SSD</span>
            </li>
            {/* Ping Specs */}
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '11px' }}>
              <FontAwesomeIcon icon={faWifi} style={{ width: '25px', height: '30px', paddingRight: '20px' }} />
              <span style={{ fontSize: 'larger', lineHeight: '30px' }}>Up to 0ms</span>
            </li>
            {/* Location Specs */}
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '11px' }}>
              <FontAwesomeIcon icon={faGlobeEurope} style={{ width: '25px', height: '30px', paddingRight: '20px' }} />
              <span style={{ fontSize: 'larger', lineHeight: '30px' }}>Europe Location</span>
            </li>
            {/* DDOS Specs */}
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '11px' }}>
              <FontAwesomeIcon icon={faUserSecret} style={{ width: '25px', height: '30px', paddingRight: '20px' }} />
              <span style={{ fontSize: 'larger', lineHeight: '30px' }}>Anti DDOS</span>
            </li>
            {/* Bandwith Specs */}
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '11px' }}>
              <FontAwesomeIcon icon={faCloud} style={{ width: '25px', height: '30px', paddingRight: '20px' }} />
              <span style={{ fontSize: 'larger', lineHeight: '30px' }}>Unlimited Bandwith</span>
            </li>
            {/* Database Specs */}
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '11px' }}>
              <FontAwesomeIcon icon={faDatabase} style={{ width: '25px', height: '30px', paddingRight: '20px' }} />
              <span style={{ fontSize: 'larger', lineHeight: '30px' }}>1 Database</span>
            </li>
            {/* Backup Specs */}
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '11px' }}>
              <FontAwesomeIcon icon={faCloudArrowUp} style={{ width: '25px', height: '30px', paddingRight: '20px' }} />
              <span style={{ fontSize: 'larger', lineHeight: '30px' }}>3 Backups</span>
            </li>
            {/* Language Specs */}
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '11px' }}>
              <FontAwesomeIcon icon={faNodeJs} style={{ width: '25px', height: '30px', paddingRight: '20px' }} />
              <span style={{ fontSize: 'larger', lineHeight: '30px' }}>Node.js Discord Bot</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '11px' }}>
              <FontAwesomeIcon icon={faPython} style={{ width: '25px', height: '30px', paddingRight: '20px' }} />
              <span style={{ fontSize: 'larger', lineHeight: '30px' }}>Python Discord bot</span>
            </li>
          </ul>
        </div>
      </div>
      {/* End of the Card */}
        </section>
      </section>
      <Footer />
    </main>
  )
}