import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BoatsList from './components/BoatsList';
import BoatDetail from './components/BoatDetail';
import { ApolloProvider } from '@apollo/client';
import client from './apollo-client';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<BoatsList />} />
          <Route path="/boat/:id" element={<BoatDetail />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
