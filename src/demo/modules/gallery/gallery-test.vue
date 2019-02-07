<template>
  <aeris-gallery :images="quicklooks" lang="fr"></aeris-gallery>
</template>
<script>
import AerisGallery from "../../../lib/modules/aeris-gallery/components/aeris-gallery.vue";
export default {
  components: { AerisGallery },

  data() {
    return {
      quicklooks: [
        {
          url: "http://iagos-data.fr/images/logo_blue.png",
          description: {
            en: "Logo",
            fr: "Logo"
          }
        },
        {
          url: "http://iagos-data.fr/portal/rest/images/map:global:thumb",
          description: {
            en: "Map of flights",
            fr: "Carte des vols"
          }
        },
        {
          url: "http://iagos-data.fr/portal/rest/image/storedById/6990116025497246148",
          description: {
            en:
              "Figure 1 : Vertical profiles of O3 mixing ratio (in ppbv; left panels), normalized by the O3 mixing ratio at z/h=1 (middle panels), and vertical gradient (in ppbv hm-1; right panels), for different times of the day (from top to bottom : all day along, daytime, night, morning, midday, afternoon). The shaded area represents the uncertainties (at a 95% confidence level) on the mean. For each season and time of the day, we indicate the number (N) of profiles used for calculating the PBL-referenced profile (i.e. profiles without any missing data), the mean PBL height calculated based on this subset of profiles, and the mean PBL height considering all profiles (in brackets)",
            fr:
              "Figure 1 : Vertical profiles of O3 mixing ratio (in ppbv; left panels), normalized by the O3 mixing ratio at z/h=1 (middle panels), and vertical gradient (in ppbv hm-1; right panels), for different times of the day (from top to bottom : all day along, daytime, night, morning, midday, afternoon). The shaded area represents the uncertainties (at a 95% confidence level) on the mean. For each season and time of the day, we indicate the number (N) of profiles used for calculating the PBL-referenced profile (i.e. profiles without any missing data), the mean PBL height calculated based on this subset of profiles, and the mean PBL height considering all profiles (in brackets)"
          }
        },
        {
          url: "http://iagos-data.fr/portal/rest/image/storedById/4641718511330911523",
          description: {
            en:
              "Figure 2 : Vertical profiles of CO mixing ratio (in ppbv; left panels), normalized by the CO mixing ratio at z/h=1 (middle panels), and vertical gradient (in ppbv hm-1; right panels), for different times of the day (from top to bottom : all day along, daytime, night, morning, midday, afternoon). The shaded area represents the uncertainties (at a 95% confidence level) on the mean. For each season and time of the day, we indicate the number (N) of profiles used for calculating the PBL-referenced profile (i.e. profiles without any missing data), the mean PBL height calculated based on this subset of profiles, and the mean PBL height considering all profiles (in brackets).",
            fr:
              "Figure 2 : Vertical profiles of CO mixing ratio (in ppbv; left panels), normalized by the CO mixing ratio at z/h=1 (middle panels), and vertical gradient (in ppbv hm-1; right panels), for different times of the day (from top to bottom : all day along, daytime, night, morning, midday, afternoon). The shaded area represents the uncertainties (at a 95% confidence level) on the mean. For each season and time of the day, we indicate the number (N) of profiles used for calculating the PBL-referenced profile (i.e. profiles without any missing data), the mean PBL height calculated based on this subset of profiles, and the mean PBL height considering all profiles (in brackets)."
          }
        }
      ]
    };
  }
};
</script>

<style scoped></style>
