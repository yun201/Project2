import Button from 'react-bootstrap/Button';
import IMG from './IMG.png';
import subIMG from './subIMG.png';
import { Link as ScrollLink, Element } from 'react-scroll';

function Home() {
  const buttonStyle = {
    flex: '2',
    width: '66.66%',
    height: '50px',
    marginTop: '50px',
    marginBottom: '50px',
    fontSize: '18px',
    border: '1px solid #000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    cursor: 'pointer'
  };
  return (
    <div className='homecontent'>
      <div style={{ display: 'flex', justifyContent: 'center', marginLeft: '80px', marginRight: '80px' }}>
        <ScrollLink to="update" smooth={true} duration={500} style={buttonStyle}>Update</ScrollLink>
        <ScrollLink to="release" smooth={true} duration={500} style={buttonStyle}>Release</ScrollLink>
        <ScrollLink to="review" smooth={true} duration={500} style={buttonStyle}>Review</ScrollLink>
      </div>

      <Element name="update">
        <section id="update">
          <h1 style={{ display: 'flex', justifyContent: 'center', margin: '50px' }}>Update</h1>
          <div className='titleImage'>
            <img src={IMG} alt="img" />
          </div>
          <h3 style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
          </h3>
          <div className='subImage'>
            <img src={subIMG} style={{ marginRight: '150px' }} alt="img" />
            <img src={subIMG} style={{ marginLeft: '150px' }} alt="img" />
          </div>
        </section>
      </Element>

      <Element name="release">
        <section id="release">
          <h1 style={{ display: 'flex', justifyContent: 'center', margin: '50px' }}>Release</h1>
          <div className='titleImage'>
            <img src={IMG} alt="img" />
          </div>
          <h3 style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
          </h3>
          <div className='subImage'>
            <img src={subIMG} style={{ marginRight: '150px' }} alt="img" />
            <img src={subIMG} style={{ marginLeft: '150px' }} alt="img" />
          </div>
        </section>
      </Element>

      <Element name="review">
        <section id="review">
          <h1 style={{ display: 'flex', justifyContent: 'center', margin: '50px' }}>Review</h1>
          <div className='titleImage'>
            <img src={IMG} alt="img" />
          </div>
          <h3 style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
          </h3>
          <div className='subImage'>
            <img src={subIMG} style={{ marginRight: '150px' }} alt="img" />
            <img src={subIMG} style={{ marginLeft: '150px' }} alt="img" />
          </div>
        </section>
      </Element>
    </div>
  );
}

export default Home;

