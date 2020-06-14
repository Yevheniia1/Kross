// Функция для создание детей(строка с тегом) с одинаковым классом в родителе(элемент)

function createNewElements(parent, child, className) { 
    
    try {
        function helperCreateAddElems(className) {
            const elem = document.createElement(child);
            elem.classList.add(className);
            parent.append(elem);
            return elem
        }
        
        if(Array.isArray(className)){
            let arr = [];
            for(let value of className) {
                
                arr.push(helperCreateAddElems(value))
            }
        } else {
            return helperCreateAddElems(className)
        } 
    } catch(err) {
        throw err
    }

}

export {createNewElements}