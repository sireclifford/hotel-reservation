import './SearchItem.css';

const SearchItem = () => (
  <div className="searchItem">
    <img
      src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
      alt=""
      className="search-item-Img"
    />
    <div className="search-item-Desc">
      <h1 className="search-item-Title">Tower Street Apartments</h1>
      <span className="search-item-Distance">500m from center</span>
      <span className="search-item-TaxiOp">Free airport taxi</span>
      <span className="search-item-Subtitle">
        Studio Apartment with Air conditioning
      </span>
      <span className="search-item-Features">
        Entire studio • 1 bathroom • 21m² 1 full bed
      </span>
      <span className="search-item-CancelOp">Free cancellation </span>
      <span className="search-item-CancelOpSubtitle">
        You can cancel later, so lock in this great price today!
      </span>
    </div>
    <div className="search-item-Details">
      <div className="search-item-Rating">
        <span>Excellent</span>
        <button type="button">8.9</button>
      </div>
      <div className="search-item-DetailTexts">
        <span className="search-item-Price">$112</span>
        <span className="search-item-TaxOp">Includes taxes and fees</span>
        <button type="button" className="search-item-CheckButton">See availability</button>
      </div>
    </div>
  </div>
);

export default SearchItem;
