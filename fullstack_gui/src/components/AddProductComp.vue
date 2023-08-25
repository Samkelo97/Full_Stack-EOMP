<template>
    <div>
       <div class="management-section">
          <h2>Product Management</h2>
          <div class="product-form">
            <input
              type="text"
              v-model="productForm.prodID"
              style="visibility: hidden; display: none"
            />
            <label>Product Name</label>
            <input type="text" v-model="productForm.prodName" />
            <label>Product Price</label>
            <input type="number" v-model="productForm.amount" />
            <label>Product Stock</label>
            <input type="number" v-model="productForm.quantity" />
            <label>Product Url</label>
            <input type="text" v-model="productForm.prodUrl" />
            <label>Product Category</label>
            <input type="text" v-model="productForm.Category" />
            <button @click="submitProduct">Submit</button>
          </div>
          <table class="product-table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Product Stock</th>
                <th>Product URL</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product.prodID">
                <td>{{ product.prodName }}</td>
                <td>{{ product.amount }}</td>
                <td>{{ product.quantity }}</td>
                <td>{{ product.prodUrl }}</td>
                <td>{{ product.Category }}</td>
                <td>
                  <button @click="editProduct(product)">Edit</button>
                  <button @click="deleteProduct(product.prodID)">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
</template>

<script>
import axios from 'axios';
    export default {
    name: "Products",
    data() {
        return {
            productForm: {
                prodID: "",
                prodName: "",
                amount: "",
                quantity: "",
                prodUrl: "",
                Category: "",
            },
        };
    },
      computed: {
        users() {
            return this.$store.state.users;
        },
        products() {
            return this.$store.state.products;
        },
    },
    methods: {
        async submitUser() {
            try {
                if (this.userForm.userId) {
                    // Update existing user
                    await axios.put(`/api/users/${this.userForm.userId}`, this.userForm);
                    alert("User updated successfully");
                } else {
                    // Add new user
                    await axios.post("/api/users", this.userForm);
                    alert("User added successfully");
                }
                this.resetUserForm();
                this.$store.dispatch("fetchUsers");
            } catch (error) {
                console.error("Error submitting user:", error);
            }
        },
        async submitProduct() {
            try {
                if (this.productForm.prodID) {
                    // Update existing product
                    await axios.put(
                        `/api/products/${this.productForm.prodID}`,
                        this.productForm
                    );
                    alert("Product updated successfully");
                } else {
                    // Add new product
                    await axios.post("/api/products", this.productForm);
                    alert("Product added successfully");
                }
                this.resetProductForm();
                this.$store.dispatch("fetchProducts");
            } catch (error) {
                console.error("Error submitting product:", error);
            }
        },
        resetUserForm() {
            // Reset the user form after successful add/update
            this.userForm.userId = "";
            this.userForm.username = "";
            this.userForm.email = "";
            this.userForm.firstName = "";
            this.userForm.lastName = "";
        },
        resetProductForm() {
            // Reset the product form after successful add/update
            this.productForm.prodID = "";
            this.productForm.prodName = "";
            this.productForm.amount = "";
            this.productForm.quantity = "";
            this.productForm.prodUrl = "";
            this.productForm.Category = "";
        },
        editUser(user) {
            // Populate the user form with user data for editing
            this.userForm.userId = user.userId;
            this.userForm.username = user.username;
            this.userForm.email = user.email;
            this.userForm.firstName = user.firstName;
            this.userForm.lastName = user.lastName;
        },
        editProduct(product) {
            // Populate the product form with product data for editing
            this.productForm.prodID = product.prodID;
            this.productForm.prodName = product.prodName;
            this.productForm.amount = product.amount;
            this.productForm.quantity = product.quantity;
            this.productForm.prodUrl = product.prodUrl;
            this.productForm.Category = product.Category;
        },
        async deleteUser(userId) {
            const confirmed = confirm("Are you sure you want to delete this user?");
            if (confirmed) {
                try {
                    await axios.delete(`/api/users/${userId}`);
                    alert("User deleted successfully");
                    this.$store.dispatch("fetchUsers");
                } catch (error) {
                    console.error("Error deleting user:", error);
                }
            }
        },
        async deleteProduct(prodID) {
            const confirmed = confirm(
                "Are you sure you want to delete this product?"
            );
            if (confirmed) {
                try {
                    await axios.delete(`/api/products/${prodID}`);
                    alert("Product deleted successfully");
                    this.$store.dispatch("fetchProducts");
                } catch (error) {
                    console.error("Error deleting product:", error);
                }
            }
        },
    },
};
</script>
<style scoped>
.management-section {
    margin: 20px;
    padding: 20px;
    border: 1px solid #ddd;
}

.user-form,
.product-form {
    margin-bottom: 20px;
}

input[type="text"],
input[type="number"] {
    width: 100%;
    padding: 10px;
    margin: 5px 0;
}

button {
    padding: 6px 12px;
    background-color: #3490DC;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #2779BD;
}

.user-table,
.product-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

.user-table th,
.user-table td,
.product-table th,
.product-table td {
    padding: 10px;
    border: 1px solid #ddd;
}

/* Style for product images */
.product-table img {
    max-width: 100px;
    height: auto;
    display: block;
    margin: 0 auto;
}</style>