<template>
    <div class="cards">

        <div class="card1 space-x-10">
            <div class="content space-y-5">
                <h1 class="text-3xl font-bold tracking-widest">
                    This Ribbon
                </h1>
                <p class="italic">
                    A organization founded in 2024, dedicated to free and open source projects
                </p>
            </div>
            <div class="image">
                <img src="/icon.png" alt="">
            </div>
        </div>

    </div>
    
</template>
  
<style>
.card1{
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    justify-content: center;
    margin-left: 3rem;
    margin-right: 3rem;
    height: 25rem;
    
}
@media only screen and (max-width: 600px) {
  .card1 {
    flex-direction: column;
    width: 10rem;
    
  }
}

.image {
    width: 23rem;
}


</style>