<template>
  <docs-content :config="configComputed" />
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import DocsContent from '../../components/DocsContent.vue'
import buttonGroupConfig from '../../page-configs/ui-elements/button-group/page-config'

@Options({
  name: 'DocsButtonGroup',
  components: {
    DocsContent,
  },
})
export default class ButtonGroup extends Vue {
  get configComputed () {
    return buttonGroupConfig
  }
}
</script>
