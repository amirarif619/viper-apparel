import '../styles/HeroBanner.css'

function HeroBanner() {
    return (
      <>
      <section className="hero-banner">
        <div className="hero-content">
          <p className="hero-subtitle">MEN&apos;S</p>
          <h1 className="hero-title">T-SHIRTS & TOPS</h1>
          <p className="hero-description">
            Get ready for the ultimate style and performance combo with our womens gym t-shirts. These wardrobe essentials are all about keeping you comfy and feeling your personal best. Whether youre sweating your way through a HIIT workout, getting your reps in, or enjoying rest day with friends, our workout shirts and tops offer high-performance materials, versatile shapes, and fashionable designs.
          </p>
          <div className="hero-links">
            <a href="/home">Gym Plain Tops</a> | 
            <a href="/home"> Long Sleeve Gym Tops</a> | 
            <a href="/home"> Gym Hoodies</a>
          </div>
        </div>
      </section>
      </>
    );
  }
  
  export default HeroBanner;
  