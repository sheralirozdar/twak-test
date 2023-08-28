<template>
	<div id="header-wrapper">
		<div id="header-text">
			<h1>Knowledge base doesn't have to be boring </h1>
			<h3>Everything you need to Manage your Messaging</h3>
		</div>
		<div class="search-input-wrapper">
			<input v-model="searchText" id="search-input" placeholder="Search for answers">
			<div id="search-input-icon">
				<i class="fas fa-search"></i> 
			</div>
		</div>

	</div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
	@import '../scss/_variables.scss';


	
	#header-wrapper {
  		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		 height:299px;	
		 font-family: "Lato", sans-serif;
		 color: #373737;

		.search-input-wrapper {
				display: flex;
				align-items: center;
				width: 720px;
				height: 60px;
				border: 1px solid #EEEEEE;

				position: relative;
				margin-top: 30px;
				}

				#search-input {
					flex: 1;
					padding: 10px;
					border: none;
					border-radius: 20px;
				}
				#search-input:focus {
					outline: none;
					}

				#search-input-icon {
					background-color: #03A84E;
						padding: 21px;
  
					i{
						color: #ffffff;
					}
				}
				
		}

	#header-text {
			h1{
				
				height: 41px;
				
				
				font-size: 34px;
				font-weight: 700;
				letter-spacing: 5;
				text-align: center;
				
			}
			h3{
				
				font-size: 20px;
				font-weight: 400;
				
				letter-spacing: 0px;
				text-align: center;
				margin: 0px;
			}

		
		}
</style>