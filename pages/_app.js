import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

/* 
  props로 전달받은 Component : 현재 page
  pageProps : data fetching 메서드를 통해 가져온 초기 객체
*/
