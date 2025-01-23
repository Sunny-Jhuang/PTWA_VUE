<template>
    <div class="articlemodal" @click.self="$emit('close')">
        <div class="modal-container">
            <button class="close-button" type="button" @click.self="$emit('close')">✖</button>
            <div class="modal-content">
                <span><img :src="resolvePhotoPath(article.photo)" @error="onImgErr" alt="article-title"></span>
                <div class="text-content">
                    <div class="title-meta">
                      <h1>[{{ article.title }}]</h1>
                      <span>[{{ article.date }}]/[{{ article.class }}]</span>
                    </div>
                    <div class="description">
                        {{ article.content }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ArticleModal',
  methods: {
    onImgErr (event) {
      event.target.src = '../assets/文章預設圖片.png'
    }
  },
  props: {
    article: {
      type: Object,
      default: () => ({
        photo: '',
        title: 'XXXX標題',
        date: '日期',
        class: '標籤',
        content: 'Lorem ipsum dolor sit amet consectetur. Ornare aliquet velit habitant ipsum pretium lorem tincidunt neque. Tincidunt praesent pellentesque ornare cursus id tortor placerat sed dolor. Eu aliquam semper aenean at eleifend. Augue gravida venenatis ac sed hac.Sit maecenas elit felis mi amet a. Vel nunc consectetur amet sed amet. Id lacus purus volutpat ornare suspendisse id dolor nec pulvinar. Luctus cursus ornare arcu mauris. Sodales in gravida cursus in cursus orci tristique sodales in. At suscipit id morbi blandit.Lacus leo dis purus consectetur pretium egestas consequat dui justo. Lacus duis turpis morbi id sed fames amet cras. Convallis amet aenean ultricies aliquet semper feugiat risus. Eu rhoncus augue scelerisque vel neque non sit nulla turpis. Massa semper eu malesuada elementum in lacinia dui vitae. Arcu tellus leo posuere ut facilisi a elit tincidunt feugiat. Turpis nec quis adipiscing eget consequat pharetra purus nec.Odio mi tincidunt nulla risus neque tempus volutpat diam. Accumsan commodo lobortis natoque pretium dictum et. Dignissim commodo bibendum ridiculus et. Massa dictum neque cursus lectus a fusce diam egestas. Dictum in pellentesque orci pulvinar elementum nunc scelerisque. Aliquam ac dignissim lorem purus. Fermentum a metus quam vel malesuada donec. Ac condimentum nulla etiam magnis id nibh. Arcu euismod arcu amet quis nascetur. Enim facilisis tempor tellus diam feugiat pellentesque turpis pellentesque. Aliquet interdum aenean at placerat sem integer dignissim et.'
      })
    },
    resolvePhotoPath: {
      type: Function,
      required: true
    }
  }
}
</script>

<style scoped>
.articlemodal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-container {
    width: 60%;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  position: relative;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.modal-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.modal-content img {
  width: 100%;
  height: 200px;
  background: #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
}

.title-meta {
  display: flex;
  gap: 650px;
  flex-wrap: nowrap;
}

.title-meta h1 {
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 10px;
  white-space: nowrap;
}

.title-meta span {
  font-size: 14px;
  margin-bottom: 20px;
  white-space: nowrap;
}

.description {
  font-size: 16px;
  line-height: 1.5;
  max-height: 200px;
  overflow-y: auto;
}
</style>
