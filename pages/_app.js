import "../styles/global.css";

export default function App({ Component, pageProps }) {
  // ページが遷移するたびに Component に page component が渡されて App() がコールされるっぽい
  console.log(Component);
  console.log(pageProps);

  return <Component {...pageProps} />;
}
