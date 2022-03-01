import "semantic-ui-css/semantic.min.css";
import "../styles/globals.css";

import Footer from "../components/Footer";
import Top from "../components/Top";
import Gnb from "../components/Gnb";

function MyApp({ Component, pageProps }) {
  return (
    <div className="wrap">
      <Top />
      <Gnb />
      <Component {...pageProps} />
      <Footer />

      <style jsx>
        {`
          .wrap {
            width: 100%;
            max-width: 1000px;
            padding: 20px;
            margin: auto;
          }
        `}
      </style>
    </div>
  );
}

export default MyApp;

/* 
  props로 전달받은 Component : 현재 page
  pageProps : data fetching 메서드를 통해 가져온 초기 객체
*/
