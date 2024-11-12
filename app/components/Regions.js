// Import necessary modules from Next.js
import Image from 'next/image';
import Link from 'next/link';

// Main App Component
function App() {
  return (
    <>
      <RegionsInAustralia />
    </>
  );
}

// Component for displaying individual regions
const RegionCard = ({ name, location, imageUrl }) => {
  return (
    <div className="item col-md-4">
      <div className="image">
        <Link href="#">
          <h3>{name}</h3>
          <span className="location">{location}</span>
        </Link>
        <Image src={imageUrl} alt={name} width={760} height={670} />
      </div>
    </div>
  );
};

// Main Regions Component
const RegionsInAustralia = () => {
  // List of region objects
  const regions = [
    { name: 'Sydney', location: 'New South Wales', imageUrl: 'http://placehold.it/760x670' },
    { name: 'Melbourne', location: 'Victoria', imageUrl: 'http://placehold.it/760x670' },
    { name: 'Brisbane', location: 'Queensland', imageUrl: 'http://placehold.it/760x670' },
    { name: 'Perth', location: 'Western Australia', imageUrl: 'http://placehold.it/760x670' },
    { name: 'Adelaide', location: 'South Australia', imageUrl: 'http://placehold.it/760x670' },
    { name: 'Hobart', location: 'Tasmania', imageUrl: 'http://placehold.it/766x515' }
  ];

  return (
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="main col-sm-12">
            <h1 className="section-title">Regions in Australia</h1>
            <div className="grid-style1 clearfix">
              {/* Map over regions array to create a RegionCard for each */}
              {regions.map((region, index) => (
                <RegionCard
                  key={index}
                  name={region.name}
                  location={region.location}
                  imageUrl={region.imageUrl}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;