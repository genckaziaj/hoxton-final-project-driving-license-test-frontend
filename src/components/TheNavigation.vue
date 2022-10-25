<template>
  <nav class="navbar navbar-expand-md navbar-light">
    <div class="container-fluid px-md-4 px-0">
      <div class="navigation-header">
        <router-link to="/" class="navigation-brand">
          <img src="../assets/logo-dpshtrr.png" />
        </router-link>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar-collapsed"
        aria-controls="navbar-collapsed"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div
        class="collapse navbar-collapse flex-grow-0 border-top"
        id="navbar-collapsed"
      >
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><a href>Gjenero test</a></li>
          <li>
            <router-link to="/test">Teste te gatshme</router-link>
          </li>
          <li><a href>Pyetje te rastit</a></li>
          <li><a href>Hyr</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  background-color: #fff;
  border: 1px solid #e7e7e7;
  position: relative;
  min-height: 50px;
  margin-bottom: 20px;
  padding: 0;
}

nav .navigation-header a.navigation-brand {
  color: #777;
  padding: 5px 15px;
  height: 50px;
  font-size: 18px;
  line-height: 20px;
  display: block;
}

nav .navigation-header a.navigation-brand img {
  display: block;
  border: 0;
  height: 40px;
}

nav ul {
  padding-left: 0;
  list-style: none;
  margin-bottom: 7px;
  margin-top: 8px;
}

nav ul li {
  position: relative;
  display: block;
}

nav ul > li > a {
  color: #355dae;
  padding: 10px 15px;
  line-height: 20px;
  position: relative;
  display: block;
}

nav ul > li > a:hover {
  color: #333;
}

nav ul > li > a:focus {
  color: #333;
}

nav button.navbar-toggler {
  border-color: #ddd;
  padding: 9px 10px;
  margin-top: 8px;
  margin-right: 15px;
  margin-bottom: 8px;
  border-radius: 4px;
  font-size: 13px;
  line-height: normal;
}

nav button.navbar-toggler:hover {
  background-color: #ddd;
}

nav button.navbar-toggler:focus {
  background-color: #ddd;
  box-shadow: none;
}

nav button.navbar-toggler > span {
  background-color: #888;
  display: block;
  width: 22px;
  height: 2px;
  border-radius: 1px;
  font-size: 14px;
  line-height: 14px;
}

nav button.navbar-toggler > span:not(:first-child) {
  margin-top: 4px;
}

@media screen and (min-width: 768px) {
  nav {
    border-radius: 4px;
  }
  nav .navigation-header {
    margin-right: 0;
    margin-left: 0;
  }
  nav .navigation-header .navigation-brand {
    margin-left: -15px;
  }
  nav .border-top {
    border-top: none !important;
  }
  nav ul {
    display: flex;
    margin-top: 0;
    margin-bottom: 0;
  }
  nav ul > li > a {
    padding-top: 15px;
    padding-bottom: 15px;
  }
}
</style>
