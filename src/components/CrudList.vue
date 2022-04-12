<template>
  <div class="crud">
    <div class="crud-first-wrapper">
      <h4 class="crud-title">
        {{ item.name }}
      </h4>
      <p class="crud-description">
        {{ item.description }}
      </p>
    </div>
    <vs-button @click="editCrud"> Edit </vs-button>
  </div>
</template>

<script>
export default {
  name: "crud-list",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    editCrud() {
      this.$emit("onEditCrud", this.item);
    },
  },
};
</script>

<style lang="scss" scoped>
.crud {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid rgb(51, 49, 49);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 15, 0.24) 0px 3px 8px;

  &-first-wrapper {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &-title {
    font-family: "Courier New", Courier, monospace;
    font-size: 15px;
    margin: 0;
  }

  &-description {
    font-family: "Courier New", Courier, monospace;
    font-size: 15px;
    margin: 0;
  }
}
</style>
