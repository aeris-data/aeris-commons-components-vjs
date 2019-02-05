<template>
  <div id="app">
    <ul>
      <li><router-link to="/notification-test">notification test</router-link></li>
      <li><router-link to="/language-test">language test</router-link></li>
      <li><router-link to="/theme-test">theme test</router-link></li>
      <li><router-link to="/datepicker-test">datepicker test</router-link></li>
      <li><router-link to="/orcid-test">orcid test</router-link></li>
      <li><router-link to="/icon-button-test">icon-button-test</router-link></li>
    </ul>
    <div><router-view class="view"></router-view></div>
  </div>
</template>
