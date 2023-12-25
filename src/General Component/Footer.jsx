import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaypal, faPatreon } from '@fortawesome/free-brands-svg-icons';
import { faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons';
import './footer.css';

export default function Footer() {
  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 mt-10 select-none" style={{ backgroundColor: "#030303" }}>
      <p className="text-center mt-4 text-white text-sm">
        Copyright&copy; {currentYear} Joni & Astro
      </p>
      <div className="text-center icon-container">
        <div className="tooltip">
          <FontAwesomeIcon icon={faPaypal} style={{color: "#005eff"}} />
          <span className="tooltiptext">PayPal</span>
        </div>
        <div className="tooltip" style={{ marginLeft: '10px' }}>
          <FontAwesomeIcon icon={faPatreon} style={{color: "#ffffff"}} />
          <span className="tooltiptext">Patreon</span>
        </div>
        <div className="tooltip" style={{ marginLeft: '10px' }}>
          <FontAwesomeIcon icon={faMoneyBillTransfer} style={{color: "#ffffff"}} />
          <span className="tooltiptext">Bank Transfer</span>
        </div>
      </div>
    </footer>
  );
}