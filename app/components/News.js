// Import Next.js components
import Image from 'next/image';
import Link from 'next/link';

// News Grid Component
const NewsGrid = () => {
  // List of news objects
  const newsData = [
    {
      imageUrl: "http://placehold.it/766x515",
      title: "New Rental Regulations Announced",
      text: "The government has announced new rental regulations effective from next month. Find out how this impacts you.",
      author: "Admin",
      date: "2024-08-08",
    },
    {
      imageUrl: "http://placehold.it/766x515",
      title: "Top 10 Rental Properties in Sydney",
      text: "Explore our list of the top 10 rental properties in Sydney for the month of August.",
      author: "Admin",
      date: "2024-08-07",
    },
    {
      imageUrl: "http://placehold.it/766x515",
      title: "Customer Stories: Finding the Perfect Home",
      text: "Read our customer stories about their journey to finding the perfect home through One Ring Rentals.",
      author: "Admin",
      date: "2024-08-06",
    },
  ];

  return (
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="main col-sm-12">
            <h1 className="section-title">Latest News</h1>
            <div className="grid-style1 clearfix">
              {/* Map over the newsData array to create a NewsCard for each article */}
              {newsData.map((news, index) => (
                <NewsCard
                  key={index}
                  imageUrl={news.imageUrl}
                  title={news.title}
                  text={news.text}
                  author={news.author}
                  date={news.date}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component for displaying individual news articles
const NewsCard = ({ imageUrl, title, text, author, date }) => {
  return (
    <div className="item col-md-4">
      <div className="image">
        <Link href="#">
          <span className="btn btn-default">
            <i className="fa fa-file-o"></i> Read More
          </span>
        </Link>
        {/* Use the Next.js Image component */}
        <Image src={imageUrl} alt={title} width={766} height={515} />
      </div>
      <div className="tag"><i className="fa fa-file-text"></i></div>
      <div className="info-blog">
        <span className="title">{title}</span>
        <span className="text">{text}</span>
        <span className="meta">
          <span className="author">
            <i className="fa fa-user"></i> {author}
          </span>
          <span className="date">
            <i className="fa fa-clock-o"></i> {date}
          </span>
        </span>
      </div>
    </div>
  );
};

// Export the NewsGrid component as default
export default NewsGrid;
