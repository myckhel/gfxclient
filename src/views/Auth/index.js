import React from 'react';

import Layout from "../../components/Views/Layout";
import Auth from "../../components/Views/Auth";
import PageHeader from "../../components/Views/Home/PageHeader";
import Footer from "../../components/Views/Home/Footer";

export default () => {
  return (
    <Layout pageTitle="Zimed | Blog">
        <PageHeader title="Login" />
        <Auth />
        <Footer />
    </Layout>
  )
}
