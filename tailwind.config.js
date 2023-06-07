/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    extend: {
      /*background colors for individual content in the webpages*/

      colors: {
        body_bg : 'slate-950',
        nav_ul_mb_bg : 'slate-50',
        footer_bg : 'slate-900',
        nav_links_lg_color : 'blue-400',
        nav_links_color : 'black',
        brand_logo_color: 'blue-400',
        nav_hover_bg : 'slate-900',
      },

      width: {

        /*Width used for home webpage only*/
        mob_para : '500px',

        /*Width useed for About webpage only*/
        laptop_para : '450px',
        desktop_para: '550px',
      },

      backgroundImage: {
        'hero-pattern': "url('images/')",
      }
    },
  },
  plugins: [],
}

