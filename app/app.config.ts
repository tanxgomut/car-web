export default defineAppConfig({
  ui: {
    colors: {
      primary: 'cyan',
      neutral: 'gray',
    },
    footerColumns: {
      slots: {
        root: 'md:grid md:grid-cols-3 md:gap-8',
        left: 'mb-10 md:mb-0',
        center: 'grid grid-flow-col auto-cols-fr gap-8 col-span-2',
        right: 'mt-10 md:mt-0',
        label: 'text-sm font-semibold',
        list: 'mt-6 space-y-4',
        item: 'relative',
        link: 'group text-xs md:text-sm flex items-center gap-1.5 focus-visible:outline-primary',
        linkLeadingIcon: 'size-4 md:size-5 shrink-0',
        linkLabel: 'truncate',
        linkLabelExternalIcon: 'size-3 absolute top-0 text-dimmed inline-block'
      },
      variants: {
        active: {
          true: {
            link: 'text-primary font-medium '
          },
          false: {
            link: [
              'text-muted hover:text-default',
              'transition-colors'
            ]
          }
        }
      }
    }
  }
})

