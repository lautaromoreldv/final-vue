Vue.component("ver", {
	data:function(){
			return {
				local:[],
				sin_datos: ""
			}
	},
	template:`<div>
		<h1>Datos guardados</h1>

		<ul>
		<li v-for="item in local">
			Nombre = {{item.titulo}}, Comentario: {{item.comentario}} : Temática:  <span v-for="x in item.selected">- {{x}}  </span>, Estreno: {{item.estreno}}</li>
				
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
				this.local = dame
						//console.log(this.local)
} else{
	
	this.sin_datos = "No hay datos que mostrar"
}
	console.log( this.$route)
	}



	}



})