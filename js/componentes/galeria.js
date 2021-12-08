Vue.component("galeria-component", {
	template: `<section id="info"> 
	<article class="bg-light">
  
	  <h2 class="mb-5 pt-3 pb-3 text-center" v-bind:class="[newcolor]" v-once>{{h2_galeria}}</h2>
	  
		<div class="container">
		  <div class="row">
			<div class="col-sm-6 col-md-4 col-lg-3 pb-4" v-for="img in galeria">
			  <div class="card">
				  <img class="card-img-top" :src="img.url" :alt="img.alt" :title="img.alt" />
					<div class="card-body">
					  <h3 class="text-center">{{img.alt}}</h3>
						<p class="text-center">{{img.anio}}</p>
					</div>
			  </div>    
			</div>  
		  </div>
		</div>  
	</article>
  
	<article class="bg-light pt-4">
	  <h2 class="mb-5 pt-3 pb-3 text-center" v-bind:class="[newcolor]" v-once>{{h2_integrantes}}</h2>
	  <div class="container">
		<freddie></freddie>
  
		  <div class="row">
			  <div class="col-12 col-sm-6 col-md-4 pb-4" v-for="img in freddie">
				  <div class="card">
					  <img class="card-img-top" :src="img.url" :alt="img.alt">
				  </div>    
			  </div>  
		  </div>
	  
		<brian></brian>
		  <div class="row"> 
			<div class="col-12 col-sm-6 col-md-4 pb-4" v-for="img in brian">
				<div class="card">
					<img class="card-img-top" :src="img.url" :alt="img.alt">
				</div>    
			</div>          
		  </div>
  
		<john></john>
		  <div class="row"> 
			<div class="col-12 col-sm-6 col-md-4 pb-4" v-for="img in john">
				<div class="card">
					<img class="card-img-top" :src="img.url" :alt="img.alt">
				</div>    
			</div>           
		  </div>
  
		<roger></roger>
		  <div class="row"> 
			<div class="col-12 col-sm-6 col-md-4 pb-4" v-for="img in roger">
				<div class="card">
				  <img class="card-img-top" :src="img.url" :alt="img.alt">
				</div>    
			</div>           
		  </div>
  
	  </div>
	</article>
  </section>`
});

