import Head from "next/head";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import classes from "../styles/Home.module.css";
import Sidebar from "../components/Sidebar/Sidebar";

type HomePageProps = {
  changeTheme: () => void;
};

const Landing: React.FC<HomePageProps> = ({}) => {
  return (
    <div className={classes.container}>
      <Head>
        <>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
          <title>Shankar Sawant - Portfolio</title>
        </>
      </Head>
      <div className={classes.content}>
        <Header />
        <Home />
      </div>
      <div className={classes.sidebar}>
        <Sidebar />
      </div>
    </div>
  );
};

export default Landing;
