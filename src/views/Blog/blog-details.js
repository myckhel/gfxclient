import React from 'react'
import Layout from "../../components/Views/Layout";
import PageHeader from "../../components/Views/Home/PageHeader";
import BlogDetails from "../../components/Views/Home/BlogDetails";
import Footer from "../../components/Views/Home/Footer";

const BlogDetailPage = () => (
  <Layout>
    <PageHeader title="Blog Details" />
    <BlogDetails />
    <Footer />
  </Layout>
)

export default BlogDetailPage;
