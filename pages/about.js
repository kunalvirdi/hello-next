import Head from "next/head";
import Layout from "../components/layout";
import {getUsers} from "../utils/fetch";


const About = ({data}) =>
{
    return (
        <Layout>
            <Head>
                <title>About Page</title>
            </Head>
            {console.log(data)}
            <h1>Welcome to About</h1>
        </Layout>

    )
}

export async function getStaticProps(){
    const data=await getUsers()

    return{
        props:{data}
    }
}

export default About