import React, { useState } from "react";
import DefaultNavbar from "../Default_Navbar";
import Footer from "../Footer";
import { useDispatch } from "react-redux";
import { createProductThunk } from "../../redux/productSlice";
import FormData from "form-data";
import { ToastContainer, toast } from "react-toastify";

const ProductForm = () => {
  const fd = new FormData();
  const dispatch = useDispatch();

  const [sendImage, setSendImage] = useState(null);
  const [imageInArr, setImageInArr] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");

  const handleSendImage = (e, index) => {
    setImageInArr(URL.createObjectURL(e.target.files[0]));
    setSendImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("name", name);
    fd.append("category", category);
    fd.append("price", price);
    fd.append("stock", stock);
    fd.append("description", description);

    if (sendImage) {
      fd.append("file", sendImage);
    }

    // Log FormData content
    for (const pair of fd.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    dispatch(createProductThunk(fd))
      .then((res) => {
        console.log(res);
        if (res.payload.data.success) {
          toast.success(`${res.payload.data.msg}`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });

          setName("");
          setCategory("");
          setStock("");
          setPrice("");
          setDescription("");
        }
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err.response;
      });
  };

  return (
    <>
      {/* <DefaultNavbar /> */}
      <div className="max-w-md mx-auto p-7 bg-white shadow-md rounded">
        <h2 className="text-2xl font-bold text-center mb-4">Add Product</h2>

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="grid grid-cols-1 gap-2">
            <div className="mb-3">
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

            <div className="mb-3">
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

            <div className="mb-3">
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
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="form-input mt-1 block w-full"
                required
              />
            </div>

            <div className="mb-3">
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

            <div className="mb-3">
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
              Upload Photos of Product:
            </label>

            <input
              type="file"
              name="file"
              accept="image/png, image/jpg, image/jpeg"
              onChange={(e) => {
                handleSendImage(e);
              }}
            />
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
      {/* <Footer /> */}
    </>
  );
};

export default ProductForm;
