import { useState } from "react";
import { ProductForm } from "./ProductForm";

const FormContainer = () => {

    const [dataForm, setDataForm] = useState({
        name: "",
        price: 0,
        stock: 0,
    });

    const [imgFile, setImgFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDataForm({
            ...dataForm,
            [name]: value
        });
    }

    const handleShipment = async (e) => {
        e.preventDefault();
        console.log('Sending the following data to the API...', dataForm);

        // We verify that the user had selected an image
        if (!imgFile) {
            alert("Please, select an image for the product.")
            return;
        }

        setLoading(true);

        // Logic for uploading the image to Imgbb
        const apiKey = "d3c4158e058fe73cf1a47e57bc2fe35d";
        const formData = new FormData();
        formData.append("image", imgFile);

        try {
            console.log("Uploading img to Imgbb...");
            const responseImgbb = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
                method: 'POST',
                body: formData,
            });

            const dataImgbb = await responseImgbb.json();

            if (dataImgbb.success) {
                console.log("Image uploaded successfully. URL:", dataImgbb.data.url);

                // We combine the image URL with the rest of the form data
                const completeProduct = {
                    ...dataForm,
                    // We add the obtained URL
                    urlImg: dataImgbb.data.url
                };

                console.log("Sending product data to the API: ", completeProduct);
                // Here we would include the fetch call to our API

            } else {
                throw new Error("The image upload to Imgbb failed.");
            }


        } catch (error) {
            console.error("An error occurred:", error);
            alert("An error occurred while creating the product. Please try again.");
        } finally {
            setLoading(false);
        }

    };

    const handleImgChange = (e) => {
        setImgFile(e.target.files[0]);
    }

    return (
        <ProductForm
            dataForm={dataForm}
            handleChange={handleChange}
            handleShipment={handleShipment}
            handleImgChange={handleImgChange}
            loading={loading} />

    );



}

export default FormContainer;
