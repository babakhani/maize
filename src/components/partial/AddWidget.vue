<template>
  <div class="widget-block">
    <div class="event-body container">
      <div class="event-body--main">
        <button @click="goToAddWidgetMode" class="btn btn-add-widget">
          +
        </button>
        <p class="text-add-widget">اضافه کردن بخش</p>
      </div>

      <!-- Modal Component -->
      <b-modal id="modal1" title="Bootstrap-Vue">
        <p class="my-4">Hello from modal!</p>
      </b-modal>

    </div>
  </div>
</template>

<script>
  import widgetMixin from '@/mixins/widget'

  export default {
    name: 'TeamWidget1',
    methods: {
      goToAddWidgetMode() {
        console.log('goToAddWidgetMode')
        this.$store.dispatch('main/setAddWidgetMode', true)
      }
    },
    data() {
      return {
        widgetData: {
          mainTitle: {
            text: 'لورم ایپسوم دلار سیت امیت'
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
