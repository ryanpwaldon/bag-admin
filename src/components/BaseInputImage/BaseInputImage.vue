<template>
  <div>
    <p class="mb-1 text-sm font-medium text-gray-700">{{ label }}</p>
    <div class="flex flex-wrap items-end -m-2">
      <div
        :key="i"
        v-for="(imageUrl, i) in imageUrls"
        @click="$emit('update:modelValue', imageUrl)"
        class="flex-shrink-0 w-24 h-24 m-2 overflow-hidden transition bg-center bg-no-repeat bg-cover border border-gray-300 rounded shadow-sm cursor-pointer"
        :class="modelValue === imageUrl && 'ring-2 ring-blue-500 ring-offset-white ring-offset-2'"
        :style="{ backgroundImage: `url('${imageUrl}')` }"
      />
      <div v-if="uploading" class="relative flex-shrink-0 w-24 h-24 m-2 bg-white border border-gray-300 rounded shadow-sm">
        <BaseSpinner class="absolute w-4 h-4 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2" />
      </div>
      <label class="m-2">
        <span
          class="block px-3 py-2 text-sm font-medium text-gray-700 transition border border-gray-300 rounded shadow-sm cursor-pointer hover:text-gray-500"
        >
          Select a file
        </span>
        <input type="file" class="hidden" @input="upload($event.target.files[0])" />
      </label>
    </div>
    <p class="mt-2 text-sm" :class="error || uploadError ? 'text-red-600' : 'text-gray-500'" v-if="error || uploadError || description">
      {{ error || uploadError || description }}
    </p>
  </div>
</template>

<script lang="ts">
import uploadcare from 'uploadcare-widget'
import { defineComponent, PropType } from 'vue'
import BaseSpinner from '@/components/BaseSpinner/BaseSpinner.vue'

interface FileInfo {
  uuid: string
  name: string
  size: number
  isStores: boolean
  isImage: boolean
  cdnUrl: string
  cdnUrlModifiers: string
  originalUrl: string
  originalImageInfo: string
  sourceInfo: string
}

const validateFileSize = (maxFileSize: number) => {
  return (fileInfo: FileInfo) => {
    if (fileInfo.name === null) return
    if (fileInfo.size > maxFileSize) throw new Error('File must be smaller than 500kb.')
  }
}

const validateFileType = (fileTypes: string[]) => {
  return (fileInfo: FileInfo) => {
    if (fileInfo.name === null) return
    const extension = fileInfo.name.split('.').pop()
    if (!extension || fileTypes.indexOf(extension) === -1) throw new Error(`File must be of type: ${fileTypes.join(', ')}.`)
  }
}

export default defineComponent({
  components: { BaseSpinner },
  props: {
    label: {
      type: String,
      required: true
    },
    modelValue: {
      type: String,
      required: false
    },
    defaultImageUrls: {
      type: Array as PropType<string[]>,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    error: {
      type: String,
      required: false
    }
  },
  created() {
    this.imageUrls =
      this.modelValue && !this.defaultImageUrls.includes(this.modelValue) ? [...this.defaultImageUrls, this.modelValue] : [...this.defaultImageUrls]
  },
  data: () => ({
    imageUrls: [] as string[],
    uploading: false,
    uploadError: ''
  }),
  watch: {
    modelValue() {
      this.uploadError = ''
    }
  },
  methods: {
    upload(file: File) {
      this.uploadError = ''
      if (!file) return
      this.uploading = true
      const upload = uploadcare.fileFrom('object', file, {
        publicKey: process.env.VUE_APP_UPLOADCARE_PUBLIC_KEY,
        validators: [validateFileSize(500000), validateFileType(['jpg', 'jpeg', 'png', 'gif', 'svg'])]
      })
      upload.done((fileInfo: FileInfo) => {
        const imageUrl = fileInfo.cdnUrl
        this.imageUrls.push(imageUrl)
        this.$emit('update:modelValue', imageUrl)
        this.uploading = false
      })
      upload.fail((error: string) => {
        this.uploadError = `Error: ${error}`
        this.uploading = false
      })
    }
  }
})
</script>
