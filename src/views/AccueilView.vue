<template>
  <div>
    <div class="noise"></div>
    <div class="flex justify-end mr-60 mt-40">
      <ligne />
    </div>
    <div>
      <h1 class="md:text-6xl text-3xl font-extrabold text-right uppercase m-2 mb-12 md:m-12 mr-48 ">Portfolio</h1>
      <p class="text-right font-semibold md:mr-10 mr-48 md:-mt-10 mt-10"> Asma Es-sabbar <br />
        Développeuse </p>
    </div>

    <div>
      <p class="text-left mt-36 md:ml-28 font-extrabold"> MMI Montbléliard <br />
        2023
      </p>
    </div>
  </div>
</template>

<script>
import ligne from '../components/ligne.vue'

export default {
  components: {
    ligne

  }
}

</script>