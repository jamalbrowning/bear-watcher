import bearData from '../Helpers/Data/bears.js'
import utils from '../Helpers/utils.js'

const bearCardBuilder = () => {
const bears = bearData.getBears();
  let domString = ''
  
  bears.forEach(bear => {
    domString += `
      <div class="card" style="width: 18rem;">
        <img src="${bear.imageUrl}" class="bear-${bear.name}-card" alt="brown bear">
        <div class="card-body">
          <h5 class="card-name">${bear.name}</h5>
        </div>
      </div>`
      });
  
  utils.printToDom ('#river-container ' , domString)
  };
  

  export default {bearCardBuilder}
