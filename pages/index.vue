
<script>
import { ref } from 'vue';

export default {
  setup() {
    const colors = [
      '#ff0000',
      '#00ff00',
      '#0000ff',
      '#ffff00',
      '#00ffff',
      '#ff00ff',
    ];
    const currentColors = ref(['#000000', '#000000']);
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
      const textColor = isLightBackground.value ? 'black' : 'white';
      document.body.style.color = textColor;
    };

    const isLightColor = (color) => {
      const brightness = getBrightness(color);
      return brightness > 127; // Adjust threshold as needed
    };

    const getBrightness = (color) => {
      const hexColor = color.replace('#', '');
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
  <div class=" h-full">
    <div class="container h-screen flex flex-col justify-center max-lg:items-center mx-auto relative">
      <h2 class="text-sm uppercase opacity-60 ">Welcome to my website</h2>
      <h1 class="text-5xl font-mono max-w-4xl max-lg:text-2xl max-lg:max-w-md max-lg:text-center mt-5 leading-[130%]">Leader & Senior Front-end / CREATIVE DEVELOPER Open
        source enthusiast.</h1>
      <div class="flex items-center gap-2 absolute bottom-5 cursor-pointer" @click="changeBackgroundColor">
        <div class="w-11 h-11 bg-orange-400 rounded-[50%] flex items-center transition-all hover:z-10 justify-center">
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="circle delay1"></div>
            <div class="circle delay2"></div>
            <div class="circle delay3"></div>
            <div class="circle delay4"></div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-5 h-5 z-20 relative">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
          </svg>

        </div>
      </div>
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
    transform: scale3d(.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, .95, 1);
  }

  100% {
    transform: scale3d(1, 1, 1);
  }
}

.delay1 {
  animation: waves 2.5s linear infinite;
  animation-delay: .1s;
}

.delay2 {
  animation: waves 2.5s linear .7s infinite;
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
  background-color: #F97316;
  margin: 10px;
  transition: 5s ease;
  position: absolute;
  top: 0px;
}
</style>