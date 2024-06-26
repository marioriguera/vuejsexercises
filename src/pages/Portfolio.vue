<template>
  <div class="row h-auto">
    <main class="flex-shrink-0">
      <!-- Header-->
      <header class="py-5">
        <div class="container px-5 pb-5">
          <div class="row gx-5 align-items-center">
            <div class="col-xxl-5">
              <!-- Header text content-->
              <div class="text-center text-xxl-start">
                <div class="badge bg-gradient-primary-to-secondary text-white mb-4">
                  <div class="text-uppercase">Design &middot; Development &middot; Marketing</div>
                </div>
                <div class="fs-3 fw-light text-muted">I can help your business to</div>
                <h1 class="display-3 fw-bolder mb-5"><span class="text-gradient d-inline">Get online and grow
                    fast</span></h1>
                <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                  <a class="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder" href="https://www.linkedin.com/in/mario-david-riguera-castillo/" target="_blank">Resume</a>
                  <a class="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder" href="https://github.com/marioriguera" target="_blank">Projects</a>
                </div>
              </div>
            </div>
            <div class="col-xxl-7">
              <!-- Header profile picture-->
              <div class="d-flex justify-content-center mt-5 mt-xxl-0">
                <div class="profile bg-gradient-primary-to-secondary">
                  <!-- TIP: For best results, use a photo with a transparent background like the demo example below-->
                  <!-- Watch a tutorial on how to do this on YouTube (link)-->
                  <img class="profile-img profile-image-local-css"
                    src="https://media.licdn.com/dms/image/D4E03AQFY8FSWd1SfrQ/profile-displayphoto-shrink_800_800/0/1696326802617?e=1724284800&v=beta&t=PGH4tWM5bykclbGKDO-jXYxWl0xE97xMtd7je56nTNk"
                    alt="..." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <!-- About Section-->
      <section class="bg-light py-5">
        <div class="container px-5">
          <div class="row gx-5 justify-content-center">
            <div class="col-xxl-8">
              <div class="text-center my-5">
                <h2 class="display-5 fw-bolder"><span class="text-gradient d-inline">About Me</span></h2>
                <p class="lead fw-light mb-4">My name is Mario David Riguera Castillo.</p>
                <p class="text-muted" align="justify">As an IT professional with a background in program design, I am
                  excited to tackle complicated challenges and find novel
                  solutions. With solid experience in programming languages such as C# and skills in Java, Python, PHP
                  and C++, as well as
                  knowledge in web technologies such as Angular and ASP.NET, I have demonstrated competencies in
                  creating robust and
                  efficient computer applications. Thanks to my meticulous attention and dedication to excellence, I
                  have been able to
                  contribute significantly to development teams, quickly adjusting to the challenges of the current
                  technological environment. I
                  am always looking for opportunities to develop my professional career and continue expanding my
                  knowledge in the exciting
                  field of computing.</p>
                <div class="d-flex justify-content-center fs-2 gap-4">
                  <a class="text-gradient" href="#!"><i class="bi bi-twitter"></i></a>
                  <a class="text-gradient" href="#!"><i class="bi bi-linkedin"></i></a>
                  <a class="text-gradient" href="#!"><i class="bi bi-github"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "PortfolioPage",
  created() { },
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="css" scoped>
.profile-image-local-css {
  border-radius: 100%;
  height: 100%;
  width: 100%;
}
</style>