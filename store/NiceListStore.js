import { autorun, computed, observable, action } from "mobx";
import Service from "../service/Service";

const service = new Service();

class Item {
  @observable ID;
  @observable User;
  @observable List;
  @observable State;
  @observable Name;
  @observable Checked;
  @observable Version;

  constructor(user, list) {
    this.ID = Date.now();
    this.User = user;
    this.List = list;
    this.State = "create";
    this.Name = "";
    this.Checked = false;
    this.Version = 1;
  }
}

class List {
  @observable ID;
  @observable Name;
  @observable User;
  @observable SharedWith;

  constructor(user, list) {
    this.ID = Date.now();
    this.User = user;
    this.List = list;
    this.State = "create";
    this.Name = "";
    this.Checked = false;
    this.Version = 1;
  }
}

class SharedUser {
  @observable Mail;
  @observable State;

  constructor() {
    this.Mail = "";
    this.State = "create";
  }
}

export class NiceListStore {
  @observable app = "nicelist";
  @observable items = [];
  @observable lists = [];
  @observable list = "nicelist";
  @observable user = "paulpunke@gmail.com";
  @observable syncstate = "";
  @observable darkmode = false;

  @computed get displayedItems() {
    return this.items
      .filter(item => item.List === this.list)
      .filter(item => item.State !== "delete")
      .sort(function(a, b) {
        if (a.Checked && !b.Checked) return 1;
        if (!a.Checked && b.Checked) return -1;
        if (a.ID < b.ID) return 1;
        if (a.ID > b.ID) return -1;
        return 0;
      });
  }

  @computed get displayedLists() {
    return this.lists.slice();
  }

  @computed get displayedUsers() {
    return this.lists
      .filter(list => list.Name === this.list)
      .flatMap(list => list.SharedWith);
  }

  @computed get isToBeSynced() {
    return (
      this.items
        .filter(item => item.State !== "")
        .filter(item => item.Name !== "").length > 0
    );
  }

  @action
  init() {
    this.sync();
  }

  @action
  sync() {
    service.sync(this);
  }

  @action
  createItem() {
    this.items.push(new Item(this.user, this.list));
  }

  @action
  submitItem(item, previtem) {
    if (this.itemShouldBeRemoved(item)) {
      this.items.remove(previtem);
    } else if (this.itemShouldBeUpdated(item, previtem)) {
      this.updateItem(previtem, item);
    }
  }

  @action
  createUser() {
    this.lists.replace(
      this.lists.slice().map(l => {
        if (l.Name === this.list) {
          l.SharedWith.push(new SharedUser());
          return l;
        } else {
          return l;
        }
      })
    );
  }

  @action
  submitUser(user, prevuser) {
    if (this.userShouldBeRemoved(user)) {
      this.removeUser(prevuser);
    } else if (this.userShouldBeUpdated(user, prevuser)) {
      this.updateItem(prevuser, user);
    }
  }

  removeUser(user) {
    this.lists.replace(
      this.lists.slice().map(l => {
        if (l.Name === this.list) {
          if (user.State === "create") {
            l.SharedWith.remove(user);
          } else {
            l.SharedWith = l.SharedWith.map(u => {
              if (u == user) {
                return {
                  ...user,
                  State: "delete"
                };
              } else {
                return u;
              }
            });
          }
          return l;
        } else {
          return l;
        }
      })
    );
  }

  updateUser(prevuser, user) {
    this.lists.replace(
      this.lists.slice().map(l => {
        if (l.Name === this.list) {
          l.SharedWith = l.SharedWith.map(u => {
            if (u == prevuser) {
              return {
                ...user,
                State: u.State !== "" ? u.State : "update"
              };
            } else {
              return u;
            }
          });
          return l;
        } else {
          return l;
        }
      })
    );
  }

  userShouldBeRemoved(user) {
    return user.Mail === "";
  }

  userShouldBeUpdated(user, prevuser) {
    return user.Mail !== prevuser.Mail;
  }

  removeItem(item) {
    if (item.State === "create") {
      this.items.remove(previtem);
    } else {
      this.items.replace(
        this.items.map(i => {
          if (i == item) {
            return { ...i, State: "delete" };
          } else {
            return i;
          }
        })
      );
    }
  }

  updateItem(previtem, item) {
    this.items.replace(
      this.items.map(i => {
        if (i == previtem) {
          return {
            ...item,
            State: i.State !== "" ? i.State : "update"
          };
        } else {
          return i;
        }
      })
    );
  }

  itemShouldBeRemoved(item) {
    return item.Name === "";
  }

  itemShouldBeUpdated(item, previtem) {
    return item.Checked !== previtem.Checked || item.Name !== previtem.Name;
  }
}

var store = new NiceListStore();

export default store;

autorun(() => {
  if (store.isToBeSynced) {
    store.sync();
  }
});
