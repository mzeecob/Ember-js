import Service from '@ember/service';


export default Service.extend({

  gists : [{
    filename: "example1",
    description: "just example2",
    body: "<h6>"+ "yes" + "</h6>"
  },
    {
      filename: "example2",
      description: "just example2",
      body: "<h5>"+ "yes" + "</h5>"
    }
  ],

  get numberOfGists(){
    return this.gists.length;
  },

  addGist(gist){
    this.gists.push(gist);
  }

});
