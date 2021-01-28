<template lang="pug">
.section.welcome
  bp-tip organisms/Welcome
  h1.title
    | Welcome to your boilerplate
  p.subtitle
    | Vue 2, Bulma, Buefy, Jest, Storybook, Atomic Design
  input-examples
</template>

<script>
import BpTip from '@atoms/BoilerplateTip';
import InputExamples from '@molecules/InputExamples';

export default {
  components: { BpTip, InputExamples },
};
</script>

<style lang="sass" scoped>
.welcome
  background-color: $baby-powder
</style>