import { compare, multipleToNull } from "../utils/operator";
import cloneDeep from "lodash.clonedeep";

export default {
    namespace: "global",
    state: {
        currentUser: {
            userName: null,
            account: null,
            uuid: null,
            avatar: null
        },
        menuList: []  // 导航菜单
    },
    effects: {},

    reducers: {
        setAttrValue(state, { payload }) {
            return (function multiple(state, newState) {
                let stateChange = state;
                // 用于在不按照state模板的情况下,payload添加属性和属性值的情况下使用
                stateChange = compare(stateChange, newState);
                for (let [key, value] of Object.entries(stateChange)) {
                    // 这里严格判断value是否是对象{},不能使用typeof,原因自己查
                    if (
                        Object.prototype.toString.call(value) === "[object Object]" &&
                        newState[key] !== undefined &&
                        newState[key] !== null
                    ) {
                        stateChange[key] = multiple(value, newState[key]);
                    } else {
                        if (newState[key] !== undefined && newState[key] !== null) {
                            stateChange[key] = newState[key];
                        }
                        if (newState[key] === null) {
                            stateChange[key] = multipleToNull(stateChange[key]);
                        }
                    }
                }
                return stateChange;
            })(cloneDeep(state), payload);
        }
    },

    // 监听
    subscriptions: {
        setup({ dispatch, history }) {
            history.listen(location => { });
        }
    }
};
