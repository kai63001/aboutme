import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
const Header = (props:any) => {
  const router = useRouter();
  return (
    <NextSeo
      title={
        props.title
          ? `${props.title} | Supanat Konprom`
          : "Supanat Konprom"
      }
      description={
        props.des
          ? props.des
          : "Moonsblog post it"
      }
      canonical={`https://kai63001.github.io${router.asPath}`}
      openGraph={{
        type: "website",
        locale: "en_EN",
        title: props.title
          ? `${props.title} | Supanat Konprom`
          : "Supanat Konprom",
        description: props.des
          ? props.des
          : "Moonsblog post it",
        images: [
          {
            url:
              props.image == undefined || props.image.length == 0
                ? "https://kai63001.github.io/main.jpg"
                : props.image,
          },
        ],
        url: `https://kai63001.github.io${router.asPath}`,
        site_name: "wallss",
      }}
      twitter={{
        handle: "@moonsblog",
        site: "@moonsblog",
        cardType: "summary_large_image",
      }}
    />
  );
};

export default Header;