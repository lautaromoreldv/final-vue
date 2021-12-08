Vue.component('queen-consagrado', {
	data:function(){
		return {
			titulo:"Queen consagrado"
			}
		},
	template: '<h3 class="mb-4">{{titulo}}</h3>'
});

Vue.component('queen-en-sus-comienzos',{
	props:['h2_1'],
	template: `<div>
				<h2 class="mt-3 pt-3 pb-4 text-center">{{h2_1}}</h2>
			   </div>`
})

Vue.component('freddie', {
	template: '<h3 class="mb-3">Freddie</h3>'
})

Vue.component('brian', {
	template: '<h3 class="mt-4 mb-3">Brian</h3>'
})

Vue.component('john', {
	template: '<h3 class="mt-4 mb-3">John</h3>'
})

Vue.component('roger', {
	template: '<h3 class="mt-4 mb-3">Roger</h3>'
})

Vue.component('dato-form', {
	data:function(){
		return {
			info:{
				nombre:"",
				apellido:"",
				email:"",
				checkboxes:[],
				comentario:""
				},
		arr:[],
		checkboxes:[]
		}
	} , 
template: `<aside>
<div class="bg-light">
<div class="container">
  <h2 class="pt-4">Formulario de contacto</h2>
  <p class="pt-2 pb-3">Complete el formulario</p>
<div class="row justify-content-center">  
  <div class="col-md-10 col-lg-8">
    
        <form action="datos.html" method="post" enctype="multipart/form-data" name="form">

              <div class="form-group">
                <label for="nombre">Nombre</label>
                <input class="form-control" type="text" name="nombre" id="nombre" placeholder="Escriba su nombre..." autocomplete="off" v-model="info.nombre" required/>
              </div>

              <div class="form-group">
                <label for="apellido">Apellido</label>
                <input class="form-control" type="text" name="apellido" id="apellido" placeholder="Escriba su apellido..." autocomplete="off" v-model="info.apellido" required/>
              </div>

              <div class="form-group">
                <label for="email">E-mail</label>
                <input type="email" class="form-control" name="email" id="email" placeholder="Escriba su e-mail..." autocomplete="off" v-model="info.email" required/>
              </div>

             
              <h3 class="pt-3">Elija cuales fueron para usted los mejores shows</h3>
              <p class="pt-2 pb-3">Al enviar este formulario se sorteran entradas para la próxima presentación de la banda.</p>

              <div class="custom-control custom-checkbox">
              <input type="checkbox" value="Live Killers" v-model="info.checkboxes" class="custom-control-input" id="Live Killers">
              <label class="custom-control-label" for="Live Killers">Live Killers</label>
            </div>

            <div class="custom-control custom-checkbox">
              <input type="checkbox" value="Live Magic" v-model="info.checkboxes" class="custom-control-input" id="Live Magic">
              <label class="custom-control-label" for="Live Magic">Live Magic</label>
            </div>

            <div class="custom-control custom-checkbox">
              <input type="checkbox" value="Live at Wembley '86" v-model="info.checkboxes" class="custom-control-input" id="Live at Wembley">
              <label class="custom-control-label" for="Live at Wembley">Live at Wembley '86</label>
            </div>

            <div class="custom-control custom-checkbox">
              <input type="checkbox" value="Queen on Fire - Live at the Bowl" v-model="info.checkboxes" class="custom-control-input" id="Queen on Fire - Live at the Bowl">
              <label class="custom-control-label" for="Queen on Fire - Live at the Bowl">Queen on Fire - Live at the Bowl</label>
            </div>

            <div class="custom-control custom-checkbox">
              <input type="checkbox" value="Return of the Champions" v-model="info.checkboxes" class="custom-control-input" id="Return of the Champions">
              <label class="custom-control-label" for="Return of the Champions">Return of the Champions</label>
            </div>

            <div class="custom-control custom-checkbox">
              <input type="checkbox" value="Queen Rock Montreal" v-model="info.checkboxes" class="custom-control-input" id="Queen Rock Montreal">
              <label class="custom-control-label" for="Queen Rock Montreal">Queen Rock Montreal</label>
            </div>

            <div class="custom-control custom-checkbox">
              <input type="checkbox" value="Live at the Rainbow '74" v-model="info.checkboxes" class="custom-control-input" id="Live at the Rainbow">
              <label class="custom-control-label" for="Live at the Rainbow">Live at the Rainbow '74</label>
            </div>

            <div class="custom-control custom-checkbox">
              <input type="checkbox" value="A Night At The Odeon - Queen Live At Hammersmith" v-model="info.checkboxes" class="custom-control-input" id="A night At The Odeon - Queen Live At Hammersmith">
              <label class="custom-control-label" for="A night At The Odeon - Queen Live At Hammersmith">A Night At The Odeon - Queen Live At Hammersmith</label>
            </div>

              <div class="form-group mt-4">
                <label for="comentario">Deje su comentario</label>
                <textarea class="form-control" name="comentario" id="comentario" cols="30" rows="5" v-model="info.comentario"></textarea>
              </div>
              <h3>Si los datos son correctos presioná el botón Enviar</h3>

			<div>
				<ul class="chequear">
					<li>Tu nombre y apellido son: <div class="pl-2 pb-1 mb-2">{{info.nombre | capitalize({ onlyFirstLetter: true })}} {{info.apellido | capitalize({ onlyFirstLetter: true })}}</div></li>
					<li>Tu e-mail es: <div class="pl-2 pb-1 mb-2">{{info.email}}</div></li>
					<li>Tus shows elegidos fueron: <div class="pl-2 pb-1 mb-2">{{info.checkboxes}}</div></li>
				</ul>
            </div>

              <input type="submit" @click="guardar(info)" value="Enviar" name="enviar" class="mb-5 btn btn-dark btn-block"/>
      </form>

</div>
</div>
</div>
</div>
</aside>`,
methods:{
	guardar:function(info){

InfoObj = {	nombre: this.info.nombre,
				apellido: this.info.apellido,
				email: this.info.email,
				checkboxes: this.info.checkboxes,
				comentario: this.info.comentario
			}
		

		if(!localStorage.nombre){
			arr=[]
		}else{
			arr=JSON.parse(localStorage.getItem("nombre"))
			}

	arr.push(InfoObj)
	localStorage.setItem("nombre",JSON.stringify(arr))
}
}
});


