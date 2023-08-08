import React from 'react'
import NavigationBar from './components/NavigationBar'
import ProductSection from './components/ProductSection'
import ContactSection from './components/ContactSection'

function App() {
  return (
    <>
      <NavigationBar companyName="The Readers" ownerName="Omaima" />
      <ProductSection sectionTitle="Fiction Books" />
      <ProductSection sectionTitle="Novels" />
      <ContactSection /> 
    </>
  );
}

export default App;
