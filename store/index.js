  export const state = () => ({
    modalOpen: false,
    ipAddress: '',
    isDetailsLoading: false,
    detailsError: false,
    deviceDetails: []
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
    }
  }

  