Vue.component("mostrar", {
	data:function(){
			return {
				local:[],
				sin_datos: ""
			}
	},
	template:`<div class="container">
		<h2>Ingresaste la siguiente información</h2>

		<ul>
		<li v-for="item in local">
			Nombre = {{item.nombre}}, Estreno: {{item.apellido}}
		</li>
		</ul>
		<p>{{sin_datos}}</p>
	</div>`,

	mounted:function(){
		console.log("se monto")
		this.ver_local();
	},
	destroyed: function(){
			console.log("se destruyo la instancia")
	},
	methods:{
		ver_local:function(){
			
		if(localStorage.dato){
		var dame=JSON.parse(localStorage.getItem("dato"))	
				this.local = dame;
} else{
	this.sin_datos = "No hay datos que mostrar"
}
	console.log( this.$route)
	}}
})


var app = new Vue({
	el: "#inicio",
	data: {	
			h2_1:'Queen en sus comienzos',
			h2_2:'La banda en la cima',
			h2_3:'Después de Freddie',
			h2_galeria:'Álbumes de estudio',
			h2_integrantes:'La banda',
			h3:'Escalando posiciones',
			newfont:'fuentenueva',
			newcolor:'colornuevo',
			iniciosqueen:"img/inicios.png",
			titleiniciosqueen: "Inicios de Queen",
			queen1976:"img/queen1976.png",
			titlequeen1976:"Queen en 1976",
			queen19761:"img/queen1976_1.jpg",
			akom:"img/akom.jpg",
			titleakom:"Queen en Wembley 1986",
			queenend1:"img/queenend.jpg",
			titlequeenend:"20 años de Queen",
			queenend2:"img/queenend2.jpg",
			titlequeenend4:"Última foto de Freddie",
			queenend4:"img/queenend4.jpg",
			titlequeenend2:"Queen en Brit Awards 1990",	

			galeria:[
				{url:"img/discos/queen.jpg", alt:"Queen", anio:"1973"},
				{url:"img/discos/queenii.jpg", alt:"Queen II", anio:"1974"},
				{url:"img/discos/sheer heart attack.jpg", alt:"Sheer Heart Attack", anio:"1974"},
				{url:"img/discos/a night at the opera.jpg", alt:"A Night at the Opera", anio:"1975"},
				{url:"img/discos/a day at the races.jpg", alt:"A day at the Races", anio:"1976"},
				{url:"img/discos/news of the world.jpg", alt:"News of the World", anio:"1977"},
				{url:"img/discos/jazz.jpg", alt:"Jazz", anio:"1978"},
				{url:"img/discos/the game.jpg", alt:"The Game", anio:"1980"},
				{url:"img/discos/hotspace.jpg", alt:"Hot Space", anio:"1982"},
				{url:"img/discos/the works.jpg", alt:"The Works", anio:"1984"},
				{url:"img/discos/a kind of magic.jpg", alt:"A Kind of Magic", anio:"1986"},
				{url:"img/discos/the_miracle.jpg", alt:"The Miracle", anio:"1989"},
				{url:"img/discos/innuendo.jpg", alt:"Innuendo", anio:"1991"}
			],

			freddie:[
				{url:"img/integrantes/freddie1.jpg", alt:"Freddy a los inicios de Queen"},
				{url:"img/integrantes/freddie3.jpg", alt:"Freddy en pleno auge de Queen"},
				{url:"img/integrantes/freddie2.jpg", alt:"Freddy últimas presentaciones con Queen"}
			],

			brian:[
				{url:"img/integrantes/brian1.jpg", alt:"Brian a los inicios de Queen"},
				{url:"img/integrantes/brian2.jpg", alt:"Brian en pleno auge de Queen"},
				{url:"img/integrantes/brian3.jpg", alt:"Brian últimas presentaciones con Queen"}
			],

			john:[
				{url:"img/integrantes/john1.jpg", alt:"John a los inicios de Queen"},
				{url:"img/integrantes/john2.jpg", alt:"John en pleno auge de Queen"},
				{url:"img/integrantes/john3.jpg", alt:"John últimas presentaciones con Queen"}
			],

			roger:[
				{url:"img/integrantes/roger1.jpg", alt:"Roger a los inicios de Queen"},
				{url:"img/integrantes/roger2.jpg", alt:"Roger en pleno auge de Queen"},
				{url:"img/integrantes/roger3.jpg", alt:"Roger últimas presentaciones con Queen"}
			]
		}
	})	
			