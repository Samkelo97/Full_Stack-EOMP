<template>
  <div class="about">
    <div class="paragraph-box">
      <p>Welcome to Sneaker Sync Shoe Store! We're your ultimate destination for the latest and most stylish footwear.
        With a passion for sneakers and a dedication to fashion, we curate a diverse collection that caters to every taste
        and style. <br> <br>Our team is committed to providing you with top-notch customer service, ensuring you find the
        perfect pair that syncs seamlessly with your personality and lifestyle. Whether you're a trendsetter or a classic
        enthusiast, Sneaker Sync is here to help you step up your shoe game. Explore our selection and walk confidently
        with the hottest kicks on the market.</p>
  
      <!-- <div class="about-logo"><h1><big>SNEAKER<span>SYNC</span></big></h1>
      <p>Step In Sync, Stride In Style</p></div> -->
    </div>    
    <div class="row">
        <div class="col-4">
          <a to="/"><img class="image1a" src="https://i.postimg.cc/sXHy5dtJ/black-leather-sports-shoe-with-undone-shoelace-generated-by-ai.jpg" alt="pic1"></a>
        </div>
        <div class="col-4">
          <a to="/"><img class="image1a" src="https://i.postimg.cc/fLkW6p1B/3ee899d91708ae692e70ade13209b1cf.jpg" alt="pic2"></a>
        </div>
        <div class="col-4">
          <a to="/"><img class="image1a" src="https://i.postimg.cc/pVQ16qPN/Best-Classic-Sneakers-FB.jpg" alt="pic3"></a>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.about-logo{
  background-color: grey;
  text-align: center;
  color: black;
  text-decoration: none;
  align-content: center;
  color: blue;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bolder;
  font: bolder;
  padding-bottom: 30px;
}
span{
  color: white;
}
.row{
  margin-top: 30px;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding:5px;
}
.image1a{
  height: 200px;
  width: 200px;
}
.about {
  background-image: url('https://i.postimg.cc/g2nbvTYz/dark-storage-with-shelves-many-forms-creating-different-shoes-boots.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 900px;
}

p {
  color: black;
  text-align: center;
  opacity: 100%;
}

.paragraph-box {
  height: 550px;
  width: 80%;
  opacity: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-top: 50px;
  font-family: cursive;
  background: rgb(203, 209, 204);
  text-align: justify;
  margin-top: 80px;
  padding: 60px;
}</style>
