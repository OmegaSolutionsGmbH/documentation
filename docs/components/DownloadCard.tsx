import {
  computed,
  defineComponent,
  ref,
  type PropType,
} from 'vue'

export type DownloadOption = {
  /**
   * Eindeutiger technischer Wert.
   */
  value: string

  /**
   * Angezeigter Name.
   */
  label: string

  /**
   * Ziel des Downloads.
   */
  url: string
}

export default defineComponent({
  name: 'DownloadCard',

  props: {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      default: '',
    },

    options: {
      type: Array as PropType<DownloadOption[]>,
      required: true,
    },

    placeholder: {
      type: String,
      default: 'Business-Central-Version auswählen',
    },

    selectionLabel: {
      type: String,
      default: 'Business-Central-Version',
    },
  },

  setup(props) {
    const selectedValue = ref('')

    const selectedOption = computed(() =>
      props.options.find(
        option => option.value === selectedValue.value,
      ),
    )

    return () => (
      <section class="download-card">
        <div class="download-card__accent" />

        <div class="download-card__header">
          <div
            class="download-card__icon"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 24 24"
              width="26"
              height="26"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 3v12" />
              <path d="m7 10 5 5 5-5" />
              <path d="M5 21h14" />
            </svg>
          </div>

          <div class="download-card__heading">
            <span class="download-card__eyebrow">
              Download
            </span>

            <h3 class="download-card__title">
              {props.title}
            </h3>

            {props.description && (
              <p class="download-card__description">
                {props.description}
              </p>
            )}
          </div>
        </div>

        <div class="download-card__content">
          <label class="download-card__field">
            <span class="download-card__label">
              {props.selectionLabel}
            </span>

            <span class="download-card__select-wrapper">
              <select
                class="download-card__select"
                value={selectedValue.value}
                onChange={(event) => {
                  selectedValue.value =
                    (event.target as HTMLSelectElement).value
                }}
              >
                <option value="" disabled>
                  {props.placeholder}
                </option>

                {props.options.map(option => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </select>

              <span
                class="download-card__select-icon"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </span>
            </span>
          </label>

          {!selectedOption.value && (
            <div class="download-card__hint">
              <span
                class="download-card__hint-icon"
                aria-hidden="true"
              >
                1
              </span>

              <span>
                Wählen Sie zuerst die gewünschte Version aus.
              </span>
            </div>
          )}

          {selectedOption.value && (
            <div class="download-card__selection">
              <div class="download-card__selection-info">
                <span class="download-card__selection-label">
                  Ausgewählte Version
                </span>

                <strong class="download-card__selection-value">
                  {selectedOption.value.label}
                </strong>
              </div>

              <a
                class="download-card__button"
                href={selectedOption.value.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${selectedOption.value.label} herunterladen`}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 3v12" />
                  <path d="m7 10 5 5 5-5" />
                  <path d="M5 21h14" />
                </svg>

                <span>
                  Für {selectedOption.value.label} herunterladen
                </span>

                <svg
                  class="download-card__button-arrow"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            </div>
          )}
        </div>

        <div class="download-card__footer">
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 11v5" />
            <path d="M12 8h.01" />
          </svg>

          <span>
            Der Download wird in einem neuen Fenster geöffnet.
          </span>
        </div>
      </section>
    )
  },
})