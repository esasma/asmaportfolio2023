<template>
  <div class="flex min-h-screen items-center justify-center">
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      <div
        class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div class="h-96 w-72">
          <img
            class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
            src="../assets/fond2.jpg" alt="fond en typographie" />
        </div>
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black ">
        </div>

        <div
          class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 class="font-dmserif text-3xl font-bold text-white mb-16">E-CAR VTC</h1>
          <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Ecar vtc est un projet crée en Wordpress.</p>
          <router-link to="/ecarvtcwork">
            <button
              class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">En
              Savoir Plus</button>
          </router-link>
        </div>

      </div>
      <div
        class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div class="h-96 w-72">
          <img
            class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
            src="../assets/fond2.jpg" alt="fond en typographie" />
        </div>
        <div
          class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
        </div>
        <div
          class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 class="font-dmserif text-3xl font-bold text-white mb-16">WEREPLAY</h1>
          <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Ecar vtc est un projet crée en Wordpress.</p>
          <button
            class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">En
            Savoir plus</button>
        </div>
      </div>
      <div
        class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div class="h-96 w-72">
          <img
            class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
            src="../assets/fond2.jpg" alt="fond en typographie" />
        </div>
        <div
          class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
        </div>
        <div
          class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 class="font-dmserif text-3xl font-bold text-white mb-10">TIC TAC</h1>
          <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Titac est un projet de montre personnalisé crée en Vuejs & Tailwind. </p>
          <button
            class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">En
            Savoir Plus</button>
        </div>
      </div>
    </div>



  </div>
</template>


<script>

function Refresh() {
  setTimeout(() => {
    document.location.reload();
  }, 1);
}
</script>



