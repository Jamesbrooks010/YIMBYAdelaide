import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site title',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'ctaLabel',
      title: 'Call-to-action label',
      type: 'string'
    }),
    defineField({
      name: 'ctaUrl',
      title: 'Call-to-action URL',
      type: 'url'
    })
  ]
})

