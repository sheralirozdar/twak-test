<!-- <template>
  <div>
    <h2>{{ selectedCategory.title }}</h2>
    <ul>
      <li v-for="article in articles" :key="article.id">
        {{ article.title }}
      </li>
    </ul>
  </div>
</template> -->
<template>
  <div class="category">
    <div class="breadcrumb">
      <span class="breadcrumb-item green-text">All categories</span>
      <span class="breadcrumb-item angle"> <i class="fas fa-angle-right "></i></span>
      <span class="breadcrumb-item sub-text">Getting started</span>
    </div>
    <ul class="card-grid">
      <li >
        <div class="card">
          
          <div class="card-content">
            <div class="icon">
              
               <i class="fas fa-play fa-4x outlined-icon"></i>

           
           </div>
              <h3 class="card-title">Getting Started</h3>
              <p class="card-info"> updated 2 days ago</p>
          </div>
          <div class="card-content2">
            <div class="icon">
              
               <i class="fa fa-info-circle"></i>

           
           </div>
              <div class="card-desc">De quibus cupio scire quid sentias. Quid, de
                 quo nulla dissensio est Illum mallem levares sentias nulla dissensio.</div>
              
          </div>
        </div>
      </li>
      <ul class="list-artciles">
        <li class="account-links" v-for="article in articles" :key="article.id" >
            <div class="account-card">
              <i class="fas fa-file-lines 2x icon-file" style=""></i>
              <div class="account-card-text">
              <p class="title">{{ article.title }}</p>
              <p class="text-date">Updated Jun, 15 2019</p>
            </div>
             <i class="fas fa-angle-right icon-angle"></i>
            </div>
         
        </li>

      </ul>
      
    </ul>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      articles: []
    };
  },
  methods: {
    async fetchCategoryArticles(categoryId) {
      try {
        const response = await axios.get(`http://localhost:9000/api/articles`);
       

        this.articles = response.data;
        console.log("artciles",this.articles)
      } catch (error) {
        console.error('Error fetching category articles:', error);
      }
    }
  },
  mounted() {
   
    this.fetchCategoryArticles();
  }
};
</script>
<style lang="scss" scoped>
@import '../scss/_variables.scss';
.category{
  background-color: #FAFAFA;
  padding-top: 19px;

  padding-left: 198px;
  padding-right: 198px;
}
.card-grid {
  display: grid;
  list-style: none;
  grid-template-columns: 1fr 3fr; 
  gap: 20px;
  padding-left: 0px;
 
}
.card {
  width: 315px;
  height: 220px;
  text-align: center;
  border: 1px solid #EEEEEE;
  border-radius: 8px;
  cursor: pointer;
  background-color: #ffff;
}
  .icon {
    margin: 14px;
   i{
    
           text-shadow: -1px 1px 9px #03a84e;
    color: white;

   }
  }
 

  .card-content {
    padding: 20px;
    text-align: center;
    border-bottom: 1px solid #EEEEEE;
    margin-bottom: 10px;
    .card-title {
     
      font-family: Lato;
      font-size: 20px;
      font-weight: 700;
      line-height: 24px;
      letter-spacing: 0px;
      margin-bottom: 5px;
    }

    .card-info {
      font-size: 14px;
      color: #888;
    }
   
  }
.card-content2{
  background-color: #fff;
  padding: 41px 20px;
      text-align: center;
}
.breadcrumb {
  
  font-size: 16px;
  font-weight: 400;
  color: #333; /
  .sub-text{
    color: #9C9AA6;
  }
}
.green-text {
  color: #4eb548;
}

.breadcrumb-item {
  margin-right: 8px;
}
.angle{
  font-size: 12px;
}

.account-links{
  margin-bottom: 20px;

}
.account-card {
  display: flex;
    align-items: center;
    width: 640px;
    justify-content: space-between;
    /* height: 91.53768920898438px; */
    border: 1px solid #EEEEEE;
    padding: 16px 52px;
    color: #332f2f;
    background-color: #FFFFFF;
    font-size: 16px;

 .account-card-text{
    width: 555px;
    text-align: left;
    .title{
      font-size: 20px;
      padding: 0px;
     margin: 0px
    }
    .text-date{
      font-size: 11px;
      color: #9C9AA6;
    }
 }
  .fa-desktop,
  .fa-angle-right {
    font-size: 16px;
    color: #03a84e;
  }
  .icon-file{
     font-size: 28px;
     text-shadow: -1px 1px 1px #03a84e;
    color: white;
  }
  .icon-angle{
    color: #03A84E;
     font-size: 29px;
  }}
  .list-artciles{
    list-style: none;
  }
  .card-desc{
      font-size: 13px;
      text-align: center;
      color: #9C9AA6;    }
      /* Add media queries for responsiveness */
@media screen and (max-width: 768px) {
  .category {
    padding: 10px; /* Adjust padding for smaller screens */
  }
  .card-grid {
    grid-template-columns: 1fr; /* Display cards in a single column on small screens */
    gap: 10px; /* Adjust gap for smaller screens */
  }
  .account-card {
    width: auto; /* Let the cards adjust their width */
    padding: 10px; /* Adjust padding for smaller screens */
    font-size: 14px; /* Adjust font size for smaller screens */
  }
}
</style>
