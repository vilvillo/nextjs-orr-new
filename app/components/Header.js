import Link from 'next/link';
import Image from 'next/image';

function App() {
  return (
    <div id="header">
      <Header />
    </div>
  );
}

function Header() {
  return (
    <header id="header">
      {/* Top Bar */}
      <div id="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <ul id="top-buttons">
                <li>
                  <a href="#"><i className="fa fa-sign-in"></i> Login</a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-pencil-square-o"></i> Register</a>
                </li>
                <li className="divider"></li>
                <li>
                  <div className="language-switcher">
                    <span><i className="fa fa-globe"></i> English</span>
                    <ul>
                      <li><a href="#">Deutsch</a></li>
                      <li><a href="#">Español</a></li>
                      <li><a href="#">Français</a></li>
                      <li><a href="#">Português</a></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div id="nav-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              {/* Logo */}
              <Link href="/" className="nav-logo">
                <Image src="/images/logo.png" alt="One Ring Rentals" width={200} height={80} />
              </Link>

              {/* Main Menu */}
              <nav className="navbar">
                <button id="nav-mobile-btn">
                  <i className="fa fa-bars"></i>
                </button>

                <ul className="nav navbar-nav">
                  <li><Link href="#">Find a Rental</Link></li>
                  <li><Link href="#">List your rental</Link></li>
                  <li><Link href="/regions">Regions</Link></li>
                  <li><Link href="#">Travel Guides</Link></li>
                  <li><Link href="#">About Us</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default App;
