<template>
  <div class="widget-block">
    <div class="event-body container">
      <div class="event-body--main">
        <button class="btn btn-add-widget">
          +
        </button>
        <p class="text-add-widget">اضافه کردن بخش</p>
      </div>

    </div>
  </div>
</template>

<script>
  import widgetMixin from '@/mixins/widget'

  export default {
    name: 'TeamWidget1',
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
