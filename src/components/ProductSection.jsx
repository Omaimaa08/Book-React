import React from 'react';
import ProductCard from './ProductCard';
import { IoBookSharp } from 'react-icons/io5'; // Use 'io5' here

export default function ProductSection(props) {
  return (
    <div className="container my-5">
      <h2 className="text-center my-5">{props.sectionTitle}<IoBookSharp size={50} color='blue'/></h2>
      <div className="row gap-5">
        <ProductCard brandName="THE SILENT PATIENT" collectionName="Fiction" Categoryname="Novels"/>
        <ProductCard brandName="It Ends With Us" collectionName="Fiction" Categoryname="Novels"/>
        <ProductCard brandName="It Starts with Us" collectionName="Fiction" Categoryname="Novels"/>
        <ProductCard brandName="The Girl on the Train" collectionName="Fiction" Categoryname="Novels"/>
        <ProductCard brandName="The Edge of Everything" collectionName="Fiction" Categoryname="Novels"/>
        <ProductCard brandName="Ugly Love" collectionName="Fiction" Categoryname="Novels"/>
        
        
    
      </div>
    </div>
  );
}

