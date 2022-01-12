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
          : "Hi, I’m Supanat Konprom. Nice to meet you. Student Software Engineer Experience building web, mobile applications and games with other cool libraries and frameworks."
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
          : "Hi, I’m Supanat Konprom. Nice to meet you. Student Software Engineer Experience building web, mobile applications and games with other cool libraries and frameworks.",
        images: [
          {
            url:
              props.image == undefined || props.image.length == 0
                ? "https://kai63001.github.io/main.jpg"
                : props.image,
          },
        ],
        url: `https://kai63001.github.io${router.asPath}`,
        site_name: "Supanat Portfolio",
      }}
      twitter={{
        handle: "@kai63001",
        site: "@kai63001",
        cardType: "summary_large_image",
      }}
    />
  );
};

export default Header;