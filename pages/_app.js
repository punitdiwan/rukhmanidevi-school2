import "../style/style.css";
import "bootstrap/dist/css/bootstrap.css";
import "../style/calender.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import SimpleReactLightbox from "simple-react-lightbox";

function MyApp({ Component, pageProps }) {
  return (
    <SimpleReactLightbox>
      <Component {...pageProps} />
    </SimpleReactLightbox>
  );
}

export default MyApp;
