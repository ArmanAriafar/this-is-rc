//! Required
import "../styles/globals.css";
import "../styles/Font.css";

//! Comps
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";

//! Comp
const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <Navigation />
            <Component {...pageProps} />
            <Footer />
        </>
    );
};

export default MyApp;
