import { useState, useEffect } from "react";
import { ProductForm } from "./ProductForm";
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';
import { db } from "../../firebase/config";
import { useForm } from "react-hook-form"; // 1. Importamos el hook

const FormContainer = ({ onProductAdded, productToEdit }) => {
    // 2. Extraemos las herramientas de React Hook Form
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [imgFile, setImgFile] = useState(null);
    const [loading, setLoading] = useState(false);

    // 3. Poblamos los datos usando reset()
    useEffect(() => {
        if (productToEdit) {
            reset(productToEdit);
        } else {
            reset({
                title: '', price: '', stock: '', highlightTag: '',
                category: '', thumbnail: '', description: ''
            });
        }
    }, [productToEdit, reset]);

    const handleImgChange = (e) => {
        setImgFile(e.target.files[0]);
    }

    // 4. Tu función ahora recibe la "data" ya procesada y validada
    const handleShipment = async (data) => {
        // Validamos la imagen (esto se mantiene igual porque es un archivo suelto)
        if (!productToEdit && !imgFile) {
            alert("Please, select an image for the product.");
            return;
        }

        setLoading(true);

        try {
            let finalImageUrl = productToEdit ? productToEdit.thumbnail : "";

            if (imgFile) {
                const apiKey = "d3c4158e058fe73cf1a47e57bc2fe35d";
                const formData = new FormData();
                formData.append("image", imgFile);

                const responseImgbb = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
                    method: 'POST',
                    body: formData,
                });

                const dataImgbb = await responseImgbb.json();
                if (!dataImgbb.success) throw new Error("The image upload failed.");
                finalImageUrl = dataImgbb.data.url;
            }

            // 5. Armamos el producto usando 'data' en lugar de 'dataForm'
            const completeProduct = {
                ...data,
                title: data.title.trim(),
                price: parseFloat(data.price),
                stock: parseInt(data.stock),
                thumbnail: finalImageUrl,
                description: data.description.trim(),
            };

            if (productToEdit) {
                const docRef = doc(db, "productos dietetica", productToEdit.id);
                await updateDoc(docRef, completeProduct);
                alert("Product updated successfully.");
            } else {
                const productCollection = collection(db, 'productos dietetica');
                await addDoc(productCollection, completeProduct);
                alert("Product saved correctly.");
            }

            if (onProductAdded) onProductAdded();

            reset(); // 6. Limpiamos el formulario con un solo método
            setImgFile(null);

        } catch (error) {
            console.error("An error occurred:", error);
            alert("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <ProductForm
            register={register} // Pasamos register al componente presentacional
            handleSubmit={handleSubmit(handleShipment)} // Envolvemos tu función
            errors={errors} // Pasamos los errores si querés mostrarlos en la UI
            handleImgChange={handleImgChange}
            loading={loading}
            isEditing={!!productToEdit}
            productToEdit={productToEdit}
            imgFile={imgFile}

        />
    );
}

export default FormContainer;