import React from 'react';
import Layout from "./template/Layout";
import {BrowserRouter as Router} from "react-router-dom";
import Header from "./components/Header";
import Skills from "./components/Skills";

const Home = () => {
    return (
        <Router>
            <Layout>
                <Header/>
                <Skills/>
            </Layout>
        </Router>

    );
};

export default Home;