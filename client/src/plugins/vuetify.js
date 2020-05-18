import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@mdi/font/css/materialdesignicons.css'
import { colors } from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.teal.lighten1,
                accent: "#6EFFF3",
                accent2: "#FF9D6E"
            },
            dark: {
                primary: colors.teal.lighten1,
                accent: "#6EFFF3",
                accent2: "#FF9D6E"
            }
        },
    },    
    icons: {
        iconfont: 'mdi', // default - only for display purposes
    },
});
