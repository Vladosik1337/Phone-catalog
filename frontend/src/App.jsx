import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AllProductsScreen } from './screens/AllProductsScreen/';
import { ProductScreen } from './screens/ProductScreen/';
import Container from 'react-bootstrap/Container';
import { HomeScreen } from './screens/HomeScreen/';
import { Header } from './components/Header/';
import { Footer } from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <main>
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/product/:id" element={<ProductScreen />} />
              <Route path="/products/" element={<AllProductsScreen />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
