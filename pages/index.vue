<template>
  <div class="w-3/4 m-auto my-2">
    <h2 class="text-3xl font-semibold">M12-POD2</h2>
    <div class="grid grid-cols-3 gap-4">
      <Rack v-for="rack in racks" :key="rack.mac_address" :name="rack.name" :serial-number="rack.serial_number" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      racks: [] as any
    }
  },
  async mounted() {
    this.racks = await this.loadPodByRack('M12-POD2')
  },
  methods: {
    async loadPodByRack(rack: string) {
      const response = await this.$axios.get(`/racks/${rack}`)
      console.log(response.data)
      return response.data
    }
  }
})
</script>