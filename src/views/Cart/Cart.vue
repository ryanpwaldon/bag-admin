<template>
  <BaseHeader />
  <BaseTabs :links="links" class="mb-8" />
  <BaseLoader v-if="loading" />
  <router-view v-else />
</template>

<script lang="ts">
import BaseHeader from '@/components/BaseHeader/BaseHeader.vue'
import BaseLoader from '@/components/BaseLoader/BaseLoader.vue'
import BaseTabs, { Link } from '@/components/BaseTabs/BaseTabs.vue'
import cartService, { Cart } from '@/services/api/services/cartService'
import { defineComponent, InjectionKey, onMounted, provide, readonly, Ref, ref } from 'vue'

interface UpdateCart {
  (newCart: Cart): void
}

export const CartInjection: InjectionKey<Ref<Cart>> = Symbol('Cart')
export const UpdateCartInjection: InjectionKey<UpdateCart> = Symbol('UpdateCart')

const links: Link[] = [
  { title: 'Theme', name: 'cart-theme' },
  { title: 'Terms & Conditions', name: 'cart-terms-and-conditions' },
  { title: 'Settings', name: 'cart-settings' }
]

export default defineComponent({
  components: {
    BaseTabs,
    BaseHeader,
    BaseLoader
  },
  setup() {
    const loading = ref(true)
    const cart = ref(null as Cart | null)
    const updateCart: UpdateCart = (newCart: Cart) => (cart.value = newCart)
    onMounted(async () => {
      loading.value = true
      cart.value = await cartService.findOne()
      loading.value = false
    })
    provide(CartInjection, readonly(cart))
    provide(UpdateCartInjection, updateCart)
    return { loading, links }
  }
})
</script>
