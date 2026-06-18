import {defineField, defineType} from 'sanity'

export const article = defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {hotspot: true}
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{type: 'block'}]
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'summary',
      media: 'mainImage'
    }
  }
})

