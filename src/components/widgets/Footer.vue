<template>
  <div class="widget-block">
    <h6>Footer</h6>
    <div class="widget-block--toolbox">
      <button @click="toggleEditMode()" class="widget-block--toolbox-btn widget-block--toolbox--edit-mode-btn">
        Edite
      </button>
      <button @click="deleteWidget()" class="widget-block--toolbox-btn widget-block--toolbox--delete-btn">Delete
      </button>
    </div>
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
            </text-editable></div>
        </div>
      </div>
    </section>
    </BgEditable>
  </div>
</template>

<script>
  import widgetMixin from '@/mixins/widget'

  export default {
    name: 'Footer',
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
