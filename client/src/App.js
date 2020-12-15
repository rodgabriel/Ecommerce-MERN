import { Container } from "react-bootstrap";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Header />
            <main className="py-3">
                <Container>
                    <h1>WELCOME TO THE SHOP</h1>
                </Container>
            </main>
            <Footer />
        </>
    );
}

export default App;
