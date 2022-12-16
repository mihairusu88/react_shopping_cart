import PopularProducts from './components/Home/PopularProducts';
import RecentlyViewed from './components/Home/RecentlyViewed';
import Categories from './components/Home/Categories';
import FeaturedProducts from './components/Home/FeaturedProducts';

const Home = () => {
  return (
    <div className="home">
      <h2 className="text-center">Home Page</h2>
      <div className="container">
        <FeaturedProducts />
        <PopularProducts />
        <Categories />
        <RecentlyViewed />
      </div>
    </div>
  );
};

export default Home;
