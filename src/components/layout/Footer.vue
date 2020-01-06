<template>
  <footer class="footer">
    <ul>
      <li>
        <a v-bind:href="fbLink" target="_blank"><i class="fab fa-facebook-square"></i></a>
      </li>
      <li>
        <a v-bind:href="twitterLink" target="_blank"><i class="fab fa-twitter-square"></i></a>
      </li>
      <li>
        <a v-bind:href="linkedinLink" target="_blank"><i class="fab fa-linkedin"></i></a>
      </li>
      <li>
        <a v-bind:href="instaLink" target="_blank"><i class="fab fa-instagram"></i></a>
      </li>
      <li>
        <a v-bind:href="youtubeLink" target="_blank"><i class="fab fa-youtube"></i></a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      fbLink: "https://facebook.com",
      twitterLink: "https://twitter.com",
      linkedinLink: "https://linkedin.com",
      instaLink: "https://instagram.com",
      youtubeLink: "https://youtube.com"
    };
  }
};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css");

.footer {
    background: #333;
    padding: 1em;
}

.footer ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.footer ul li {
    flex: 0 0 10%;
    list-style-type: none;
}

.footer ul li a {
    font-size: 1.5em;
    color: #fff;
}
</style>