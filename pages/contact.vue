<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

const runtimeConfig = useRuntimeConfig()
useSeoMeta({
  title: 'Josh McLain - Software Engineer - Contact',
  description: 'Experienced software engineer specializing in fullstack web development. Contact me about solutions for your project.',
  ogTitle: 'Josh McLain - Software Engineer - Contact',
  ogDescription: 'Experienced software engineer specializing in fullstack web development. Contact me about solutions for your project.',
  ogImage: `${runtimeConfig.public.envDomain}/images/logo.png`,
  ogUrl: `${runtimeConfig.public.envDomain}`,
  twitterTitle: 'Josh McLain - Software Engineer - Contact',
  twitterDescription: 'Experienced software engineer specializing in fullstack web development. Contact me about solutions for your project.',
  twitterImage: `${runtimeConfig.public.envDomain}/images/logo.png`,
  twitterCard: 'summary_large_image'
})


useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/images/favico/favicon.ico'
    }
  ]
})

const toast = useToast()

const schema = z.object({
  name: z.string().min(2, 'Must be at least 2 characters').max(50, 'May not exceed 50 characters'),
  email: z.string().email('Must be a valid email address'),
  phone: z.string().regex(/^\d{10}$/, 'Must be a valid phone number'),
  message: z.string().min(10, 'Must be at least 10 characters').max(750, 'May not exceed 750 characters')
})
type Schema = z.output<typeof schema>

interface FormField {
  name: string
  label: string
  icon: string
  placeholder: string
  [key: string]: string
}

const state = reactive<Schema>({
  name: '',
  email: '',
  phone: '',
  message: ''
})

async function submitForm(event: FormSubmitEvent<Schema>) {
  try {

    const formBody = await schema.parseAsync(state)
    const { data, status } = await useFetch('/api/email', {
      method: 'POST',
      body: JSON.stringify(formBody)
    })
    if(data) {
      toast.add({ title: 'Success', description: 'Message sent successfully' })
    }
    if (status && +status >= 400) {
      toast.add({ title: 'Error', description: `${status} - An error occurred while sending your message` })
    } 
 
  } catch (error) {
    toast.add({ title: 'Error', description: 'Something went wrong. Please try again.' }) 
    throw error
  }
}

const formFields = ref<FormField[]>([
  { label: 'Name', name: 'name', icon: 'i-tdesign-user-business-filled', placeholder: ''},
  { label: 'Email', name: 'email', icon: 'i-material-symbols-alternate-email', placeholder: ''},
  { label: 'Phone', name: 'phone', icon: 'i-material-symbols-call', placeholder: ''},
  { label: 'Message', name: 'message', icon: '', placeholder: 'Enter your message here'}
])

</script>

<template >
  <div>
    <UForm :schema="schema" :state="state" @submit="submitForm" class="max-w-[500px] space-y-4 mx-auto pt-14">
      <template v-for="field in formFields" :key="field.name">

        <template v-if="field.name === 'message'">
          <UFormGroup :label="field.label" :name="field.name" :hint="`${state[field.name as keyof Schema].length || 0} / 750`">
            <UTextarea color="gray" v-model="state[field.name as keyof Schema]" :placeholder="field.placeholder" :rows="12" />
          </UFormGroup>
        </template>
        <template v-else>

        <UFormGroup :label="field.label" :name="field.name">
          <UInput color="gray" v-model="state[field.name as keyof Schema]" :icon="field.icon" :placeholder="field.placeholder" size="md" />
        </UFormGroup>
          </template>
        </template>
          <UButton type="submit" class="mt-4" size="lg" icon="i-material-symbols-send" trailing block>Send</UButton>
  </UForm>
</div>
</template>