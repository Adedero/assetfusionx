<template>
  <div>
    Main page
    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <Suspense>
          <template #default>
            <component :is="Component" />
          </template>

          <template #fallback>
            <div>Loading...</div>
          </template>
        </Suspense>
      </template>
    </RouterView>
  </div>
</template>
