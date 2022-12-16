import './CategoryCardVariant1.scss';
import { Link } from 'react-router-dom';
import {
  FcTwoSmartphones,
  FcMultipleDevices,
  FcBiomass,
  FcButtingIn,
  FcShop,
  FcHome,
  FcWorkflow,
  FcAutomotive,
  FcIdea,
  FcBusiness,
  FcBusinesswoman,
  FcSportsMode,
  FcBusinessman,
  FcDebt,
  FcClock,
  FcAlarmClock,
  FcBrokenLink,
  FcSettings,
  FcReadingEbook,
  FcExternal,
} from 'react-icons/fc';

const CategoryCardVariant1 = ({ category = null }) => {
  const categoryName = category.split('-').join(' ');

  return (
    <div className="category-card-variant-1">
      <Link>
        {category === 'smartphones' && <FcTwoSmartphones />}
        {category === 'laptops' && <FcMultipleDevices />}
        {category === 'fragrances' && <FcBiomass />}
        {category === 'skincare' && <FcButtingIn />}
        {category === 'groceries' && <FcShop />}
        {category === 'home-decoration' && <FcHome />}
        {category === 'furniture' && <FcWorkflow />}
        {category === 'automotive' && <FcAutomotive />}
        {category === 'lighting' && <FcIdea />}
        {category === 'womens-bags' && <FcBusiness />}
        {category === 'womens-dresses' && <FcBusinesswoman />}
        {category === 'womens-shoes' && <FcSportsMode />}
        {category === 'mens-shirts' && <FcBusinessman />}
        {category === 'mens-shoes' && <FcDebt />}
        {category === 'mens-watches' && <FcClock />}
        {category === 'womens-watches' && <FcAlarmClock />}
        {category === 'womens-jewellery' && <FcBrokenLink />}
        {category === 'motorcycle' && <FcSettings />}
        {category === 'sunglasses' && <FcReadingEbook />}
        {category === 'tops' && <FcExternal />}
        <h6>{categoryName}</h6>
      </Link>
    </div>
  );
};

export default CategoryCardVariant1;
