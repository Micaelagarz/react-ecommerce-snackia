export function ProductForm({ dataForm, handleChange, handleShipment, handleImgChange, loading }) {

    return (
        <form onSubmit={handleShipment}>
            <h3>Add new product</h3>
            <div>
                <label>Product name:</label>
                <input type="text"
                    placeholder="Example: mechanical keyboard"
                    name="name"
                    value={dataForm.name}
                    onChange={handleChange} />
            </div>
            <div>
                <label>Product price:</label>
                <input type="number"
                    placeholder="Example: 150"
                    name="price"
                    value={dataForm.price}
                    onChange={handleChange} />
            </div>
            <div>
                <label>Stock:</label>
                <input type="number"
                    placeholder="Example: 5"
                    name="stock"
                    value={dataForm.stock}
                    onChange={handleChange} />
            </div>
            <div>
                <label>Product image:</label>
                <input type="file"
                    placeholder="https://.."
                    name="image"
                    value={dataForm.image}
                    onChange={handleImgChange} />
            </div>
            <button type="submit"
                disabled={loading}>
                {loading ? "Cargando..." : "Guardar producto"}
            </button>
        </form>

    )
}
