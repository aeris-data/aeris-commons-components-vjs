function registerVueComponents(Vue, components) {
    for (let component in components) {
      if (components[component].vueComponent && !components[component].isCustomElement) {
        Vue.component(components[component].vueComponent.name, components[component].vueComponent);
      }
    }
  }
  
  function registerStore(store, components) {
    components.forEach(component => (component.vueComponent.store = store));
  }
  
  export default {
    registerVueComponents,
    registerCustomElements,
    registerStore
  };