<template>
    <div>
        <iframe class="video" src="https://www.youtube.com/embed/asvML5L7Y0Y?autoplay=1" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
            <div class="prod">
                
            </div>
        <!-- PRODUCTS -->
        <div class="row">
            <div class="col-4" v-for="product in products" :key="product.prodID">
                <div class="card" style="width: 18rem; margin:20px; margin-left: 40px;" >
                    <img :src="product.prodUrl" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ product.prodName }}</h5>
                        <p class="card-text">{{ product.Category }}</p>
                        <h6>R{{product.amount}}</h6>
                        <a href="/singleProduct" class="btn">More Details</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState(['products']), 
    },
    mounted() {
        this.$store.dispatch('fetchProducts');
    },
    methods: {
        editProduct(prodID) {
           
        },
        deleteProduct(prodID) {
            
        },
    },
};
</script>

<style scoped>
.btn{
    background-color: black;
    color: white;
}
.btn:hover{
    background-color:white;
    color: black;
}
.row {
    align-items: center;
    border-top: solid black 3px;
}

.col-4{
    padding: 10px;
    display: flex;
    justify-content: space-around;
}
.card:hover{
    transform: scale(1.1);
    box-shadow: 1px 2px 3px 1px grey;
}
.video {
    width: 100% !important;
    height: 350px;
}
</style>