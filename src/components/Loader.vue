<template>
  <div class="loader">
    <div :class="['loader-wrapper', size]">
      <svg
        class="loader__item"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        style="
          margin: auto;
          background: none;
          display: block;
          shape-rendering: auto;
        "
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <path
          fill="none"
          stroke="#49a5eb"
          stroke-width="8"
          stroke-dasharray="42.76482137044271 42.76482137044271"
          d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z"
          stroke-linecap="round"
          style="transform: scale(0.8); transform-origin: 50px 50px"
        >
          <animate
            attributeName="stroke-dashoffset"
            repeatCount="indefinite"
            dur="1.2195121951219512s"
            keyTimes="0;1"
            values="0;256.58892822265625"
          ></animate>
        </path>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "loader",
  props: {
    size: {
      type: String,
      default: "md"
    }
  }
};
</script>

<style lang="scss" scoped>
.loader {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    
    &.sm {
      width: 60px;
      height: 60px;
    }

    &.md {
      width: 100px;
      height: 100px;
    }

    &.lg {
      width: 150px;
      height: 150px;
    }
  }

  &__item {
    width: 100%;
    height: 100%;
  }
}
</style>
