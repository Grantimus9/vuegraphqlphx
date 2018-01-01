<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <h2>The following was loaded over Graphql:</h2>
    <h1>User: {{ user.name }}</h1>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js & Phoenix & GraphQL App',
      user: ""
    }
  },
 apollo: {
    // Apollo specific options
    user: gql`{
      user(id: "1"){ 
        name 
      }
    }`,
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
