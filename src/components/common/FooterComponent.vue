<template>
  <!-- Footer -->
  <footer class="text-center text-lg-start bg-body-tertiary text-muted primary-color">
    <!-- Section: Social media -->
    <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      <!-- Left -->
      <div class="me-5 d-none d-lg-block">
        <span>{{ footer_labels.connected }}</span>
      </div>
      <!-- Left -->
    </section>
    <!-- Section: Social media -->

    <!-- Section: Links  -->
    <section class="">
      <div class="container text-center text-md-start mt-5">
        <!-- Grid row -->
        <div class="row mt-3">
          <!-- Grid column -->
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <!-- Content -->
            <h6 class="text-uppercase fw-bold mb-4">{{ footer_labels.iam }}</h6>
            <p align="justify">
              {{ footer_texts.presentation }}
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">{{ footer_labels.social_m }}</h6>
            <!-- Links -->
            <p>
              <a :href=facebook.url class="text-reset" target="_blank">{{ facebook.label }}</a>
            </p>
            <p>
              <a :href=twitter.url class="text-reset" target="_blank">{{ twitter.label }}</a>
            </p>
            <p>
              <a :href=instagram.url class="text-reset" target="_blank">{{ instagram.label }}</a>
            </p>
            <p>
              <a :href=linkedin.url class="text-reset" target="_blank">{{ linkedin.label }}</a>
            </p>
            <p>
              <a :href=github.url class="text-reset" target="_blank">{{ github.label }}</a>
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">{{ footer_labels.links }}</h6>
            <p>
              <a :href=microsoft.url class="text-reset" target="_blank">{{ microsoft.label }}</a>
            </p>
            <p>
              <a :href=dotnet.url class="text-reset" target="_blank">{{ dotnet.label }}</a>
            </p>
            <p>
              <a :href=vuejs.url class="text-reset" target="_blank">{{ vuejs.label }}</a>
            </p>
            <p>
              <a :href=angular.url class="text-reset" target="_blank">{{ angular.label }}</a>
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">{{ contact.label }}</h6>
            <p>{{ contact.address }}</p>
            <p>{{ contact.email }}</p>
            <p>{{ contact.phone }}</p>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
    </section>
    <!-- Section: Links  -->

    <!-- Copyright -->
    <div class="text-center p-4 linkedin-copyright">
      {{ linkedin.copyright }}
      <a class="text-reset fw-bold" :href="linkedin" target="_blank">{{ linkedin.message }}</a>
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</template>

<script>
export default {
  name: "FooterComponent",
  created() { },
  data() {
    return {
      facebook: {
        label: "Facebook",
        url: "https://www.facebook.com/mariodavid.rigueracastillo",
      },
      twitter: {
        label: "Twitter",
        url: "https://twitter.com/MarioRiguera",
      },
      instagram: {
        label: "Instagram",
        url: "https://www.instagram.com/mario.riguera/",
      },
      linkedin: {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/mario-david-riguera-castillo/",
        message: "FromMe.jajaja",
        copyright: "© 2024 Copyright:",
      },
      github: {
        label: "GitHub",
        url: "https://github.com/marioriguera",
      },
      microsoft: {
        label: "Microsoft",
        url: "https://www.microsoft.com/",
      },
      dotnet: {
        label: "DotNet",
        url: "https://dotnet.microsoft.com/",
      },
      vuejs: {
        label: "Vue JS",
        url: "https://vuejs.org/",
      },
      angular: {
        label: "Angular",
        url: "https://angular.dev/",
      },
      footer_labels: {
        connected: "Get connected with me:",
        iam: "I am",
        social_m: "Social media",
        links: "Useful links",
      },
      footer_texts: {
        presentation: "Mario David Riguera Castillo, a simple computer engineer from Cuba :)",
      },
      contact: {
        label: "Contact",
        address: "Barcelona, BCN 08027, ES",
        email: "mario.riguera@gmail.com",
        phone: "+ 34 603 03 07 59",
      },
    };
  },
  props: {},
  methods: {},
};
</script>

<style lang="css" scoped>
.linkedin-copyright {
  background-color: rgba(0, 0, 0, 0.05)
}
</style>
