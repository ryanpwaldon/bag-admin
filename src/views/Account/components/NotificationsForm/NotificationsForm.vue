<template>
  <form @submit="handleSubmit">
    <BaseGridCard>
      <template #header>
        <h3 class="text-lg font-medium text-gray-700">Notifications</h3>
      </template>
      <BaseInputToggleHorizontal
        label="Conversions"
        description="Get notified every time a customer converts."
        v-model="fields.conversion.value.value"
        class="w-full"
      />
      <BaseInputToggleHorizontal
        label="Weekly Report"
        description="Get a summary of your conversions at the end of each week."
        v-model="fields.conversionReportWeekly.value.value"
        class="w-full mt-5"
      />
      <template #footer>
        <div class="flex justify-end">
          <BaseButton text="Save" type="submit" :loading="loading" />
        </div>
      </template>
    </BaseGridCard>
  </form>
</template>

<script lang="ts">
import store from '@/store/store'
import { boolean, object } from 'yup'
import { defineComponent, ref } from 'vue'
import useForm from '@/composables/useForm'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import BaseGridCard from '@/components/BaseGridCard/BaseGridCard.vue'
import BaseInputToggleHorizontal from '@/components/BaseInputToggleHorizontal/BaseInputToggleHorizontal.vue'
import userService, { Notification } from '@/services/api/services/userService'
export default defineComponent({
  components: {
    BaseButton,
    BaseGridCard,
    BaseInputToggleHorizontal
  },
  setup() {
    const loading = ref(false)
    const unsubscribedNotifications = store.state.user?.unsubscribedNotifications as Notification[]
    const schema = object({
      [Notification.Conversion]: boolean().default(!unsubscribedNotifications.includes(Notification.Conversion)),
      [Notification.ConversionReportWeekly]: boolean().default(!unsubscribedNotifications.includes(Notification.ConversionReportWeekly))
    }).defined()
    const { fields, getValues, handleSubmit, modified } = useForm(schema)
    const onSubmit = async () => {
      loading.value = true
      const unsubscribedNotifications = []
      for (const [notification, subscribed] of Object.entries(getValues())) {
        if (!subscribed) unsubscribedNotifications.push(notification as Notification)
      }
      const user = await userService.updateMe({ unsubscribedNotifications })
      store.commit('setUser', user)
      loading.value = false
    }
    return { fields, handleSubmit: handleSubmit(onSubmit), loading, modified }
  }
})
</script>
