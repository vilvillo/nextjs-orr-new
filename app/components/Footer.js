// components/Footer.js
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
    return (
        <footer id="footer">
            <div id="footer-top" className="container">
                <div className="row">
                    <div className="block col-sm-3">
                        <Link href="/">
                            <Image src="/images/logo.png" alt="One Ring Rentals" width={100} height={50} />
                        </Link>
                        <br /><br />
                        <p>Lorem ipsum dolor sit amet...</p>
                    </div>

                    <div className="block col-sm-3">
                        <h3>Helpful Links</h3>
                        <ul className="footer-links">
                            <li><Link href="#">All rentals</Link></li>
                            <li><Link href="#">List your rental</Link></li>
                            <li><Link href="#">Read our FAQs</Link></li>
                        </ul>
                    </div>

                    <div className="block col-sm-6">
                        <h3>Popular regions</h3>
                        <div className="row">
                            <div className="col-sm-6">
                                <ul className="footer-listings">
                                    {["Rhovanion", "Eriador", "Bay of Belfalas"].map((region, index) => (
                                        <li key={index}>
                                            <div className="image">
                                                <Link href="properties-detail.html">
                                                    <Image src="http://placehold.it/760x670" alt={region} width={760} height={670} />
                                                </Link>
                                            </div>
                                            <p><Link href="properties-detail.html">{region}</Link></p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-sm-6">
                                <ul className="footer-listings">
                                    {["Mordor", "Arnor", "Forlindon"].map((region, index) => (
                                        <li key={index}>
                                            <div className="image">
                                                <Link href="properties-detail.html">
                                                    <Image src="http://placehold.it/760x670" alt={region} width={760} height={670} />
                                                </Link>
                                            </div>
                                            <p><Link href="properties-detail.html">{region}</Link></p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            &copy; 2014 One Ring Rentals
                            <ul className="social-networks">
                                <li><Link href="#"><i className="fa fa-facebook"></i></Link></li>
                                <li><Link href="#"><i className="fa fa-twitter"></i></Link></li>
                                <li><Link href="#"><i className="fa fa-google"></i></Link></li>
                                <li><Link href="#"><i className="fa fa-pinterest"></i></Link></li>
                                <li><Link href="#"><i className="fa fa-youtube"></i></Link></li>
                                <li><Link href="#"><i className="fa fa-rss"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
