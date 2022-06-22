import { Formik, Form, Field } from "formik";
import axios from "axios";


const ProductForm = ({products, setProducts}) => {

    const handleAddProduct = (values) => {
        axios.post("/products", values)
            .then(response => {
                setProducts([...products, response.data]);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return(
        <div className="form">
          Enter product details:
            <Formik
              initialValues={{ name: "", price: "", image_url: "" }}
              onSubmit={(values) => handleAddProduct(values)}
              enableReinitialize={true}
            >
              <Form className="fields">
                <Field
                  name="name"
                  type="text"
                  className="field"
                  placeholder="name"
                ></Field>
                <Field
                  name="price"
                  type="number"
                  className="field"
                  placeholder="price"
                ></Field>
                <Field
                  name="image_url"
                  type="text"
                  className="field"
                  placeholder="image url"
                ></Field>
                <button type="submit">Add Product</button>
              </Form>
            </Formik>
        </div>
    )
}

export default ProductForm;