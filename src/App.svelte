<script lang="ts">
  import NavBar from "./lib/NavBar.svelte";
</script>

<NavBar />
<main class="mt-32 md:mt-36 mx-5 md:mx-10">
  <h1 class="text-5xl md:text-7xl mb-3 font-firaCodeBold">Hey, I'm Hamza</h1>
  <h2 class="text-sky-500 text-3xl md:text-4xl font-openSansBold">
    Front-End Developer
  </h2>
  <p class="my-4 md:w-[45rem] leading-8 font-poppinsMed text-xl">
    I'm passionate about the dynamic world of web development, with a particular
    focus on front-end technologies. In this ever-evolving field, I find myself
    in a constant state of learning, eagerly embracing new technologies and
    techniques to stay at the forefront of web development trends. I'm dedicated
    to turning ideas into beautifully functional web solutions. My mission is to
    bring creativity and innovation to every project I undertake while enjoying
    the thrill of coding along the way.
  </p>
  <a href="https://github.com/Hamza12700?tab=repositories">
    <button class="btn w-full sm:w-auto mb-5 sm:mr-3" type="button"
      >Projects</button
    >
  </a>
  <a
    class="transition hidden sm:inline mx-2 ease-in-out hover:text-sky-500"
    target="_blank"
    href="https://github.com/hamza12700/"
  >
    <i class="fa-brands mx-1 fa-github-alt fa-xl" />
  </a>
  <a
    class="transition hidden sm:inline mx-2 ease-in-out hover:text-sky-500"
    target="_blank"
    href="https://x.com/Hamza_Rash1d"
  >
    <i class="pr-1 fa-brands mx-1 fa-x-twitter fa-xl" />
  </a>
</main>
