<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <button type="button" class="btn btn-sm" @click="navigateTo('/')">
        <div class="button-content">
          <img class="logoNavBar" alt="Vue logo" src="./../../assets/logo.png">
          <span class="navbar-brand m-1 h1">{{ tittleNavBar }}</span>
        </div>
      </button>
      <form class="d-flex" role="menu">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <button type="button" class="btn btn-sm" @click="navigateTo('/home')">
              <div class="button-content">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-house-door-fill" viewBox="0 0 16 16">
                  <path
                    d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                </svg>
                <span class="navbar-brand m-1 h1">Home</span>
              </div>
            </button>
          </li>
          <li class="nav-item">
            <button type="button" class="btn btn-sm" @click="navigateTo('/portfolio')">
              <div class="button-content">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-file-person-fill" viewBox="0 0 16 16">
                  <path
                    d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11" />
                </svg>
                <span class="navbar-brand m-1 h1">Portfolio</span>
              </div>
            </button>
          </li>
          <li class="nav-item">
            <button type="button" class="btn btn-sm" @click="navigateTo('/about')">
              <div class="button-content">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-question-circle-fill" viewBox="0 0 16 16">
                  <path
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247m2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                </svg>
                <span class="navbar-brand m-1 h1">About</span>
                <router-link to="/about" />
              </div>
            </button>
          </li>
          <li class="nav-item">
            <button type="button" class="btn btn-sm" @click="navigateTo('/contact')">
              <div class="button-content">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-person-lines-fill" viewBox="0 0 16 16">
                  <path
                    d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
                </svg>
                <span class="navbar-brand m-1 h1">Contact</span>
                <router-link to="/contact" />
              </div>
            </button>
          </li>
        </ul>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TopNavBarComponent",
  created() { },
  data() {
    return {
      tittleNavBar: 'VU3xcercises'
    };
  },
  props: {},
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  },
};
</script>

<style lang="css" scoped>
.logoNavBar {
  height: 20px;
  width: 20px;
}

.button-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.button-text {
  margin: 0;
  padding-left: 1rem;
  padding-top: 0.3rem;
  font-size: 2.5rem;
  color: white;
}
</style>