import './Home.css';
import Vaniqhome from '../../assets/Vaniqhome.mp4';
import Features from '../../components/Features/Features';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <video className="background-video" autoPlay loop muted playsInline>
        <source src={Vaniqhome} type="video/mp4" />
      </video>
      <header className="hero-section home-content">
        <h1>Elevate Your Everyday Banking</h1>
        <p className='slogan'>
          We believe that banking should enhance your Life.
        </p>
        <Link to= "/OpenAccount">
        <button className="cta-button">Open Account </button>
        </Link>
      </header>
      <Features />
    </div>
  );
}

export default Home;
