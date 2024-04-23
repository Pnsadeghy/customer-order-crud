<template>
  <app-panel-header @logout="appUtils.logout">
      <template #logo>
          <router-link :to="{name: DASHBOARD_PAGE}" class="flex items-center gap-x-2 text-xl font-bold" >
              <ClipboardDocumentListIcon class="h-8 opacity-50" />
              {{ $t("title") }}
          </router-link>
      </template>
  </app-panel-header>
</template>
<script setup lang="ts">
import AppPanelHeader from "@/components/panel-header/AppPanelHeader.vue"
import {ClipboardDocumentListIcon} from "@heroicons/vue/24/outline"
import {DASHBOARD_PAGE} from "@/router/names"
import appUtils from "@/utils/app.utils"
</script>