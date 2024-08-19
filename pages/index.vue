<script lang="ts" setup>
import {gsap} from "gsap";

onMounted(() => {
  gsap.set("body", {
    height: "100vh",
    overflow: "hidden",
  });
  let animation = gsap.timeline({delay: 1.5});
  animation
      .to("#first", {
        left: "20%",
        top: "20%",
        filter: "blur(45px)",
        background:
            "conic-gradient(from 180deg at 50% 50%,#16abff33 0deg,#0885ff33 55deg,#54d6ff33 120deg,#0071ff33 160deg, transparent 360deg)",
        width: "480px",
        borderRadius: "50%",
        height: "360px",
      }) .to(
      "#second",
      {
        right: "20%",
        top: "50%",
        filter: "blur(25px)",
        background:
            "conic-gradient(from 180deg at 50% 50%, rgba(187, 2, 2, 0.2) 0deg, rgba(255, 65, 8, 0.2) 55deg, rgba(209, 0, 0, 0.2) 120deg, rgba(255, 71, 0, 0.2) 160deg, rgb(255 0 0 / 42%) 360deg)",
        width: "480px",
        borderRadius: "70%",
        height: "260px",
        onComplete: () => {
          gsap.to(".target", {
            top: 0,
            scaleY: 9,
            ease: "power4.out",
            delay: 0.5,
            stagger: {
              amount: 0.4,
            },
            onComplete: () => {
              gsap.to("body", {
                height: "100%",
                overflow: "auto",
                ease: "none",
                onComplete: () => {
                  gsap.to("#creator", {
                    opacity: 1,
                  })
                },
              });
            },
          });
        },
      },
      "-=0.5"
  );
})
</script>

<template>
  <div class="h-full">
    <NuxtImg
        class="fixed top-0 left-0 w-full h-full object-cover opacity-30"
        src="/share/bg-intro.svg"
        alt=""
    />
    <div
        class="h-screen w-full relative overflow-hidden"
    >

      <div class="container flex flex-col justify-center h-screen relative max-lg:items-center mx-auto">
        <div id="first" class="intro-circle1"></div>
        <div id="second" class="intro-circle2"></div>
        <div class="intro-name">
          <h3>
            <span class="target">a</span>
            <span class="target">l</span>
            <span class="target">i</span>
            <span> </span>
            <span class="target">k</span>
            <span class="target">h</span>
            <span class="target">a</span>
            <span class="target">l</span>
            <span class="target">o</span>
            <span class="target">u</span>
            <span class="target">f</span>
          </h3>
          <h2>
            <span  class="target">I</span>
            <span class="target"> </span>
            <span class="target">A</span>
            <span class="target">M </span>
            <span class="yellow target">creative</span>
            <span class="target"> D</span>
            <span class="target">E</span>
            <span class="target">V</span>
            <span class="target">E</span>
            <span class="target">L</span>
            <span class="target">O</span>
            <span class="target">P</span>
            <span class="target">E</span>
            <span class="target">R</span>
          </h2>
        </div>
      </div>

    </div>
    <Creator id="creator" class="-mt-40 opacity-0 relative" :textColor="'black'"/>
    <Worked class="relative"/>
    <Projects class="relative"/>
  </div>
</template>

<style scoped>

.intro-circle1 {
  position: absolute;
  width: 0px;
  height: 0px;
  background: #000;
}

.intro-circle2 {
  position: absolute;
  width: 0;
  height: 0;
  background: #000;
}

.intro-name {
  position: relative;
}

.intro-name h3 {
  font-size: 36px;
  text-transform: uppercase;
  overflow: hidden;
  text-align: center;
}

.intro-name h3 span {
  position: relative;
  top: 100px;
}

.intro-name h2 {
  text-transform: uppercase;
  overflow: hidden;
  font-size: 26px;
  line-height: 26px;
  text-align: center;
}

.intro-name h2 span {
  position: relative;
  top: 100px;
}

.intro-name h2 .yellow {
  color: rgb(22, 171, 255);
}
</style>

<style>

body {
  transition: background 0.5s ease-in-out;
  color: white;
  min-height: 100vh;
  font-family: system-ui,
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  Roboto,
  Oxygen,
  Ubuntu,
  Cantarell,
  "Open Sans",
  "Helvetica Neue",
  sans-serif;
}

body.light-text {
  color: black;
}

.delay1 {
  animation: waves 2.5s linear infinite;
  animation-delay: 0.1s;
}

.delay2 {
  animation: waves 2.5s linear 0.7s infinite;
}

.delay3 {
  animation: waves 2.5s linear 1.3s infinite;
}

.delay4 {
  animation: waves 2.5s linear 1.9s infinite;
}

.svg-box {
  position: relative;
  z-index: 10;
  animation: bloop 1s infinite;
}

.circle {
  width: 20px;
  height: 20px;
  z-index: -1;
  display: block;
  border-radius: 50%;
  background-color: #f97316;
  margin: 10px;
  transition: 5s ease;
  position: absolute;
  top: 0px;
}
</style>
