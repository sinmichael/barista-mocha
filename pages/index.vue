<template>
  <div class="w-3/4 m-auto my-4">
    <div class="flex flex-row justify-between">
      <h2 class="text-3xl font-semibold my-2">🐧 Barista Mocha v1.0.4</h2>
      <select id="pod" v-model="pod" name="pod" class="select select-bordered w-full max-w-xs" @change="onChange($event)">
        <option value="M12-POD2">M12-POD2</option>
        <option value="M12-POD3">M12-POD3</option>
        <option value="M12-POD4">M12-POD4</option>
        <option value="M13-POD1">M13-POD1</option>
        <option value="M13-POD2">M13-POD2</option>
        <option value="M13-POD3">M13-POD3</option>
        <option value="M13-POD4">M13-POD4</option>
      </select>
    </div>
    <div class="grid grid-cols-1 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
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
      racks: [] as any,
      pod: '',
    }
  },
  async mounted() {
    // this.racks = await this.loadPodByRack(this.pod)
  },
  methods: {
    async loadPodByRack(rack: string) {
      this.racks = [] as any
      const response = await this.$axios.get(`/racks/${rack}`)
      return response.data
    },
    async onChange(event: { target: { value: any } }) {
      this.racks = await this.loadPodByRack(event.target.value)
    }
  }
})
</script>