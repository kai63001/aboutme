import Header from "./Header";
import Head from 'next/head';

const Layout = (props: any) => {
  return (
    <>
      <main className="parallax">
        {props.children}
      </main>
    </>
  );
};

export default Layout;