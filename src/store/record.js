import firebase from "firebase/compat";

export default {
    actions: {
        async createRecord ({commit, dispatch}, record) {
            try {
                const uid = await dispatch('getUid')
                return await firebase.database().ref(`/users/${uid}/records`).push(record)
            }catch (e) {
                commit('setError', e)
                throw e
            }
        }
    }
}