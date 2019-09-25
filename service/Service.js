import { toJS } from "mobx";

const URL = "https://nicelist.herokuapp.com/list";

export default class Service {
  sync(store) {
    var storeJS = toJS(store);
    items = storeJS.items.slice().filter(i => i.State !== "");

    const nicelist = {
      User: "paulpunke@gmail.com",
      Items: items
    };

    console.log(nicelist);

    (async () => {
      try {
        store.syncstate = "syncing";

        const rawResponse = await fetch(URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(nicelist)
        });

        const content = await rawResponse.json();

        const lists = [
          {
            Name: "nicelist",
            SharedWith: [{ Mail: "katharinadeuerling@gmail.com" }]
          },
          { Name: "test", SharedWith: [{ Mail: "paulpunke@gmail.com" }] }
        ];
        this.setResult(lists, content, store);
      } catch (error) {
        store.syncstate = "offline";
      }
    })();
  }

  setResult(lists, content, store) {
    store.syncstate = "";
    store.lists.replace(lists);
    store.items.replace(content.Items);
  }
}
