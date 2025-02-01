document.addEventListener('DOMContentLoaded',function(){

    const jegWrapper = document.querySelector('#center_content_column  .wpb_wrapper')
    jegWrapper.childNodes.forEach((node)=>{
        if(node.classList.contains('jeg_postblock_23')){
            let wrapper = document.createElement("div");
            wrapper.classList.add("custom_flex_item");
    
            let nextNode = node.nextSibling; 
    
            node.parentNode.insertBefore(wrapper, node);
    
            wrapper.appendChild(node);
    
            
            if (nextNode && nextNode.nodeType === 1) {
                wrapper.appendChild(nextNode);
            }
        }
    })
    let flexParent = document.createElement("div")
    flexParent.classList.add('custom_flex')

    jegWrapper.insertBefore(flexParent,jegWrapper.childNodes[1])

    document.querySelectorAll('#center_content_column .custom_flex_item').forEach((item)=>{
        flexParent.appendChild(item)
    })

})