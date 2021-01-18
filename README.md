# A Carousel component with a sliding effect

```javaScript

import SlideShow from 'slideshow'

const images = [{
  
    id: "10",
        label: 'Keel-billed toucan',
        path: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Keel-billed_Toucan_%2816201157519%29.jpg'
    },
    {
    id: "20",
        label: 'Rainbow_Lorikeet.',
        path: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Rainbow_Lorikeet_%28Trichoglossus_moluccanus%29_at_Adelaide_Airport_1.jpg'
    },
    {
    id: "30",
        label: 'Australian ringneck',
        path: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Mallee_ringneck_42_-_Patchewollock.jpg/1920px-Mallee_ringneck_42_-_Patchewollock.jpg'
    }
}]

export default function() {

const [size, setSize] = React.useState(800);
const [containerRatio, setContainerRatio] = React.useState(1.5);
const [containerShadow, setContainerShadow] = React.useState(true);
const [imageShadow, setImageShadow] = React.useState(true);
const [showEdges, setShowEdges] = React.useState(true);

<SlideShow            
    serverData={images}
    containerMaxWidth={size}
    containerRatio={containerRatio} 
    containerShadow={containerShadow}
    imageShadow={imageShadow}
    showNextPrev={showEdges} 
/>

```
  

