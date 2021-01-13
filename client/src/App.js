import { BrowserRouter as Router, Route } from "react-router-dom";

import { Container } from "react-bootstrap";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";
//pages
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

function App() {
    return (
        <Router>
            <Header />
            <main className="py-3">
                <Container>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/product/:id" component={ProductPage} />
                    <Route path="/cart/:id?" component={CartPage} />
                </Container>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
