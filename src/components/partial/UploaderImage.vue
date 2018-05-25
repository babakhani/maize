<template>
    <div class="upload-image-widget">
        <EditablePartToolbox @update="updateStyles"
                             :currentStyles="styles"
                             :groups="['background', 'border']"
                             v-if="editMode && toolboxVisible"
                             @hide="hideToolbox"></EditablePartToolbox>

        <!--<input class="" @change="imageUpload" type="file">-->
        <h3>
            Drop Image Here
        </h3>
        <br>
        <h6>
            Or
        </h6>
        <br>
        <button class="btn btn-lg btn-success">
            Choose your Image

        </button>
        <input class="" @change="imageUpload" type="file"/>
        <img alt="image"
             class="upload-image-widget--box col-12"
             :src='src'>

    </div>
</template>

<script>
    import EditablePartMixin from '../../mixins/editablePart'

    export default {
        name: 'UploadImage',
        mixins: [EditablePartMixin],
        props: {
            src: {
                default: null,
                require: false
            }
        },
        methods: {

            imageUpload(e) {
                console.log('imageUpload')
                console.log()
                const $img = $(e.target).next('img')
                if (e.target.files && e.target.files[0]) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        $img.attr('src', e.target.result);
                    }
                    reader.readAsDataURL(e.target.files[0]);
                }
            }
        },

    }
</script>
