<template>
    <div class="cards">

        <div class="card space-x-10">
            <div class="content space-y-5">
                <h1 class="text-3xl font-bold tracking-widest">
                    This Ribbon
                </h1>
                <p class="italic">
                    A company founded in 2024, dedicated to free and open source projects.
                </p>
            </div>
            <div class="image">
                <img src="/icon.png" alt="">
            </div>
        </div>

        <div class="card space-x-10">
            <div class="content space-y-5">
                <h1 class="text-3xl font-bold tracking-widest">
                    Software
                </h1>
                <p class="italic">
                    A company founded in 2024, dedicated to free and open source projects.
                </p>
            </div>
            <div class="image">
                <img src="/icon.png" alt="">
            </div>
        </div>

        <div class="card space-x-10">
            <div class="content space-y-5">
                <h1 class="text-3xl font-bold tracking-widest">
                    Hardware
                </h1>
                <p class="italic">
                    A company founded in 2024, dedicated to free and open source projects.
                </p>
            </div>
            <div class="image">
                <img src="/icon.png" alt="">
            </div>
        </div>

        <div class="card space-x-10">
            <div class="content space-y-5">
                <h1 class="text-3xl font-bold tracking-widest">
                    Space
                </h1>
                <p class="italic">
                    A company founded in 2024, dedicated to free and open source projects.
                </p>
            </div>
            <div class="image">
                <img src="/icon.png" alt="">
            </div>
        </div>

    </div>
    
</template>
  
<style>
.card{
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    margin-left: 1rem;
    margin-right: 1rem;
    height: 30rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    background-image: linear-gradient(to top, #fff2f1 0%, #ffffff 100%);
    border-radius: 3rem;
}
@media only screen and (max-width: 600px) {
  .card {
    flex-direction: column;
    width: 10rem;
    
  }
}

.image {
    width: 23rem;
}


</style>