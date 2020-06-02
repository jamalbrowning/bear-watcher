// import bearArray from '../Helpers/Data/bears.js'
import utils from '../Helpers/utils.js'
import bears from '../Helpers/Data/bears.js';
import buildBears from '../Components/river.js'

const bearFormCreate = () => {
  
  const domString = `

    <form id='form'>
    <div class="form-group">
      <label for="bear-name">Name</label>
      <input type="text" class="form-control" id="bear-name" aria-describedby="nameHelp" placeholder="Enter Bear Name" required >
    </div>
    <div class="form-group">
      <label for="bear-image">Image Url</label>
      <input type="text" class="form-control" id="bear-image" aria-describedby="imageHelp" placeholder="Enter Image URL" required >
    </div>
    <button type="submit" class="btn btn-primary" id="track-bear">TRACKING<br><i class="fas fa-binoculars"></i></button>
  </form>
`;

  utils.printToDom('#bear-form' , domString)
  $('#track-bear').click(createNewBear)

}

const createNewBear = (e) => {
  e.preventDefault();

  const newBear = {
    name: $('#bear-name').val(),
    imageUrl: $('#bear-image').val(),
  };

  document.querySelector('#form').reset()
  bears.getBears().unshift(newBear)
  buildBears.bearCardBuilder();
};


export default {bearFormCreate}
