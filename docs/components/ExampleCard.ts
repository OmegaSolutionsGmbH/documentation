import {
  defineComponent,
  h,
  ref,
  type PropType,
} from 'vue'

type CardStatus = 'success' | 'warning' | 'error'

export default defineComponent({
  name: 'ExampleCard',

  props: {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      default: '',
    },

    status: {
      type: String as PropType<CardStatus>,
      default: 'success',
    },
  },

  setup(props) {
    const clickCount = ref(0)

    function getStatusColor(): string {
      switch (props.status) {
        case 'warning':
          return 'var(--vp-c-yellow-1)'

        case 'error':
          return 'var(--vp-c-red-1)'

        case 'success':
        default:
          return 'var(--vp-c-green-1)'
      }
    }

    return () =>
      h(
        'div',
        {
          style: {
            margin: '24px 0',
            padding: '20px',
            border: '1px solid var(--vp-c-divider)',
            borderLeft: `4px solid ${getStatusColor()}`,
            borderRadius: '12px',
            background: 'var(--vp-c-bg-soft)',
          },
        },
        [
          h(
            'div',
            {
              style: {
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              },
            },
            [
              h('span', {
                style: {
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: getStatusColor(),
                },
              }),

              h(
                'h3',
                {
                  style: {
                    margin: '0',
                    border: '0',
                  },
                },
                props.title,
              ),
            ],
          ),

          props.description
            ? h(
                'p',
                {
                  style: {
                    marginTop: '12px',
                    color: 'var(--vp-c-text-2)',
                  },
                },
                props.description,
              )
            : null,

          h(
            'div',
            {
              style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px',
                marginTop: '18px',
              },
            },
            [
              h(
                'span',
                `Button wurde ${clickCount.value}-mal geklickt.`,
              ),

              h(
                'button',
                {
                  type: 'button',

                  style: {
                    padding: '8px 16px',
                    border: '0',
                    borderRadius: '8px',
                    color: 'white',
                    background: getStatusColor(),
                    fontWeight: '600',
                    cursor: 'pointer',
                  },

                  onClick: () => {
                    clickCount.value++
                  },
                },
                'Anklicken',
              ),
            ],
          ),
        ],
      )
  },
})