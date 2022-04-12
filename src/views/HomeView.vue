<template>
  <div class="home">
    <MainPart @onNewCrud="newCrud" :editedElement="editedElement" />
    <CrudList
      v-for="crud in cruds"
      :key="crud.id"
      :item="crud"
      @onEditCrud="handleEditCrud"
      @onDeleteCrud="handleDeletedCrud"
    />
  </div>
</template>

<script>
import MainPart from "@/components/MainPart.vue";
import CrudList from "@/components/CrudList.vue";
import { mapActions } from "vuex";

export default {
  name: "HomeView",
  components: { MainPart, CrudList },

  data() {
    return {
      crudList: [],
      editedElement: {},
    };
  },
  computed: {
    cruds() {
      return this.$store.state.cruds;
    },
  },
  methods: { 
    newCrud(crud) {
      this.$store.dispatch("addCruds", crud);
    },
    handleEditCrud(el) {
      this.editedElement = el;
    },
  },
  mounted() {
    this.$store.dispatch("FetchCruds");
  },
};
</script>
