import { Link } from "react-router-dom";

const AllProducts = () => {
  return (
    <div className="characteristic">
      <Link to={`/samsung`} className="card">
        <img src="https://s3.eu-central-1.amazonaws.com/alifcore.storage/media/images/alifshop/12311/samsung-galaxy-s23-ultra-12-512-gb-zelenyy-1677237011522-md.webp" alt="Samsung" />
        <h4>Samsung Galaxy S22, 23</h4>
      </Link>
      <Link to={`/iphone`} className="card">
        <img src="https://s3.eu-central-1.amazonaws.com/alifcore.storage/media/images/alifshop/6971/iphone-14-pro-256-gb-esim-esim-chernyy-1664181855290-md.webp" alt="iPhone" />
        <h4>iPhone 14</h4>
      </Link>
    </div>
  );
};

export default AllProducts;
