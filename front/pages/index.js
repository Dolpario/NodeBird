import React from 'react'
import AppLayout from '../components/AppLayout'
import Head from 'next/head'

const Home = () => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>Index |  노드버드</title>
            </Head>
            <AppLayout>index 페이지</AppLayout>
        </>
    )
}
export default Home