import { type NextPage } from "next";
import Head from "next/head";
import { type ReactNode } from "react";
import {
  FaRegEnvelope,
  FaGithubAlt,
  FaLinkedinIn,
  FaBlog,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="mx-auto max-w-md min-h-screen flex justify-center items-center">
      <Head>
        <title>Andrew Hu</title>
        <meta name="description" content="Andrew Hu - Software engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="md:rounded-md w-full px-10 py-14 flex-col justify-start shadow-xl bg-gradient-to-b from-indigo-900">
        <div className="rounded-full w-36 h-36 bg-gradient-to-b from-indigo-400 to-indigo-500 p-1 ">
          <Image
            width={136}
            height={136}
            src="/me.png"
            alt="Andrew Hu Software engineer"
          />
        </div>
        <h1 className="text-slate-50 mt-8 text-4xl">Andrew Hu</h1>
        <h2 className="text-slate-300 mt-7 text-xl">
          Software engineer | Indie hacker
        </h2>
        <p className="mt-14 text-slate-300">
          Passionate software developer proficient in JavaScript, TypeScript,
          React, and Node.js. I am currently building the front-end web
          application at TrustLayer. Previously, I worked at Manulife Hong Kong
          to automate their data pipeline with Express.
        </p>
        <div className="mt-7">
          <a
            href="mailto:hu.lha86@gmail.com"
            className="w-full flex justify-between items-center py-5 px-7 rounded-full text-slate-50 bg-gradient-to-r from-indigo-500 to-indigo-400 font-semibold"
          >
            <span className="block">Contact Me</span>
            <span className="block">
              <FaRegEnvelope />
            </span>
          </a>
        </div>
        <div className="mt-14 border-solid border-slate-300 -mx-10 border-t-2">
          <div className="px-10 mt-14 flex justify-between items-center">
            <SocialLink>
              <a href="https://github.com/andrew-hu368">
                <FaGithubAlt className="w-6 h-6" />
              </a>
            </SocialLink>
            <SocialLink>
              <a href="https://www.linkedin.com/in/hulihao/">
                <FaLinkedinIn className="w-6 h-6" />
              </a>
            </SocialLink>
            <SocialLink>
              <Link href="/blog">
                <FaBlog className="w-6 h-6" />
              </Link>
            </SocialLink>
          </div>
        </div>
      </main>
    </div>
  );
};

const SocialLink = ({ children }: { children: ReactNode }) => {
  return (
    <div className="rounded-full bg-gradient-to-t from-indigo-500 to-indigo-400 w-14 h-14 flex justify-center items-center">
      <div className="bg-slate-900 rounded-full text-slate-50 w-12 h-12 flex justify-center items-center">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Home;
