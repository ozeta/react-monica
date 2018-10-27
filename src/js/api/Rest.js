const arraySmallSize = 10;
const arrayMediumSize = 20;
const arrayBigSize = 50;

class Rest {

  constructor() {
    this.i = 0;
    this.sortedUsersUrl = "http://cicala.portici.enea.it/rest/getpy.php?usersorted";
    this.sortedUsers = [];
    this.localUsers = [];
    this.getSortedUsers().then(data => {
      console.log("Users fetched");
      return data.json()
    })
      .then(data => {
        console.log("Users: ", data);
        this.sortedUsers = data.result;
        window.rest = this;
        this.allocateSmallArray();
      });

  }

  getSortedUsers() {
    console.log("Fetching users");
    return fetch(this.sortedUsersUrl)
  }

  allocateSmallArray() {
    /*    [...Array(arraySmallSize).keys()].forEach(e=>{
          console.log("e");
          console.log(e);
          this.localUsers.push(this.sortedUsers[e]);
        });*/
    let j = 10;
/*    while (this.i < this.sortedUsers.length && j > 0) {
      console.log("j: ", j);
      this.localUsers.push(this.sortedUsers[i]);
      j = j-1;
      this.i = this.i + 1;
    }*/
    // for (; this.i < this.sortedUsers.length && this.i % arraySmallSize === 0; this.i++) {
    //   console.log("i: ", i);
    //   this.localUsers.push(this.sortedUsers[i])
    // }
    let tmp= [];
    while (j > 0){
      tmp.push({
        name:"pippo_" + j,
        lastSession:"pluto_" + j,
        action:"loL"
      });
      j--;
    }
    return tmp;
  }
}

export default new Rest();