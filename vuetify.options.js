import it from 'vuetify/es5/locale/it'
import colors from 'vuetify/es5/util/colors'
import Icon from '~/components/Icon'

export default {
  icons: {
    iconfont: null,
    component: Icon,
    values: {

      search: 'mdi:magnify',
      plus: 'mdi:plus',
      save: 'mdi:save',
      filter: 'mdi:filter',
      complete: 'mdi:check',
      cancel: 'mdi:close-circle',
      close: 'mdi:close',
      delete: 'mdi:close-circle', // delete (e.g. v-chip close)
      clear: 'mdi:close',
      success: 'mdi:check-circle',
      info: 'mdi:information',
      warning: 'mdi:exclamation',
      error: 'mdi:alert',
      prev: 'mdi:chevron-left',
      next: 'mdi:chevron-right',
      checkboxOn: 'mdi:checkbox-marked',
      checkboxOff: 'mdi:checkbox-blank-outline',
      checkboxIndeterminate: 'mdi:minus-box',
      delimiter: 'mdi:circle', // for carousel
      sort: 'mdi:arrow-up',
      expand: 'mdi:chevron-down',
      menu: 'mdi:menu',
      subgroup: 'mdi:menu-down',
      dropdown: 'mdi:menu-down',
      radioOn: 'mdi:radiobox-marked',
      radioOff: 'mdi:radiobox-blank',
      edit: 'mdi:pencil',
      ratingEmpty: 'mdi:star-outline',
      ratingFull: 'mdi:star',
      ratingHalf: 'mdi:star-half-full',
      loading: 'mdi:cached',
      first: 'mdi:page-first',
      last: 'mdi:page-last',
      unfold: 'mdi:unfold-more-horizontal',
      file: 'mdi:paperclip',
      plus: 'mdi:plus',
      minus: 'mdi:minus',
    }
  },
  theme: {

    dark: false,
    themes: {
      light: {
        primary: '#3275ea',
        accent: colors.grey.darken3,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: '#f36523',
        success: colors.green.accent3
      }
    }
  },
  // breakpoint: {},
  lang: {
    locales: { it },
    current: 'it'
  },
  // lang: {},
  // rtl: true,
}