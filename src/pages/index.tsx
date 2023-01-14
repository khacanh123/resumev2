import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import CurrentPath from "@/components/elements/CurrentPath";
import Title from "@/components/elements/Title";
import ImageSearchBar from "@/components/elements/ImageSearchBar";
// @ts-ignore
import MathJaxRender from "mathjax-anhnk3/src/lib/";
import { Filter } from "@/components/oganisms/ProductCategory/Filter/Filter";
import { ProductList } from "@/components/oganisms/ProductCategory/ProductList";
import data from "./data.json";
import HeaderComponent from "./../components/Header/index";
import IntroComponent from "@/components/Intro";
import WorkExpComponent from "@/components/WorkExp";
import ProjectComponent from "@/components/Project";
import { useEffect } from "react";
import { useRouter } from "next/router";
import TechnicalComponent from "@/components/Technical";
import ContactPage from "@/components/Contact";
export default function Home() {
  const router = useRouter();
  useEffect(() => {
    var url = window.location.href;
    var id = url.substring(url.lastIndexOf("#") + 1);
    console.log(id);

    document.getElementById(`${id}`)?.scrollIntoView({
      behavior: "smooth",
    });
  }, [router.pathname]);
  return (
    <>
      <Head>
        <title>Anh Nguyen Khac</title>
        <meta name="description" content="Anhnk resume" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderComponent />
      <IntroComponent />
      <WorkExpComponent />
      <ProjectComponent />
      <TechnicalComponent />
      <ContactPage />
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <CurrentPath url1="Men" />
      <div className="flex xs:flex-col gap-3">
        <Title />
        <ImageSearchBar />
      </div>
      <div
        className="grid grid-cols-product-category gap-x-4 items-start
    lg:grid-cols-[180px_1fr]
    sm:grid-cols-1
    "
      >
        <Filter productsList={[]} />
        <ProductList productsList={data} />
      </div> */}
    </>
  );
}
