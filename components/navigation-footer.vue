<script>

</script>

<template>
    <footer class=" bg-rose-800 text-stone-50">
        <div class="container flex flex-row justify-around ">
            <div class="left flex flex-col mt-20 space-y-5">
                <h1 class="text-3xl font-bold tracking-widest">
                    <a href="/">This Ribbon</a>
                </h1>
                <input class=" bg-rose-200 rounded-full p-1 pl-5 text-black w-52" v-model="search_item" placeholder="search ... " />
                <li class="flex justify-center align-middle items-center space-x-5 ">
                    <ul>
                        <a href="https://github.com/This-Ribbon-Space" target=”_blank” ><img class="logo" src="/github.png" alt="github"></a>
                    </ul>
                    <ul>
                        <a href="/" target=”_blank”><img class="logo" src="/twitter.png" alt="twitter"></a>
                    </ul>
                    <ul></ul>
                </li>
            </div>
            <div class="middle flex flex-col mt-20">
                <h2 class="text-xl font-semibold">Pages</h2>
                <li class="mt-3">
                    <a href="/software"><ul>Software</ul></a>
                    <a href="/hardware"><ul>Hardware</ul></a>
                    <a href="/license"><ul>License</ul></a>
                    <a href="/space"><ul>Space</ul></a>
                </li>
            </div>
            <div class="right flex flex-col mt-20">
                <li>
                    <h2 class="text-xl font-semibold">Support Us</h2>
                    <ul>> patreon</ul>
                    <ul>> buy me a coffee</ul>
                </li>
            </div>
            
        </div>
        <div class="copyright">
            <p class=" text-center">
                © 2024 This Ribbon, All rights reserved.
            </p>
        </div>
    </footer>   
</template>

<style scoped>
.container{
    margin-left: 2rem;
}
footer {
    height: 25rem;
}
.copyright {
    font-style: italic;
    margin-top: 8rem;
}
.logo {
    width: 2rem;
}

</style>