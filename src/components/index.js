import gaToast from './gaToast'
import gaLoading from './gaLoading'
const components = { 
    gaToast:{
        type: 'component',
        value:gaToast
    },
    gaLoading:{
        type: 'directive',
        value:gaLoading
    }
};
const install = (Vue, pluginOptions = {}) => { // eslint-disable-line
    Object.keys(components).forEach((key) => {
        Vue.component(key, components[key].value);
        if(components[key].type === 'directive'){
            Vue.use(components[key].value)
        } 
    });
};
export default install;