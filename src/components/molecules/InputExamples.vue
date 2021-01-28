<template lang="pug">
.section.examples
  bp-tip molecules/InputExamples
  b-field(label='I am an example input!')
    b-input(v-model='name')
  b-field
    p.control
      span.select
        select
          option An example dropdown
  .buttons
    b-button(type='is-primary') Primary
    b-button(type='is-link') Link
</template>

<script>
import BpTip from '@atoms/BoilerplateTip';

export default {
  components: { BpTip },
};
</script>

<style lang="sass" scoped>
.examples
  border: 2px solid $success
</style>