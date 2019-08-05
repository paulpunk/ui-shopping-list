import { getPlatformOrientationLockAsync } from "expo/build/ScreenOrientation/ScreenOrientation";

const URL = "https://nicelist.herokuapp.com/list";

export default class Service {
  constructor(navigation) {
    this.navigation = navigation;
  }

  sync(items, callback, init) {
    items = items.filter(i => i.State !== "");
    if (!init && items.length == 0) {
      return;
    }
    this.navigation.setParams({ syncstate: "syncing" });

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
      this.navigation.setParams({
        syncstate: ""
      });
      callback(content.Items != null ? content.Items : []);

      // Set drawer data
      this.navigation.navigate("DrawerNavigation", {
        lists: [
          {
            ID: Date.now(),
            name: "nicelist",
            owner: "paulpunke@gmail.com",
            users: [{ id: "katharinadeuerling@gmail.com" }]
          },
          { ID: Date.now(), name: "test", owner: "paulpunke@gmail.com" }
        ]
      });
    })();
  }
}
