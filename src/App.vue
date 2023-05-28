<script setup>

</script>

<template>
  <div>
    <div
      class="absolute top-0 left-0 right-0 mx-[5vw] mt-[5vh] sm:mt-[7.5vh] flex items-center justify-between py-3 px-5 xl:py-4 xl:px-7 xl:text-2xl 3xl:py-6 3xl:px-10 3xl:text-3xl text-xl font-light 3xl:p-8">
      <router-link to="/work"
        class="text-center my-2 flex items-center justify-center xl:text-xl text-base font-bold text-black relative uppercase before:transition-all after:transition-all"
        id="home"> work</router-link>
      <router-link to="/"
        class="text-center my-2 flex items-center justify-center xl:text-xl text-base font-bold text-black relative uppercase before:transition-all after:transition-all"
        id="home"> <img src="./assets/logoasma.jpg"></router-link>
      <router-link to="/contact"
        class="text-center my-2 flex items-center justify-center xl:text-xl text-base font-bold uppercase text-black relative before:transition-all after:transition-all"
        id="home">contact</router-link>
    </div>
    <router-view class="mx-[5vw] mt-40 sm:mt-44 md:mt-48 lg:mt-40 xl:mt-44 2xl:mt-40 3xl:mt-60 w-auto"></router-view>
  </div>

  <footer class="footer footer-center fixed bottom-0 w-full p-5 bg-black text-white text-sm md:text-lg ">
    <div class="text-center">
      <p>
        Portfolio MMI © 2023 -
        <a class="font-semibold" href="mailto:essabbarasma17@gmail.com">Asma Es-sabbar</a>
      </p>
    </div>
  </footer>
</template>

<style>
.noise::before {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  content: "";
  opacity: 0.05;
  pointer-events: none;
  background: url(./assets/noise.gif);
}

#home::before {
  content: "";
  width: 130%;
  background: #000000;
  height: 3px;
  position: absolute;
  top: -30%;
  left: -15%;
  transform: translate(30%);
  opacity: 0;

}

#home::after {
  content: "";
  width: 130%;
  background: #000000;
  height: 3px;
  position: absolute;
  bottom: -30%;
  left: -15%;
  transform: translate(-30%);
  opacity: 0;
}

#home:hover::before {
  transform: translate(0%);
  opacity: 100%;
}

#home:hover::after {
  transform: translate(0%);
  opacity: 100%;
}
</style>
