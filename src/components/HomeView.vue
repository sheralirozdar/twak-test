<template>
  <div class="home">
    <ul class="card-grid">
      <li v-for="category in categories" :key="category.id" @click="goToCategory(category.id)">
        <div class="card">
          
          <div class="card-content">
            <div class="icon">
              
               <i :class="['fas fa-'+category.icon, 'fa-4x', 'outlined-icon']"></i>

           </div>
              <h3 class="card-title">{{ category.title }}</h3>
              <p class="card-info total-articles">{{ category.totalArticle }} articles</p>
              <p class="card-info">Updated on {{formatDate(category.updatedOn) }}</p>

              
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      searchText: '',
      categories: []
    };
  },
  methods: {
    async fetchCategories() {
      try {
        const response = await axios.get('http://localhost:9000/api/categories');
        this.categories = response.data.filter(category => category.enabled).sort((a, b) => a.order - b.order);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    },
    goToCategory(categoryId) {
      // Implement navigation to category view using Vue Router
      this.$router.push({ name: 'category', params: { categoryId } });
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleDateString('en-US', options);
    }
  },
  mounted() {
    this.fetchCategories();
  }
};
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';
.home{
  background-color: #FAFAFA;
  padding-top: 20px
  ;
  padding-bottom: 20px;
}
.card-grid {
  display: grid;
  list-style: none;
  grid-template-columns: repeat(4, 1fr); /* 4 columns */
  padding-left: 148px;
  padding-right: 148px;
  // grid-gap: 20px; /* Gap between cards */
  // margin: 0 auto; /* Center the grid */
  // max-width: 960px; /* Limit the grid width */
}
.card {
  width: 315px;
  height: 220px;
  text-align: center;
  border: 1px solid #EEEEEE;
  border-radius: 8px;
  cursor: pointer;
  background-color: #ffffff;
    margin: 10px;


  .icon {
   i{
    // width: 43.88888931274414px;
    // height: 55px;
   

           /* text-shadow: 2px 2px 2px #03a84e; */
    color: #fff;
    // text-shadow: 13px 4px 1px #ffffff;
    text-shadow: 0px 1px 6px #03a84e, 14px 5px 1px #03a84e21;    /* background: #ffffff2e;
   }
    /* Add your icon styling here */
  }}
 

  .card-content {
    padding: 20px;
    text-align: center;
    .card-title {
     
      font-family: Lato;
      font-size: 20px;
      font-weight: 700;
      line-height: 24px;
      letter-spacing: 0px;
      // text-align: center;
      margin-bottom: 5px;
    }

    .card-info {
      font-size: 14px;
      color: #888;
    }
    .total-articles{
      color:#03a84e;
    }
  }
}
</style>
