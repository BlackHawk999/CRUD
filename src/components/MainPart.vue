<template>
  <div class="main">
    <Navbar />
    <form class="main-form" @submit.prevent="submit">
      <vs-input
        required
        label="Title"
        warn
        shadow
        border
        v-model="name"
        placeholder="Title"
      />
      <vs-input
        required
        label="Description"
        warn
        shadow
        border
        v-model="description"
        placeholder="Description"
      />
      <vs-button color="#FFA500" line-origin="left" type="line">
        {{ editedMode ? "Save" : "Add" }}
      </vs-button>
    </form>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: { Navbar },
  props: {
    editedElement: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      name: "",
      description: "",
    };
  },
  computed: {
    editedMode() {
      if (Object.keys(this.editedElement).length > 0) {
        this.name = this.editedElement.name;
        this.description = this.editedElement.description;
        return true;
      } 
      return false;
    },
  },
  methods: {
    async submit() {
      if (this.editedMode) {
        this.$emit('edit', {
          id: this.editedElement.id,
          name: this.name,
          description: this.description,
        });
      } else {
        this.$emit("create", {
          id: `crud_${Math.random() * 100}`,
          name: this.name,
          description: this.description,
        });
      }
      this.name = "";
      this.description = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0;

  &-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>
