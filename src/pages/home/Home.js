import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Featured from '../../components/featured/Featured';
import PropertyList from '../../components/propertyList/PropertyList';
import './Home.css';

const Home = () => (
  <>
    <Navbar />
    <Header />
    <div className="home-container">
      <Featured />
      <h1 className="home-title">Browse by property type</h1>
      <PropertyList />
      <h1 className="home-title">Homes guests love</h1>
      {/* Featured Properties */}
      {/* Footer */}
    </div>
  </>
);

export default Home;
