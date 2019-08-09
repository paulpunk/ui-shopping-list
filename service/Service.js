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

    const nicelist = {
      User: this.navigation.getParam("user", "paulpunke@gmail.com"),
      Items: items
    };

    console.log(nicelist);

    (async () => {
      try {
        this.navigation.setParams({ syncstate: "syncing" });
        // if (this.navigation.getParam("syncstate", "") !== "syncing") {
        //   this.navigation.setParams({ syncstate: "syncing", request: 1 });
        // } else {
        //   this.navigation.setParams({
        //     request: this.navigation.getParam("request", undefined) + 1
        //   });
        // }

        const request = this.navigation.getParam("request", undefined);

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
            sharedwith: [{ Mail: "katharinadeuerling@gmail.com" }]
          },
          { Name: "test", sharedwith: [{ Mail: "paulpunke@gmail.com" }] }
        ];
        this.setResult(lists, content, callback);
        // if (request === this.navigation.getParam("request", undefined)) {
        //   this.setResult(lists, content, callback);
        // }
      } catch (error) {
        this.navigation.setParams({ syncstate: "offline", request: 1 });
      }
    })();
  }

  responseOk(response) {
    alert(response.statusText);
    return (
      response.statusText == "OK" &&
      response.status >= 200 &&
      response.status < 300
    );
  }

  setResult(lists, content, callback) {
    this.navigation.setParams({
      syncstate: "",
      lists: lists,
      user: content.User
    });
    callback(content.Items != null ? content.Items : []);
    // Set drawer data
    this.navigation.navigate("DrawerNavigation", {
      lists: lists
    });
  }
}
