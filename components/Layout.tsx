import Header from "./Header";
import Head from 'next/head';

const Layout = (props: any) => {
  return (
    <>
      
      <main className="parallax">
      <Header
        title={props.title}
        des={props.des}
        can={props.can}
        image={props.image}
      />
        {props.children}
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;