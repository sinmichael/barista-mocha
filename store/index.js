  export const state = () => ({
    modalOpen: false,
    ipAddress: '',
    isDetailsLoading: false,
    detailsError: false,
    deviceDetails: [],
    a1047total: 0,
    t17total: 0,
    t17ptotal: 0,
    t19total: 0,
    s17ptotal: 0,
    s19total: 0,
  })
  
  export const getters = {
    modalOpen(state) {
      return state.modalOpen
    },
    ipAddress(state) {
      return state.ipAddress
    },
    isDetailsLoading(state) {
      return state.isDetailsLoading
    },
    detailsError(state) {
      return state.detailsError
    },
    deviceDetails(state) {
      return state.deviceDetails
    },
    a1047total(state) {
      return state.a1047total
    }
  }
  
  export const actions = {
    toggleModal(context) {
      this.commit('toggleModal')
    },
    closeModal(context) {
      this.commit('closeModal')
    },
    setIpAddress(context, ipAddress) {
      this.commit('setIpAddress', ipAddress)
    },
    toggleIsDetailsLoading(context, toggle) {
      this.commit('toggleIsDetailsLoading', toggle)
    },
    setDetailsError(context, error) {
      this.commit('setDetailsError', error)
    },
    setDeviceDetails(context, details) {
      this.commit('setDeviceDetails', details)
    },
    setA1047total(context, value) {
      this.commit('setA1047total', value)
    },
    setT17total(context, value) {
      this.commit('setT17total', value)
    },
    setT17Ptotal(context, value) {
      this.commit('setT17Ptotal', value)
    },
    setT19total(context, value) {
      this.commit('setT19total', value)
    },
    setS17Ptotal(context, value) {
      this.commit('setS17Ptotal', value)
    },
    setS19total(context, value) {
      this.commit('setS19total', value)
    },
    clearAllTotal(context) {
      this.commit('clearAllTotal')
    }
  }
  
  export const mutations = {
    toggleModal(state) {
      state.modalOpen = !state.modalOpen
    },
    closeModal(state) {
      state.modalOpen = false
    },
    setIpAddress(state, ipAddress) {
      state.ipAddress = ipAddress
    },
    toggleIsDetailsLoading(state, toggle) {
      state.isDetailsLoading = toggle
    },
    setDetailsError(state, error) {
      state.detailsError = error
    },
    setDeviceDetails(state, details) {
      state.deviceDetails = details
    },
    setA1047total(state, value) {
      state.a1047total = state.a1047total + value
    },
    setT17total(state, value) {
      state.t17total = state.t17total + value
    },
    setT17Ptotal(state, value) {
      state.t17ptotal = state.t17ptotal + value
    },
    setT19total(state, value) {
      state.t19total = state.t19total + value
    },
    setS17Ptotal(state, value) {
      state.s17ptotal = state.s17ptotal + value
    },
    setS19total(state, value) {
      state.s19total = state.s19total + value
    },
    clearAllTotal(state) {
      state.a1047total = 0
      state.t17total = 0
      state.t17ptotal = 0
      state.t19total = 0
      state.s17ptotal = 0
      state.s19total = 0
    }
  }

  