<template>
  <nav class=" bg-rose-400">
    <div class="left flex items-center space-x-3 ml-5">
      <!-- <img src="/icon.png" alt="brand icon"> -->
      <h1 class="text-3xl font-black tracking-wider ">
        <a href="/">This Ribbon</a> 
      </h1>
    </div>
    <div class="middle flex space-x-5 mr-5">
      <h3><a href="/software">Software</a></h3>
      <h3><a href="/hardware">Hardware</a></h3>
      <h3><a href="/license">License</a></h3>
      <h3><a href="/space">Space</a></h3>
    </div>
    <!-- <div class="right">

    </div> -->
  </nav>
</template>

<style>

nav{
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
}
/* img {
  width: 3rem;
} */
.drop-down{
  display: none;
}

</style>