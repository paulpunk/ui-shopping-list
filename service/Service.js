const URL = "https://nicelist.herokuapp.com/list";

export default class Service {
  constructor(navigation) {
    this.navigation = navigation;
  }

  sync(items, callback, init) {
    this.navigation.setParams({ syncstate: "syncing" });

    items = items.filter(i => i.State !== "");
    if (!init && items.length == 0) {
      return;
    }

    const nicelist = {
      User: "paulpunke@gmail.com",
      Items: items
    };

    console.log(nicelist);

    (async () => {
      const rawResponse = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(nicelist)
      });
      const content = await rawResponse.json();
      this.navigation.setParams({ syncstate: "" });
      callback(content.Items != null ? content.Items : []);
    })();
  }

  init(items, callback) {
    const nicelist = {
      User: "paulpunke@gmail.com",
      Items: items
    };

    console.log(nicelist);

    (async () => {
      const rawResponse = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(nicelist)
      });
      const content = await rawResponse.json();
      callback(content.Items != null ? content.Items : []);
    })();
  }
}
