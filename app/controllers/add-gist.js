import Controller from '@ember/controller';
import {action} from '@ember/object';
import {inject as service} from '@ember/service';

export default Controller.extend({

  gistsInfo: service(),
  @action
  addFile(filename, description, body){
    this.gistsInfo.addGist({filename, description, body});
    this.transitionToRoute('index')

  }
});
