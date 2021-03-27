<template>
  <div>
    <div class="text-start">
      <div class="row mb-4">
        <div class="col">
          <button type="button" class="btn btn-outline-primary" @click="goBack">
            Regresar
          </button>
        </div>
      </div>
      <img :src="country.flag" :alt="country.name" width="200" height="120" />
      <p>
        <b>{{ country.name }}</b>
      </p>
      <p><b>Native name: </b>{{ country.nativeName }}</p>
      <p><b>Population: </b>{{ country.population }}</p>
      <p><b>Region: </b>{{ country.region }}</p>
      <p><b>Sub Region: </b>{{ country.subregion }}</p>
      <p><b>Capital: </b>{{ country.capital }}</p>
      <p>
        <b>Top Level Domain: </b
        ><span v-for="domain in country.topLevelDomain" :key="domain"
          >{{ domain }},</span
        >
      </p>
      <p>
        <b>Currencies: </b
        ><span v-for="currency in country.currencies" :key="currency.name"
          >{{ currency.name }},
        </span>
      </p>
      <p>
        <b>Languages: </b
        ><span v-for="language in country.languages" :key="language.name"
          >{{ language.name }},
        </span>
      </p>
    </div>
    <div class="row text-start mt-5">
      <h2>Border Countries:</h2>
      <div class="row">
        <router-link
          v-for="border in country.borders"
          :key="border"
          type="button"
          class="btn btn-primary col-2 m-1"
          :to="{ name: 'CountryDetail', params: { id: border } }"
          >{{ border }}</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import service from "../services/countries.js";
export default {
  props: ["id"],
  data() {
    return {
      country: "",
    };
  },
  async mounted() {
    let response = await service.get(`alpha/${this.id}`);
    this.country = response.data;
  },
  async beforeRouteUpdate(to, from, next) {
    let response = await service.get(`alpha/${to.params.id}`);
    this.country = response.data;
    next();
  },
  methods: {
    goBack() {
      this.$router.push({ name: "Countries" });
    },
  },
};
</script>

<style lang="css" scoped>
p {
  margin-bottom: 0px;
}
</style>
