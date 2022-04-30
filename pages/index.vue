<template>
  <div class="w-11/12 lg:w-3/4 m-auto my-4">
    <div class="flex flex-col lg:flex-row justify-between my-3">
      <h2 class="text-xl lg:text-3xl font-semibold my-2">
        🐧 Barista Mocha v1.0.4
      </h2>
      <select
        id="pod"
        v-model="pod"
        name="pod"
        class="select select-bordered w-full max-w-xs"
        @change="onChange($event)"
      >
        <option value="M12-POD2">M12-POD2</option>
        <option value="M12-POD3">M12-POD3</option>
        <option value="M12-POD4">M12-POD4</option>
        <option value="M13-POD1">M13-POD1</option>
        <option value="M13-POD2">M13-POD2</option>
        <option value="M13-POD3">M13-POD3</option>
        <option value="M13-POD4">M13-POD4</option>
      </select>
    </div>
    <div class="stats shadow mb-6">
      <div class="stat">
        <div class="stat-title">A1047</div>
        <div class="stat-value text-blue-500">{{ a1047total }}</div>
      </div>

      <div class="stat">
        <div class="stat-title">T17</div>
        <div class="stat-value text-indigo-600">{{ t17total }}</div>
      </div>

      <div class="stat">
        <div class="stat-title">T17+</div>
        <div class="stat-value text-green-500">{{ t17ptotal }}</div>
      </div>

      <div class="stat">
        <div class="stat-title">T19</div>
        <div class="stat-value text-pink-600">{{ t19total }}</div>
      </div>

      <div class="stat">
        <div class="stat-title">S17+</div>
        <div class="stat-value text-yellow-500">{{ s17ptotal }}</div>
      </div>

      <div class="stat">
        <div class="stat-title">S19</div>
        <div class="stat-value text-yellow-700">{{ s19total }}</div>
      </div>
    </div>
    <div class="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
      <Rack
        v-for="rack in racks"
        :key="rack.mac_address"
        :name="rack.name"
        :serial-number="rack.serial_number"
      />
    </div>

    <input
      id="my-modal"
      v-model="modalOpen"
      type="checkbox"
      class="modal-toggle"
    />
    <div class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">{{ ipAddress }}</h3>
        <p v-if="isDetailsLoading" class="text-center">
          <Loading />
          Connecting to device...
        </p>
        <p v-else-if="!isDetailsLoading && !detailsError" class="py-4">
          TH/s Average: {{ deviceDetails.ThsAv }}<br />
          Elapsed: {{ deviceDetails.Elapsed }}<br />
          Temperature: {{ deviceDetails.temperature }}<br />
          Found Blocks: {{ deviceDetails['Found Blocks'] }}<br />
          Getworks: {{ deviceDetails.Getworks }}<br />
          Accepted: {{ deviceDetails.Accepted }}<br />
          Rejected: {{ deviceDetails.Rejected }}<br />
          Hardware Errors: {{ deviceDetails['Hardware Errors'] }}<br />
          Network Blocks: {{ deviceDetails['Network Blocks'] }}<br />
          Difficulty Accepted:
          {{ (deviceDetails['Difficulty Accepted'] * 1).toFixed(2) }}<br />
          Difficulty Rejected:
          {{ (deviceDetails['Difficulty Rejected'] * 1).toFixed(2) }}<br />
          Difficulty Stale:
          {{ (deviceDetails['Difficulty Stale'] * 1).toFixed(2) }}<br />
          Best Share: {{ deviceDetails['Best Share'] }}<br />
          Device Rejected%:
          {{ (deviceDetails['Device Rejected%'] * 1).toFixed(2) }}<br />
          Pool Rejected%: {{ (deviceDetails['Pool Rejected%'] * 1).toFixed(2)
          }}<br />
          Pool Stale%: {{ (deviceDetails['Pool Stale%'] * 1).toFixed(2) }}<br />
          Last getwork: {{ deviceDetails['Last getwork'] }}<br />
        </p>
        <p v-else class="py-4">Cannot connect to device</p>
        <div class="modal-action">
          <label
            class="btn"
            @click="
              () => {
                close()
              }
            "
            >Close</label
          >
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
    ...mapState(['modalOpen', 'ipAddress', 'a1047total', 't17total', 't17ptotal', 't19total', 's17ptotal', 's19total']),
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
      },
    },
    isDetailsLoading: {
      get() {
        return this.$store.state.isDetailsLoading
      },
      set(value) {
        return value
      },
    },
    detailsError: {
      get() {
        return this.$store.state.detailsError
      },
      set(value) {
        return value
      },
    },
    deviceDetails: {
      get() {
        return this.$store.state.deviceDetails
      },
      set(value) {
        return value
      },
    },
    a1047total: {
      get() {
        return this.$store.state.a1047total
      },
      set(value) {
        return value
      },
    },
    t17total: {
      get() {
        return this.$store.state.t17total
      },
      set(value) {
        return value
      },
    },
    t17ptotal: {
      get() {
        return this.$store.state.t17ptotal
      },
      set(value) {
        return value
      },
    },
    t19total: {
      get() {
        return this.$store.state.t19total
      },
      set(value) {
        return value
      },
    },
    s17ptotal: {
      get() {
        return this.$store.state.s17ptotal
      },
      set(value) {
        return value
      },
    },
    s19total: {
      get() {
        return this.$store.state.s19total
      },
      set(value) {
        return value
      },
    },
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
      this.$store.dispatch('clearAllTotal')
      this.racks = await this.loadPodByRack(event.target.value)
    },
    close() {
      this.$store.dispatch('toggleModal')
    },
  },
})
</script>
