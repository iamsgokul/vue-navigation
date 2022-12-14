<template>
<header>
  <div class="logo">
    <!-- <a href="https://www.gokul.work"><img src="../images/logo.svg"></a> -->
    Logo
  </div>
  <nav>
    <a href="javascript:void(0)"><i class="gwicon-menu"></i></a>
    <ul class="topmenu">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/search">Search</router-link></li>
      <li><router-link to="/tools">Tools</router-link></li>
      <li><router-link to="/profile">Profile</router-link></li>
    </ul>
  </nav>
</header>
</template>

<script>
export default {
  name: 'NavigationMenu',
  data(){
    return{

    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a.active{
  background-color: #ddd;
}
</style>

