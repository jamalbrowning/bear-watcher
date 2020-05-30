
import utils from '../Helpers/utils.js'

const bearFormCreate= () => {
  
  const domString = `

    <form>
    <div class="form-group">
      <label for="bear-name">Name</label>
      <input type="text" class="form-control" id="bear-name" aria-describedby="nameHelp" placeholder="Enter Bear Name">
    </div>
    <div class="form-group">
      <label for="bear-image">Image Url</label>
      <input type="text" class="form-control" id="bear-image" aria-describedby="imageHelp" placeholder="Enter Image URL">
    </div>
    <button type="submit" class="btn btn-primary" id="track-bear">TRACKING<br><i class="fas fa-binoculars"></i></button>
  </form>
`;

  utils.printToDom('#bear-form' , domString)

}


export default {bearFormCreate}
