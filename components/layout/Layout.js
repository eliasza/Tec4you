import Head from 'next/head'
import Header from '../layout/header'
import Footer from './footerSite'

export default function Layout({children, href}){


    return(
        <>
        <Head>
            <title>Covid</title>
            <meta name="description" content="Relatório da Covid" />
            <meta name="description" content="Desenvolvido por Ezano."></meta>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header></Header>
        <main className="container mb-3 mt-4">{children}</main>
        <Footer></Footer>
        </>
    );
}