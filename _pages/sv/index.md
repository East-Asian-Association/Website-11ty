---
title: index
layout: layouts/layout.liquid
permalink: /sv/
css: "index.css" 
---

<main class="frontpage">
  <div id="banner" class="banner">
    <div class="banner-background"></div>
    <div class="banner-text centered">
      <p id="top">Welcome to the
      </p>
      <p id="middle">
        <strong>EAST ASIAN ASSOCIATION</strong>
      </p>
      <p id="bottom">
        Linköping University
      </p>
      <button class="banner-button fadeOnHover" onClick=scrollToContent()>
        <p>Learn more</p>
      </button>
    </div>
  </div>
  <div id="learn-more" class="summary">
    <div class="panel">
      <div class="panel-container">
        <div class="panel-image">
          <img src="/img/cc-fika.jpg" alt="cc-fika">
        </div>
        <div class="panel-spacer"></div>
        <div class="panel-text">
          <h1 class="red">Conversation Corner</h1>
          <p>CC is a place for
            <strong>Cultural Exchange</strong>,
            <strong>Language Learning</strong>
            and making new
            <strong>Friends</strong>.
          </p>
          <p> We meet every
            <strong>Tuesday</strong>
            and
            <strong>Thursday</strong>
            at
            <strong>17:15</strong>
            and all students at Linköping University are welcome!
          </p>
          <p>
            <strong>Free Fika</strong>
            is also available for all our members!</p>
        </div>
      </div>
    </div>
    <div class="panel reversed">
      <div class="panel-container">
        <div class="panel-image">
          <img src="/img/asienkunskap.jpg" alt="asienkunskap">
        </div>
        <div class="panel-spacer"></div>
        <div class="panel-text">
          <h1 class="red">Conversation Corner</h1>
          <h1>Asienkunskap</h1>
          <p>EAA is a Student Division (Sektion) at Linköping University responsible for the program
            <strong>Asienkunskap</strong>.</p>
          <p>The program covers one year of language studies in either
            <strong>Japanese</strong>
            or
            <strong>Chinese</strong>, aswell as
            <strong>North-East Asian</strong>
            <strong>History</strong>
            and
            <strong>Politics</strong>
          </p>
        </div>
      </div>
    </div>
    <div class="panel">
      <div class="panel-container">
        <div class="panel-image">
          <img src="/img/sponsor.jpg" alt="sponsor">
        </div>
        <div class="panel-spacer"></div>
        <div class="panel-text">
          <h1 class="red">Sponsorships</h1>
          <p>Our student association has
            <strong>14 years</strong>
            of experience and annually over
            <strong>200 active members</strong>.</p>
          <p>We offer various collaboration opportunities such as
            <strong>Lunch seminars</strong>
            and
            <strong>Case events</strong>.</p>
        </div>
      </div>
    </div>
  </div>
</main>

<script>
  function scrollToContent() {
    const element = document.getElementById("banner");
    scroll({
      top: element.scrollHeight,
      behavior: "smooth",
    });
  }
</script>