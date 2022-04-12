<template>
  <div class="home">
    <MainPart :editedElement="editedElement" @edit="editCrud" @create="createCrud" />

    <div v-if="!isLoading" class="cruds-wrapper">
      <CrudList
        v-for="crud in cruds"
        :key="crud.id"
        :item="crud"
        @edit="editedElement = $event"
        @delete="deleteCrud"
      />
    </div>

    <Loader v-else size="md" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Loader from "@/components/Loader"
import MainPart from "@/components/MainPart.vue";
import CrudList from "@/components/CrudList.vue";

export default {
  name: "HomeView",
  components: { MainPart, CrudList, Loader },
  data() {
    return {
      crudList: [],
      editedElement: {},
      isLoading: false
    };
  },
  computed: {
    ...mapState({
      cruds: state => state.cruds
    }),
  },
  methods: {
    ...mapActions({
      add: "addCruds",
      getCruds: "fetchCruds",
      delete: "deleteCrud",
      edit: "editCrud"
    }), 
    async createCrud(crud) {
      this.isLoading = true;

      await this.add(crud);

      this.isLoading = false
    },
    async editCrud(el) {
      this.isLoading = true;

      await this.edit(el);

      this.editedElement = {};
      this.isLoading = false;
    },
    deleteCrud(id) {
      this.delete(id);
    }
  },
  async beforeMount() {
    this.isLoading = true;

    await this.getCruds();

    this.isLoading = false;
  },
};
</script>

<style lang="scss">
.cruds {
  &-wrapper {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
}
</style>