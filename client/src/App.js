import { Container } from "react-bootstrap";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";
//pages
import HomePage from "./pages/HomePage";

function App() {
    return (
        <>
            <Header />
            <main className="py-3">
                <Container>
                    <HomePage />
                </Container>
            </main>
            <Footer />
        </>
    );
}

export default App;
