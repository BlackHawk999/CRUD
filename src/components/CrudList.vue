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
    <div class="crud-button-wrapper">
      <vs-button @click="editCrud"> Edit </vs-button>
      <vs-button danger @click="deleteCrud"> Delete </vs-button>
    </div>
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
      this.$emit("edit", this.item);
    },
    deleteCrud() {
      this.$emit("delete", this.item.id)
    }
  },
};
</script>

<style lang="scss" scoped>
.crud {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid rgb(51, 49, 49);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 15, 0.24) 0px 3px 8px;

  &-first-wrapper {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &-button-wrapper {
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
