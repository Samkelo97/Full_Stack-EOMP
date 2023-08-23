<template>
  <div class="about">
    <div class="container text-center">
      <div class="row">
        <div class="col-md-8 bg-white">
          <LogoCompVue/>
          <h5>Our Story</h5>
          <p><small>Welcome to Sneaker Sync Shoe Store! We're your ultimate destination for the latest and most stylish
              footwear.
              With a passion for sneakers and a dedication to fashion, we curate a diverse collection that caters to every
              taste
              and style.</small></p>
          <p><small>Our team is committed to providing you with top-notch customer service, ensuring you find
              the
              perfect pair that syncs seamlessly with your personality and lifestyle. Whether you're a trendsetter or a
              classic
              enthusiast, Sneaker Sync is here to help you step up your shoe game. Explore our selection and walk
              confidently
              with the hottest kicks on the market.</small></p>
          <p><small> At Sneaker Sync, we envision a world where footwear transcends mere utility and becomes an expression
              of individuality, creativity, and culture. Our mission is to curate a diverse and trendsetting collection of
              sneakers that resonates with sneaker enthusiasts, fashion aficionados, and cultural explorers alike. We
              aspire to be more than just a shoe retailer; we strive to be a global hub where style, passion, and
              authenticity converge. Through innovative designs, personalized experiences, and a vibrant community, we aim
              to inspire self-expression and elevate the sneaker culture to new heights. Welcome to Sneaker Sync, where
              every step is a statement of identity and passion.</small></p>
        </div>
        <div class="col-md-4 bg-dark"><img class="image1a"
            src="https://i.postimg.cc/fLkW6p1B/3ee899d91708ae692e70ade13209b1cf.jpg" alt="pic2"><br><br><img class="image1a"
            src="https://i.postimg.cc/pVQ16qPN/Best-Classic-Sneakers-FB.jpg" alt="pic3"><br><br><img class="image1a"
            src="https://i.postimg.cc/sXHy5dtJ/black-leather-sports-shoe-with-undone-shoelace-generated-by-ai.jpg"
            alt="pic1">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LogoCompVue from '../components/LogoComp.vue'
export default {
  components: {
    LogoCompVue
  }
}
</script>

<style scoped>
.col-md-4{
  padding-top:50px ;
}
span {
  color: white;
}

.row {
  margin-top: 30px;
  position: absolute;

  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 5px;
}

.image1a {
  height: 200px;
  width: 200px;
}

.about {
  background-image: url('https://i.postimg.cc/g2nbvTYz/dark-storage-with-shelves-many-forms-creating-different-shoes-boots.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 950px;
}
h5{
  padding-top: 10px;
}
h4 {
  padding: 40px;
}

.container {
  height: 500px;
  width: 500px;
}

p {
  color: black;
  text-align: center;
  opacity: 100%;
  padding: 20px;
  border-left: 2px blue solid;
  border-right: 2px grey solid;
}</style>
