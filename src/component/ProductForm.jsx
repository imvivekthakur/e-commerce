import React, { useState } from "react";
import DefaultNavbar from "./Default_Navbar";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { createProductThunk } from "../redux/productSlice";

const ProductForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    images: Array(5).fill(null),
  });

  // const handleImageUpload = (e, index) => {
  //   const files = e.target.files;

  //   if (files && files.length > 0) {
  //     const updatedProductImages = [...product.image];
  //     updatedProductImages[index] = URL.createObjectURL(files[0]);

  //     setProduct((prevProduct) => ({
  //       ...prevProduct,
  //       image: updatedProductImages,
  //     }));
  //   }
  // };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  // const handleFileChange = (e, index) => {
  //   const newImages = [...formData.images];
  //   newImages[index] = e.target.files[0];
  //   setFormData({
  //     ...formData,
  //     images: newImages,
  //   });
  // };

  const handleFileChange = (e, index) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      const newImages = [...formData.images];
      newImages[index] = files[0];

      // Update state with the new images
      setFormData({
        ...formData,
        images: newImages,
      });

      // Optional: Create a preview of the selected image
      const reader = new FileReader();
      reader.onload = (e) => {
        const previewImage = e.target.result;
        console.log(`Image ${index + 1} Preview:`, previewImage);
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("price", formData.price);
    formDataToSend.append("stock", formData.stock);
    formDataToSend.append("category", formData.category);

    for (let i = 0; i < formData.images.length; i++) {
      formDataToSend.append("images", formData.images[i]);

      console.log(`Image ${i + 1}:`, formData.images[i]);
    }
    formDataToSend.forEach((value, key) => {
      console.log(`FormData key: ${key}, value: ${value}`);
    });

    dispatch(createProductThunk(formDataToSend))
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err.response;
      });
  };

  return (
    <>
      <DefaultNavbar />
      <div className="max-w-md mx-auto mt-8 p-8 bg-white shadow-md rounded">
        <h2 className="text-2xl font-bold text-center mb-4">Add Product</h2>

        <form onSubmit={handleSubmit} enctype="multipart/form-data">
          <div className="grid grid-cols-1 gap-4">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Product Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="form-input mt-1 block w-full"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-600"
              >
                Description:
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="form-textarea mt-1 block w-full"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Category:
              </label>
              <input
                type="text"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="form-input mt-1 block w-full"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-600"
              >
                Price:
              </label>
              <input
                type="text"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className="form-input mt-1 block w-full"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="stock"
                className="block text-sm font-medium text-gray-600"
              >
                Stock:
              </label>
              <input
                type="text"
                id="stock"
                name="stock"
                value={formData.stock}
                onChange={handleInputChange}
                className="form-input mt-1 block w-full"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="photos"
              className="block text-sm font-medium text-gray-600"
            >
              Photos (Upload or provide URLs):
            </label>
            {/* add phtot upload logic here */}

            {/* Input for each photo */}
            {formData.images.map((image, index) => (
              <div key={index} className="mb-2">
                {image && (
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`Product Image ${index + 1}`}
                    className="w-20 h-20 object-cover rounded mr-2"
                  />
                )}
                <input
                  type="file"
                  accept="image/*"
                  name={`image-${index + 1}`}
                  onChange={(e) => handleFileChange(e, index)}
                  className="form-input mt-1 block w-full"
                />
              </div>
            ))}
          </div>

          <button
            type="submit"
            className="btn-primary w-full p-4 border rounded-lg hover:bg-primary hover:text-white"
          >
            Add Product
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ProductForm;
