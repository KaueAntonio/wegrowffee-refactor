import Header from "./Header";

import { HomeProvider } from "./Context/Provider";
import Content from "./Content";

const Home = () => {
  return (
    <HomeProvider>
      <Header />
      <Content />
    </HomeProvider>
  );
};

export default Home;
