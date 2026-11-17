import styles from "./ProductForm.module.css";


export function ProductForm({ register, handleSubmit, errors, handleImgChange, loading, isEditing, productToEdit, imgFile }) {

    return (
        <form onSubmit={handleSubmit} noValidate>
            <h3>{isEditing ? "Edit product" : "Add new product"}</h3>

            <div>
                <label>Product name:</label>
                <input type="text"
                    placeholder="Example: mechanical keyboard"
                    {...register("title", {
                        required: {
                            value: true,
                            message: "You must enter a name for the product."
                        },
                        minLength: {
                            value: 2,
                            message: "The title must have at least 2 characters."
                        },
                        maxLength: {
                            value: 80,
                            message: "The title must have a maximum of 80 characters."
                        }
                    })}
                />
                {
                    errors.title && <span style={{ color: 'red', display: 'block' }}>{errors.title.message}</span>
                }
            </div>

            <div>
                <label>Product price:</label>
                <input type="number"
                    placeholder="Example: 150"
                    {...register("price", {
                        required: true,
                        min: {
                            value: 0.01,
                            message: "The price must be greater than 0."
                        }
                    })}
                />
                {errors.price && <span style={{ color: 'red', display: 'block' }}>{errors.price.message}</span>}
            </div>

            <div>
                <label>Stock:</label>
                <input type="number"
                    placeholder="Example: 5"
                    {...register("stock", {
                        required: true,
                    })}
                />
                {errors.stock && <span>You must enter a stock number for the product.</span>}
            </div>

            <div>
                <label>Highlight tag:</label>
                <select
                    {...register("highlightTag")}
                >
                    <option value="">Select a tag...</option>
                    <option value="onSale">On sale</option>
                    <option value="newArrival">New arrival</option>
                    <option value="topSeller">Top seller</option>
                    <option value="none">None</option>
                </select>
            </div>

            <div>
                <label>Category:</label>
                <select
                    {...register("category", {
                        required: {
                            value: true,
                            message: "You must enter a category"
                        }
                    })}
                >
                    <option value="">Select a category...</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Bebidas">Bebidas</option>
                    <option value="Chocolates">Chocolates</option>
                    <option value="Gomitas">Gomitas</option>
                </select>
                {errors.category && <span style={{ color: 'red', display: 'block' }}>{errors.category.message}</span>}
            </div>

            <div>
                <label>Product image:</label>
                <input type="file"
                    onChange={handleImgChange} />

                {isEditing && productToEdit?.thumbnail && (
                    <div>
                        <p>Preview:</p>
                        <img src={productToEdit.thumbnail} alt="Preview" style={{ width: '100px' }} />
                    </div>
                )}

                {imgFile && (
                    <div>
                        <p>{isEditing ? "Image to upload:" : "Preview:"}</p>
                        <img src={URL.createObjectURL(imgFile)}
                            alt="New preview"
                            style={{ width: '100px', borderRadius: '8px', border: '2px solid green' }} />
                    </div>
                )
                }

                {(productToEdit?.thumbnail || imgFile) && (
                    <small style={{ color: 'green' }}>✓ Imagen lista para subir</small>
                )}
            </div>

            <div>
                <label>Description:</label>
                <input type="text"
                    placeholder="Example: High quality snack"
                    {...register("description")}
                />
            </div>

            <button type="submit" disabled={loading}>
                {loading ? "Cargando..." : (isEditing ? "Actualizar producto" : "Guardar producto")}
            </button>
        </form>
    )
}