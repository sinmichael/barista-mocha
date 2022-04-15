  export const state = () => ({
    modalOpen: false,
    ipAddress: '',
    isDetailsLoading: false,
    detailsError: false,
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
      console.log(`toggleIsDetailsLoading: ${toggle}`)
      this.commit('toggleIsDetailsLoading', toggle)
    },
    setDetailsError(context, error) {
      this.commit('setDetailsError', error)
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
    }
  }

  