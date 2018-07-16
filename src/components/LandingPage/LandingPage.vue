<template>
  <Page class="page">
    <ActionBar class="action-bar" title="this will be where the landingpage image goes"/>

    <StackLayout>
      <Button class="btn btn-primary" @tap="$router.push('/login')">Login</Button>
      <Button class="btn btn-primary" @tap="$router.push('/dashboard')">Dashboard</Button>
    </StackLayout>

    <NavFooter>
    	
    </NavFooter>

  </Page>
</template>

<script>
	import NavFooter from '../NavFooter/NavFooter.vue';
</script>
<style lang="scss">
	NavFooter {
		position: absolute;
		bottom: 0;
	}
</style>