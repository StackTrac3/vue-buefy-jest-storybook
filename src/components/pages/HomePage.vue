<template lang="pug">
div
  bp-tip pages/Homepage
  boilerplate-welcome
</template>

<script>
import BpTip from '@atoms/BoilerplateTip';
import BoilerplateWelcome from '@organisms/Welcome';

export default {
  components: { BpTip, BoilerplateWelcome },
};
</script>