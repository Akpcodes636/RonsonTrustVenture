"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";

const SpareProductPageContent = () => {
 const searchParams = useSearchParams();
 const name = searchParams.get("name");
 const partNumber = searchParams.get("partNumber");
 const image = searchParams.get("image");
 const category = searchParams.get("category");
 const price = searchParams.get("price");
 const description = searchParams.get("description");
 const compatibility = searchParams.get("compatibility")?.split(",") || [];
 const stroke = searchParams.get("stroke");
 const bore = searchParams.get("bore");
 const maxPressure = searchParams.get("maxPressure");
 const material = searchParams.get("material");

 if (!name) {
   return <h1 className="text-center text-2xl font-bold text-[#E72418]">Product not found</h1>;
 }

 return (
   <>
     <Header />
     <div className="bg-[#1E2A38] min-h-screen flex justify-center items-center py-52">
       <div className="container mx-auto px-4">
         <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
             
             {/* Product Image */}
             <div className="relative">
               <Image
                 src={image || "/image/manitowoc.jpgs"} 
                 alt={name} 
                 className="w-full h-[500px] object-cover rounded-lg transition-transform transform hover:scale-105" 
                 width={500}
                 height={500}
               />
             </div>

             {/* Product Details */}
             <div>
               <h1 className="text-3xl font-bold text-[#1E2A38]">{name}</h1>
               <p className="text-[#797979] text-sm mt-1">Part Number: <span className="font-semibold">{partNumber}</span></p>
               <p className="text-[#E72418] text-lg font-medium mt-2">{category}</p>
               <p className="text-2xl font-bold text-[#E72418] mt-4">${price}</p>
               <p className="text-[#1E2A38] leading-relaxed mt-4">{description}</p>

               {/* Compatibility */}
               <div className="mt-6">
                 <h3 className="text-lg font-semibold text-[#1E2A38]">Compatible Models</h3>
                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
                   {compatibility.map((model, index) => (
                     <span key={index} className="bg-[#1E2A38] text-white px-3 py-1 text-sm rounded-lg text-center">
                       {model}
                     </span>
                   ))}
                 </div>
               </div>

               {/* Specifications */}
               <div className="mt-6">
                 <h3 className="text-lg font-semibold text-[#1E2A38]">Specifications</h3>
                 <table className="w-full mt-2 border border-[#C8CED2]">
                   <tbody>
                     {[{label: "Stroke", value: stroke}, {label: "Bore", value: bore}, {label: "Max Pressure", value: maxPressure}, {label: "Material", value: material}].map((spec, index) => (
                       <tr key={index} className={`border-b border-[#C8CED2] ${index % 2 ? "bg-gray-100" : ""}`}>
                         <td className="py-2 px-4 font-semibold text-[#1E2A38]">{spec.label}</td>
                         <td className="py-2 px-4 text-[#797979]">{spec.value}</td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>

               {/* Add to Cart Button */}
               <button className="mt-8 w-full bg-[#E72418] text-white py-3 px-6 rounded-lg hover:bg-[#B61A12] transition-all">
                 Add to Cart
               </button>
             </div>
           </div>
         </div>
       </div>
     </div>
     <Footer />
   </>
 );
};

const SpareProductPage = () => (
 <Suspense fallback={<div className="text-center text-2xl font-bold text-[#E72418]">Loading...</div>}>
   <SpareProductPageContent />
 </Suspense>
);

export default SpareProductPage;
