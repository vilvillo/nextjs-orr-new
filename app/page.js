import Image from "next/image";

// index page
export default function HomePage() {
    // List of property objects
    const properties = [
      {
        title: "Luxury Apartment with great views",
        location: "Upper East Side, New York",
        price: "$950",
        perNight: "per night",
        bedrooms: 4,
        bathrooms: 3,
        imgSrc: "http://placehold.it/760x670",
        link: "properties-detail.html"
      },
      {
        title: "Stunning Villa with 5 bedrooms",
        location: "Miami Beach, Florida",
        price: "$1,300",
        perNight: "per night",
        bedrooms: 5,
        bathrooms: 2,
        imgSrc: "http://placehold.it/760x670",
        link: "properties-detail.html"
      },
      {
        title: "Recent construction with 3 bedrooms",
        location: "Park Slope, New York",
        price: "$560",
        perNight: "per night",
        bedrooms: 3,
        bathrooms: 2,
        imgSrc: "http://placehold.it/760x670",
        link: "properties-detail.html"
      },
      {
        title: "Modern construction with parking space",
        location: "Midtown, New York",
        price: "$85",
        perNight: "per night",
        bedrooms: 1,
        bathrooms: 2,
        imgSrc: "http://placehold.it/760x670",
        link: "properties-detail.html"
      },
      {
        title: "Single Family Townhouse",
        location: "Cobble Hill, New York",
        price: "$840",
        perNight: "per night",
        bedrooms: 2,
        bathrooms: 2,
        imgSrc: "http://placehold.it/760x670",
        link: "properties-detail.html"
      },
      {
        title: "3 bedroom villa with garage for rent",
        location: "Bal Harbour, Florida",
        price: "$150",
        perNight: "per night",
        bedrooms: 3,
        bathrooms: 2,
        imgSrc: "http://placehold.it/760x670",
        link: "properties-detail.html"
      }
    ];
  
    const regions = [
      { name: "Rhovanion", imgSrc: "http://placehold.it/194x194" },
      { name: "Eriador", imgSrc: "http://placehold.it/194x194" },
      { name: "Bay of Belfalas", imgSrc: "http://placehold.it/194x194" },
      { name: "Mordor", imgSrc: "http://placehold.it/194x194" },
      { name: "The Southwest", imgSrc: "http://placehold.it/194x194" },
      { name: "Arnor", imgSrc: "http://placehold.it/194x194" }
    ];
  
    const articles = [
      {
        date: "July 30, 2014",
        comments: 2,
        tags: "Properties, Prices, best deals",
        title: "How to get your dream property for the best price?",
        imgSrc: "http://placehold.it/766x515",
        link: "#"
      },
      {
        date: "July 24, 2014",
        comments: 4,
        tags: "Tips, Mortgage",
        title: "7 tips to get the best mortgage.",
        imgSrc: "http://placehold.it/766x515",
        link: "#"
      },
      {
        date: "July 05, 2014",
        comments: 1,
        tags: "Location, Price, House",
        title: "House, location or price: What's the most important factor?",
        imgSrc: "http://placehold.it/766x515",
        link: "#"
      }
    ];
  
    return (
      <div className="main col-sm-8">
        <div className="content">
          <h1 className="section-title">Featured Properties</h1>
          <div className="grid-style1 clearfix">
            {properties.map((property, index) => (
              <div className="item col-md-4" key={index}>
                <div className="image">
                  <a href={property.link}>
                    <h3>{property.title}</h3>
                    <span className="location">{property.location}</span>
                  </a>
                  <Image src={property.imgSrc} alt={property.title} width={760} height={670} />
                </div>
                <div className="price">
                  <span>{property.price}</span>
                  <p>{property.perNight}</p>
                </div>
                <ul className="amenities">
                  <li><i className="icon-bedrooms"></i> {property.bedrooms}</li>
                  <li><i className="icon-bathrooms"></i> {property.bathrooms}</li>
                </ul>
              </div>
            ))}
          </div>
          
          <h1 className="section-title">Popular Regions</h1>
          <div id="regions">
            {regions.map((region, index) => (
              <div className="item" key={index}>
                <a href="#">
                  <Image src={region.imgSrc} alt={region.name} width={194} height={194} />
                  <h3>{region.name}</h3>
                </a>
              </div>
            ))}
          </div>
  
          <h1 className="section-title">Recent Articles</h1>
          <div className="grid-style1">
            {articles.map((article, index) => (
              <div className="item col-md-4" key={index}>
                <div className="image">
                  <a href={article.link}>
                    <span className="btn btn-default">
                      <i className="fa fa-file-o"></i> Read More
                    </span>
                  </a>
                  <Image src={article.imgSrc} alt={article.title} width={766} height={515} />
                </div>
                <div className="tag"><i className="fa fa-file-text"></i></div>
                <div className="info-blog">
                  <ul className="top-info">
                    <li><i className="fa fa-calendar"></i> {article.date}</li>
                    <li><i className="fa fa-comments-o"></i> {article.comments}</li>
                    <li><i className="fa fa-tags"></i> {article.tags}</li>
                  </ul>
                  <h3>
                    <a href={article.link}>{article.title}</a>
                  </h3>
                  <p>
                    Sed rutrum urna id tellus euismod gravida. Praesent placerat, mauris ac pellentesque fringilla, tortor libero condimen.
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="center">
            <a href="#" className="btn btn-default-color">View All News</a>
          </div>
        </div>
      </div>
    );
  }