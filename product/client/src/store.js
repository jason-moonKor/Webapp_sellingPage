import {createStore} from "vuex";

import persistedstate from "vuex-persistedstate"; //새로고침해도 로그인정보가 남아있게해주는 import

const store = createStore({
	state() {
		return {
			user: {}
		};
	},
	mutations: {
		user(state, data) {
			state.user = data;
		}
	},
	plugins: [
		//새로고침해도 로그인이 남아있게해주는 plugins
		persistedstate({
			path: ["user"]
		})
	]
});

export default store;
