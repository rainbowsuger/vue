<template>
    <Modal v-model="cutPicture" :maskClosable="false" :closable="false" title="图片裁剪" :width="710">
        <div class="avatar-container">
            <div class="left">
                <vueCropper
                  v-if="isVueCropper"
                  class="cropper"
                  ref="cropper"
                  :img="option.img"
                  :outputSize="option.size"
                  :outputType="option.outputType"
                  :autoCrop="option.autoCrop"
                  :autoCropWidth="option.autoCropWidth"
                  :autoCropHeight="option.autoCropHeight"
                  :fixedNumber="option.fixedNumber"
                  :fixed="option.fixed"
                  :fixedBox="option.fixedBox"
                  :full="true"
                  :centerBox="true"
                  @realTime="realTime"
                ></vueCropper>
                <div type="flex" justify="center" align="middle" style="padding: 12px 0;">
                  <label
                          for="uploads"
                          style="display:inline-block;width: 70px;padding: 0;text-align: center;line-height: 28px;color: #1B88EE;cursor: pointer;"
                  >选择图片</label>
                  <input
                    v-if="isVueCropper"
                    type="file"
                    id="uploads"
                    value="选择图片"
                    style="position:absolute; clip:rect(0 0 0 0);"
                    accept="image/png, image/jpeg, image/gif, image/jpg"
                    @change="uploadImg($event, 1)"
                  />
                </div>
            </div>

            <div class="right preview-cont">
                <span>图片预览</span>
                <div class="show-preview">
                    <div :style="previews.div" class="preview">
                        <img :src="previews.url" :style="previews.img" />
                    </div>
                </div>
            </div>
        </div>
    </Modal>
</template>

<script>
import { VueCropper } from 'vue-cropper'
import { Modal } from 'view-design'
export default {
  components: {
    VueCropper,
    Modal
  },
  data () {
    return {
      format: ['png', 'jpg', 'jpeg', 'bmp', 'gif'],
      loading: false,
      option: {
        size: 1,
        img: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
        outputType: 'jpeg',
        autoCrop: true,
        autoCropWidth: 250,
        autoCropHeight: 250,
        fixedNumber: [1, 1],
        fixed: true,
        fixedBox: true
      },
      previews: '',
      fileName: '',
      isVueCropper: true,
      cutPicture: true
    }
  },
  methods: {
    uploadImg (e, num) {
      let _this = this
      // 上传图片
      let file = e.target.files[0]
      _this.fileName = file.name
      if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
        alert('图片类型必须是.gif,jpeg,jpg,png,bmp中的一种')
        return false
      }
      let reader = new FileReader()
      reader.onload = e => {
        let data
        if (typeof e.target.result === 'object') {
          // 把Array Buffer转化为blob 如果是base64不需要
          data = window.URL.createObjectURL(new Blob([e.target.result]))
        } else {
          data = e.target.result
        }
        if (num === 1) {
          _this.option.img = data
        }
      }
      // 转化为base64
      // reader.readAsDataURL(file)
      // 转化为blob
      reader.readAsArrayBuffer(file)
    },
    realTime (data) {
      this.previews = data
    }
  }
}
</script>

<style lang="less" scoped>
    .avatar-container {
        width: 100%;
        overflow: hidden;
        .left {
            float: left;
        }
        .selectImg {
            display: inline-block;
            position: absolute;
            left: 120px;
        }
        .cropper {
            width: 350px;
            height: 350px;
            margin: 0 auto;
        }
        .preview-cont {
            margin: 45px 0 0 40px;
            float: left;
            .show-preview-cri {
                border-radius: 50%;
            }
            .show-preview {
                margin: 8px 16px;
                overflow: hidden;
                background-color: transparent;
                .preview {
                    img {
                        width: 250px;
                        height: 250px;
                    }
                }
            }
        }
    }
</style>
