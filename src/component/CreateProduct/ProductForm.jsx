import React, { useState, useEffect } from "react";
import DefaultNavbar from "../Default_Navbar";
import Footer from "../Footer";
import { useDispatch } from "react-redux";
import { createProductThunk } from "../../redux/productSlice";
import FormData from "form-data";
import { ToastContainer, toast } from "react-toastify";

const ProductForm = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [sendImages, setSendImages] = useState(Array(5).fill(null));
  const [imagePreviews, setImagePreviews] = useState(Array(5).fill(null));
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");

  const handleSendImage = (e, index) => {
    const newSendImages = [...sendImages];
    newSendImages[index] = e.target.files[0];
    setSendImages(newSendImages);

    const newImagePreviews = [...imagePreviews];
    newImagePreviews[index] = URL.createObjectURL(e.target.files[0]);
    setImagePreviews(newImagePreviews);
  };

  const handleRemoveImage = (index) => {
    const newSendImages = [...sendImages];
    newSendImages[index] = null;
    setSendImages(newSendImages);

    const newImagePreviews = [...imagePreviews];
    newImagePreviews[index] = null;
    setImagePreviews(newImagePreviews);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (sendImages.some((image) => image === null)) {
      toast.error("Please select all five images.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    const fd = new FormData();
    fd.append("name", name);
    fd.append("category", category);
    fd.append("price", price);
    fd.append("stock", stock);
    fd.append("description", description);

    sendImages.forEach((image, index) => {
      if (image) {
        fd.append("productImages", image);
      }
    });
    console.log(fd);

    dispatch(createProductThunk(fd))
      .then((res) => {
        if (res.payload.data.success) {
          toast.success(`${res.payload.data.msg}`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });

          // Reset form fields
          setName("");
          setCategory("");
          setStock("");
          setPrice("");
          setDescription("");
          setSendImages("");
        } else {
          toast.error(`${res.payload.data.msg}`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
        return res;
      })
      .catch((err) => {
        return err.response;
      });
  };
  return (
    <>
      <DefaultNavbar />
      <div className=" w-auto mx-auto p-7 bg-white shadow-md mt-40  rounded">
        <h2 className="text-2xl font-bold text-center mb-4">Add Product</h2>

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="grid grid-cols-1 gap-2">
            <div className=" mb-3">
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
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-input mt-1 block w-full"
                required
              />
            </div>

            <div className="flex-1 mb-3">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-600"
              >
                Description:
              </label>
              <textarea
                id="description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-textarea mt-1 block w-full"
                required
              />
            </div>

            <div className=" mb-3">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-600"
              >
                Category:
              </label>
              <input
                type="text"
                id="category"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="form-input mt-1 block w-full"
                required
              />
            </div>

            <div className=" mb-3">
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
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="form-input mt-1 block w-full"
                required
              />
            </div>

            <div className=" mb-3">
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
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                className="form-input mt-1 block w-full"
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label
              htmlFor="photos"
              className="block text-sm font-medium text-gray-600"
            >
              Upload Photos of Product (up to 5 images):
            </label>

            <div className="flex flex-wrap">
              {sendImages &&
                sendImages.map((image, index) => (
                  <div key={index} className="mb-3">
                    {imagePreviews[index] && (
                      <img
                        src={imagePreviews[index]}
                        alt={`Preview ${index}`}
                        className="mb-2 w-60 h-60"
                      />
                    )}
                    <input
                      type="file"
                      name={`file${index}`}
                      accept="image/png, image/jpg, image/jpeg"
                      onChange={(e) => handleSendImage(e, index)}
                    />
                  </div>
                ))}
            </div>
          </div>

          <button
            type="submit"
            className="btn-primary w-full p-4 border rounded-lg bg-primary  hover:bg-gray-700 hover:text-white"
          >
            Add Product
          </button>
        </form>
      </div>

      <ToastContainer />
      <Footer />
    </>
  );
};

export default ProductForm;
