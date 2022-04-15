<template>
  <div class="w-11/12 lg:w-3/4 m-auto my-4">
    <div class="flex flex-col lg:flex-row justify-between my-3">
      <h2 class="text-xl lg:text-3xl font-semibold my-2">🐧 Barista Mocha v1.0.4</h2>
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
    <div class="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
      <Rack v-for="rack in racks" :key="rack.mac_address" :name="rack.name" :serial-number="rack.serial_number" />
    </div>

    <input id="my-modal" v-model="modalOpen" type="checkbox" class="modal-toggle">
    <div class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">{{ipAddress}}</h3>
        <p v-if="isDetailsLoading" class="text-center">
          <Loading />
          Connecting to device...
        </p>
        <p v-else-if="!isDetailsLoading && !detailsError" class="py-4">
          Total Hashrate: 0.000<br/>
          Temperature: 0.000<br/>
          Uptime: 0.000<br/>
        </p>
        <p v-else class="py-4">
          Cannot connect to device
        </p>
        <div class="modal-action">
          <label class="btn" @click="() => { close() }">Close</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      racks: [] as any,
      pod: '',
    }
  },
  computed: {
    ...mapState(['modalOpen', 'ipAddress']),
    modalOpen: {
      get() {
        return this.$store.state.modalOpen
      },
      set(value) {
        return value
      },
    },
    ipAddress: {
      get() {
        return this.$store.state.ipAddress
      },
      set(value) {
        return value
      }
    },
    isDetailsLoading: {
      get() {
        return this.$store.state.isDetailsLoading
      },
      set(value) {
        return value
      }
    },
    detailsError: {
      get() {
        return this.$store.state.detailsError
      },
      set(value) {
        return value
      }
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
    },
    close() {
      this.$store.dispatch('toggleModal')
    }
  }
})
</script>