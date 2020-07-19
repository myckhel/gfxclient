import React from 'react'
import Layout from "../../components/Views/Layout";
import Blog from "../../components/Views/Home/Blog";
import PageHeader from "../../components/Views/Home/PageHeader";
import Footer from "../../components/Views/Home/Footer";


const BlogPage = () => (

    <Layout pageTitle="Zimed | Blog">
        <PageHeader title="Blog" />
        <Blog />
        <Footer />
    </Layout>

)

export default BlogPage;
