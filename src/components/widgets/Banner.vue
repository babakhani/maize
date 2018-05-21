<template>
  <div :class="{'container': !fullWidth}">
    <div class="widget-block">
      <WidgetToolbox @toggleFullWidth="toggleFullWidth" @toggleEditMode="toggleEditMode" @deleteWidget="deleteWidget"></WidgetToolbox>

      <BgEditable :editMode="editMode">

        <section class="fdb-block team-2">
          <div class="container">
            <div class="row text-center justify-content-center">
              <div class="col-12">
                <text-editable tag="h1" :editMode="editMode">
                  {{widgetData.mainTitle.text}}
                </text-editable>

                <text-editable tag="h3" :editMode="editMode">
                  {{widgetData.subtitle.text}}
                </text-editable>
              </div>
            </div>
          </div>
        </section>

      </BgEditable>
    </div>
  </div>
</template>

<script>
  import widgetMixin from '@/mixins/widget'

  export default {
    name: 'Banner',
    data() {
      return {
        widgetData: {
          mainTitle: {
            text: 'Banner Widget say hello'
          },
          subtitle: {
            text: 'دلاری مگنا الیکوام اَرآت ولوتپات.'
          }
        }
      }
    },
    mixins: [widgetMixin]
  }
</script>
