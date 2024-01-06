<script>
import { ref } from "vue";

export default {
  setup() {
    const colors = [
      "#ff0000",
      "#00ff00",
      "#0000ff",
      "#ffff00",
      "#00ffff",
      "#ff00ff",
    ];
    const currentColors = ref(["#000000", "#000000"]);
    const isLightBackground = ref(false);

    const changeBackgroundColor = () => {
      const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
      const randomColor2 = colors[Math.floor(Math.random() * colors.length)];
      currentColors.value = [randomColor1, randomColor2];
      document.body.style.background = `linear-gradient(to bottom right, ${randomColor1}, ${randomColor2})`;

      // Check if the selected colors are light
      const isLight1 = isLightColor(randomColor1);
      const isLight2 = isLightColor(randomColor2);
      isLightBackground.value = isLight1 || isLight2;

      // Set text color based on background color
      const textColor = isLightBackground.value ? "black" : "white";
      document.body.style.color = textColor;
    };

    const isLightColor = (color) => {
      const brightness = getBrightness(color);
      return brightness > 127; // Adjust threshold as needed
    };

    const getBrightness = (color) => {
      const hexColor = color.replace("#", "");
      const r = parseInt(hexColor.substr(0, 2), 16);
      const g = parseInt(hexColor.substr(2, 2), 16);
      const b = parseInt(hexColor.substr(4, 2), 16);
      return (r * 299 + g * 587 + b * 114) / 1000;
    };

    return {
      currentColors,
      isLightBackground,
      changeBackgroundColor,
    };
  },
};
</script>

<template>
  <div class="h-full">
    <div
      class="container h-screen flex flex-col justify-center max-lg:items-center mx-auto relative"
    >
      <h1
        class="text-7xl max-w-xl font-sans uppercase mx-auto text-center font-normal max-w-6xl max-lg:text-2xl max-lg:max-w-md max-lg:text-center mt-5 leading-[130%]"
      >
        Hey, I'm <span class="line-through">Ali Khalouf</span>,
        <strong>A-li Khalouf</strong>
      </h1>
      <h2 class="text-sm text-center uppercase text-gray-400">
        Building
        <strong><NuxtLink to="https://namask.xyz" class="hover:underline hover:text-white">namask</NuxtLink></strong>
      </h2>
    </div>
    <Creator :textColor="isLightBackground ? 'black' : 'white'" />
    <Worked />
    <Projects />
  </div>
</template>

<style>
body {
  transition: background 0.5s ease-in-out;
  color: white;
  min-height: 100vh;
  font-family:
    system-ui,
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

@keyframes waves {
  0% {
    transform: scale(1);
    opacity: 1;
  }

  100% {
    transform: scale(4);
    opacity: 0;
  }
}

@keyframes bloop {
  0% {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  100% {
    transform: scale3d(1, 1, 1);
  }
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
