class Rest {
  constructor() {
    this.sortedUsers = "http://cicala.portici.enea.it/rest/getpy.php?usersorted";
  }


  getSortedUsers() {
    console.log("Fetching users");
    return fetch(this.sortedUsers)
  }
}

export default new Rest();