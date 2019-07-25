export default class Service {
  call(items, callback) {
    const URL = "https://nicelist.herokuapp.com/list";

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

  getItems() {
    var items = [
      {
        ID: 1,
        Version: 1,
        User: "paulpunke@gmail.com",
        Name: "apfel",
        Checked: false,
        List: "nicelist",
        State: "create"
      },
      {
        ID: 2,
        Version: 1,
        User: "paulpunke@gmail.com",
        Name: "birne",
        Checked: false,
        List: "nicelist",
        State: "create"
      }
    ];
    return items;
  }
}
