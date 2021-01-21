<template>
<div id="guide_1">
  <i>guide_1</i>
  <div id="guide_2">
    <i>guide_2</i>
  </div>
  <div id="guide_3">
    <i>guide_3</i>
  </div>
  <div id="guide_4">
    <i>guide_4</i>
  </div>
  <div id="guide_5">
    <i>guide_5</i>
  </div>
</div>
</template>
<script>
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
export default {
  name: 'guide02',
  mounted () {
    const driver = new Driver({
      className: 'scoped-class', // className to wrap driver.js popover
      animate: true, // Whether to animate or not
      opacity: 0.75, // Background opacity (0 means only popovers and without overlay)
      padding: 10, // Distance of element from around the edges
      allowClose: true, // Whether the click on overlay should close or not
      overlayClickNext: false, // Whether the click on overlay should move next
      doneBtnText: 'Done', // Text on the final button
      closeBtnText: 'Close', // Text on the close button for this step
      stageBackground: '#ffffff', // Background color for the staged behind highlighted element
      nextBtnText: 'Next', // Next button text for this step
      prevBtnText: 'Previous', // Previous button text for this step
      showButtons: false, // Do not show control buttons in footer
      keyboardControl: true, // Allow controlling through keyboard (escape to close, arrow keys to move)
      scrollIntoViewOptions: {}, // We use `scrollIntoView()` when possible, pass here the options for it if you want any
      onHighlightStarted: (Element) => {}, // Called when element is about to be highlighted
      onHighlighted: (Element) => {}, // Called when element is fully highlighted
      onDeselected: (Element) => {}, // Called when element has been deselected
      onReset: (Element) => {}, // Called when overlay is about to be cleared
      onNext: (Element) => {}, // Called when moving to next step on any step
      onPrevious: (Element) => {} // Called when moving to previous step on any step
    })

    // driver.highlight({
    //   element: '#guide_2',
    //   popover: {
    //     title: '新冠病毒',
    //     description: '过年回不去啦'
    //   }
    // })
    driver.defineSteps([
      {
        element: '#guide_3',
        popover: {
          className: 'first-step-popover-class',
          title: 'guide_3',
          description: 'Body of the popover',
          position: 'bottom'
        }
      },
      {
        element: '#guide_4',
        popover: {
          title: 'guide_4',
          description: 'Body of the popover',
          position: 'bottom'
        }
        // onNext: () => {
        //   // Prevent moving to the next step
        //   driver.preventMove()
        //   setTimeout(() => {
        //     driver.moveNext()
        //   }, 4000)
        // }
      },
      {
        element: '#guide_5',
        popover: {
          title: 'guide_5',
          description: 'Body of the popover',
          position: 'bottom'
        }
        // onNext: () => {
        //   // Prevent moving to the next step
        //   driver.reset()
        // }
      }
    ])
    driver.start()
  }
}
</script>
<style>
.first-step-popover-class {
  color: #f00;
}
</style>
