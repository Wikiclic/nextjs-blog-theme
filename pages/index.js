import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />
      <main className="w-full">
       <p><a href="https://wikiclic.com/">Wikiclic.com</a> est un site de tutoriels informatiques qui couvre une vari&eacute;t&eacute; de sujets li&eacute;s &agrave; l'informatique, tels que <a href="https://wikiclic.com/category/windows-10/">Windows 10</a> et <a href="https://wikiclic.com/category/windows-11/">Windows 11</a>, les r&eacute;seaux sociaux, la s&eacute;curit&eacute; informatique, la maintenance informatique, les logiciels et bien plus encore.</p>
<p>Les tutoriels propos&eacute;s sur Wikiclic.com sont con&ccedil;us pour aider les utilisateurs &agrave; comprendre et &agrave; ma&icirc;triser des concepts informatiques complexes, afin qu'ils puissent tirer le meilleur parti de leur ordinateur et de leurs p&eacute;riph&eacute;riques. Les tutoriels sont r&eacute;dig&eacute;s de mani&egrave;re claire et concise, et sont accompagn&eacute;s de <a href="https://wikiclic.com/capture-decran/">captures d'&eacute;cran</a> et de vid&eacute;os pour une meilleure compr&eacute;hension.</p>
<p>Les tutoriels sur Windows 10 et Windows 11 couvrent une large gamme de sujets, tels que la personnalisation de l'interface utilisateur, l'installation de nouveaux logiciels, la gestion des fichiers et des dossiers, la mise &agrave; jour du syst&egrave;me d'exploitation et bien plus encore. Les tutoriels sur les r&eacute;seaux sociaux aident les utilisateurs &agrave; mieux comprendre l'utilisation des plateformes de r&eacute;seaux sociaux telles que Facebook, Twitter, Instagram, LinkedIn, etc.</p>
<p>En plus, le site propose &eacute;galement des tutoriels sur la s&eacute;curit&eacute; informatique pour aider les utilisateurs &agrave; prot&eacute;ger leurs ordinateurs et leurs donn&eacute;es contre les menaces en ligne telles que les virus, les logiciels malveillants et les attaques de phishing. Les tutoriels sur <a href="https://wikiclic.com/category/maintenance-informatique/">la maintenance informatique </a>aident les utilisateurs &agrave; maintenir leur ordinateur en bon &eacute;tat de fonctionnement en effectuant des t&acirc;ches telles que la suppression des fichiers inutiles, la d&eacute;fragmentation du disque dur et la mise &agrave; jour des pilotes.</p>
<p>En r&eacute;sum&eacute;, Wikiclic.com est <a href="https://wikiclic.com/category/logitheque/">un site incontournable</a> pour tous les utilisateurs d'ordinateurs qui cherchent &agrave; am&eacute;liorer leurs connaissances en informatique et &agrave; r&eacute;soudre des probl&egrave;mes informatiques courants.</p>
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
