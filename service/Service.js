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
      User: this.navigation.getParam("user", "paulpunke@gmail.com"),
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

      const lists = [
        {
          name: "nicelist",
          sharedwith: [{ id: "katharinadeuerling@gmail.com" }]
        },
        { name: "test", sharedwith: [{ id: "paulpunke@gmail.com" }] }
      ];

      this.navigation.setParams({
        syncstate: "",
        lists: lists,//content.Lists != null ? content.Lists : [],
        user: content.User
      });

      callback(content.Items != null ? content.Items : []);

      // Set drawer data
      this.navigation.navigate("DrawerNavigation", {
        lists: lists
      });
    })();
  }
}
