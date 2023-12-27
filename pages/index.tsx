import React from "react";

import { Cards, Footer, Header, Main, Button } from "@components";

const Home: React.FC = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}
        >
            <Button type="primary">Hello There</Button>
            <Header />
            <Main />
            <Cards />
            <Footer />
        </div>
    );
};

export default Home;
