import { getSettings } from "@/lib/sanity/client";
import Footer from "@/components/footer";
import { urlForImage } from "@/lib/sanity/image";
import Navbar from "@/components/navbar";

async function sharedMetaData(params) {
  const settings = await getSettings();

  return {
    title: {
      default:
        "Patentes Del Software - Blog de tecnología y desarrollo de software",
      template: "%s | PDS"
    },
    description:
      "Patentes Del Software - Blog de tecnología y desarrollo de software",
    keywords: ["Next.js", "Patentes", "Software", "Blog", "Tecnología"],
    authors: [{ name: "Owen" }],
    canonical: settings?.url,
    openGraph: {
      images: [
        {
          url:
            "/img/opengraph.jpg",
          width: 800,
          height: 600
        }
      ]
    },
    twitter: {
      title: settings?.title || "Patentes Del Software",
      card: "summary_large_image"
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export async function generateMetadata({ params }) {
  return await sharedMetaData(params);
}

export default async function Layout({ children, params }) {
  const settings = await getSettings();
  return (
    <>
      <Navbar {...settings} />

      <div>{children}</div>

      <Footer {...settings} />
    </>
  );
}
// enable revalidate for all pages in this layout
// export const revalidate = 60;
