<template lang="pug">
div
  bp-tip templates/DefaultTemplate
  .container
    router-view
</template>

<script>
import BpTip from '@atoms/BoilerplateTip';

export default {
  components: { BpTip },
};
</script>

<style lang="sass" scoped>
.container
  border: 2px solid $primary
</style>
