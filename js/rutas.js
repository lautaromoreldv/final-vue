const inicio = { template: `<inicio-component/>`, name:'inicio' 
}
const galeria = {template: `<galeria-component/>`, name:"galeria"
}
const tienda = {template: `<tienda-component/>`, name:"tienda"
}
const contacto = {template: `<contacto-component/>`, name:"contacto"
}

const routes = [
  { path: '/', component: inicio },
  { path: '/galeria', component: galeria },
  { path: '/tienda', component: tienda },
  { path: '/contacto', component: contacto },
  { path: '*', redirect: '/' }

]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router,

}).$mount('#inicio')

