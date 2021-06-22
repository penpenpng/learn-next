import "../styles/global.css";

export default function App({ Component, pageProps }) {
  console.log("App() has called");
  console.log(Component, pageProps);

  return <Component {...pageProps} />;
}
